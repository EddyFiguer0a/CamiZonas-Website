import type { APIRoute } from 'astro';
import { getProductById } from '../../../lib/products-manager';

export const prerender = false;

export const GET: APIRoute = async ({ request, url }) => {
  try {
    const authHeader = request.headers.get('X-Admin-Password');
    if (authHeader !== import.meta.env.ADMIN_PASSWORD && authHeader !== process.env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: 'No autorizado' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const productId = url.searchParams.get('id');
    
    if (!productId) {
      return new Response(
        JSON.stringify({ error: 'ID requerido' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const product = getProductById(productId);
    
    if (!product) {
      return new Response(
        JSON.stringify({ error: 'Producto no encontrado' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ product }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error obteniendo producto:', error);
    return new Response(
      JSON.stringify({ error: 'Error al obtener producto' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};