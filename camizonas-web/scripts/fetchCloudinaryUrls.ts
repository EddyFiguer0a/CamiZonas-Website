import fs from "fs";
import path from "path";

const CLOUD_NAME = "dbydbxlbw";
const API_KEY = "582554432384647";
const API_SECRET = "TxQ61sjmMPLzLbQK1dSPNbvZgMg";

const OUTPUT_FILE = "src/data/productos.json";
const PRECIO_FAN = 375;
const PRECIO_JUGADOR = 400;

// Mapeo de nombres de clubes/selecciones
const CLUB_MAP: Record<string, { nombre: string; categoria: "Clubes" | "Selecciones" }> = {
  // Clubes - abreviaciones
  "milan": { nombre: "AC Milan", categoria: "Clubes" },
  "bm": { nombre: "Bayern Munich", categoria: "Clubes" },
  "ars": { nombre: "Arsenal", categoria: "Clubes" },
  "ch": { nombre: "Chelsea", categoria: "Clubes" },
  "mc": { nombre: "Manchester City", categoria: "Clubes" },
  "psg": { nombre: "PSG", categoria: "Clubes" },
  // Clubes - nombres completos
  "realmadrid": { nombre: "Real Madrid", categoria: "Clubes" },
  "barcelona": { nombre: "Barcelona", categoria: "Clubes" },
  "barca": { nombre: "Barcelona", categoria: "Clubes" },
  "bayernmunich": { nombre: "Bayern Munich", categoria: "Clubes" },
  "acmilan": { nombre: "AC Milan", categoria: "Clubes" },
  "arsenal": { nombre: "Arsenal", categoria: "Clubes" },
  "chelsea": { nombre: "Chelsea", categoria: "Clubes" },
  "manchestercity": { nombre: "Manchester City", categoria: "Clubes" },
  // Selecciones
  "gua": { nombre: "Guatemala", categoria: "Selecciones" },
  "argentina": { nombre: "Argentina", categoria: "Selecciones" },
  "brasil": { nombre: "Brasil", categoria: "Selecciones" },
  "alemania": { nombre: "Alemania", categoria: "Selecciones" },
  "españa": { nombre: "España", categoria: "Selecciones" },
  "espana": { nombre: "España", categoria: "Selecciones" },
  "francia": { nombre: "Francia", categoria: "Selecciones" },
  "italia": { nombre: "Italia", categoria: "Selecciones" },
  "portugal": { nombre: "Portugal", categoria: "Selecciones" },
  "mexico": { nombre: "México", categoria: "Selecciones" },
  "méxico": { nombre: "México", categoria: "Selecciones" },
  "colombia": { nombre: "Colombia", categoria: "Selecciones" },
  "guatemala": { nombre: "Guatemala", categoria: "Selecciones" },
  "estados_unidos": { nombre: "Estados Unidos", categoria: "Selecciones" },
  "estadosunidos": { nombre: "Estados Unidos", categoria: "Selecciones" },
  "usa": { nombre: "Estados Unidos", categoria: "Selecciones" },
  "inglaterra": { nombre: "Inglaterra", categoria: "Selecciones" },
  "chile": { nombre: "Chile", categoria: "Selecciones" },
  "canada": { nombre: "Canadá", categoria: "Selecciones" },
  "canadá": { nombre: "Canadá", categoria: "Selecciones" },
  "japon": { nombre: "Japón", categoria: "Selecciones" },
  "japón": { nombre: "Japón", categoria: "Selecciones" },
  "suiza": { nombre: "Suiza", categoria: "Selecciones" },
};

const KIT_MAP: Record<string, string> = {
  "local": "Local",
  "visitante": "Visitante",
  "vist": "Visitante",
  "v": "Visitante",
  "tercera": "Tercera",
  "3ra": "Tercera",
  "t": "Tercera",
  "cuarta": "Cuarta",
  "4ta": "Cuarta",
  "portero": "Portero",
  "fuera_de_casa": "Visitante",
  "ed_espl": "Especial",
  "ed_esp": "Especial",
  "edespl": "Especial",
};

function slug(str: string): string {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

async function fetchAllImages() {
  const allResources: any[] = [];
  let nextCursor: string | null = null;

  console.log("📡 Conectando a Cloudinary...\n");

  do {
    const url = new URL(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image`);
    url.searchParams.set("max_results", "500");
    url.searchParams.set("type", "upload");
    if (nextCursor) url.searchParams.set("next_cursor", nextCursor);

    const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");
    const response = await fetch(url.toString(), {
      headers: { Authorization: `Basic ${auth}` },
    });

    if (!response.ok) throw new Error(`Error ${response.status}: ${await response.text()}`);

    const data = await response.json();
    allResources.push(...data.resources);
    nextCursor = data.next_cursor || null;

    console.log(`   📥 Descargadas ${allResources.length} imágenes...`);
  } while (nextCursor);

  return allResources;
}

interface Product {
  id: string;
  nombre: string;
  precioFan: number | null;
  precioJugador: number | null;
  categoria: "Clubes" | "Selecciones" | "Retro" | "Especiales";
  imagenesFan: string[];
  imagenesJugador: string[];
}

function parseFilename(publicId: string, secureUrl: string) {
  const filename = publicId.toLowerCase();
  const parts = filename.split("_");

  // Ignorar imágenes que no son frontal/espalda
  const hasView = filename.includes("frontal") || filename.includes("espalda") || 
                  filename.includes("front") || filename.includes("back") ||
                  filename.includes("fronta");
  if (!hasView) return null;

  // Ignorar detalles
  if (filename.includes("detalle") || filename.includes("escudo") || 
      filename.includes("tela") || filename.includes("parche")) return null;

  // Detectar vista
  let view: "frontal" | "espalda" = "frontal";
  if (filename.includes("espalda") || filename.includes("back")) {
    view = "espalda";
  }

  // Buscar club/selección
  let clubInfo: { nombre: string; categoria: "Clubes" | "Selecciones" } | null = null;
  let clubKey = "";

  // Método 1: Buscar en partes individuales
  for (const part of parts) {
    const cleanPart = part.replace(/[^a-záéíóúñ]/gi, "").toLowerCase();
    if (CLUB_MAP[cleanPart]) {
      clubKey = cleanPart;
      clubInfo = CLUB_MAP[cleanPart];
      break;
    }
  }

  // Método 2: Buscar en el nombre completo (sin separadores)
  if (!clubInfo) {
    const cleanFilename = filename.replace(/[_\-\s]/g, "").replace(/[0-9]/g, "");
    for (const [key, value] of Object.entries(CLUB_MAP)) {
      if (cleanFilename.includes(key.replace(/[_\s]/g, ""))) {
        clubKey = key;
        clubInfo = value;
        break;
      }
    }
  }

  if (!clubInfo) return null;

  // Detectar temporada
  let season = "25-26";
  const seasonMatch = filename.match(/(\d{2})-(\d{2})/);
  if (seasonMatch) {
    season = `${seasonMatch[1]}-${seasonMatch[2]}`;
  }

  // Detectar tipo de kit
  let kitType = "local";
  for (const [key, value] of Object.entries(KIT_MAP)) {
    if (filename.includes(key)) {
      kitType = value.toLowerCase();
      break;
    }
  }

  // Detectar versión (fan vs jugador)
  // Formato corto: _f_ significa fan
  // Formato largo: _Jugador_ significa jugador, si no hay nada es fan
  let version: "fan" | "jugador" = "fan";
  if (filename.includes("jugador") || filename.includes("player")) {
    version = "jugador";
  } else if (filename.includes("_f_") || filename.includes("_f") && !filename.includes("frontal")) {
    version = "fan";
  } else if (!filename.includes("_f_") && !filename.includes("_f") && 
             (parts[0] === "frontal" || parts[0] === "espalda" || parts[0] === "fronta")) {
    // Formato corto sin _f_ = jugador
    version = "jugador";
  }

  return {
    clubNombre: clubInfo.nombre,
    categoria: clubInfo.categoria,
    kitType,
    season,
    version,
    view,
    url: secureUrl,
  };
}

async function main() {
  try {
    const resources = await fetchAllImages();
    console.log(`\n✅ Total: ${resources.length} imágenes encontradas\n`);

    const noParsed: string[] = [];
    const products: Record<string, Product> = {};

    for (const resource of resources) {
      const parsed = parseFilename(resource.public_id, resource.secure_url);
      
      if (!parsed) {
        noParsed.push(resource.public_id);
        continue;
      }

      const { clubNombre, categoria, kitType, season, version, url } = parsed;
      const productId = `${slug(clubNombre)}-${kitType}-${season.replace("-", "")}`;

      if (!products[productId]) {
        const kitNombre = kitType.charAt(0).toUpperCase() + kitType.slice(1);
        products[productId] = {
          id: productId,
          nombre: `${clubNombre} ${kitNombre} ${season.replace("-", "/")}`,
          precioFan: null,
          precioJugador: null,
          categoria,
          imagenesFan: [],
          imagenesJugador: [],
        };
      }

      if (version === "fan") {
        products[productId].precioFan = PRECIO_FAN;
        if (!products[productId].imagenesFan.includes(url)) {
          products[productId].imagenesFan.push(url);
        }
      } else {
        products[productId].precioJugador = PRECIO_JUGADOR;
        if (!products[productId].imagenesJugador.includes(url)) {
          products[productId].imagenesJugador.push(url);
        }
      }
    }

    // Ordenar: frontal primero
    for (const p of Object.values(products)) {
      const sort = (a: string, b: string) =>
        a.toLowerCase().includes("frontal") ? -1 : b.toLowerCase().includes("frontal") ? 1 : 0;
      p.imagenesFan.sort(sort);
      p.imagenesJugador.sort(sort);
    }

    const productArray = Object.values(products);
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(productArray, null, 2));

    console.log(`🎉 ¡Listo! Generados ${productArray.length} productos`);
    console.log(`📁 Archivo: ${OUTPUT_FILE}\n`);

    const clubes = productArray.filter(p => p.categoria === "Clubes").length;
    const selecciones = productArray.filter(p => p.categoria === "Selecciones").length;
    console.log(`📊 Resumen: ${clubes} Clubes, ${selecciones} Selecciones\n`);

    // Mostrar algunos productos
    console.log("📦 Primeros 5 productos:");
    productArray.slice(0, 5).forEach(p => {
      console.log(`   - ${p.nombre} (Fan: ${p.imagenesFan.length}, Jugador: ${p.imagenesJugador.length})`);
    });

    if (noParsed.length > 0) {
      console.log(`\n⚠️  ${noParsed.length} imágenes ignoradas (detalles, sin club, etc.)`);
    }

  } catch (error) {
    console.error("❌ Error:", error);
  }
}

main();