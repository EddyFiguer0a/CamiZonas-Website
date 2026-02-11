// ============================
// CONFIGURACIÓN DE TIPOS DE PRODUCTO
// Edita SOLO este archivo para agregar nuevas categorías/versiones
// ============================

export interface VersionConfig {
  precio: number;
  etiqueta: string;
}

export interface SubcategoriaConfig {
  nombre: string;
  regiones?: string[];
}

export interface CategoriaConfig {
  icon: string;
  subcategorias?: SubcategoriaConfig[];
  regiones?: string[];
}

// ============================
// VERSIONES DISPONIBLES
// ============================
export const VERSIONES: Record<string, VersionConfig> = {
  Fan: { precio: 375, etiqueta: 'Versión Fan' },
  Jugador: { precio: 400, etiqueta: 'Versión Jugador' },
  Especial: { precio: 420, etiqueta: 'Edición Especial' },
  Retro: { precio: 420, etiqueta: 'Retro' },
};

// ============================
// CATEGORÍAS
// ============================
export const CATEGORIAS: Record<string, CategoriaConfig> = {
  Clubes: {
    icon: '⚽',
    regiones: ['Europa', 'America', 'Asia', 'Africa'],
  },
  Selecciones: {
    icon: '🌍',
    regiones: ['Europa', 'America', 'Asia', 'Africa'],
  },
  Retro: {
    icon: '📼',
  },
  Especiales: {
    icon: '✨',
  },
};

// ============================
// TIPOS DE CAMISOLA
// ============================
export const TIPOS_CAMISOLA = [
  'Local',
  'Visitante',
  'Tercera',
  'Portero',
  'Entrenamiento',
  'Especial',
  'Retro',
] as const;

// ============================
// TIPOS DE IMAGEN
// ============================
export const TIPOS_IMAGEN = [
  { value: 'frontal', label: 'Frontal', required: true },
  { value: 'espalda', label: 'Espalda', required: false },
  { value: 'detalle-escudo', label: 'Detalle Escudo', required: false },
  { value: 'detalle-tela', label: 'Detalle Tela', required: false },
] as const;

// ============================
// TEMPORADAS
// ============================
export const TEMPORADAS = [
  '25-26',
  '24-25',
  '23-24',
] as const;

// ============================
// HELPER: Generar path de Cloudinary
// ============================
export function buildCloudinaryPath(params: {
  categoria: string;
  region?: string;
  equipo: string;
  temporada: string;
  tipo: string;
  version: string;
}): string {
  const parts = ['CAMISOLAS'];

  parts.push(params.categoria.toUpperCase());

  if (params.region) {
    parts.push(params.region.toUpperCase());
  }

  parts.push(params.equipo.toUpperCase());
  parts.push(params.temporada);
  parts.push(params.tipo.toUpperCase());
  parts.push(params.version);

  return parts.join('/');
}

// ============================
// HELPER: Generar ID/Slug
// ============================
export function generateSlug(nombre: string): string {
  return nombre
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}