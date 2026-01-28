import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const CAMISOLAS_PATH = path.join(__dirname, '../public/img/CAMISOLAS');

// Función para obtener todas las imágenes recursivamente
function getAllImages(dir, baseDir = dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(filePath, baseDir));
    } else {
      // Solo imágenes
      if (/\.(jpg|jpeg|png|webp|gif)$/i.test(file)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Función para subir una imagen
async function uploadImage(filePath) {
  // Calcular el public_id basado en la ruta relativa
  const relativePath = path.relative(path.join(__dirname, '../public/img'), filePath);
  const publicId = relativePath.replace(/\\/g, '/').replace(/\.[^/.]+$/, ''); // Quitar extensión
  
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      resource_type: 'image',
      overwrite: false // No sobrescribir si ya existe
    });
    
    console.log(`✅ Subida: ${publicId}`);
    return result;
  } catch (error) {
    if (error.http_code === 409) {
      console.log(`⏭️  Ya existe: ${publicId}`);
      return null;
    } else {
      console.error(`❌ Error en ${publicId}:`, error.message);
      return null;
    }
  }
}

// Función principal
async function main() {
  console.log('🚀 Iniciando subida a Cloudinary...\n');
  console.log(`📁 Carpeta: ${CAMISOLAS_PATH}\n`);
  
  const images = getAllImages(CAMISOLAS_PATH);
  console.log(`📊 Total de imágenes encontradas: ${images.length}\n`);
  
  let uploaded = 0;
  let skipped = 0;
  let errors = 0;
  
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    console.log(`[${i + 1}/${images.length}] Procesando...`);
    
    const result = await uploadImage(image);
    
    if (result) {
      uploaded++;
    } else {
      skipped++;
    }
    
    // Pequeña pausa para no saturar la API
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log('\n✨ Upload completado!');
  console.log(`📊 Resumen:`);
  console.log(`   ✅ Subidas: ${uploaded}`);
  console.log(`   ⏭️  Omitidas: ${skipped}`);
  console.log(`   ❌ Errores: ${errors}`);
}

main().catch(console.error);