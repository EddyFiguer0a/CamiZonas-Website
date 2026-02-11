import { r as removeProduct } from '../../../chunks/products-manager_DUp1Vgkn.mjs';
import { d as deleteImage } from '../../../chunks/cloudinary-server_Cxjp_LkF.mjs';
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
    const { productId, deleteFromCloudinary } = await request.json();
    if (!productId) {
      return new Response(
        JSON.stringify({ error: "ID de producto requerido" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const { removed, products } = removeProduct(productId);
    if (!removed) {
      return new Response(
        JSON.stringify({ error: "Producto no encontrado" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }
    if (deleteFromCloudinary && removed) {
      const allCloudinaryImages = [
        ...removed._cloudinaryFan || [],
        ...removed._cloudinaryJugador || []
      ];
      for (const img of allCloudinaryImages) {
        await deleteImage(img.publicId);
      }
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: `Producto "${removed.nombre}" eliminado`,
        total: products.length
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error eliminando producto:", error);
    return new Response(
      JSON.stringify({ error: "Error al eliminar producto" }),
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
