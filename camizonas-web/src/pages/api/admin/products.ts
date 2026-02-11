
import type { APIRoute } from 'astro';
import { loadProducts, getStats } from '../../../lib/products-manager';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  try {
    const authHeader = request.headers.get('X-Admin-Password');
    if (authHeader !== import.meta.env.ADMIN_PASSWORD && authHeader !== process.env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: 'No autorizado' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const products = loadProducts();
    const stats = getStats();

    return new Response(
      JSON.stringify({ products, stats }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error cargando productos:', error);
    return new Response(
      JSON.stringify({ error: 'Error al cargar productos' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};