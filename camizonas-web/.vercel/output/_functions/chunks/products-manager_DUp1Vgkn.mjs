import fs from 'node:fs';
import path from 'node:path';

const PRODUCTS_PATH = path.join(process.cwd(), "src/data/productos.json");
const BACKUPS_DIR = path.join(process.cwd(), ".backups");
function loadProducts() {
  try {
    const raw = fs.readFileSync(PRODUCTS_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}
function saveProducts(products) {
  if (!fs.existsSync(BACKUPS_DIR)) {
    fs.mkdirSync(BACKUPS_DIR, { recursive: true });
  }
  if (fs.existsSync(PRODUCTS_PATH)) {
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(BACKUPS_DIR, `productos-${timestamp}.json`);
    fs.copyFileSync(PRODUCTS_PATH, backupPath);
    const backups = fs.readdirSync(BACKUPS_DIR).filter((f) => f.startsWith("productos-")).sort();
    while (backups.length > 20) {
      const oldest = backups.shift();
      fs.unlinkSync(path.join(BACKUPS_DIR, oldest));
    }
  }
  fs.writeFileSync(
    PRODUCTS_PATH,
    JSON.stringify(products, null, 2),
    "utf-8"
  );
}
function addProduct(product) {
  const products = loadProducts();
  const existing = products.findIndex((p) => p.id === product.id);
  if (existing !== -1) {
    products[existing] = { ...products[existing], ...product };
  } else {
    products.push(product);
  }
  saveProducts(products);
  return products;
}
function updateProduct(productId, updates) {
  const products = loadProducts();
  const index = products.findIndex((p) => p.id === productId);
  if (index === -1) {
    return { success: false };
  }
  products[index] = { ...products[index], ...updates };
  saveProducts(products);
  return { success: true, product: products[index] };
}
function getProductById(productId) {
  const products = loadProducts();
  return products.find((p) => p.id === productId) || null;
}
function removeProduct(productId) {
  const products = loadProducts();
  const index = products.findIndex((p) => p.id === productId);
  if (index === -1) {
    return { removed: null, products };
  }
  const removed = products.splice(index, 1)[0];
  saveProducts(products);
  return { removed, products };
}
function getStats() {
  const products = loadProducts();
  const byCategory = {};
  products.forEach((p) => {
    byCategory[p.categoria] = (byCategory[p.categoria] || 0) + 1;
  });
  const totalFanImages = products.reduce((sum, p) => sum + (p.imagenesFan?.length || 0), 0);
  const totalPlayerImages = products.reduce((sum, p) => sum + (p.imagenesJugador?.length || 0), 0);
  return {
    totalProducts: products.length,
    byCategory,
    totalImages: totalFanImages + totalPlayerImages,
    fanImages: totalFanImages,
    playerImages: totalPlayerImages
  };
}

export { getStats as a, addProduct as b, getProductById as g, loadProducts as l, removeProduct as r, updateProduct as u };
