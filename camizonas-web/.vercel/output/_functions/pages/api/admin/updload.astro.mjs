import { u as uploadImage } from '../../../chunks/cloudinary-server_Cxjp_LkF.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  try {
    const authHeader = request.headers.get("X-Admin-Password");
    if (authHeader !== "HugEdd26_" && authHeader !== process.env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: "No autorizado" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    const formData = await request.formData();
    const file = formData.get("file");
    const folder = formData.get("folder");
    const imageType = formData.get("imageType");
    if (!file) {
      return new Response(JSON.stringify({ error: "No se envió archivo" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!validTypes.includes(file.type)) {
      return new Response(
        JSON.stringify({ error: "Tipo no válido. Solo JPG, PNG, WebP, GIF" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (file.size > 5 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ error: "Archivo muy grande. Máximo 5MB" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const result = await uploadImage(buffer, folder, imageType);
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error en upload:", error);
    return new Response(
      JSON.stringify({ error: "Error al subir imagen" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
