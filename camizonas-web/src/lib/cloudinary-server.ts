import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY || process.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET || process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };

// ============================
// SUBIR IMAGEN
// ============================
export async function uploadImage(
  buffer: Buffer,
  folder: string,
  publicId: string
): Promise<{ url: string; publicId: string }> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder,
          public_id: publicId,
          overwrite: false,
          resource_type: 'image',
          transformation: [
            { width: 1200, height: 1200, crop: 'limit' },
            { quality: 'auto:good' },
            { fetch_format: 'auto' },
          ],
        },
        (error, result) => {
          if (error || !result) {
            reject(error || new Error('Upload failed'));
            return;
          }
          resolve({
            url: result.secure_url,
            publicId: result.public_id,
          });
        }
      )
      .end(buffer);
  });
}

// ============================
// ELIMINAR IMAGEN
// ============================
export async function deleteImage(publicId: string): Promise<boolean> {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result.result === 'ok';
  } catch (error) {
    console.error('Error eliminando imagen:', error);
    return false;
  }
}

// ============================
// ELIMINAR CARPETA COMPLETA
// ============================
export async function deleteFolder(folder: string): Promise<boolean> {
  try {
    // Primero eliminar todos los recursos de la carpeta
    const resources = await cloudinary.api.resources({
      type: 'upload',
      prefix: folder,
      max_results: 100,
      resource_type: 'image',
    });

    if (resources.resources.length > 0) {
      const publicIds = resources.resources.map((r: any) => r.public_id);
      await cloudinary.api.delete_resources(publicIds);
    }

    // Luego intentar eliminar la carpeta vacía
    try {
      await cloudinary.api.delete_folder(folder);
    } catch {
      // La carpeta puede no existir o tener subcarpetas, ignorar
    }

    return true;
  } catch (error) {
    console.error('Error eliminando carpeta:', error);
    return false;
  }
}