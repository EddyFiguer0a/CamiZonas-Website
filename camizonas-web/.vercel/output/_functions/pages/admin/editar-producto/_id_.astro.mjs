/* empty css                                           */
import { e as createComponent, r as renderTemplate, o as defineScriptVars, l as renderHead, n as renderScript } from '../../../chunks/astro/server_lax-mPdS.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-2vzprbkn> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Editar Producto | Admin CamiZonas</title><meta name="robots" content="noindex, nofollow">', "", "", '</head> <body class="bg-[#0a0a0a] text-white min-h-screen" data-astro-cid-2vzprbkn> <!-- SIDEBAR --> <aside id="sidebar" class="fixed inset-y-0 left-0 w-64 bg-[#111111] border-r border-white/5 z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300" data-astro-cid-2vzprbkn> <div class="h-16 flex items-center gap-3 px-6 border-b border-white/5" data-astro-cid-2vzprbkn> <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20" data-astro-cid-2vzprbkn> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-2vzprbkn></path></svg> </div> <div data-astro-cid-2vzprbkn> <span class="font-bold text-sm" data-astro-cid-2vzprbkn>CamiZonas</span> <span class="block text-[10px] text-gray-500 uppercase tracking-wider" data-astro-cid-2vzprbkn>Admin Panel</span> </div> </div> <nav class="p-4 space-y-1" data-astro-cid-2vzprbkn> <a href="/admin/dashboard" class="sidebar-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-400 transition-all" data-astro-cid-2vzprbkn> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" data-astro-cid-2vzprbkn></path></svg>\nDashboard\n</a> <a href="/admin/productos" class="sidebar-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-400 transition-all" data-astro-cid-2vzprbkn> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" data-astro-cid-2vzprbkn></path></svg>\nProductos\n</a> <a href="/admin/nuevo-producto" class="sidebar-link active flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all" data-astro-cid-2vzprbkn> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" data-astro-cid-2vzprbkn></path></svg>\nNuevo Producto\n</a> </nav> <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5" data-astro-cid-2vzprbkn> <a href="/" class="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all" data-astro-cid-2vzprbkn> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-2vzprbkn></path></svg>\nVolver a la tienda\n</a> <button id="logout-btn" class="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all mt-1" data-astro-cid-2vzprbkn> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-astro-cid-2vzprbkn></path></svg>\nCerrar Sesi\xF3n\n</button> </div> </aside> <div id="sidebar-overlay" class="fixed inset-0 bg-black/60 z-40 hidden lg:hidden" onclick="toggleSidebar()" data-astro-cid-2vzprbkn></div> <!-- MAIN --> <main class="lg:ml-64 min-h-screen" data-astro-cid-2vzprbkn> <header class="sticky top-0 z-30 h-16 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5 flex items-center justify-between px-6" data-astro-cid-2vzprbkn> <div class="flex items-center gap-4" data-astro-cid-2vzprbkn> <button class="lg:hidden p-2 rounded-lg hover:bg-white/5" onclick="toggleSidebar()" data-astro-cid-2vzprbkn> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-2vzprbkn></path></svg> </button> <h1 class="text-lg font-semibold" data-astro-cid-2vzprbkn>Nuevo Producto</h1> </div> </header> <div id="loading" class="p-6 text-center" data-astro-cid-2vzprbkn> <div class="animate-spin w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full mx-auto" data-astro-cid-2vzprbkn></div> <p class="text-sm text-gray-500 mt-2" data-astro-cid-2vzprbkn>Cargando producto...</p> </div> <div id="content" class="hidden p-6 max-w-4xl mx-auto" data-astro-cid-2vzprbkn> <!-- Toast notification --> <div id="toast" class="fixed top-20 right-6 z-[200] hidden" data-astro-cid-2vzprbkn> <div class="px-5 py-3 rounded-xl shadow-2xl text-sm font-medium flex items-center gap-2 animate-slide-up" id="toast-content" data-astro-cid-2vzprbkn></div> </div> <form id="product-form" class="space-y-8" data-astro-cid-2vzprbkn> <!-- ========== SECTION 1: INFO B\xC1SICA ========== --> <section class="bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-2vzprbkn> <h2 class="text-base font-semibold mb-5 flex items-center gap-2" data-astro-cid-2vzprbkn> <svg class="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-2vzprbkn></path></svg>\nInformaci\xF3n B\xE1sica\n</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-5" data-astro-cid-2vzprbkn> <!-- Nombre --> <div class="md:col-span-2" data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Nombre del Producto *</label> <input type="text" name="nombre" id="input-nombre" placeholder="Ej: Real Madrid Local 25/26" required class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> <p class="text-xs text-gray-600 mt-1" data-astro-cid-2vzprbkn>ID generado: <span id="slug-preview" class="text-orange-400/60" data-astro-cid-2vzprbkn>---</span></p> </div> <!-- Categor\xEDa --> <div data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Categor\xEDa *</label> <select name="categoria" id="input-categoria" required class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> <option value="" class="bg-[#111]" data-astro-cid-2vzprbkn>Seleccionar...</option> <option value="Clubes" class="bg-[#111]" data-astro-cid-2vzprbkn>\u26BD Clubes</option> <option value="Selecciones" class="bg-[#111]" data-astro-cid-2vzprbkn>\u{1F30D} Selecciones</option> <option value="Retro" class="bg-[#111]" data-astro-cid-2vzprbkn>\u{1F4FC} Retro</option> <option value="Especiales" class="bg-[#111]" data-astro-cid-2vzprbkn>\u2728 Especiales</option> </select> </div> <!-- Regi\xF3n --> <div id="region-wrapper" data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Regi\xF3n</label> <select name="region" id="input-region" class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> <option value="" class="bg-[#111]" data-astro-cid-2vzprbkn>Sin regi\xF3n</option> <option value="Europa" class="bg-[#111]" data-astro-cid-2vzprbkn>Europa</option> <option value="America" class="bg-[#111]" data-astro-cid-2vzprbkn>Am\xE9rica</option> <option value="Asia" class="bg-[#111]" data-astro-cid-2vzprbkn>Asia</option> <option value="Africa" class="bg-[#111]" data-astro-cid-2vzprbkn>\xC1frica</option> </select> </div> <!-- Equipo --> <div data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Equipo / Selecci\xF3n *</label> <input type="text" name="equipo" id="input-equipo" placeholder="Ej: Real Madrid, Argentina..." required list="equipos-list" class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> <datalist id="equipos-list" data-astro-cid-2vzprbkn></datalist> </div> <!-- Temporada --> <div data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Temporada *</label> <select name="temporada" id="input-temporada" required class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> <option value="25-26" class="bg-[#111]" selected data-astro-cid-2vzprbkn>25-26</option> <option value="24-25" class="bg-[#111]" data-astro-cid-2vzprbkn>24-25</option> <option value="23-24" class="bg-[#111]" data-astro-cid-2vzprbkn>23-24</option> </select> </div> <!-- Tipo de camisola --> <div data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Tipo *</label> <select name="tipo" id="input-tipo" required class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> <option value="Local" class="bg-[#111]" data-astro-cid-2vzprbkn>Local</option> <option value="Visitante" class="bg-[#111]" data-astro-cid-2vzprbkn>Visitante</option> <option value="Tercera" class="bg-[#111]" data-astro-cid-2vzprbkn>Tercera</option> <option value="Portero" class="bg-[#111]" data-astro-cid-2vzprbkn>Portero</option> <option value="Entrenamiento" class="bg-[#111]" data-astro-cid-2vzprbkn>Entrenamiento</option> <option value="Especial" class="bg-[#111]" data-astro-cid-2vzprbkn>Especial</option> <option value="Retro" class="bg-[#111]" data-astro-cid-2vzprbkn>Retro</option> </select> </div> <!-- Precio Fan --> <div data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Precio Fan (Q)</label> <input type="number" name="precioFan" id="input-precio-fan" placeholder="375" value="375" min="0" class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> </div> <!-- Precio Jugador --> <div data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Precio Jugador (Q)</label> <input type="number" name="precioJugador" id="input-precio-jugador" placeholder="400" value="400" min="0" class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> </div> </div> </section> <!-- ========== SECTION 2: IM\xC1GENES FAN ========== --> <section class="bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-2vzprbkn> <h2 class="text-base font-semibold mb-1 flex items-center gap-2" data-astro-cid-2vzprbkn> <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-2vzprbkn></path></svg>\nIm\xE1genes - Versi\xF3n Fan\n</h2> <p class="text-xs text-gray-500 mb-5" data-astro-cid-2vzprbkn>M\xE1ximo 6 im\xE1genes. Formatos: JPG, PNG, WebP. M\xE1x 5MB cada una.</p> <!-- Drop Zone Fan --> <div id="dropzone-fan" class="border-2 border-dashed border-white/10 rounded-xl p-8 text-center cursor-pointer hover:border-white/20 transition-all" data-astro-cid-2vzprbkn> <svg class="w-10 h-10 text-gray-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-astro-cid-2vzprbkn> <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" data-astro-cid-2vzprbkn></path> </svg> <p class="text-sm text-gray-400 mb-1" data-astro-cid-2vzprbkn>Arrastra im\xE1genes aqu\xED o <span class="text-orange-400 font-medium" data-astro-cid-2vzprbkn>haz click para seleccionar</span></p> <p class="text-xs text-gray-600" data-astro-cid-2vzprbkn>La primera imagen ser\xE1 la principal</p> <input type="file" id="file-input-fan" multiple accept="image/jpeg,image/png,image/webp,image/gif" class="hidden" data-astro-cid-2vzprbkn> </div> <!-- Preview Fan --> <div id="preview-fan" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4" data-astro-cid-2vzprbkn></div> <!-- Upload status Fan --> <div id="upload-status-fan" class="hidden mt-3 p-3 rounded-xl bg-orange-500/5 border border-orange-500/10" data-astro-cid-2vzprbkn> <div class="flex items-center gap-2 text-sm text-orange-300" data-astro-cid-2vzprbkn> <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" data-astro-cid-2vzprbkn><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-astro-cid-2vzprbkn></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-astro-cid-2vzprbkn></path></svg> <span id="upload-text-fan" data-astro-cid-2vzprbkn>Subiendo...</span> </div> </div> </section> <!-- ========== SECTION 3: IM\xC1GENES JUGADOR ========== --> <section class="bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-2vzprbkn> <h2 class="text-base font-semibold mb-1 flex items-center gap-2" data-astro-cid-2vzprbkn> <svg class="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-2vzprbkn></path></svg>\nIm\xE1genes - Versi\xF3n Jugador\n</h2> <p class="text-xs text-gray-500 mb-5" data-astro-cid-2vzprbkn>Opcional. Mismas restricciones que la versi\xF3n Fan.</p> <!-- Drop Zone Jugador --> <div id="dropzone-jugador" class="border-2 border-dashed border-white/10 rounded-xl p-8 text-center cursor-pointer hover:border-white/20 transition-all" data-astro-cid-2vzprbkn> <svg class="w-10 h-10 text-gray-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-astro-cid-2vzprbkn> <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" data-astro-cid-2vzprbkn></path> </svg> <p class="text-sm text-gray-400 mb-1" data-astro-cid-2vzprbkn>Arrastra im\xE1genes aqu\xED o <span class="text-purple-400 font-medium" data-astro-cid-2vzprbkn>haz click para seleccionar</span></p> <p class="text-xs text-gray-600" data-astro-cid-2vzprbkn>Deja vac\xEDo si no tiene versi\xF3n jugador</p> <input type="file" id="file-input-jugador" multiple accept="image/jpeg,image/png,image/webp,image/gif" class="hidden" data-astro-cid-2vzprbkn> </div> <!-- Preview Jugador --> <div id="preview-jugador" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4" data-astro-cid-2vzprbkn></div> <!-- Upload status Jugador --> <div id="upload-status-jugador" class="hidden mt-3 p-3 rounded-xl bg-purple-500/5 border border-purple-500/10" data-astro-cid-2vzprbkn> <div class="flex items-center gap-2 text-sm text-purple-300" data-astro-cid-2vzprbkn> <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" data-astro-cid-2vzprbkn><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-astro-cid-2vzprbkn></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-astro-cid-2vzprbkn></path></svg> <span id="upload-text-jugador" data-astro-cid-2vzprbkn>Subiendo...</span> </div> </div> </section> <!-- ========== SECTION 4: PREVIEW ESTRUCTURA ========== --> <section id="structure-preview" class="hidden bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-2vzprbkn> <h2 class="text-base font-semibold mb-4 flex items-center gap-2" data-astro-cid-2vzprbkn> <svg class="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" data-astro-cid-2vzprbkn></path></svg>\nEstructura en Cloudinary\n</h2> <div id="structure-tree" class="font-mono text-xs text-gray-400 bg-black/30 rounded-xl p-4 overflow-x-auto" data-astro-cid-2vzprbkn></div> </section> <!-- ========== SUBMIT ========== --> <div class="flex items-center gap-4" data-astro-cid-2vzprbkn> <button type="submit" id="submit-btn" class="flex-1 sm:flex-none px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" data-astro-cid-2vzprbkn> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-astro-cid-2vzprbkn></path></svg>\nGuardar Cambios\n</button> <a href="/admin/productos" class="px-6 py-3.5 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors text-gray-400 hover:text-white text-center" data-astro-cid-2vzprbkn>\nCancelar\n</a> </div> </form> </div> </main> <script>(function(){', `
    // ============================
    // AUTH CHECK
    // ============================
    const token = sessionStorage.getItem('admin_token');
    if (!token) window.location.href = '/admin';

    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('-translate-x-full');
      document.getElementById('sidebar-overlay').classList.toggle('hidden');
    }

    document.getElementById('logout-btn').addEventListener('click', () => {
      sessionStorage.removeItem('admin_token');
      window.location.href = '/admin';
    });

    // ============================
    // STATE (GLOBAL)
    // ============================
    let uploadedFan = [];
    let uploadedJugador = [];
    const MAX_IMAGES = 6;

    // ============================
    // CARGAR PRODUCTO EXISTENTE
    // ============================
    async function loadProduct() {
      try {
        const res = await fetch(\`/api/admin/get-product?id=\${productId}\`, {
          headers: { 'X-Admin-Password': token }
        });

        if (res.status === 401) {
          sessionStorage.removeItem('admin_token');
          window.location.href = '/admin';
          return;
        }

        if (!res.ok) {
          showToast('Producto no encontrado', 'error');
          setTimeout(() => window.location.href = '/admin/productos', 2000);
          return;
        }

        const { product } = await res.json();
        
        // Prellenar formulario
        document.getElementById('input-nombre').value = product.nombre;
        document.getElementById('input-categoria').value = product.categoria;
        if (product.region) document.getElementById('input-region').value = product.region;
        document.getElementById('input-equipo').value = product.equipo;
        document.getElementById('input-temporada').value = product.temporada;
        document.getElementById('input-tipo').value = product.tipo;
        if (product.precioFan) document.getElementById('input-precio-fan').value = product.precioFan;
        if (product.precioJugador) document.getElementById('input-precio-jugador').value = product.precioJugador;

        // Cargar im\xE1genes existentes
        uploadedFan = product.imagenesFan?.map((url, i) => ({
          url,
          publicId: product._cloudinaryFan?.[i]?.publicId || '',
          fileName: url.split('/').pop() || \`imagen-\${i+1}.jpg\`,
          existing: true
        })) || [];

        uploadedJugador = product.imagenesJugador?.map((url, i) => ({
          url,
          publicId: product._cloudinaryJugador?.[i]?.publicId || '',
          fileName: url.split('/').pop() || \`imagen-\${i+1}.jpg\`,
          existing: true
        })) || [];

        renderPreview('preview-fan', uploadedFan, 'orange');
        renderPreview('preview-jugador', uploadedJugador, 'purple');
        updateStructurePreview();

        document.getElementById('loading').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');

      } catch (error) {
        console.error('Error loading product:', error);
        showToast('Error al cargar producto', 'error');
      }
    }

    // ============================
    // TOAST, SLUG, REGION (IGUAL QUE NUEVO-PRODUCTO)
    // ============================
    function showToast(message, type = 'success') {
      const toast = document.getElementById('toast');
      const content = document.getElementById('toast-content');
      
      const colors = {
        success: 'bg-green-500/90 text-white',
        error: 'bg-red-500/90 text-white',
        info: 'bg-blue-500/90 text-white',
      };

      const icons = {
        success: '\u2705',
        error: '\u274C',
        info: '\u2139\uFE0F',
      };

      content.className = \`px-5 py-3 rounded-xl shadow-2xl text-sm font-medium flex items-center gap-2 animate-slide-up \${colors[type]}\`;
      content.innerHTML = \`<span>\${icons[type]}</span> \${message}\`;
      
      toast.classList.remove('hidden');
      
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 4000);
    }

    function generateSlug(text) {
      return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\\u0300-\\u036f]/g, '')
        .replace(/[^a-z0-9\\s-]/g, '')
        .replace(/\\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
    }

    document.getElementById('input-nombre').addEventListener('input', (e) => {
      document.getElementById('slug-preview').textContent = generateSlug(e.target.value) || '---';
      updateStructurePreview();
    });

    document.getElementById('input-categoria').addEventListener('change', (e) => {
      const wrapper = document.getElementById('region-wrapper');
      const hasRegion = ['Clubes', 'Selecciones'].includes(e.target.value);
      wrapper.style.display = hasRegion ? 'block' : 'none';
      if (!hasRegion) document.getElementById('input-region').value = '';
      updateStructurePreview();
    });

    ['input-categoria', 'input-region', 'input-equipo', 'input-temporada', 'input-tipo'].forEach(id => {
      document.getElementById(id).addEventListener('change', updateStructurePreview);
      document.getElementById(id).addEventListener('input', updateStructurePreview);
    });

    function updateStructurePreview() {
      const cat = document.getElementById('input-categoria').value;
      const region = document.getElementById('input-region').value;
      const equipo = document.getElementById('input-equipo').value;
      const temp = document.getElementById('input-temporada').value;
      const tipo = document.getElementById('input-tipo').value;

      const section = document.getElementById('structure-preview');
      const tree = document.getElementById('structure-tree');

      if (!cat || !equipo) {
        section.classList.add('hidden');
        return;
      }

      section.classList.remove('hidden');

      let path = 'CAMISOLAS/';
      path += cat.toUpperCase() + '/';
      if (region) path += region.toUpperCase() + '/';
      path += equipo.toUpperCase() + '/';
      path += temp + '/';
      path += tipo.toUpperCase() + '/';

      let html = \`<span class="text-green-400">\u{1F4C2} \${path}</span>\\n\`;
      
      html += \`   \u251C\u2500\u2500 <span class="text-blue-400">Fan/</span>\\n\`;
      uploadedFan.forEach((img, i) => {
        html += \`   \u2502   \${i === uploadedFan.length - 1 ? '\u2514' : '\u251C'}\u2500\u2500 <span class="text-gray-300">\${img.fileName || 'imagen-' + (i+1) + '.jpg'}</span> \u2705\\n\`;
      });
      if (uploadedFan.length === 0) {
        html += \`   \u2502   \u2514\u2500\u2500 <span class="text-gray-600">(arrastra im\xE1genes arriba)</span>\\n\`;
      }

      html += \`   \u2514\u2500\u2500 <span class="text-purple-400">Jugador/</span>\\n\`;
      uploadedJugador.forEach((img, i) => {
        html += \`       \${i === uploadedJugador.length - 1 ? '\u2514' : '\u251C'}\u2500\u2500 <span class="text-gray-300">\${img.fileName || 'imagen-' + (i+1) + '.jpg'}</span> \u2705\\n\`;
      });
      if (uploadedJugador.length === 0) {
        html += \`       \u2514\u2500\u2500 <span class="text-gray-600">(opcional)</span>\\n\`;
      }

      tree.innerHTML = \`<pre class="whitespace-pre">\${html}</pre>\`;
    }

    // ============================
    // IMAGE UPLOAD (IGUAL QUE NUEVO-PRODUCTO)
    // ============================
    function setupDropzone(dropzoneId, fileInputId, previewId, statusId, statusTextId, uploadArray, accentColor) {
      const dropzone = document.getElementById(dropzoneId);
      const fileInput = document.getElementById(fileInputId);

      dropzone.addEventListener('click', () => fileInput.click());

      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dropzone-active');
      });

      dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dropzone-active');
      });

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dropzone-active');
        handleFiles(e.dataTransfer.files);
      });

      fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
        fileInput.value = ''; // Reset so same file can be selected again
      });

      async function handleFiles(files) {
        if (!files || files.length === 0) return;

        const remaining = MAX_IMAGES - uploadArray.length;
        if (remaining <= 0) {
          showToast(\`M\xE1ximo \${MAX_IMAGES} im\xE1genes por versi\xF3n\`, 'error');
          return;
        }

        const filesToUpload = Array.from(files).slice(0, remaining);
        
        // Validate each file
        for (const file of filesToUpload) {
          const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
          if (!validTypes.includes(file.type)) {
            showToast(\`\${file.name}: tipo no v\xE1lido\`, 'error');
            return;
          }
          if (file.size > 5 * 1024 * 1024) {
            showToast(\`\${file.name}: muy grande (m\xE1x 5MB)\`, 'error');
            return;
          }
        }

        const statusEl = document.getElementById(statusId);
        const statusText = document.getElementById(statusTextId);
        statusEl.classList.remove('hidden');

        // Build folder path
        const cat = document.getElementById('input-categoria').value;
        const region = document.getElementById('input-region').value;
        const equipo = document.getElementById('input-equipo').value;
        const temp = document.getElementById('input-temporada').value;
        const tipo = document.getElementById('input-tipo').value;

        if (!cat || !equipo) {
          showToast('Completa categor\xEDa y equipo primero', 'error');
          statusEl.classList.add('hidden');
          return;
        }

        const version = dropzoneId.includes('fan') ? 'Fan' : 'Jugador';
        let folder = 'CAMISOLAS/' + cat.toUpperCase();
        if (region) folder += '/' + region.toUpperCase();
        folder += '/' + equipo.toUpperCase();
        folder += '/' + temp;
        folder += '/' + tipo.toUpperCase();
        folder += '/' + version;

        for (let i = 0; i < filesToUpload.length; i++) {
          const file = filesToUpload[i];
          statusText.textContent = \`Subiendo \${i + 1} de \${filesToUpload.length}: \${file.name}\`;

          try {
            const imageIndex = uploadArray.length + 1;
            const imageType = \`imagen-\${imageIndex}\`;

            const formData = new FormData();
            formData.append('file', file);
            formData.append('folder', folder);
            formData.append('imageType', imageType);

            const res = await fetch('/api/admin/upload', {
              method: 'POST',
              headers: { 'X-Admin-Password': token },
              body: formData,
            });

            if (!res.ok) {
              const err = await res.json();
              throw new Error(err.error || 'Error al subir');
            }

            const data = await res.json();
            uploadArray.push({
              url: data.url,
              publicId: data.publicId,
              fileName: file.name,
              existing: false
            });

            // Render preview
            renderPreview(previewId, uploadArray, accentColor);
            updateStructurePreview();
            
          } catch (err) {
            showToast(\`Error: \${err.message}\`, 'error');
          }
        }

        statusEl.classList.add('hidden');
        showToast(\`\${filesToUpload.length} imagen(es) subida(s)\`, 'success');
      }
    }

    function renderPreview(previewId, images, accentColor) {
      const container = document.getElementById(previewId);
      
      container.innerHTML = images.map((img, index) => \`
        <div class="relative group aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/5 animate-slide-up">
          <img src="\${img.url}" alt="" class="w-full h-full object-cover" />
          \${index === 0 ? \`<span class="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-\${accentColor}-500/80 text-[10px] font-bold text-white backdrop-blur-sm">PRINCIPAL</span>\` : ''}
          \${img.existing ? \`<span class="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-green-500/80 text-[9px] font-bold text-white backdrop-blur-sm">GUARDADA</span>\` : ''}
          <button 
            type="button"
            onclick="removeImage('\${previewId}', \${index})"
            class="absolute top-1.5 right-1.5 w-7 h-7 rounded-lg bg-red-500/80 hover:bg-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
          >
            <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2">
            <p class="text-[10px] text-gray-300 truncate">\${img.fileName}</p>
          </div>
        </div>
      \`).join('');
    }

    async function removeImage(previewId, index) {
      const isFan = previewId === 'preview-fan';
      const arr = isFan ? uploadedFan : uploadedJugador;
      const img = arr[index];

      if (img && img.publicId && !img.existing) {
        try {
          await fetch('/api/admin/upload', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'X-Admin-Password': token,
            },
            body: JSON.stringify({ publicId: img.publicId }),
          });
        } catch (err) {
          console.error('Error removing from cloud:', err);
        }
      }

      arr.splice(index, 1);
      const color = isFan ? 'orange' : 'purple';
      renderPreview(previewId, arr, color);
      updateStructurePreview();
      showToast('Imagen eliminada', 'info');
    }

    window.removeImage = removeImage;

    setupDropzone('dropzone-fan', 'file-input-fan', 'preview-fan', 'upload-status-fan', 'upload-text-fan', uploadedFan, 'orange');
    setupDropzone('dropzone-jugador', 'file-input-jugador', 'preview-jugador', 'upload-status-jugador', 'upload-text-jugador', uploadedJugador, 'purple');

    // ============================
    // LOAD EXISTING TEAMS (autocomplete)
    // ============================
    async function loadTeams() {
      try {
        const res = await fetch('/api/admin/products', {
          headers: { 'X-Admin-Password': token }
        });
        if (!res.ok) return;
        const data = await res.json();
        const teams = new Set();
        data.products.forEach(p => {
          if (p.equipo) teams.add(p.equipo);
        });
        const datalist = document.getElementById('equipos-list');
        datalist.innerHTML = Array.from(teams).sort().map(t => \`<option value="\${t}">\`).join('');
      } catch (err) {
        console.error('Error loading teams:', err);
      }
    }
    loadTeams();

    // ============================
    // FORM SUBMIT (ACTUALIZAR)
    // ============================
    document.getElementById('product-form').addEventListener('submit', async (e) => {
      e.preventDefault();

      const nombre = document.getElementById('input-nombre').value.trim();
      const categoria = document.getElementById('input-categoria').value;
      const region = document.getElementById('input-region').value;
      const equipo = document.getElementById('input-equipo').value.trim();
      const temporada = document.getElementById('input-temporada').value;
      const tipo = document.getElementById('input-tipo').value;
      const precioFan = parseInt(document.getElementById('input-precio-fan').value) || null;
      const precioJugador = parseInt(document.getElementById('input-precio-jugador').value) || null;

      if (!nombre || !categoria || !equipo) {
        showToast('Completa los campos obligatorios', 'error');
        return;
      }

      if (uploadedFan.length === 0 && uploadedJugador.length === 0) {
        showToast('Sube al menos una imagen', 'error');
        return;
      }

      const submitBtn = document.getElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = \`
        <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        Actualizando...
      \`;

      try {
        const updates = {
          nombre,
          categoria,
          region: region || undefined,
          equipo,
          temporada,
          tipo,
          precioFan,
          precioJugador,
          imagenesFan: uploadedFan.map(i => i.url),
          imagenesJugador: uploadedJugador.map(i => i.url),
          _cloudinaryFan: uploadedFan.map(i => ({ url: i.url, publicId: i.publicId, tipo: '' })),
          _cloudinaryJugador: uploadedJugador.map(i => ({ url: i.url, publicId: i.publicId, tipo: '' })),
        };

        const res = await fetch('/api/admin/update-product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Admin-Password': token,
          },
          body: JSON.stringify({ productId, updates }),
        });

        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || 'Error al actualizar');
        }

        showToast('\xA1Producto actualizado correctamente!', 'success');
      
        setTimeout(() => {
          window.location.href = '/admin/productos';
        }, 1500);

      } catch (error) {
        console.error('Error updating product:', error);
        showToast(\`Error: \${error.message}\`, 'error');
      }

      submitBtn.disabled = false;
      submitBtn.innerHTML = \`
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
        Guardar Cambios
      \`;
    });

    // Cargar producto al inicio
    loadProduct();
  })();<\/script></body></html>`], ['<html lang="es" data-astro-cid-2vzprbkn> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Editar Producto | Admin CamiZonas</title><meta name="robots" content="noindex, nofollow">', "", "", '</head> <body class="bg-[#0a0a0a] text-white min-h-screen" data-astro-cid-2vzprbkn> <!-- SIDEBAR --> <aside id="sidebar" class="fixed inset-y-0 left-0 w-64 bg-[#111111] border-r border-white/5 z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300" data-astro-cid-2vzprbkn> <div class="h-16 flex items-center gap-3 px-6 border-b border-white/5" data-astro-cid-2vzprbkn> <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20" data-astro-cid-2vzprbkn> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-2vzprbkn></path></svg> </div> <div data-astro-cid-2vzprbkn> <span class="font-bold text-sm" data-astro-cid-2vzprbkn>CamiZonas</span> <span class="block text-[10px] text-gray-500 uppercase tracking-wider" data-astro-cid-2vzprbkn>Admin Panel</span> </div> </div> <nav class="p-4 space-y-1" data-astro-cid-2vzprbkn> <a href="/admin/dashboard" class="sidebar-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-400 transition-all" data-astro-cid-2vzprbkn> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" data-astro-cid-2vzprbkn></path></svg>\nDashboard\n</a> <a href="/admin/productos" class="sidebar-link flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-400 transition-all" data-astro-cid-2vzprbkn> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" data-astro-cid-2vzprbkn></path></svg>\nProductos\n</a> <a href="/admin/nuevo-producto" class="sidebar-link active flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all" data-astro-cid-2vzprbkn> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" data-astro-cid-2vzprbkn></path></svg>\nNuevo Producto\n</a> </nav> <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-white/5" data-astro-cid-2vzprbkn> <a href="/" class="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-all" data-astro-cid-2vzprbkn> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-2vzprbkn></path></svg>\nVolver a la tienda\n</a> <button id="logout-btn" class="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all mt-1" data-astro-cid-2vzprbkn> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" data-astro-cid-2vzprbkn></path></svg>\nCerrar Sesi\xF3n\n</button> </div> </aside> <div id="sidebar-overlay" class="fixed inset-0 bg-black/60 z-40 hidden lg:hidden" onclick="toggleSidebar()" data-astro-cid-2vzprbkn></div> <!-- MAIN --> <main class="lg:ml-64 min-h-screen" data-astro-cid-2vzprbkn> <header class="sticky top-0 z-30 h-16 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5 flex items-center justify-between px-6" data-astro-cid-2vzprbkn> <div class="flex items-center gap-4" data-astro-cid-2vzprbkn> <button class="lg:hidden p-2 rounded-lg hover:bg-white/5" onclick="toggleSidebar()" data-astro-cid-2vzprbkn> <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-2vzprbkn></path></svg> </button> <h1 class="text-lg font-semibold" data-astro-cid-2vzprbkn>Nuevo Producto</h1> </div> </header> <div id="loading" class="p-6 text-center" data-astro-cid-2vzprbkn> <div class="animate-spin w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full mx-auto" data-astro-cid-2vzprbkn></div> <p class="text-sm text-gray-500 mt-2" data-astro-cid-2vzprbkn>Cargando producto...</p> </div> <div id="content" class="hidden p-6 max-w-4xl mx-auto" data-astro-cid-2vzprbkn> <!-- Toast notification --> <div id="toast" class="fixed top-20 right-6 z-[200] hidden" data-astro-cid-2vzprbkn> <div class="px-5 py-3 rounded-xl shadow-2xl text-sm font-medium flex items-center gap-2 animate-slide-up" id="toast-content" data-astro-cid-2vzprbkn></div> </div> <form id="product-form" class="space-y-8" data-astro-cid-2vzprbkn> <!-- ========== SECTION 1: INFO B\xC1SICA ========== --> <section class="bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-2vzprbkn> <h2 class="text-base font-semibold mb-5 flex items-center gap-2" data-astro-cid-2vzprbkn> <svg class="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-2vzprbkn></path></svg>\nInformaci\xF3n B\xE1sica\n</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-5" data-astro-cid-2vzprbkn> <!-- Nombre --> <div class="md:col-span-2" data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Nombre del Producto *</label> <input type="text" name="nombre" id="input-nombre" placeholder="Ej: Real Madrid Local 25/26" required class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> <p class="text-xs text-gray-600 mt-1" data-astro-cid-2vzprbkn>ID generado: <span id="slug-preview" class="text-orange-400/60" data-astro-cid-2vzprbkn>---</span></p> </div> <!-- Categor\xEDa --> <div data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Categor\xEDa *</label> <select name="categoria" id="input-categoria" required class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> <option value="" class="bg-[#111]" data-astro-cid-2vzprbkn>Seleccionar...</option> <option value="Clubes" class="bg-[#111]" data-astro-cid-2vzprbkn>\u26BD Clubes</option> <option value="Selecciones" class="bg-[#111]" data-astro-cid-2vzprbkn>\u{1F30D} Selecciones</option> <option value="Retro" class="bg-[#111]" data-astro-cid-2vzprbkn>\u{1F4FC} Retro</option> <option value="Especiales" class="bg-[#111]" data-astro-cid-2vzprbkn>\u2728 Especiales</option> </select> </div> <!-- Regi\xF3n --> <div id="region-wrapper" data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Regi\xF3n</label> <select name="region" id="input-region" class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> <option value="" class="bg-[#111]" data-astro-cid-2vzprbkn>Sin regi\xF3n</option> <option value="Europa" class="bg-[#111]" data-astro-cid-2vzprbkn>Europa</option> <option value="America" class="bg-[#111]" data-astro-cid-2vzprbkn>Am\xE9rica</option> <option value="Asia" class="bg-[#111]" data-astro-cid-2vzprbkn>Asia</option> <option value="Africa" class="bg-[#111]" data-astro-cid-2vzprbkn>\xC1frica</option> </select> </div> <!-- Equipo --> <div data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Equipo / Selecci\xF3n *</label> <input type="text" name="equipo" id="input-equipo" placeholder="Ej: Real Madrid, Argentina..." required list="equipos-list" class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> <datalist id="equipos-list" data-astro-cid-2vzprbkn></datalist> </div> <!-- Temporada --> <div data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Temporada *</label> <select name="temporada" id="input-temporada" required class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> <option value="25-26" class="bg-[#111]" selected data-astro-cid-2vzprbkn>25-26</option> <option value="24-25" class="bg-[#111]" data-astro-cid-2vzprbkn>24-25</option> <option value="23-24" class="bg-[#111]" data-astro-cid-2vzprbkn>23-24</option> </select> </div> <!-- Tipo de camisola --> <div data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Tipo *</label> <select name="tipo" id="input-tipo" required class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> <option value="Local" class="bg-[#111]" data-astro-cid-2vzprbkn>Local</option> <option value="Visitante" class="bg-[#111]" data-astro-cid-2vzprbkn>Visitante</option> <option value="Tercera" class="bg-[#111]" data-astro-cid-2vzprbkn>Tercera</option> <option value="Portero" class="bg-[#111]" data-astro-cid-2vzprbkn>Portero</option> <option value="Entrenamiento" class="bg-[#111]" data-astro-cid-2vzprbkn>Entrenamiento</option> <option value="Especial" class="bg-[#111]" data-astro-cid-2vzprbkn>Especial</option> <option value="Retro" class="bg-[#111]" data-astro-cid-2vzprbkn>Retro</option> </select> </div> <!-- Precio Fan --> <div data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Precio Fan (Q)</label> <input type="number" name="precioFan" id="input-precio-fan" placeholder="375" value="375" min="0" class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> </div> <!-- Precio Jugador --> <div data-astro-cid-2vzprbkn> <label class="block text-sm font-medium text-gray-400 mb-1.5" data-astro-cid-2vzprbkn>Precio Jugador (Q)</label> <input type="number" name="precioJugador" id="input-precio-jugador" placeholder="400" value="400" min="0" class="glow-input w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-orange-500 transition-all text-sm" data-astro-cid-2vzprbkn> </div> </div> </section> <!-- ========== SECTION 2: IM\xC1GENES FAN ========== --> <section class="bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-2vzprbkn> <h2 class="text-base font-semibold mb-1 flex items-center gap-2" data-astro-cid-2vzprbkn> <svg class="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-2vzprbkn></path></svg>\nIm\xE1genes - Versi\xF3n Fan\n</h2> <p class="text-xs text-gray-500 mb-5" data-astro-cid-2vzprbkn>M\xE1ximo 6 im\xE1genes. Formatos: JPG, PNG, WebP. M\xE1x 5MB cada una.</p> <!-- Drop Zone Fan --> <div id="dropzone-fan" class="border-2 border-dashed border-white/10 rounded-xl p-8 text-center cursor-pointer hover:border-white/20 transition-all" data-astro-cid-2vzprbkn> <svg class="w-10 h-10 text-gray-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-astro-cid-2vzprbkn> <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" data-astro-cid-2vzprbkn></path> </svg> <p class="text-sm text-gray-400 mb-1" data-astro-cid-2vzprbkn>Arrastra im\xE1genes aqu\xED o <span class="text-orange-400 font-medium" data-astro-cid-2vzprbkn>haz click para seleccionar</span></p> <p class="text-xs text-gray-600" data-astro-cid-2vzprbkn>La primera imagen ser\xE1 la principal</p> <input type="file" id="file-input-fan" multiple accept="image/jpeg,image/png,image/webp,image/gif" class="hidden" data-astro-cid-2vzprbkn> </div> <!-- Preview Fan --> <div id="preview-fan" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4" data-astro-cid-2vzprbkn></div> <!-- Upload status Fan --> <div id="upload-status-fan" class="hidden mt-3 p-3 rounded-xl bg-orange-500/5 border border-orange-500/10" data-astro-cid-2vzprbkn> <div class="flex items-center gap-2 text-sm text-orange-300" data-astro-cid-2vzprbkn> <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" data-astro-cid-2vzprbkn><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-astro-cid-2vzprbkn></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-astro-cid-2vzprbkn></path></svg> <span id="upload-text-fan" data-astro-cid-2vzprbkn>Subiendo...</span> </div> </div> </section> <!-- ========== SECTION 3: IM\xC1GENES JUGADOR ========== --> <section class="bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-2vzprbkn> <h2 class="text-base font-semibold mb-1 flex items-center gap-2" data-astro-cid-2vzprbkn> <svg class="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-2vzprbkn></path></svg>\nIm\xE1genes - Versi\xF3n Jugador\n</h2> <p class="text-xs text-gray-500 mb-5" data-astro-cid-2vzprbkn>Opcional. Mismas restricciones que la versi\xF3n Fan.</p> <!-- Drop Zone Jugador --> <div id="dropzone-jugador" class="border-2 border-dashed border-white/10 rounded-xl p-8 text-center cursor-pointer hover:border-white/20 transition-all" data-astro-cid-2vzprbkn> <svg class="w-10 h-10 text-gray-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" data-astro-cid-2vzprbkn> <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" data-astro-cid-2vzprbkn></path> </svg> <p class="text-sm text-gray-400 mb-1" data-astro-cid-2vzprbkn>Arrastra im\xE1genes aqu\xED o <span class="text-purple-400 font-medium" data-astro-cid-2vzprbkn>haz click para seleccionar</span></p> <p class="text-xs text-gray-600" data-astro-cid-2vzprbkn>Deja vac\xEDo si no tiene versi\xF3n jugador</p> <input type="file" id="file-input-jugador" multiple accept="image/jpeg,image/png,image/webp,image/gif" class="hidden" data-astro-cid-2vzprbkn> </div> <!-- Preview Jugador --> <div id="preview-jugador" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4" data-astro-cid-2vzprbkn></div> <!-- Upload status Jugador --> <div id="upload-status-jugador" class="hidden mt-3 p-3 rounded-xl bg-purple-500/5 border border-purple-500/10" data-astro-cid-2vzprbkn> <div class="flex items-center gap-2 text-sm text-purple-300" data-astro-cid-2vzprbkn> <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" data-astro-cid-2vzprbkn><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-astro-cid-2vzprbkn></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-astro-cid-2vzprbkn></path></svg> <span id="upload-text-jugador" data-astro-cid-2vzprbkn>Subiendo...</span> </div> </div> </section> <!-- ========== SECTION 4: PREVIEW ESTRUCTURA ========== --> <section id="structure-preview" class="hidden bg-[#111111] rounded-2xl border border-white/5 p-6" data-astro-cid-2vzprbkn> <h2 class="text-base font-semibold mb-4 flex items-center gap-2" data-astro-cid-2vzprbkn> <svg class="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" data-astro-cid-2vzprbkn></path></svg>\nEstructura en Cloudinary\n</h2> <div id="structure-tree" class="font-mono text-xs text-gray-400 bg-black/30 rounded-xl p-4 overflow-x-auto" data-astro-cid-2vzprbkn></div> </section> <!-- ========== SUBMIT ========== --> <div class="flex items-center gap-4" data-astro-cid-2vzprbkn> <button type="submit" id="submit-btn" class="flex-1 sm:flex-none px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100" data-astro-cid-2vzprbkn> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-2vzprbkn><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" data-astro-cid-2vzprbkn></path></svg>\nGuardar Cambios\n</button> <a href="/admin/productos" class="px-6 py-3.5 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors text-gray-400 hover:text-white text-center" data-astro-cid-2vzprbkn>\nCancelar\n</a> </div> </form> </div> </main> <script>(function(){', `
    // ============================
    // AUTH CHECK
    // ============================
    const token = sessionStorage.getItem('admin_token');
    if (!token) window.location.href = '/admin';

    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('-translate-x-full');
      document.getElementById('sidebar-overlay').classList.toggle('hidden');
    }

    document.getElementById('logout-btn').addEventListener('click', () => {
      sessionStorage.removeItem('admin_token');
      window.location.href = '/admin';
    });

    // ============================
    // STATE (GLOBAL)
    // ============================
    let uploadedFan = [];
    let uploadedJugador = [];
    const MAX_IMAGES = 6;

    // ============================
    // CARGAR PRODUCTO EXISTENTE
    // ============================
    async function loadProduct() {
      try {
        const res = await fetch(\\\`/api/admin/get-product?id=\\\${productId}\\\`, {
          headers: { 'X-Admin-Password': token }
        });

        if (res.status === 401) {
          sessionStorage.removeItem('admin_token');
          window.location.href = '/admin';
          return;
        }

        if (!res.ok) {
          showToast('Producto no encontrado', 'error');
          setTimeout(() => window.location.href = '/admin/productos', 2000);
          return;
        }

        const { product } = await res.json();
        
        // Prellenar formulario
        document.getElementById('input-nombre').value = product.nombre;
        document.getElementById('input-categoria').value = product.categoria;
        if (product.region) document.getElementById('input-region').value = product.region;
        document.getElementById('input-equipo').value = product.equipo;
        document.getElementById('input-temporada').value = product.temporada;
        document.getElementById('input-tipo').value = product.tipo;
        if (product.precioFan) document.getElementById('input-precio-fan').value = product.precioFan;
        if (product.precioJugador) document.getElementById('input-precio-jugador').value = product.precioJugador;

        // Cargar im\xE1genes existentes
        uploadedFan = product.imagenesFan?.map((url, i) => ({
          url,
          publicId: product._cloudinaryFan?.[i]?.publicId || '',
          fileName: url.split('/').pop() || \\\`imagen-\\\${i+1}.jpg\\\`,
          existing: true
        })) || [];

        uploadedJugador = product.imagenesJugador?.map((url, i) => ({
          url,
          publicId: product._cloudinaryJugador?.[i]?.publicId || '',
          fileName: url.split('/').pop() || \\\`imagen-\\\${i+1}.jpg\\\`,
          existing: true
        })) || [];

        renderPreview('preview-fan', uploadedFan, 'orange');
        renderPreview('preview-jugador', uploadedJugador, 'purple');
        updateStructurePreview();

        document.getElementById('loading').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');

      } catch (error) {
        console.error('Error loading product:', error);
        showToast('Error al cargar producto', 'error');
      }
    }

    // ============================
    // TOAST, SLUG, REGION (IGUAL QUE NUEVO-PRODUCTO)
    // ============================
    function showToast(message, type = 'success') {
      const toast = document.getElementById('toast');
      const content = document.getElementById('toast-content');
      
      const colors = {
        success: 'bg-green-500/90 text-white',
        error: 'bg-red-500/90 text-white',
        info: 'bg-blue-500/90 text-white',
      };

      const icons = {
        success: '\u2705',
        error: '\u274C',
        info: '\u2139\uFE0F',
      };

      content.className = \\\`px-5 py-3 rounded-xl shadow-2xl text-sm font-medium flex items-center gap-2 animate-slide-up \\\${colors[type]}\\\`;
      content.innerHTML = \\\`<span>\\\${icons[type]}</span> \\\${message}\\\`;
      
      toast.classList.remove('hidden');
      
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 4000);
    }

    function generateSlug(text) {
      return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\\\\u0300-\\\\u036f]/g, '')
        .replace(/[^a-z0-9\\\\s-]/g, '')
        .replace(/\\\\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
    }

    document.getElementById('input-nombre').addEventListener('input', (e) => {
      document.getElementById('slug-preview').textContent = generateSlug(e.target.value) || '---';
      updateStructurePreview();
    });

    document.getElementById('input-categoria').addEventListener('change', (e) => {
      const wrapper = document.getElementById('region-wrapper');
      const hasRegion = ['Clubes', 'Selecciones'].includes(e.target.value);
      wrapper.style.display = hasRegion ? 'block' : 'none';
      if (!hasRegion) document.getElementById('input-region').value = '';
      updateStructurePreview();
    });

    ['input-categoria', 'input-region', 'input-equipo', 'input-temporada', 'input-tipo'].forEach(id => {
      document.getElementById(id).addEventListener('change', updateStructurePreview);
      document.getElementById(id).addEventListener('input', updateStructurePreview);
    });

    function updateStructurePreview() {
      const cat = document.getElementById('input-categoria').value;
      const region = document.getElementById('input-region').value;
      const equipo = document.getElementById('input-equipo').value;
      const temp = document.getElementById('input-temporada').value;
      const tipo = document.getElementById('input-tipo').value;

      const section = document.getElementById('structure-preview');
      const tree = document.getElementById('structure-tree');

      if (!cat || !equipo) {
        section.classList.add('hidden');
        return;
      }

      section.classList.remove('hidden');

      let path = 'CAMISOLAS/';
      path += cat.toUpperCase() + '/';
      if (region) path += region.toUpperCase() + '/';
      path += equipo.toUpperCase() + '/';
      path += temp + '/';
      path += tipo.toUpperCase() + '/';

      let html = \\\`<span class="text-green-400">\u{1F4C2} \\\${path}</span>\\\\n\\\`;
      
      html += \\\`   \u251C\u2500\u2500 <span class="text-blue-400">Fan/</span>\\\\n\\\`;
      uploadedFan.forEach((img, i) => {
        html += \\\`   \u2502   \\\${i === uploadedFan.length - 1 ? '\u2514' : '\u251C'}\u2500\u2500 <span class="text-gray-300">\\\${img.fileName || 'imagen-' + (i+1) + '.jpg'}</span> \u2705\\\\n\\\`;
      });
      if (uploadedFan.length === 0) {
        html += \\\`   \u2502   \u2514\u2500\u2500 <span class="text-gray-600">(arrastra im\xE1genes arriba)</span>\\\\n\\\`;
      }

      html += \\\`   \u2514\u2500\u2500 <span class="text-purple-400">Jugador/</span>\\\\n\\\`;
      uploadedJugador.forEach((img, i) => {
        html += \\\`       \\\${i === uploadedJugador.length - 1 ? '\u2514' : '\u251C'}\u2500\u2500 <span class="text-gray-300">\\\${img.fileName || 'imagen-' + (i+1) + '.jpg'}</span> \u2705\\\\n\\\`;
      });
      if (uploadedJugador.length === 0) {
        html += \\\`       \u2514\u2500\u2500 <span class="text-gray-600">(opcional)</span>\\\\n\\\`;
      }

      tree.innerHTML = \\\`<pre class="whitespace-pre">\\\${html}</pre>\\\`;
    }

    // ============================
    // IMAGE UPLOAD (IGUAL QUE NUEVO-PRODUCTO)
    // ============================
    function setupDropzone(dropzoneId, fileInputId, previewId, statusId, statusTextId, uploadArray, accentColor) {
      const dropzone = document.getElementById(dropzoneId);
      const fileInput = document.getElementById(fileInputId);

      dropzone.addEventListener('click', () => fileInput.click());

      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.classList.add('dropzone-active');
      });

      dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dropzone-active');
      });

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.classList.remove('dropzone-active');
        handleFiles(e.dataTransfer.files);
      });

      fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
        fileInput.value = ''; // Reset so same file can be selected again
      });

      async function handleFiles(files) {
        if (!files || files.length === 0) return;

        const remaining = MAX_IMAGES - uploadArray.length;
        if (remaining <= 0) {
          showToast(\\\`M\xE1ximo \\\${MAX_IMAGES} im\xE1genes por versi\xF3n\\\`, 'error');
          return;
        }

        const filesToUpload = Array.from(files).slice(0, remaining);
        
        // Validate each file
        for (const file of filesToUpload) {
          const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
          if (!validTypes.includes(file.type)) {
            showToast(\\\`\\\${file.name}: tipo no v\xE1lido\\\`, 'error');
            return;
          }
          if (file.size > 5 * 1024 * 1024) {
            showToast(\\\`\\\${file.name}: muy grande (m\xE1x 5MB)\\\`, 'error');
            return;
          }
        }

        const statusEl = document.getElementById(statusId);
        const statusText = document.getElementById(statusTextId);
        statusEl.classList.remove('hidden');

        // Build folder path
        const cat = document.getElementById('input-categoria').value;
        const region = document.getElementById('input-region').value;
        const equipo = document.getElementById('input-equipo').value;
        const temp = document.getElementById('input-temporada').value;
        const tipo = document.getElementById('input-tipo').value;

        if (!cat || !equipo) {
          showToast('Completa categor\xEDa y equipo primero', 'error');
          statusEl.classList.add('hidden');
          return;
        }

        const version = dropzoneId.includes('fan') ? 'Fan' : 'Jugador';
        let folder = 'CAMISOLAS/' + cat.toUpperCase();
        if (region) folder += '/' + region.toUpperCase();
        folder += '/' + equipo.toUpperCase();
        folder += '/' + temp;
        folder += '/' + tipo.toUpperCase();
        folder += '/' + version;

        for (let i = 0; i < filesToUpload.length; i++) {
          const file = filesToUpload[i];
          statusText.textContent = \\\`Subiendo \\\${i + 1} de \\\${filesToUpload.length}: \\\${file.name}\\\`;

          try {
            const imageIndex = uploadArray.length + 1;
            const imageType = \\\`imagen-\\\${imageIndex}\\\`;

            const formData = new FormData();
            formData.append('file', file);
            formData.append('folder', folder);
            formData.append('imageType', imageType);

            const res = await fetch('/api/admin/upload', {
              method: 'POST',
              headers: { 'X-Admin-Password': token },
              body: formData,
            });

            if (!res.ok) {
              const err = await res.json();
              throw new Error(err.error || 'Error al subir');
            }

            const data = await res.json();
            uploadArray.push({
              url: data.url,
              publicId: data.publicId,
              fileName: file.name,
              existing: false
            });

            // Render preview
            renderPreview(previewId, uploadArray, accentColor);
            updateStructurePreview();
            
          } catch (err) {
            showToast(\\\`Error: \\\${err.message}\\\`, 'error');
          }
        }

        statusEl.classList.add('hidden');
        showToast(\\\`\\\${filesToUpload.length} imagen(es) subida(s)\\\`, 'success');
      }
    }

    function renderPreview(previewId, images, accentColor) {
      const container = document.getElementById(previewId);
      
      container.innerHTML = images.map((img, index) => \\\`
        <div class="relative group aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/5 animate-slide-up">
          <img src="\\\${img.url}" alt="" class="w-full h-full object-cover" />
          \\\${index === 0 ? \\\`<span class="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-\\\${accentColor}-500/80 text-[10px] font-bold text-white backdrop-blur-sm">PRINCIPAL</span>\\\` : ''}
          \\\${img.existing ? \\\`<span class="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-green-500/80 text-[9px] font-bold text-white backdrop-blur-sm">GUARDADA</span>\\\` : ''}
          <button 
            type="button"
            onclick="removeImage('\\\${previewId}', \\\${index})"
            class="absolute top-1.5 right-1.5 w-7 h-7 rounded-lg bg-red-500/80 hover:bg-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
          >
            <svg class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2">
            <p class="text-[10px] text-gray-300 truncate">\\\${img.fileName}</p>
          </div>
        </div>
      \\\`).join('');
    }

    async function removeImage(previewId, index) {
      const isFan = previewId === 'preview-fan';
      const arr = isFan ? uploadedFan : uploadedJugador;
      const img = arr[index];

      if (img && img.publicId && !img.existing) {
        try {
          await fetch('/api/admin/upload', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'X-Admin-Password': token,
            },
            body: JSON.stringify({ publicId: img.publicId }),
          });
        } catch (err) {
          console.error('Error removing from cloud:', err);
        }
      }

      arr.splice(index, 1);
      const color = isFan ? 'orange' : 'purple';
      renderPreview(previewId, arr, color);
      updateStructurePreview();
      showToast('Imagen eliminada', 'info');
    }

    window.removeImage = removeImage;

    setupDropzone('dropzone-fan', 'file-input-fan', 'preview-fan', 'upload-status-fan', 'upload-text-fan', uploadedFan, 'orange');
    setupDropzone('dropzone-jugador', 'file-input-jugador', 'preview-jugador', 'upload-status-jugador', 'upload-text-jugador', uploadedJugador, 'purple');

    // ============================
    // LOAD EXISTING TEAMS (autocomplete)
    // ============================
    async function loadTeams() {
      try {
        const res = await fetch('/api/admin/products', {
          headers: { 'X-Admin-Password': token }
        });
        if (!res.ok) return;
        const data = await res.json();
        const teams = new Set();
        data.products.forEach(p => {
          if (p.equipo) teams.add(p.equipo);
        });
        const datalist = document.getElementById('equipos-list');
        datalist.innerHTML = Array.from(teams).sort().map(t => \\\`<option value="\\\${t}">\\\`).join('');
      } catch (err) {
        console.error('Error loading teams:', err);
      }
    }
    loadTeams();

    // ============================
    // FORM SUBMIT (ACTUALIZAR)
    // ============================
    document.getElementById('product-form').addEventListener('submit', async (e) => {
      e.preventDefault();

      const nombre = document.getElementById('input-nombre').value.trim();
      const categoria = document.getElementById('input-categoria').value;
      const region = document.getElementById('input-region').value;
      const equipo = document.getElementById('input-equipo').value.trim();
      const temporada = document.getElementById('input-temporada').value;
      const tipo = document.getElementById('input-tipo').value;
      const precioFan = parseInt(document.getElementById('input-precio-fan').value) || null;
      const precioJugador = parseInt(document.getElementById('input-precio-jugador').value) || null;

      if (!nombre || !categoria || !equipo) {
        showToast('Completa los campos obligatorios', 'error');
        return;
      }

      if (uploadedFan.length === 0 && uploadedJugador.length === 0) {
        showToast('Sube al menos una imagen', 'error');
        return;
      }

      const submitBtn = document.getElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = \\\`
        <svg class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        Actualizando...
      \\\`;

      try {
        const updates = {
          nombre,
          categoria,
          region: region || undefined,
          equipo,
          temporada,
          tipo,
          precioFan,
          precioJugador,
          imagenesFan: uploadedFan.map(i => i.url),
          imagenesJugador: uploadedJugador.map(i => i.url),
          _cloudinaryFan: uploadedFan.map(i => ({ url: i.url, publicId: i.publicId, tipo: '' })),
          _cloudinaryJugador: uploadedJugador.map(i => ({ url: i.url, publicId: i.publicId, tipo: '' })),
        };

        const res = await fetch('/api/admin/update-product', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Admin-Password': token,
          },
          body: JSON.stringify({ productId, updates }),
        });

        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.error || 'Error al actualizar');
        }

        showToast('\xA1Producto actualizado correctamente!', 'success');
      
        setTimeout(() => {
          window.location.href = '/admin/productos';
        }, 1500);

      } catch (error) {
        console.error('Error updating product:', error);
        showToast(\\\`Error: \\\${error.message}\\\`, 'error');
      }

      submitBtn.disabled = false;
      submitBtn.innerHTML = \\\`
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
        Guardar Cambios
      \\\`;
    });

    // Cargar producto al inicio
    loadProduct();
  })();<\/script></body></html>`])), renderScript($$result, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/admin/editar-producto/[id].astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/admin/editar-producto/[id].astro?astro&type=script&index=1&lang.ts"), renderHead(), defineScriptVars({ productId: id }));
}, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/admin/editar-producto/[id].astro", void 0);

const $$file = "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/admin/editar-producto/[id].astro";
const $$url = "/admin/editar-producto/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
