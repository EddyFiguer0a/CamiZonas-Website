import type { APIRoute } from 'astro';
import { updateProduct } from '../../../lib/products-manager';

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

    const { productId, updates } = await request.json();

    if (!productId) {
      return new Response(
        JSON.stringify({ error: 'ID de producto requerido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const result = updateProduct(productId, updates);

    if (!result.success) {
      return new Response(
        JSON.stringify({ error: 'Producto no encontrado' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Producto actualizado correctamente',
        product: result.product,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error actualizando producto:', error);
    return new Response(
      JSON.stringify({ error: 'Error al actualizar producto' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};