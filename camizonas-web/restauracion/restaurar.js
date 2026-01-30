import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colores para consola
const colores = {
  reset: '\x1b[0m',
  verde: '\x1b[32m',
  amarillo: '\x1b[33m',
  rojo: '\x1b[31m',
  cyan: '\x1b[36m'
};

// Rutas
const PRODUCTOS_JSON = path.join(__dirname, 'productos.json');
const CARPETA_MEZCLADAS = path.join(__dirname, 'mezcladas');
const CARPETA_DESTINO = __dirname; // La raíz donde se creará CAMISOLAS/

// Función para extraer la ruta desde CAMISOLAS
function extraerRutaDesdeCamisolas(url) {
  try {
    const partes = url.split('/');
    const indiceCamisolas = partes.findIndex(p => p === 'CAMISOLAS');
    
    if (indiceCamisolas === -1) {
      throw new Error('No se encontró "CAMISOLAS" en la URL');
    }
    
    // Tomar desde CAMISOLAS hasta el final
    const rutaRelativa = partes.slice(indiceCamisolas).join('/');
    
    // Decodificar para evitar %20, %C3%B3, etc.
    return decodeURIComponent(rutaRelativa);
  } catch (error) {
    console.error(`${colores.rojo}❌ Error procesando URL: ${url}${colores.reset}`);
    return null;
  }
}

// Función para obtener el nombre del archivo desde la URL
function obtenerNombreArchivo(url) {
  const partes = url.split('/');
  const ultimaParte = partes[partes.length - 1];
  
  // El nombre del archivo puede tener el ID de Cloudinary (ej: archivo_abc123.webp)
  // Decodificamos por si tiene caracteres especiales
  return decodeURIComponent(ultimaParte);
}

// Función para buscar el archivo en mezcladas (sin importar el ID de Cloudinary)
function buscarArchivoEnMezcladas(nombreArchivo) {
  try {
    const archivos = fs.readdirSync(CARPETA_MEZCLADAS);
    
    // Buscar coincidencia exacta primero
    if (archivos.includes(nombreArchivo)) {
      return nombreArchivo;
    }
    
    // Si no, buscar por similitud (mismo nombre base)
    const nombreBase = nombreArchivo.split('.')[0]; // Sin extensión
    const extension = path.extname(nombreArchivo);
    
    const similares = archivos.filter(archivo => {
      return archivo.startsWith(nombreBase) && archivo.endsWith(extension);
    });
    
    if (similares.length > 0) {
      return similares[0]; // Retornar el primero encontrado
    }
    
    return null;
  } catch (error) {
    console.error(`${colores.rojo}❌ Error buscando archivo: ${error.message}${colores.reset}`);
    return null;
  }
}

// Función principal para mover un archivo
function moverArchivo(url) {
  const rutaRelativa = extraerRutaDesdeCamisolas(url);
  
  if (!rutaRelativa) {
    return false;
  }
  
  const nombreArchivo = obtenerNombreArchivo(url);
  const archivoEncontrado = buscarArchivoEnMezcladas(nombreArchivo);
  
  if (!archivoEncontrado) {
    console.log(`${colores.amarillo}⚠️  No encontrado: ${nombreArchivo}${colores.reset}`);
    return false;
  }
  
  // Rutas completas
  const rutaOrigen = path.join(CARPETA_MEZCLADAS, archivoEncontrado);
  const rutaDestino = path.join(CARPETA_DESTINO, rutaRelativa);
  
  // Crear carpetas necesarias
  const carpetaDestino = path.dirname(rutaDestino);
  
  try {
    fs.mkdirSync(carpetaDestino, { recursive: true });
    
    // Mover archivo
    fs.renameSync(rutaOrigen, rutaDestino);
    
    console.log(`${colores.verde}✅ Movido: ${rutaRelativa}${colores.reset}`);
    return true;
  } catch (error) {
    console.error(`${colores.rojo}❌ Error moviendo ${nombreArchivo}: ${error.message}${colores.reset}`);
    return false;
  }
}

// Función principal
async function main() {
  console.log(`${colores.cyan}🚀 Iniciando restauración de imágenes...${colores.reset}\n`);
  
  // Leer productos.json
  let productos;
  try {
    const contenido = fs.readFileSync(PRODUCTOS_JSON, 'utf-8');
    productos = JSON.parse(contenido);
  } catch (error) {
    console.error(`${colores.rojo}❌ Error leyendo productos.json: ${error.message}${colores.reset}`);
    process.exit(1);
  }
  
  console.log(`📦 Total de productos: ${productos.length}\n`);
  
  let exito = 0;
  let faltantes = 0;
  let errores = 0;
  
  // Procesar cada producto
  for (const producto of productos) {
    console.log(`\n${colores.cyan}📌 Procesando: ${producto.nombre}${colores.reset}`);
    
    // Procesar imagenesFan
    if (producto.imagenesFan && producto.imagenesFan.length > 0) {
      console.log(`  🖼️  Versión FAN (${producto.imagenesFan.length} imágenes)`);
      for (const url of producto.imagenesFan) {
        const resultado = moverArchivo(url);
        if (resultado) exito++;
        else faltantes++;
      }
    }
    
    // Procesar imagenesJugador
    if (producto.imagenesJugador && producto.imagenesJugador.length > 0) {
      console.log(`  ⚽ Versión JUGADOR (${producto.imagenesJugador.length} imágenes)`);
      for (const url of producto.imagenesJugador) {
        const resultado = moverArchivo(url);
        if (resultado) exito++;
        else faltantes++;
      }
    }
  }
  
  // Resumen final
  console.log(`\n${'='.repeat(50)}`);
  console.log(`${colores.cyan}📊 RESUMEN FINAL${colores.reset}`);
  console.log(`${'='.repeat(50)}`);
  console.log(`${colores.verde}✅ Archivos movidos exitosamente: ${exito}${colores.reset}`);
  console.log(`${colores.amarillo}⚠️  Archivos no encontrados: ${faltantes}${colores.reset}`);
  console.log(`${colores.rojo}❌ Errores: ${errores}${colores.reset}`);
  console.log(`${'='.repeat(50)}\n`);
}

// Ejecutar
main().catch(console.error);