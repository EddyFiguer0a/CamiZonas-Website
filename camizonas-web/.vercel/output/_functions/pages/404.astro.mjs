/* empty css                                     */
import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_lax-mPdS.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_B5PAcdQv.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "P\xE1gina no encontrada | CamiZonas" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center"> <!-- Ilustración --> <div class="relative mb-8"> <div class="w-32 h-32 sm:w-40 sm:h-40 bg-gray-100 rounded-full flex items-center justify-center"> <span class="text-6xl sm:text-7xl">⚽</span> </div> <div class="absolute -bottom-2 -right-2 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"> <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line> </svg> </div> </div> <!-- Texto --> <h1 class="text-6xl sm:text-8xl font-black italic text-black mb-2">404</h1> <h2 class="text-xl sm:text-2xl font-bold text-gray-800 mb-3">¡Fuera de juego!</h2> <p class="text-sm sm:text-base text-gray-500 max-w-md mb-8 leading-relaxed">
Parece que esta página fue expulsada del campo. No te preocupes, puedes volver al inicio y seguir buscando tu camiseta favorita.
</p> <!-- Botones --> <div class="flex flex-col sm:flex-row gap-3"> <a href="/" class="bg-black text-white font-bold text-sm px-8 py-4 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline> </svg>
Volver al Inicio
</a> <a href="/catalogo" class="bg-gray-100 text-black font-bold text-sm px-8 py-4 rounded-2xl hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect> <rect width="7" height="7" x="3" y="14" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect> </svg>
Ver Catálogo
</a> </div> <!-- Easter egg --> <p class="mt-12 text-xs text-gray-300 font-medium">
Error 404 • El árbitro dice que no existe
</p> </main> ` })}`;
}, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/404.astro", void 0);

const $$file = "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
