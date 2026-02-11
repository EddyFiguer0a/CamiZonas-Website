import fs from 'node:fs';
import path from 'node:path';

const PRODUCTS_PATH = path.join(process.cwd(), 'src/data/productos.json');
const BACKUPS_DIR = path.join(process.cwd(), '.backups');

export interface ProductImage {
  url: string;
  publicId: string;
  tipo: string;
}

export interface Producto {
  id: string;
  nombre: string;
  categoria: string;
  region?: string;
  equipo: string;
  temporada: string;
  tipo: string;
  precioFan: number | null;
  precioJugador: number | null;
  imagenesFan: string[];
  imagenesJugador: string[];
  _cloudinaryFan?: ProductImage[];
  _cloudinaryJugador?: ProductImage[];
}

export function loadProducts(): Producto[] {
  try {
    const raw = fs.readFileSync(PRODUCTS_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveProducts(products: Producto[]): void {
  if (!fs.existsSync(BACKUPS_DIR)) {
    fs.mkdirSync(BACKUPS_DIR, { recursive: true });
  }

  if (fs.existsSync(PRODUCTS_PATH)) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(BACKUPS_DIR, `productos-${timestamp}.json`);
    fs.copyFileSync(PRODUCTS_PATH, backupPath);

    const backups = fs.readdirSync(BACKUPS_DIR)
      .filter(f => f.startsWith('productos-'))
      .sort();
    
    while (backups.length > 20) {
      const oldest = backups.shift()!;
      fs.unlinkSync(path.join(BACKUPS_DIR, oldest));
    }
  }

  fs.writeFileSync(
    PRODUCTS_PATH,
    JSON.stringify(products, null, 2),
    'utf-8'
  );
}

export function addProduct(product: Producto): Producto[] {
  const products = loadProducts();
  
  const existing = products.findIndex(p => p.id === product.id);
  if (existing !== -1) {
    products[existing] = { ...products[existing], ...product };
  } else {
    products.push(product);
  }
  
  saveProducts(products);
  return products;
}

// ✅ NUEVA FUNCIÓN: Actualizar producto existente
export function updateProduct(productId: string, updates: Partial<Producto>): { success: boolean; product?: Producto } {
  const products = loadProducts();
  const index = products.findIndex(p => p.id === productId);
  
  if (index === -1) {
    return { success: false };
  }
  
  products[index] = { ...products[index], ...updates };
  saveProducts(products);
  
  return { success: true, product: products[index] };
}

// ✅ NUEVA FUNCIÓN: Obtener producto por ID
export function getProductById(productId: string): Producto | null {
  const products = loadProducts();
  return products.find(p => p.id === productId) || null;
}

export function removeProduct(productId: string): { removed: Producto | null; products: Producto[] } {
  const products = loadProducts();
  const index = products.findIndex(p => p.id === productId);
  
  if (index === -1) {
    return { removed: null, products };
  }
  
  const removed = products.splice(index, 1)[0];
  saveProducts(products);
  return { removed, products };
}

export function getExistingTeams(): string[] {
  const products = loadProducts();
  const teams = new Set(products.map(p => p.equipo).filter(Boolean));
  return Array.from(teams).sort();
}

export function getStats() {
  const products = loadProducts();
  
  const byCategory: Record<string, number> = {};
  products.forEach(p => {
    byCategory[p.categoria] = (byCategory[p.categoria] || 0) + 1;
  });
  
  const totalFanImages = products.reduce((sum, p) => sum + (p.imagenesFan?.length || 0), 0);
  const totalPlayerImages = products.reduce((sum, p) => sum + (p.imagenesJugador?.length || 0), 0);
  
  return {
    totalProducts: products.length,
    byCategory,
    totalImages: totalFanImages + totalPlayerImages,
    fanImages: totalFanImages,
    playerImages: totalPlayerImages,
  };
}