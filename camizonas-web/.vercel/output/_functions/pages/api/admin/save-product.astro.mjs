import { b as addProduct } from '../../../chunks/products-manager_DUp1Vgkn.mjs';
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
    const product = await request.json();
    if (!product.id || !product.nombre) {
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const products = addProduct(product);
    return new Response(
      JSON.stringify({
        success: true,
        message: "Producto guardado correctamente",
        total: products.length
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error guardando producto:", error);
    return new Response(
      JSON.stringify({ error: "Error al guardar producto" }),
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
