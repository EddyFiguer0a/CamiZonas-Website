import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colores
const colores = {
  reset: '\x1b[0m',
  verde: '\x1b[32m',
  amarillo: '\x1b[33m',
  rojo: '\x1b[31m',
  cyan: '\x1b[36m'
};

// ⚠️ RUTAS CORRECTAS
const PRODUCTOS_JSON = path.join(__dirname, '../src/data/productos.json');
const CARPETA_CAMISOLAS = path.join(__dirname, '../public/img/CAMISOLAS');

// Función para extraer ruta relativa desde CAMISOLAS
function extraerRutaDesdeCamisolas(url) {
  try {
    const partes = url.split('/');
    const indiceCamisolas = partes.findIndex(p => p === 'CAMISOLAS');
    
    if (indiceCamisolas === -1) {
      return null;
    }
    
    const rutaRelativa = partes.slice(indiceCamisolas + 1).join('/'); // Sin incluir CAMISOLAS
    return decodeURIComponent(rutaRelativa);
  } catch (error) {
    return null;
  }
}

// Función para verificar si existe el archivo
function verificarArchivo(rutaRelativa) {
  const rutaCompleta = path.join(CARPETA_CAMISOLAS, rutaRelativa);
  return fs.existsSync(rutaCompleta);
}

// Función para obtener todos los archivos físicos
function obtenerArchivosReales(dir, baseDir = dir) {
  let archivos = [];
  
  if (!fs.existsSync(dir)) {
    return archivos;
  }
  
  const lista = fs.readdirSync(dir);
  
  lista.forEach(file => {
    const rutaCompleta = path.join(dir, file);
    const stat = fs.statSync(rutaCompleta);
    
    if (stat.isDirectory()) {
      archivos = archivos.concat(obtenerArchivosReales(rutaCompleta, baseDir));
    } else {
      if (/\.(jpg|jpeg|png|webp|gif)$/i.test(file)) {
        const rutaRelativa = path.relative(baseDir, rutaCompleta);
        archivos.push(rutaRelativa.replace(/\\/g, '/'));
      }
    }
  });
  
  return archivos;
}

// Función principal
function main() {
  console.log(`${colores.cyan}🔍 Verificando consistencia entre JSON y archivos...${colores.reset}\n`);
  
  // Verificar que existan los archivos
  if (!fs.existsSync(PRODUCTOS_JSON)) {
    console.error(`${colores.rojo}❌ No existe: ${PRODUCTOS_JSON}${colores.reset}`);
    process.exit(1);
  }
  
  if (!fs.existsSync(CARPETA_CAMISOLAS)) {
    console.error(`${colores.rojo}❌ No existe: ${CARPETA_CAMISOLAS}${colores.reset}`);
    process.exit(1);
  }
  
  console.log(`📄 JSON:     ${PRODUCTOS_JSON}`);
  console.log(`📁 CAMISOLAS: ${CARPETA_CAMISOLAS}\n`);
  
  // Leer JSON
  let productos;
  try {
    const contenido = fs.readFileSync(PRODUCTOS_JSON, 'utf-8');
    productos = JSON.parse(contenido);
  } catch (error) {
    console.error(`${colores.rojo}❌ Error leyendo productos.json: ${error.message}${colores.reset}`);
    process.exit(1);
  }
  
  console.log(`📦 Productos en JSON: ${productos.length}`);
  
  // Extraer todas las URLs del JSON
  const urlsEnJSON = new Set();
  const rutasEnJSON = new Set();
  
  productos.forEach(producto => {
    // Procesar imagenesFan
    if (producto.imagenesFan && Array.isArray(producto.imagenesFan)) {
      producto.imagenesFan.forEach(url => {
        urlsEnJSON.add(url);
        const ruta = extraerRutaDesdeCamisolas(url);
        if (ruta) {
          rutasEnJSON.add(ruta);
        }
      });
    }
    
    // Procesar imagenesJugador
    if (producto.imagenesJugador && Array.isArray(producto.imagenesJugador)) {
      producto.imagenesJugador.forEach(url => {
        urlsEnJSON.add(url);
        const ruta = extraerRutaDesdeCamisolas(url);
        if (ruta) {
          rutasEnJSON.add(ruta);
        }
      });
    }
  });
  
  console.log(`🖼️  URLs totales en JSON: ${urlsEnJSON.size}`);
  console.log(`📂 Rutas esperadas: ${rutasEnJSON.size}\n`);
  
  // Obtener archivos reales
  console.log('📊 Escaneando archivos físicos...\n');
  const archivosReales = obtenerArchivosReales(CARPETA_CAMISOLAS);
  
  console.log(`💾 Archivos físicos encontrados: ${archivosReales.length}\n`);
  
  // Crear set de archivos reales normalizados
  const setArchivosReales = new Set(archivosReales);
  
  // Verificar cada ruta del JSON
  const enJSONnoEnDisco = [];
  const enJSONyEnDisco = [];
  
  rutasEnJSON.forEach(ruta => {
    if (verificarArchivo(ruta)) {
      enJSONyEnDisco.push(ruta);
    } else {
      enJSONnoEnDisco.push(ruta);
    }
  });
  
  // Archivos en disco que no están en JSON
  const enDiscoNoEnJSON = [];
  archivosReales.forEach(archivo => {
    if (!rutasEnJSON.has(archivo)) {
      enDiscoNoEnJSON.push(archivo);
    }
  });
  
  // Mostrar resultados
  console.log(`${'='.repeat(70)}`);
  console.log(`${colores.cyan}📊 RESULTADOS DE LA VERIFICACIÓN${colores.reset}`);
  console.log(`${'='.repeat(70)}\n`);
  
  // Archivos correctos
  console.log(`${colores.verde}✅ Archivos en JSON que existen en disco: ${enJSONyEnDisco.length}${colores.reset}`);
  
  // Archivos faltantes
  if (enJSONnoEnDisco.length > 0) {
    console.log(`\n${colores.rojo}❌ Archivos en JSON pero NO en disco (${enJSONnoEnDisco.length}):${colores.reset}`);
    enJSONnoEnDisco.slice(0, 20).forEach(r => console.log(`   - ${r}`));
    if (enJSONnoEnDisco.length > 20) {
      console.log(`   ${colores.amarillo}... y ${enJSONnoEnDisco.length - 20} más${colores.reset}`);
    }
  }
  
  // Archivos extra
  if (enDiscoNoEnJSON.length > 0) {
    console.log(`\n${colores.amarillo}⚠️  Archivos en disco pero NO en JSON (${enDiscoNoEnJSON.length}):${colores.reset}`);
    enDiscoNoEnJSON.slice(0, 20).forEach(r => console.log(`   - ${r}`));
    if (enDiscoNoEnJSON.length > 20) {
      console.log(`   ${colores.amarillo}... y ${enDiscoNoEnJSON.length - 20} más${colores.reset}`);
    }
  }
  
  console.log(`\n${'='.repeat(70)}`);
  
  // Conclusión
  const porcentajeCobertura = rutasEnJSON.size > 0 
    ? ((enJSONyEnDisco.length / rutasEnJSON.size) * 100).toFixed(2)
    : 0;
  
  console.log(`\n${colores.cyan}📈 ESTADÍSTICAS:${colores.reset}`);
  console.log(`   Cobertura: ${porcentajeCobertura}% de archivos del JSON están en disco`);
  console.log(`   Total esperado: ${rutasEnJSON.size}`);
  console.log(`   Total encontrado: ${enJSONyEnDisco.length}`);
  console.log(`   Faltantes: ${enJSONnoEnDisco.length}`);
  console.log(`   Extra en disco: ${enDiscoNoEnJSON.length}\n`);
  
  if (enJSONnoEnDisco.length === 0 && enDiscoNoEnJSON.length === 0) {
    console.log(`${colores.verde}✨ ¡PERFECTO! El JSON y los archivos están 100% sincronizados${colores.reset}\n`);
  } else if (enJSONnoEnDisco.length === 0) {
    console.log(`${colores.verde}✅ Todos los archivos del JSON existen en disco${colores.reset}`);
    console.log(`${colores.amarillo}⚠️  Pero hay ${enDiscoNoEnJSON.length} archivos extra que no están en el JSON${colores.reset}\n`);
  } else {
    console.log(`${colores.rojo}⚠️  Hay inconsistencias entre el JSON y los archivos${colores.reset}\n`);
  }
}

main();