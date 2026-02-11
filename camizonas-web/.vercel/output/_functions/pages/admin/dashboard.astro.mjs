/* empty css                                        */
import { e as createComponent, r as renderTemplate, l as renderHead, n as renderScript } from '../../chunks/astro/server_lax-mPdS.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-x6qnsptu> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Dashboard | Admin CamiZonas</title><meta name="robots" content="noindex, nofollow">', "", "", `</head> <body class="bg-[#0a0a0a] text-white min-h-screen" data-astro-cid-x6qnsptu> <!-- SIDEBAR --> <aside id="sidebar" class="fixed inset-y-0 left-0 w-64 bg-[#111111] border-r border-white/5 z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300" data-astro-cid-x6qnsptu> <!-- Logo --> <div class="h-16 flex items-center gap-3 px-6 border-b border-white/5" data-astro-cid-x6qnsptu> <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20" data-astro-cid-x6qnsptu> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-x6qnsptu></path> </svg> </div> <div data-astro-cid-x6qnsptu> <span class="font-bold text-sm" data-astro-cid-x6qnsptu>CamiZonas</span> <span class="block text-[10px] text-gray-500 uppercase tracking-wider" data-astro-cid-x6qnsptu>Admin Panel</span> </div> </div> <!-- Navigation --> <nav class="p-4 space-y-1" data-astro-cid-x6qnsptu> <a href="/admin/dashboard" class="sidebar-link active flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all" data-astro-cid-x6qnsptu> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" data-astro-cid-x6qnsptu></path></svg>
Dashboard
</a> <a href="/admin/productos" class="sidebar-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-400 transition-all" data-astro-cid-x6qnsptu> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" data-astro-cid-x6qnsptu></path></svg>
Productos
</a> <a href="/admin/nuevo-producto" class="sidebar-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-400 transition-all" data-astro-cid-x6qnsptu> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" data-astro-cid-x6qnsptu></path></svg>
Nuevo Producto
</a> </nav> <!-- Bottom --> <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5" data-astro-cid-x6qnsptu> <a href="/" class="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all" data-astro-cid-x6qnsptu> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-x6qnsptu></path></svg>
Volver a la tienda
</a> <button id="logout-btn" class="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all mt-1" data-astro-cid-x6qnsptu> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-astro-cid-x6qnsptu></path></svg>
Cerrar Sesi\xF3n
</button> </div> </aside> <!-- OVERLAY MOBILE --> <div id="sidebar-overlay" class="fixed inset-0 bg-black/60 z-40 hidden lg:hidden" onclick="toggleSidebar()" data-astro-cid-x6qnsptu></div> <!-- MAIN CONTENT --> <main class="lg:ml-64 min-h-screen" data-astro-cid-x6qnsptu> <!-- Top bar --> <header class="sticky top-0 z-30 h-16 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5 flex items-center justify-between px-6" data-astro-cid-x6qnsptu> <div class="flex items-center gap-4" data-astro-cid-x6qnsptu> <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg hover:bg-white/5" onclick="toggleSidebar()" data-astro-cid-x6qnsptu> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-x6qnsptu></path></svg> </button> <h1 class="text-lg font-semibold" data-astro-cid-x6qnsptu>Dashboard</h1> </div> <div class="flex items-center gap-3" data-astro-cid-x6qnsptu> <span class="text-xs text-gray-500" id="last-updated" data-astro-cid-x6qnsptu></span> <div class="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-xs font-bold" data-astro-cid-x6qnsptu>
CZ
</div> </div> </header> <!-- Dashboard Content --> <div class="p-6 space-y-6" data-astro-cid-x6qnsptu> <!-- Stats Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="stats-grid" data-astro-cid-x6qnsptu> <!-- Se llena con JavaScript --> <div class="h-28 rounded-2xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> <div class="h-28 rounded-2xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> <div class="h-28 rounded-2xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> <div class="h-28 rounded-2xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> </div> <!-- Categories breakdown --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-astro-cid-x6qnsptu> <!-- Categories --> <div class="bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-x6qnsptu> <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4" data-astro-cid-x6qnsptu>Por Categor\xEDa</h3> <div id="categories-list" class="space-y-3" data-astro-cid-x6qnsptu> <div class="h-10 rounded-xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> <div class="h-10 rounded-xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> </div> </div> <!-- Quick Actions --> <div class="bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-x6qnsptu> <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4" data-astro-cid-x6qnsptu>Acciones R\xE1pidas</h3> <div class="space-y-3" data-astro-cid-x6qnsptu> <a href="/admin/nuevo-producto" class="flex items-center gap-3 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-all group" data-astro-cid-x6qnsptu> <div class="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center" data-astro-cid-x6qnsptu> <svg class="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" data-astro-cid-x6qnsptu></path></svg> </div> <div data-astro-cid-x6qnsptu> <span class="text-sm font-medium text-orange-300 group-hover:text-orange-200" data-astro-cid-x6qnsptu>Agregar Producto</span> <span class="block text-xs text-gray-500" data-astro-cid-x6qnsptu>Subir nueva camisola</span> </div> <svg class="w-4 h-4 text-gray-600 ml-auto group-hover:text-orange-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-astro-cid-x6qnsptu></path></svg> </a> <a href="/admin/productos" class="flex items-center gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all group" data-astro-cid-x6qnsptu> <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center" data-astro-cid-x6qnsptu> <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" data-astro-cid-x6qnsptu></path></svg> </div> <div data-astro-cid-x6qnsptu> <span class="text-sm font-medium text-blue-300 group-hover:text-blue-200" data-astro-cid-x6qnsptu>Ver Cat\xE1logo</span> <span class="block text-xs text-gray-500" data-astro-cid-x6qnsptu>Gestionar productos existentes</span> </div> <svg class="w-4 h-4 text-gray-600 ml-auto group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-astro-cid-x6qnsptu></path></svg> </a> </div> </div> </div> <!-- Recent Products --> <div class="bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-x6qnsptu> <div class="flex items-center justify-between mb-4" data-astro-cid-x6qnsptu> <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider" data-astro-cid-x6qnsptu>\xDAltimos Productos</h3> <a href="/admin/productos" class="text-xs text-orange-400 hover:text-orange-300 transition-colors" data-astro-cid-x6qnsptu>Ver todos \u2192</a> </div> <div id="recent-products" class="space-y-2" data-astro-cid-x6qnsptu> <div class="h-16 rounded-xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> <div class="h-16 rounded-xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> <div class="h-16 rounded-xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> </div> </div> </div> </main> <script>
    // Auth check
    const token = sessionStorage.getItem('admin_token');
    if (!token) {
      window.location.href = '/admin';
    }

    // Toggle sidebar (mobile)
    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebar-overlay');
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    }

    // Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
      sessionStorage.removeItem('admin_token');
      window.location.href = '/admin';
    });

    // Load dashboard data
    async function loadDashboard() {
      try {
        const res = await fetch('/api/admin/products', {
          headers: { 'X-Admin-Password': token }
        });

        if (res.status === 401) {
          sessionStorage.removeItem('admin_token');
          window.location.href = '/admin';
          return;
        }

        const data = await res.json();
        const { products, stats } = data;

        // Update stats
        document.getElementById('stats-grid').innerHTML = \`
          <div class="stat-card bg-[#111111] rounded-2xl border border-white/5 p-5 transition-all duration-300">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-gray-500 uppercase tracking-wider">Total Productos</span>
              <div class="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
            </div>
            <span class="text-3xl font-bold">\${stats.totalProducts}</span>
          </div>
          <div class="stat-card bg-[#111111] rounded-2xl border border-white/5 p-5 transition-all duration-300">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-gray-500 uppercase tracking-wider">Total Im\xE1genes</span>
              <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
            </div>
            <span class="text-3xl font-bold">\${stats.totalImages}</span>
          </div>
          <div class="stat-card bg-[#111111] rounded-2xl border border-white/5 p-5 transition-all duration-300">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-gray-500 uppercase tracking-wider">Im\xE1genes Fan</span>
              <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
            </div>
            <span class="text-3xl font-bold">\${stats.fanImages}</span>
          </div>
          <div class="stat-card bg-[#111111] rounded-2xl border border-white/5 p-5 transition-all duration-300">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-gray-500 uppercase tracking-wider">Im\xE1genes Jugador</span>
              <div class="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
            </div>
            <span class="text-3xl font-bold">\${stats.playerImages}</span>
          </div>
        \`;

        // Update categories
        const catEl = document.getElementById('categories-list');
        const catEntries = Object.entries(stats.byCategory);
        if (catEntries.length === 0) {
          catEl.innerHTML = '<p class="text-gray-500 text-sm">No hay productos a\xFAn</p>';
        } else {
          const maxCount = Math.max(...catEntries.map(([,c]) => c));
          catEl.innerHTML = catEntries.map(([name, count]) => {
            const pct = Math.round((count / maxCount) * 100);
            return \`
              <div class="flex items-center gap-3">
                <span class="text-sm text-gray-300 w-28 shrink-0">\${name}</span>
                <div class="flex-1 h-8 bg-white/5 rounded-lg overflow-hidden relative">
                  <div class="h-full bg-gradient-to-r from-orange-500/30 to-orange-500/10 rounded-lg transition-all duration-500" style="width: \${pct}%"></div>
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400">\${count}</span>
                </div>
              </div>
            \`;
          }).join('');
        }

        // Update recent products
        const recentEl = document.getElementById('recent-products');
        const recent = products.slice(-5).reverse();
        if (recent.length === 0) {
          recentEl.innerHTML = '<p class="text-gray-500 text-sm">No hay productos a\xFAn. <a href="/admin/nuevo-producto" class="text-orange-400 hover:underline">Crea el primero</a></p>';
        } else {
          recentEl.innerHTML = recent.map(p => {
            const img = (p.imagenesFan && p.imagenesFan[0]) || (p.imagenesJugador && p.imagenesJugador[0]) || '';
            return \`
              <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all">
                \${img ? \`<img src="\${img}" alt="" class="w-12 h-12 rounded-lg object-cover bg-white/5" />\` : \`<div class="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-600"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>\`}
                <div class="flex-1 min-w-0">
                  <span class="text-sm font-medium text-gray-200 truncate block">\${p.nombre}</span>
                  <span class="text-xs text-gray-500">\${p.categoria} \xB7 \${p.temporada || ''}</span>
                </div>
                <span class="text-xs px-2 py-1 rounded-full \${p.precioFan ? 'bg-green-500/10 text-green-400' : 'bg-gray-500/10 text-gray-500'}">\${p.precioFan ? 'Q' + p.precioFan : 'Sin precio'}</span>
              </div>
            \`;
          }).join('');
        }

        // Update time
        document.getElementById('last-updated').textContent = 'Actualizado: ' + new Date().toLocaleTimeString('es-GT');

      } catch (err) {
        console.error('Error loading dashboard:', err);
      }
    }

    loadDashboard();
  <\/script> </body> </html>`], ['<html lang="es" data-astro-cid-x6qnsptu> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Dashboard | Admin CamiZonas</title><meta name="robots" content="noindex, nofollow">', "", "", `</head> <body class="bg-[#0a0a0a] text-white min-h-screen" data-astro-cid-x6qnsptu> <!-- SIDEBAR --> <aside id="sidebar" class="fixed inset-y-0 left-0 w-64 bg-[#111111] border-r border-white/5 z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300" data-astro-cid-x6qnsptu> <!-- Logo --> <div class="h-16 flex items-center gap-3 px-6 border-b border-white/5" data-astro-cid-x6qnsptu> <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20" data-astro-cid-x6qnsptu> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-x6qnsptu></path> </svg> </div> <div data-astro-cid-x6qnsptu> <span class="font-bold text-sm" data-astro-cid-x6qnsptu>CamiZonas</span> <span class="block text-[10px] text-gray-500 uppercase tracking-wider" data-astro-cid-x6qnsptu>Admin Panel</span> </div> </div> <!-- Navigation --> <nav class="p-4 space-y-1" data-astro-cid-x6qnsptu> <a href="/admin/dashboard" class="sidebar-link active flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all" data-astro-cid-x6qnsptu> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" data-astro-cid-x6qnsptu></path></svg>
Dashboard
</a> <a href="/admin/productos" class="sidebar-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-400 transition-all" data-astro-cid-x6qnsptu> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" data-astro-cid-x6qnsptu></path></svg>
Productos
</a> <a href="/admin/nuevo-producto" class="sidebar-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-400 transition-all" data-astro-cid-x6qnsptu> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" data-astro-cid-x6qnsptu></path></svg>
Nuevo Producto
</a> </nav> <!-- Bottom --> <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5" data-astro-cid-x6qnsptu> <a href="/" class="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all" data-astro-cid-x6qnsptu> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-x6qnsptu></path></svg>
Volver a la tienda
</a> <button id="logout-btn" class="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all mt-1" data-astro-cid-x6qnsptu> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-astro-cid-x6qnsptu></path></svg>
Cerrar Sesi\xF3n
</button> </div> </aside> <!-- OVERLAY MOBILE --> <div id="sidebar-overlay" class="fixed inset-0 bg-black/60 z-40 hidden lg:hidden" onclick="toggleSidebar()" data-astro-cid-x6qnsptu></div> <!-- MAIN CONTENT --> <main class="lg:ml-64 min-h-screen" data-astro-cid-x6qnsptu> <!-- Top bar --> <header class="sticky top-0 z-30 h-16 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5 flex items-center justify-between px-6" data-astro-cid-x6qnsptu> <div class="flex items-center gap-4" data-astro-cid-x6qnsptu> <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-lg hover:bg-white/5" onclick="toggleSidebar()" data-astro-cid-x6qnsptu> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-x6qnsptu></path></svg> </button> <h1 class="text-lg font-semibold" data-astro-cid-x6qnsptu>Dashboard</h1> </div> <div class="flex items-center gap-3" data-astro-cid-x6qnsptu> <span class="text-xs text-gray-500" id="last-updated" data-astro-cid-x6qnsptu></span> <div class="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-xs font-bold" data-astro-cid-x6qnsptu>
CZ
</div> </div> </header> <!-- Dashboard Content --> <div class="p-6 space-y-6" data-astro-cid-x6qnsptu> <!-- Stats Grid --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="stats-grid" data-astro-cid-x6qnsptu> <!-- Se llena con JavaScript --> <div class="h-28 rounded-2xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> <div class="h-28 rounded-2xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> <div class="h-28 rounded-2xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> <div class="h-28 rounded-2xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> </div> <!-- Categories breakdown --> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6" data-astro-cid-x6qnsptu> <!-- Categories --> <div class="bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-x6qnsptu> <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4" data-astro-cid-x6qnsptu>Por Categor\xEDa</h3> <div id="categories-list" class="space-y-3" data-astro-cid-x6qnsptu> <div class="h-10 rounded-xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> <div class="h-10 rounded-xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> </div> </div> <!-- Quick Actions --> <div class="bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-x6qnsptu> <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4" data-astro-cid-x6qnsptu>Acciones R\xE1pidas</h3> <div class="space-y-3" data-astro-cid-x6qnsptu> <a href="/admin/nuevo-producto" class="flex items-center gap-3 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-all group" data-astro-cid-x6qnsptu> <div class="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center" data-astro-cid-x6qnsptu> <svg class="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" data-astro-cid-x6qnsptu></path></svg> </div> <div data-astro-cid-x6qnsptu> <span class="text-sm font-medium text-orange-300 group-hover:text-orange-200" data-astro-cid-x6qnsptu>Agregar Producto</span> <span class="block text-xs text-gray-500" data-astro-cid-x6qnsptu>Subir nueva camisola</span> </div> <svg class="w-4 h-4 text-gray-600 ml-auto group-hover:text-orange-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-astro-cid-x6qnsptu></path></svg> </a> <a href="/admin/productos" class="flex items-center gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all group" data-astro-cid-x6qnsptu> <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center" data-astro-cid-x6qnsptu> <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" data-astro-cid-x6qnsptu></path></svg> </div> <div data-astro-cid-x6qnsptu> <span class="text-sm font-medium text-blue-300 group-hover:text-blue-200" data-astro-cid-x6qnsptu>Ver Cat\xE1logo</span> <span class="block text-xs text-gray-500" data-astro-cid-x6qnsptu>Gestionar productos existentes</span> </div> <svg class="w-4 h-4 text-gray-600 ml-auto group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-x6qnsptu><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-astro-cid-x6qnsptu></path></svg> </a> </div> </div> </div> <!-- Recent Products --> <div class="bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-x6qnsptu> <div class="flex items-center justify-between mb-4" data-astro-cid-x6qnsptu> <h3 class="text-sm font-semibold text-gray-400 uppercase tracking-wider" data-astro-cid-x6qnsptu>\xDAltimos Productos</h3> <a href="/admin/productos" class="text-xs text-orange-400 hover:text-orange-300 transition-colors" data-astro-cid-x6qnsptu>Ver todos \u2192</a> </div> <div id="recent-products" class="space-y-2" data-astro-cid-x6qnsptu> <div class="h-16 rounded-xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> <div class="h-16 rounded-xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> <div class="h-16 rounded-xl bg-white/5 animate-pulse" data-astro-cid-x6qnsptu></div> </div> </div> </div> </main> <script>
    // Auth check
    const token = sessionStorage.getItem('admin_token');
    if (!token) {
      window.location.href = '/admin';
    }

    // Toggle sidebar (mobile)
    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebar-overlay');
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    }

    // Logout
    document.getElementById('logout-btn').addEventListener('click', () => {
      sessionStorage.removeItem('admin_token');
      window.location.href = '/admin';
    });

    // Load dashboard data
    async function loadDashboard() {
      try {
        const res = await fetch('/api/admin/products', {
          headers: { 'X-Admin-Password': token }
        });

        if (res.status === 401) {
          sessionStorage.removeItem('admin_token');
          window.location.href = '/admin';
          return;
        }

        const data = await res.json();
        const { products, stats } = data;

        // Update stats
        document.getElementById('stats-grid').innerHTML = \\\`
          <div class="stat-card bg-[#111111] rounded-2xl border border-white/5 p-5 transition-all duration-300">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-gray-500 uppercase tracking-wider">Total Productos</span>
              <div class="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
            </div>
            <span class="text-3xl font-bold">\\\${stats.totalProducts}</span>
          </div>
          <div class="stat-card bg-[#111111] rounded-2xl border border-white/5 p-5 transition-all duration-300">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-gray-500 uppercase tracking-wider">Total Im\xE1genes</span>
              <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
            </div>
            <span class="text-3xl font-bold">\\\${stats.totalImages}</span>
          </div>
          <div class="stat-card bg-[#111111] rounded-2xl border border-white/5 p-5 transition-all duration-300">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-gray-500 uppercase tracking-wider">Im\xE1genes Fan</span>
              <div class="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
            </div>
            <span class="text-3xl font-bold">\\\${stats.fanImages}</span>
          </div>
          <div class="stat-card bg-[#111111] rounded-2xl border border-white/5 p-5 transition-all duration-300">
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs text-gray-500 uppercase tracking-wider">Im\xE1genes Jugador</span>
              <div class="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <svg class="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
            </div>
            <span class="text-3xl font-bold">\\\${stats.playerImages}</span>
          </div>
        \\\`;

        // Update categories
        const catEl = document.getElementById('categories-list');
        const catEntries = Object.entries(stats.byCategory);
        if (catEntries.length === 0) {
          catEl.innerHTML = '<p class="text-gray-500 text-sm">No hay productos a\xFAn</p>';
        } else {
          const maxCount = Math.max(...catEntries.map(([,c]) => c));
          catEl.innerHTML = catEntries.map(([name, count]) => {
            const pct = Math.round((count / maxCount) * 100);
            return \\\`
              <div class="flex items-center gap-3">
                <span class="text-sm text-gray-300 w-28 shrink-0">\\\${name}</span>
                <div class="flex-1 h-8 bg-white/5 rounded-lg overflow-hidden relative">
                  <div class="h-full bg-gradient-to-r from-orange-500/30 to-orange-500/10 rounded-lg transition-all duration-500" style="width: \\\${pct}%"></div>
                  <span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-400">\\\${count}</span>
                </div>
              </div>
            \\\`;
          }).join('');
        }

        // Update recent products
        const recentEl = document.getElementById('recent-products');
        const recent = products.slice(-5).reverse();
        if (recent.length === 0) {
          recentEl.innerHTML = '<p class="text-gray-500 text-sm">No hay productos a\xFAn. <a href="/admin/nuevo-producto" class="text-orange-400 hover:underline">Crea el primero</a></p>';
        } else {
          recentEl.innerHTML = recent.map(p => {
            const img = (p.imagenesFan && p.imagenesFan[0]) || (p.imagenesJugador && p.imagenesJugador[0]) || '';
            return \\\`
              <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all">
                \\\${img ? \\\`<img src="\\\${img}" alt="" class="w-12 h-12 rounded-lg object-cover bg-white/5" />\\\` : \\\`<div class="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-600"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>\\\`}
                <div class="flex-1 min-w-0">
                  <span class="text-sm font-medium text-gray-200 truncate block">\\\${p.nombre}</span>
                  <span class="text-xs text-gray-500">\\\${p.categoria} \xB7 \\\${p.temporada || ''}</span>
                </div>
                <span class="text-xs px-2 py-1 rounded-full \\\${p.precioFan ? 'bg-green-500/10 text-green-400' : 'bg-gray-500/10 text-gray-500'}">\\\${p.precioFan ? 'Q' + p.precioFan : 'Sin precio'}</span>
              </div>
            \\\`;
          }).join('');
        }

        // Update time
        document.getElementById('last-updated').textContent = 'Actualizado: ' + new Date().toLocaleTimeString('es-GT');

      } catch (err) {
        console.error('Error loading dashboard:', err);
      }
    }

    loadDashboard();
  <\/script> </body> </html>`])), renderScript($$result, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/admin/dashboard.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/admin/dashboard.astro?astro&type=script&index=1&lang.ts"), renderHead());
}, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/admin/dashboard.astro", void 0);

const $$file = "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/admin/dashboard.astro";
const $$url = "/admin/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
