import fs from "fs";
import path from "path";

const INPUT_FILE = "rutas_imagenes.txt";
const OUTPUT_FILE = "src/data/productos.json";
const PRECIO_FAN = 375;
const PRECIO_JUGADOR = 400;

// Leer archivo
const raw = fs.readFileSync(INPUT_FILE, "utf-8");
const lines = raw.split("\n").map(l => l.trim()).filter(Boolean);

interface Product {
  id: string;
  nombre: string;
  precioFan: number | null;
  precioJugador: number | null;
  categoria: "Clubes" | "Selecciones" | "Especiales";
  imagenesFan: string[];
  imagenesJugador: string[];
}

const products: Record<string, Product> = {};

// Mapeo de nombres bonitos
const NOMBRES: Record<string, string> = {
  "ac milan": "AC Milan",
  "real madrid": "Real Madrid",
  "bayern munchen": "Bayern Munich",
  "manchester city": "Manchester City",
  "estados unidos": "Estados Unidos",
};

const KIT_NOMBRES: Record<string, string> = {
  "local": "Local",
  "visitante": "Visitante",
  "3ra": "Tercera",
  "4ta": "Cuarta",
  "portero": "Portero",
};

function slug(str: string): string {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function formatName(name: string): string {
  const lower = name.toLowerCase();
  return NOMBRES[lower] || name.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
}

for (const line of lines) {
  const parts = line.split("/").filter(Boolean);
  const filename = parts[parts.length - 1].toLowerCase();
  
  // Ignorar detalles (escudo, tela, parche)
  if (filename.includes("detalle") || filename.includes("escudo") || 
      filename.includes("tela") || filename.includes("parche")) continue;
  
  // Detectar si es frontal o espalda
  const isFrontal = filename.includes("frontal") || filename.includes("front");
  const isEspalda = filename.includes("espalda") || filename.includes("back");
  if (!isFrontal && !isEspalda) continue;
  
  // Determinar categoría y extraer datos
  const isClub = parts[0]?.toUpperCase() === "CLUBES";
  const isSeleccion = parts[0]?.toUpperCase() === "SELECCIONES";
  
  let equipo = "";
  let temporada = "25-26";
  let kitType = "local";
  let version: "fan" | "jugador" = "fan";
  let isEspecial = false;
  
  if (isClub) {
    // CLUBES/EUROPA/AC MILAN/25-26/LOCAL/Versión Fan/archivo.jpg
    equipo = parts[2] || "";
    temporada = parts[3] || "25-26";
    kitType = (parts[4] || "local").toLowerCase();
    version = (parts[5] || "").toLowerCase().includes("jugador") ? "jugador" : "fan";
  } else if (isSeleccion) {
    // SELECCIONES/AMERICA/ARGENTINA/Versión FAN/archivo.webp
    // SELECCIONES/EUROPA/PORTUGAL/Versión JUGADOR/Edicion Especial (Negra)/archivo.webp
    equipo = parts[2] || "";
    
    // Buscar versión y edición especial
    for (let i = 3; i < parts.length - 1; i++) {
      const p = parts[i].toLowerCase();
      if (p.includes("jugador")) version = "jugador";
      if (p.includes("fan")) version = "fan";
      if (p.includes("especial") || p.includes("negra")) isEspecial = true;
    }
    
    // Detectar temporada del nombre del archivo
    const seasonMatch = filename.match(/(\d{2})-(\d{2})/);
    if (seasonMatch) {
      temporada = `${seasonMatch[1]}-${seasonMatch[2]}`;
    }
  }
  
  if (!equipo) continue;
  
  // Crear ID único
  const equipoSlug = slug(equipo);
  const kitSlug = slug(kitType);
  const temporadaSlug = temporada.replace("-", "");
  const especialSuffix = isEspecial ? "-especial" : "";
  const productId = `${equipoSlug}-${kitSlug}-${temporadaSlug}${especialSuffix}`;
  
  // Crear producto si no existe
  if (!products[productId]) {
    const equipoNombre = formatName(equipo);
    const kitNombre = KIT_NOMBRES[kitType] || kitType.charAt(0).toUpperCase() + kitType.slice(1);
    const especialNombre = isEspecial ? " Especial" : "";
    
    let categoria: "Clubes" | "Selecciones" | "Especiales" = isClub ? "Clubes" : "Selecciones";
    if (isEspecial) categoria = "Especiales";
    
    products[productId] = {
      id: productId,
      nombre: `${equipoNombre} ${kitNombre}${especialNombre} ${temporada.replace("-", "/")}`,
      precioFan: null,
      precioJugador: null,
      categoria,
      imagenesFan: [],
      imagenesJugador: [],
    };
  }
  
  // Construir URL de la imagen (agregar /images/camisolas al inicio)
  const imageUrl = `/img/CAMISOLAS${line}`;
  
  // Agregar imagen
  if (version === "fan") {
    products[productId].precioFan = PRECIO_FAN;
    if (!products[productId].imagenesFan.includes(imageUrl)) {
      products[productId].imagenesFan.push(imageUrl);
    }
  } else {
    products[productId].precioJugador = PRECIO_JUGADOR;
    if (!products[productId].imagenesJugador.includes(imageUrl)) {
      products[productId].imagenesJugador.push(imageUrl);
    }
  }
}

// Ordenar imágenes: frontal primero
for (const p of Object.values(products)) {
  const sortFn = (a: string, b: string) => {
    const aFrontal = a.toLowerCase().includes("frontal");
    const bFrontal = b.toLowerCase().includes("frontal");
    if (aFrontal && !bFrontal) return -1;
    if (!aFrontal && bFrontal) return 1;
    return 0;
  };
  p.imagenesFan.sort(sortFn);
  p.imagenesJugador.sort(sortFn);
}

// Guardar
const productArray = Object.values(products);
fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(productArray, null, 2), "utf-8");

console.log(`✅ Generados ${productArray.length} productos`);
console.log(`📁 Guardado en: ${OUTPUT_FILE}`);

// Resumen
const clubes = productArray.filter(p => p.categoria === "Clubes").length;
const selecciones = productArray.filter(p => p.categoria === "Selecciones").length;
const especiales = productArray.filter(p => p.categoria === "Especiales").length;
console.log(`\n📊 Resumen:`);
console.log(`   Clubes: ${clubes}`);
console.log(`   Selecciones: ${selecciones}`);
console.log(`   Especiales: ${especiales}`);