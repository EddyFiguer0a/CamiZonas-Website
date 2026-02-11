import type { APIRoute } from 'astro';
import { uploadImage } from '../../../lib/cloudinary-server';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Verificar password
    const authHeader = request.headers.get('X-Admin-Password');
    if (authHeader !== import.meta.env.ADMIN_PASSWORD && authHeader !== process.env.ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ error: 'No autorizado' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const folder = formData.get('folder') as string;
    const imageType = formData.get('imageType') as string;

    if (!file) {
      return new Response(JSON.stringify({ error: 'No se envió archivo' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validar tipo
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      return new Response(
        JSON.stringify({ error: 'Tipo no válido. Solo JPG, PNG, WebP, GIF' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validar tamaño (máx 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ error: 'Archivo muy grande. Máximo 5MB' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Convertir a buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Subir a Cloudinary
    const result = await uploadImage(buffer, folder, imageType);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error en upload:', error);
    return new Response(
      JSON.stringify({ error: 'Error al subir imagen' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};