
import type { APIRoute } from 'astro';
import { addProduct } from '../../../lib/products-manager';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const authHeader = request.headers.get('X-Admin-Password');
    if (authHeader !== import.meta.env.ADMIN_PASSWORD && authHeader !== process.env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: 'No autorizado' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const product = await request.json();

    if (!product.id || !product.nombre) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const products = addProduct(product);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Producto guardado correctamente',
        total: products.length,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error guardando producto:', error);
    return new Response(
      JSON.stringify({ error: 'Error al guardar producto' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};