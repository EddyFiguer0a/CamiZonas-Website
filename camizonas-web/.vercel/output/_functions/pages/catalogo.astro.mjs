/* empty css                                     */
import { e as createComponent, m as maybeRenderHead, n as renderScript, r as renderTemplate, k as renderComponent, g as addAttribute } from '../chunks/astro/server_lax-mPdS.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B5PAcdQv.mjs';
import { p as productos, $ as $$ProductCard } from '../chunks/productos_D_E_YqHc.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$RequestJersey = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="my-12 mx-4 md:mx-0"> <div class="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 relative overflow-hidden"> <div class="absolute -top-10 -right-10 text-gray-800 opacity-20 rotate-12"> <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24" fill="currentColor"><path d="M21.713 7.602a1.997 1.997 0 0 0-.648-1.389 2.006 2.006 0 0 0-1.396-.625L13.007 5l-1-3H8l-1 3-6.662.588a2.007 2.007 0 0 0-1.396.625c-.429.42-.649.973-.649 1.389l.688 11.653A2 2 0 0 0 1 21h22a2 2 0 0 0 1.992-1.764l.721-11.634Zm-5.382 7.205L17 16l-3.199-1.599L10 16l-2.699-1.349L5 16l-.617-1.234L5 14.149V8.651l7-.617 7 .617v5.498l.331.617-.662 1.324Z"></path></svg> </div> <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6"> <div class="text-center md:text-left md:max-w-md"> <h3 class="text-2xl font-black italic uppercase tracking-tight mb-2">
¿No ves tu <span class="text-yellow-400">CamiZona</span>?
</h3> <p class="text-gray-300 text-sm leading-relaxed">
El catálogo web es solo una parte. Tenemos acceso a miles de modelos retro y actuales. ¡Escribe cuál buscas y te la conseguimos!
</p> </div> <div class="w-full md:w-auto md:flex-shrink-0 md:min-w-[380px]"> <div class="bg-white/5 p-1 rounded-2xl flex items-center border border-white/20 focus-within:border-yellow-400 transition-all focus-within:bg-white/10"> <input type="text" id="jersey-request-input-cat" placeholder="Ej: Barcelona 2009 Messi..." class="bg-transparent w-full px-4 py-3 text-white placeholder-gray-400 outline-none text-sm font-medium"> <button id="btn-request-wa-cat" class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-xl transition-colors flex items-center gap-2 shrink-0"> <span>Consultar</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.506-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.084 1.759-.719 2.006-1.413.248-.695.248-1.289.173-1.414z"></path> </svg> </button> </div> <p class="text-center text-gray-500 text-xs mt-2 md:text-right pr-2">Te respondemos en minutos.</p> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/components/RequestJersey.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/components/RequestJersey.astro", void 0);

const $$Catalogo = createComponent(($$result, $$props, $$slots) => {
  const categorias = ["Todas", "Clubes", "Selecciones", "Retro", "Especiales"];
  const conteos = {
    Todas: productos.length,
    Clubes: productos.filter((p) => p.categoria === "Clubes").length,
    Selecciones: productos.filter((p) => p.categoria === "Selecciones").length,
    Retro: productos.filter((p) => p.categoria === "Retro").length,
    Especiales: productos.filter((p) => p.categoria === "Especiales").length
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cat\xE1logo Completo | CamiZonas", "data-astro-cid-bg7e42cm": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white min-h-screen pb-24 md:pb-12" data-astro-cid-bg7e42cm> <header class="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-100" data-astro-cid-bg7e42cm> <div class="p-3 sm:p-4 md:p-6 lg:px-12 flex justify-between items-center" data-astro-cid-bg7e42cm> <a href="/" class="w-9 h-9 sm:w-10 sm:h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors" data-astro-cid-bg7e42cm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-bg7e42cm><path d="m15 18-6-6 6-6" data-astro-cid-bg7e42cm></path></svg> </a> <h1 class="font-black text-base sm:text-lg md:text-xl uppercase italic tracking-tight" data-astro-cid-bg7e42cm>Catálogo</h1> <div class="w-9 sm:w-10" data-astro-cid-bg7e42cm></div> </div> <div class="px-3 sm:px-4 md:px-6 lg:px-12 pb-3" data-astro-cid-bg7e42cm> <div class="relative group w-full md:max-w-2xl md:mx-auto" data-astro-cid-bg7e42cm> <input type="text" id="search-catalog" placeholder="Buscar tu equipo (ej: Real Madrid)..." class="w-full bg-gray-50 border border-gray-200 rounded-2xl 
                    py-3.5 pl-12 pr-4 
                    text-sm font-medium placeholder:text-gray-400 
                    outline-none transition-all
                    focus:bg-white focus:border-gray-300 focus:ring-2 ring-black/5
                    shadow-sm" style="font-size:16px;" data-astro-cid-bg7e42cm> <span class="absolute left-4 top-1/2 -translate-y-1/2 
                      text-gray-400 group-focus-within:text-black 
                      transition-colors pointer-events-none" data-astro-cid-bg7e42cm> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-bg7e42cm> <circle cx="11" cy="11" r="8" data-astro-cid-bg7e42cm></circle> <path d="m21 21-4.3-4.3" data-astro-cid-bg7e42cm></path> </svg> </span> </div> </div> <div class="px-3 sm:px-4 md:px-6 lg:px-12 pb-3 sm:pb-4 flex gap-2 overflow-x-auto no-scrollbar" data-astro-cid-bg7e42cm> ${categorias.map((cat) => renderTemplate`<button class="filter-tab px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold whitespace-nowrap border border-gray-200 text-gray-600 hover:border-black transition-all duration-200"${addAttribute(cat, "data-categoria")} data-astro-cid-bg7e42cm> ${cat} <span class="ml-1 opacity-60" data-astro-cid-bg7e42cm>(${conteos[cat]})</span> </button>`)} </div> </header> <div class="px-3 sm:px-4 md:px-6 lg:px-12 py-3 sm:py-4 flex justify-between items-center" data-astro-cid-bg7e42cm> <p class="text-xs sm:text-sm text-gray-500" data-astro-cid-bg7e42cm> <span id="producto-count" class="font-bold text-black" data-astro-cid-bg7e42cm>${productos.length}</span> productos
<span id="search-info" class="hidden ml-2 text-blue-600 font-medium" data-astro-cid-bg7e42cm></span> </p> </div> <section class="px-3 sm:px-4 md:px-6 lg:px-12 pb-6" data-astro-cid-bg7e42cm> <div id="productos-grid" class="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-6" data-astro-cid-bg7e42cm> ${productos.map((prod) => {
    const imagenDisponible = prod.imagenesFan && prod.imagenesFan.length > 0 ? prod.imagenesFan[0] : prod.imagenesJugador && prod.imagenesJugador.length > 0 ? prod.imagenesJugador[0] : "";
    return renderTemplate`<div class="producto-item"${addAttribute(prod.categoria, "data-categoria")}${addAttribute(prod.nombre.toLowerCase(), "data-nombre")}${addAttribute(prod.precioFan ?? prod.precioJugador ?? 0, "data-precio")} data-astro-cid-bg7e42cm> ${renderComponent($$result2, "ProductCard", $$ProductCard, { "id": prod.id, "name": prod.nombre, "precioFan": prod.precioFan, "precioJugador": prod.precioJugador, "imagen": imagenDisponible, "categoria": prod.categoria, "data-astro-cid-bg7e42cm": true })} </div>`;
  })} </div> <div id="empty-state" class="hidden flex-col items-center justify-center py-12 sm:py-16 text-center" data-astro-cid-bg7e42cm> <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4" data-astro-cid-bg7e42cm> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-gray-400" data-astro-cid-bg7e42cm><circle cx="11" cy="11" r="8" data-astro-cid-bg7e42cm></circle><path d="m21 21-4.3-4.3" data-astro-cid-bg7e42cm></path></svg> </div> <h3 class="font-bold text-base sm:text-lg mb-2" data-astro-cid-bg7e42cm>No se encontraron productos</h3> <p class="text-xs sm:text-sm text-gray-500 mb-4" data-astro-cid-bg7e42cm>Intenta con otros términos</p> <button id="clear-search" class="bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold hover:scale-105 transition-transform" data-astro-cid-bg7e42cm>
Limpiar búsqueda
</button> </div> </section> ${renderComponent($$result2, "RequestJersey", $$RequestJersey, { "data-astro-cid-bg7e42cm": true })} </main> ` })} ${renderScript($$result, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/catalogo.astro?astro&type=script&index=0&lang.ts")}  `;
}, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/catalogo.astro", void 0);

const $$file = "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/catalogo.astro";
const $$url = "/catalogo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Catalogo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
