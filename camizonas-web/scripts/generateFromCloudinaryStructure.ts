import 'dotenv/config';
import fs from "fs";
import path from "path";

const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const API_KEY = process.env.CLOUDINARY_API_KEY;
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

const OUTPUT_FILE = "src/data/productos.json";
const PRECIO_FAN = 375;
const PRECIO_JUGADOR = 400;
const PRECIO_RETRO_ESPECIAL = 420;
const TEMPORADA_DEFAULT = "26-27";

function slug(str: string): string {
  return str.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
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
  subcategoria?: "Clubes" | "Selecciones";
  imagenesFan: string[];
  imagenesJugador: string[];
}

function parseFromPath(publicId: string, secureUrl: string) {
  const segments = publicId.split('/');
  
  if (!segments[0] || segments[0].toUpperCase() !== 'CAMISOLAS') return null;
  
  const categoriaSegment = segments[1]?.toUpperCase();
  let categoria: "Clubes" | "Selecciones" | "Retro" | "Especiales" | null = null;
  let subcategoria: "Clubes" | "Selecciones" | undefined = undefined;
  
  // ✅ DETECTAR CATEGORÍA PRINCIPAL
  if (categoriaSegment === 'CLUBES') {
    categoria = 'Clubes';
  } else if (categoriaSegment === 'SELECCIONES') {
    categoria = 'Selecciones';
  } else if (categoriaSegment === 'RETRO') {
    categoria = 'Retro';
    const subcat = segments[2]?.toUpperCase();
    if (subcat === 'CLUBES') subcategoria = 'Clubes';
    else if (subcat === 'SELECCIONES') subcategoria = 'Selecciones';
  } else if (categoriaSegment === 'ESPECIALES') {
    categoria = 'Especiales';
  } else {
    return null;
  }
  
  let equipoNombre = '';
  let temporada = TEMPORADA_DEFAULT;
  let kitType = 'local';
  let version: 'fan' | 'jugador' = 'fan'; // Default siempre fan
  
  // ✅ PARSING SEGÚN CATEGORÍA
  if (categoria === 'Clubes') {
    // CAMISOLAS/CLUBES/LIGA/EQUIPO/TEMPORADA/KIT/VERSION/imagen.webp
    equipoNombre = segments[3] || '';
    const temporadaSegment = segments[4] || '';
    const kitTypeSegment = segments[5] || '';
    const versionSegment = segments[6] || '';
    
    const seasonMatch = temporadaSegment.match(/(\d{2})-(\d{2})/);
    if (seasonMatch) temporada = `${seasonMatch[1]}-${seasonMatch[2]}`;
    
    kitType = kitTypeSegment.toLowerCase();
    
    if (versionSegment.toLowerCase().includes('jugador') || versionSegment.toLowerCase().includes('player')) {
      version = 'jugador';
    }
    
  } else if (categoria === 'Selecciones') {
    // CAMISOLAS/SELECCIONES/CONTINENTE/PAIS/KIT/VERSION/imagen.webp
    equipoNombre = segments[3] || '';
    
    const versionIndex = segments.findIndex(s => 
      s.toLowerCase().includes('versión') || 
      s.toLowerCase().includes('version')
    );
    
    if (versionIndex !== -1) {
      const versionSegment = segments[versionIndex];
      if (versionSegment.toLowerCase().includes('jugador') || versionSegment.toLowerCase().includes('player')) {
        version = 'jugador';
      }
      
      const beforeVersion = segments[versionIndex - 1] || '';
      const seasonMatch = beforeVersion.match(/(\d{2})-(\d{2})/);
      if (seasonMatch) {
        temporada = `${seasonMatch[1]}-${seasonMatch[2]}`;
      }
      
      if (beforeVersion.toUpperCase() === 'LOCAL' || 
          beforeVersion.toUpperCase() === 'VISITANTE' ||
          beforeVersion === '3RA' || beforeVersion === '4TA') {
        kitType = beforeVersion.toLowerCase();
      }
    }
    
    const filename = segments[segments.length - 1] || '';
    const lowerFilename = filename.toLowerCase();
    
    if (kitType === 'local' && !segments.some(s => s.toUpperCase() === 'LOCAL')) {
      if (lowerFilename.includes('visitante') || lowerFilename.includes('vist')) kitType = 'visitante';
      else if (lowerFilename.includes('3ra') || lowerFilename.includes('tercera')) kitType = 'tercera';
      else if (lowerFilename.includes('4ta') || lowerFilename.includes('cuarta')) kitType = 'cuarta';
      else if (lowerFilename.includes('ed_esp') || lowerFilename.includes('especial')) kitType = 'especial';
    }
    
  } else if (categoria === 'Retro') {
    // ✅ RETRO: Sin carpeta de versión, todo es Fan
    // CAMISOLAS/RETRO/CLUBES/EQUIPO/TEMPORADA/imagen.webp
    // CAMISOLAS/RETRO/SELECCIONES/EQUIPO/TEMPORADA/imagen.webp
    
    if (subcategoria) {
      // Con subcategoría: RETRO/CLUBES/Real Madrid/1998_2000/imagen.webp
      equipoNombre = segments[3] || '';
      const temporadaSegment = segments[4] || '';
      
      // Limpiar temporada (1998_2000 -> 98-00, 2014_2015 -> 14-15)
      const seasonMatch = temporadaSegment.match(/(\d{2,4})[_-]?(\d{2,4})?/);
      if (seasonMatch) {
        const year1 = seasonMatch[1].slice(-2); // Últimos 2 dígitos
        const year2 = seasonMatch[2] ? seasonMatch[2].slice(-2) : '';
        temporada = year2 ? `${year1}-${year2}` : year1;
      }
    } else {
      // Sin subcategoría: RETRO/EQUIPO/TEMPORADA/imagen.webp
      equipoNombre = segments[2] || '';
      const temporadaSegment = segments[3] || '';
      
      const seasonMatch = temporadaSegment.match(/(\d{2,4})[_-]?(\d{2,4})?/);
      if (seasonMatch) {
        const year1 = seasonMatch[1].slice(-2);
        const year2 = seasonMatch[2] ? seasonMatch[2].slice(-2) : '';
        temporada = year2 ? `${year1}-${year2}` : year1;
      }
    }
    
    kitType = 'retro';
    version = 'fan'; // ✅ Siempre Fan para Retro
    
  } else if (categoria === 'Especiales') {
    // ✅ ESPECIALES: Sin carpeta de versión, todo es Fan
    // CAMISOLAS/ESPECIALES/EQUIPO/NOMBRE_EDICION/imagen.webp
    // Ejemplo: CAMISOLAS/ESPECIALES/Real Madrid/RM_Baseball/imagen.webp
    
    equipoNombre = segments[2] || '';
    const edicionSegment = segments[3] || '';
    
    // Limpiar nombre de edición (RM_Baseball -> Baseball)
    kitType = edicionSegment
      .replace(/^[A-Z]{2,3}_/i, '') // Quitar prefijos como RM_, FCB_
      .replace(/_/g, ' ')
      .toLowerCase() || 'especial';
    
    temporada = 'especial';
    version = 'fan'; // ✅ Siempre Fan para Especiales
  }
  
  if (!equipoNombre) return null;
  
  // Formatear nombre de equipo (quitar underscores y capitalizar)
  equipoNombre = equipoNombre
    .replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  
  // Limpiar "Retro" del nombre si ya está en la carpeta
  equipoNombre = equipoNombre.replace(/\s*retro\s*/gi, '').trim();
  
  return {
    equipoNombre,
    categoria,
    subcategoria,
    temporada,
    kitType,
    version,
    url: secureUrl
  };
}

async function main() {
  try {
    const resources = await fetchAllImages();
    console.log(`\n✅ Total: ${resources.length} imágenes encontradas\n`);

    const noParsed: string[] = [];
    const products: Record<string, Product> = {};

    for (const resource of resources) {
      const parsed = parseFromPath(resource.public_id, resource.secure_url);
      
      if (!parsed) {
        noParsed.push(resource.public_id);
        continue;
      }

      const { equipoNombre, categoria, subcategoria, temporada, kitType, version, url } = parsed;
      
      // ✅ ID único según categoría
      let productId: string;
      
      if (categoria === 'Retro') {
        productId = `retro-${slug(equipoNombre)}-${temporada.replace("-", "")}`;
      } else if (categoria === 'Especiales') {
        productId = `especial-${slug(equipoNombre)}-${slug(kitType)}`;
      } else {
        productId = `${slug(equipoNombre)}-${kitType}-${temporada.replace("-", "")}`;
      }

      if (!products[productId]) {
        let nombreProducto: string;
        
        if (categoria === 'Retro') {
          nombreProducto = `${equipoNombre} Retro ${temporada}`;
        } else if (categoria === 'Especiales') {
          // Capitalizar nombre de edición
          const edicionNombre = kitType
            .split(' ')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');
          nombreProducto = `${equipoNombre} ${edicionNombre}`;
        } else {
          const kitNombre = kitType.charAt(0).toUpperCase() + kitType.slice(1);
          nombreProducto = `${equipoNombre} ${kitNombre} ${temporada.replace("-", "/")}`;
        }
        
        products[productId] = {
          id: productId,
          nombre: nombreProducto,
          precioFan: null,
          precioJugador: null,
          categoria,
          ...(subcategoria && { subcategoria }),
          imagenesFan: [],
          imagenesJugador: [],
        };
      }

      // ✅ Asignar precios según versión y categoría
      if (version === "fan") {
        // Para Retro y Especiales, precio 420; para otros, 375
        products[productId].precioFan = (categoria === 'Retro' || categoria === 'Especiales') ? PRECIO_RETRO_ESPECIAL : PRECIO_FAN;
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

    // Ordenar imágenes: frontal primero, espalda segundo
    for (const p of Object.values(products)) {
      const sortImages = (a: string, b: string) => {
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();
        
        // Prioridad: frontal > frente > espalda > resto
        const getPriority = (str: string) => {
          if (str.includes("frontal") || str.includes("frente") || str.includes("front")) return 0;
          if (str.includes("espalda") || str.includes("back")) return 1;
          return 2;
        };
        
        return getPriority(aLower) - getPriority(bLower);
      };
      
      p.imagenesFan.sort(sortImages);
      p.imagenesJugador.sort(sortImages);
    }

    const productArray = Object.values(products);
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(productArray, null, 2));

    console.log(`🎉 ¡Listo! Generados ${productArray.length} productos`);
    console.log(`📁 Archivo: ${OUTPUT_FILE}\n`);

    // ✅ RESUMEN
    const clubes = productArray.filter(p => p.categoria === "Clubes").length;
    const selecciones = productArray.filter(p => p.categoria === "Selecciones").length;
    const retro = productArray.filter(p => p.categoria === "Retro").length;
    const especiales = productArray.filter(p => p.categoria === "Especiales").length;
    
    console.log(`📊 Resumen:`);
    console.log(`   ⚽ Clubes: ${clubes}`);
    console.log(`   🌍 Selecciones: ${selecciones}`);
    console.log(`   🏆 Retro: ${retro}`);
    console.log(`   ✨ Especiales: ${especiales}\n`);

    console.log("📦 Primeros 10 productos:");
    productArray.slice(0, 10).forEach(p => {
      console.log(`   - ${p.nombre} [${p.categoria}] (Fan: ${p.imagenesFan.length}, Jugador: ${p.imagenesJugador.length})`);
    });

    if (noParsed.length > 0) {
      console.log(`\n⚠️  ${noParsed.length} imágenes ignoradas (estructura no reconocida)`);
      console.log(`   Primeras 10 ignoradas:`);
      noParsed.slice(0, 10).forEach(p => console.log(`   - ${p}`));
    }

  } catch (error) {
    console.error("❌ Error:", error);
  }
}

main();