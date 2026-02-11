/* empty css                                     */
import { e as createComponent, r as renderTemplate, l as renderHead, n as renderScript } from '../chunks/astro/server_lax-mPdS.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-u2h3djql> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin | CamiZonas</title><meta name="robots" content="noindex, nofollow">', "", "", `</head> <body class="login-bg min-h-screen flex items-center justify-center p-4" data-astro-cid-u2h3djql> <!-- Background decorations --> <div class="fixed inset-0 overflow-hidden pointer-events-none" data-astro-cid-u2h3djql> <div class="absolute top-1/4 -left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl float-animation" data-astro-cid-u2h3djql></div> <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float-animation" style="animation-delay: 1.5s;" data-astro-cid-u2h3djql></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" data-astro-cid-u2h3djql></div> </div> <!-- Login Card --> <div class="relative z-10 w-full max-w-md" data-astro-cid-u2h3djql> <!-- Logo Section --> <div class="text-center mb-8 opacity-0 animate-fade-in-up" data-astro-cid-u2h3djql> <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 mb-4" data-astro-cid-u2h3djql> <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-u2h3djql> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-u2h3djql></path> </svg> </div> <h1 class="text-3xl font-bold text-white mb-1" data-astro-cid-u2h3djql>CamiZonas</h1> <p class="text-gray-400 text-sm" data-astro-cid-u2h3djql>Panel de Administraci\xF3n</p> </div> <!-- Card --> <div class="glass-card rounded-3xl p-8 opacity-0 animate-fade-in-up delay-200" data-astro-cid-u2h3djql> <!-- Error message --> <div id="error-msg" class="hidden mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center" data-astro-cid-u2h3djql>
Contrase\xF1a incorrecta
</div> <!-- Form --> <form id="login-form" class="space-y-6" data-astro-cid-u2h3djql> <div data-astro-cid-u2h3djql> <label class="block text-sm font-medium text-gray-300 mb-2" data-astro-cid-u2h3djql>Contrase\xF1a</label> <div class="relative" data-astro-cid-u2h3djql> <input type="password" id="password-input" placeholder="Ingresa la contrase\xF1a" required class="glow-input w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-300" autocomplete="current-password" data-astro-cid-u2h3djql> <button type="button" id="toggle-password" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors" data-astro-cid-u2h3djql> <svg id="eye-icon" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-u2h3djql> <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-u2h3djql></path> <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-u2h3djql></path> </svg> <svg id="eye-off-icon" class="w-5 h-5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-u2h3djql> <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" data-astro-cid-u2h3djql></path> </svg> </button> </div> </div> <button type="submit" id="login-btn" class="w-full py-3.5 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2" data-astro-cid-u2h3djql> <span data-astro-cid-u2h3djql>Acceder al Panel</span> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-u2h3djql> <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-u2h3djql></path> </svg> </button> </form> </div> <!-- Back to store --> <div class="text-center mt-6 opacity-0 animate-fade-in-up delay-300" data-astro-cid-u2h3djql> <a href="/" class="text-gray-500 hover:text-gray-300 text-sm transition-colors inline-flex items-center gap-1" data-astro-cid-u2h3djql> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-u2h3djql> <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-u2h3djql></path> </svg>
Volver a la tienda
</a> </div> </div> <script>
    // Check if already logged in
    const savedToken = sessionStorage.getItem('admin_token');
    if (savedToken) {
      window.location.href = '/admin/dashboard';
    }

    // Toggle password visibility
    const toggleBtn = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password-input');
    const eyeIcon = document.getElementById('eye-icon');
    const eyeOffIcon = document.getElementById('eye-off-icon');

    toggleBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      eyeIcon.classList.toggle('hidden');
      eyeOffIcon.classList.toggle('hidden');
    });

    // Login form
    const form = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');
    const errorMsg = document.getElementById('error-msg');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const password = passwordInput.value.trim();
      if (!password) return;
      
      loginBtn.disabled = true;
      loginBtn.innerHTML = \`
        <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Verificando...</span>
      \`;
      errorMsg.classList.add('hidden');

      try {
        const res = await fetch('/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password }),
        });

        const data = await res.json();

        if (data.success) {
          sessionStorage.setItem('admin_token', data.token);
          window.location.href = '/admin/dashboard';
        } else {
          errorMsg.textContent = data.error || 'Contrase\xF1a incorrecta';
          errorMsg.classList.remove('hidden');
          passwordInput.value = '';
          passwordInput.focus();
        }
      } catch (err) {
        errorMsg.textContent = 'Error de conexi\xF3n';
        errorMsg.classList.remove('hidden');
      }

      loginBtn.disabled = false;
      loginBtn.innerHTML = \`
        <span>Acceder al Panel</span>
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      \`;
    });
  <\/script> </body> </html>`], ['<html lang="es" data-astro-cid-u2h3djql> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Admin | CamiZonas</title><meta name="robots" content="noindex, nofollow">', "", "", `</head> <body class="login-bg min-h-screen flex items-center justify-center p-4" data-astro-cid-u2h3djql> <!-- Background decorations --> <div class="fixed inset-0 overflow-hidden pointer-events-none" data-astro-cid-u2h3djql> <div class="absolute top-1/4 -left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl float-animation" data-astro-cid-u2h3djql></div> <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl float-animation" style="animation-delay: 1.5s;" data-astro-cid-u2h3djql></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" data-astro-cid-u2h3djql></div> </div> <!-- Login Card --> <div class="relative z-10 w-full max-w-md" data-astro-cid-u2h3djql> <!-- Logo Section --> <div class="text-center mb-8 opacity-0 animate-fade-in-up" data-astro-cid-u2h3djql> <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30 mb-4" data-astro-cid-u2h3djql> <svg class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-u2h3djql> <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-astro-cid-u2h3djql></path> </svg> </div> <h1 class="text-3xl font-bold text-white mb-1" data-astro-cid-u2h3djql>CamiZonas</h1> <p class="text-gray-400 text-sm" data-astro-cid-u2h3djql>Panel de Administraci\xF3n</p> </div> <!-- Card --> <div class="glass-card rounded-3xl p-8 opacity-0 animate-fade-in-up delay-200" data-astro-cid-u2h3djql> <!-- Error message --> <div id="error-msg" class="hidden mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center" data-astro-cid-u2h3djql>
Contrase\xF1a incorrecta
</div> <!-- Form --> <form id="login-form" class="space-y-6" data-astro-cid-u2h3djql> <div data-astro-cid-u2h3djql> <label class="block text-sm font-medium text-gray-300 mb-2" data-astro-cid-u2h3djql>Contrase\xF1a</label> <div class="relative" data-astro-cid-u2h3djql> <input type="password" id="password-input" placeholder="Ingresa la contrase\xF1a" required class="glow-input w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-all duration-300" autocomplete="current-password" data-astro-cid-u2h3djql> <button type="button" id="toggle-password" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors" data-astro-cid-u2h3djql> <svg id="eye-icon" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-u2h3djql> <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-u2h3djql></path> <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-u2h3djql></path> </svg> <svg id="eye-off-icon" class="w-5 h-5 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-u2h3djql> <path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" data-astro-cid-u2h3djql></path> </svg> </button> </div> </div> <button type="submit" id="login-btn" class="w-full py-3.5 px-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2" data-astro-cid-u2h3djql> <span data-astro-cid-u2h3djql>Acceder al Panel</span> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-u2h3djql> <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" data-astro-cid-u2h3djql></path> </svg> </button> </form> </div> <!-- Back to store --> <div class="text-center mt-6 opacity-0 animate-fade-in-up delay-300" data-astro-cid-u2h3djql> <a href="/" class="text-gray-500 hover:text-gray-300 text-sm transition-colors inline-flex items-center gap-1" data-astro-cid-u2h3djql> <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-u2h3djql> <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-u2h3djql></path> </svg>
Volver a la tienda
</a> </div> </div> <script>
    // Check if already logged in
    const savedToken = sessionStorage.getItem('admin_token');
    if (savedToken) {
      window.location.href = '/admin/dashboard';
    }

    // Toggle password visibility
    const toggleBtn = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password-input');
    const eyeIcon = document.getElementById('eye-icon');
    const eyeOffIcon = document.getElementById('eye-off-icon');

    toggleBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      eyeIcon.classList.toggle('hidden');
      eyeOffIcon.classList.toggle('hidden');
    });

    // Login form
    const form = document.getElementById('login-form');
    const loginBtn = document.getElementById('login-btn');
    const errorMsg = document.getElementById('error-msg');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const password = passwordInput.value.trim();
      if (!password) return;
      
      loginBtn.disabled = true;
      loginBtn.innerHTML = \\\`
        <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Verificando...</span>
      \\\`;
      errorMsg.classList.add('hidden');

      try {
        const res = await fetch('/api/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password }),
        });

        const data = await res.json();

        if (data.success) {
          sessionStorage.setItem('admin_token', data.token);
          window.location.href = '/admin/dashboard';
        } else {
          errorMsg.textContent = data.error || 'Contrase\xF1a incorrecta';
          errorMsg.classList.remove('hidden');
          passwordInput.value = '';
          passwordInput.focus();
        }
      } catch (err) {
        errorMsg.textContent = 'Error de conexi\xF3n';
        errorMsg.classList.remove('hidden');
      }

      loginBtn.disabled = false;
      loginBtn.innerHTML = \\\`
        <span>Acceder al Panel</span>
        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      \\\`;
    });
  <\/script> </body> </html>`])), renderScript($$result, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/admin/index.astro?astro&type=script&index=1&lang.ts"), renderHead());
}, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/admin/index.astro", void 0);

const $$file = "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
