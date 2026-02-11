import { v2 } from 'cloudinary';

v2.config({
  cloud_name: "dbydbxlbw",
  api_key: "582554432384647",
  api_secret: "TxQ61sjmMPLzLbQK1dSPNbvZgMg"
});
async function uploadImage(buffer, folder, publicId) {
  return new Promise((resolve, reject) => {
    v2.uploader.upload_stream(
      {
        folder,
        public_id: publicId,
        overwrite: false,
        resource_type: "image",
        transformation: [
          { width: 1200, height: 1200, crop: "limit" },
          { quality: "auto:good" },
          { fetch_format: "auto" }
        ]
      },
      (error, result) => {
        if (error || !result) {
          reject(error || new Error("Upload failed"));
          return;
        }
        resolve({
          url: result.secure_url,
          publicId: result.public_id
        });
      }
    ).end(buffer);
  });
}
async function deleteImage(publicId) {
  try {
    const result = await v2.uploader.destroy(publicId);
    return result.result === "ok";
  } catch (error) {
    console.error("Error eliminando imagen:", error);
    return false;
  }
}

export { deleteImage as d, uploadImage as u };
