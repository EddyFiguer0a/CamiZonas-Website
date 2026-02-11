import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CADVdiKK.mjs';
import { manifest } from './manifest_Kj7t1Z00.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin/dashboard.astro.mjs');
const _page3 = () => import('./pages/admin/editar-producto/_id_.astro.mjs');
const _page4 = () => import('./pages/admin/nuevo-producto.astro.mjs');
const _page5 = () => import('./pages/admin/productos.astro.mjs');
const _page6 = () => import('./pages/admin.astro.mjs');
const _page7 = () => import('./pages/api/admin/delete-product.astro.mjs');
const _page8 = () => import('./pages/api/admin/get.product.astro.mjs');
const _page9 = () => import('./pages/api/admin/login.astro.mjs');
const _page10 = () => import('./pages/api/admin/products.astro.mjs');
const _page11 = () => import('./pages/api/admin/save-product.astro.mjs');
const _page12 = () => import('./pages/api/admin/update-product.astro.mjs');
const _page13 = () => import('./pages/api/admin/updload.astro.mjs');
const _page14 = () => import('./pages/carrito.astro.mjs');
const _page15 = () => import('./pages/catalogo.astro.mjs');
const _page16 = () => import('./pages/producto/_id_.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admin/dashboard.astro", _page2],
    ["src/pages/admin/editar-producto/[id].astro", _page3],
    ["src/pages/admin/nuevo-producto.astro", _page4],
    ["src/pages/admin/productos.astro", _page5],
    ["src/pages/admin/index.astro", _page6],
    ["src/pages/api/admin/delete-product.ts", _page7],
    ["src/pages/api/admin/get.product.ts", _page8],
    ["src/pages/api/admin/login.ts", _page9],
    ["src/pages/api/admin/products.ts", _page10],
    ["src/pages/api/admin/save-product.ts", _page11],
    ["src/pages/api/admin/update-product.ts", _page12],
    ["src/pages/api/admin/updload.ts", _page13],
    ["src/pages/carrito.astro", _page14],
    ["src/pages/catalogo.astro", _page15],
    ["src/pages/producto/[id].astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2083fe8f-2711-46a4-86bc-56565d3059e4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
