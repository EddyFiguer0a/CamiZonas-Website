/* empty css                                        */
import { e as createComponent, r as renderTemplate, o as defineScriptVars, k as renderComponent, h as createAstro, m as maybeRenderHead, g as addAttribute, p as Fragment } from '../../chunks/astro/server_lax-mPdS.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_B5PAcdQv.mjs';
import { p as productos, $ as $$ProductCard } from '../../chunks/productos_D_E_YqHc.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const prod = productos.find((p) => p.id === id);
  if (!prod) {
    return Astro2.redirect("/404");
  }
  const tieneFan = prod.imagenesFan && prod.imagenesFan.length > 0;
  const tieneJugador = prod.imagenesJugador && prod.imagenesJugador.length > 0;
  const tieneAmbas = tieneFan && tieneJugador;
  const soloFan = tieneFan && !tieneJugador;
  const soloJugador = tieneJugador && !tieneFan;
  const versionInicial = tieneFan ? "Fan" : "Jugador";
  const precioInicial = tieneFan ? prod.precioFan : prod.precioJugador;
  const imagenesIniciales = tieneFan ? prod.imagenesFan : prod.imagenesJugador;
  const esRetro = prod.categoria === "Retro";
  const esEspecial = prod.categoria === "Especiales";
  const esEdicionEspecial = esRetro || esEspecial;
  const productTitle = `${prod.nombre} | CamiZonas`;
  const productDescription = `${prod.nombre} - Desde Q.${precioInicial}. Personalizaci\xF3n +Q.25. Parches gratis. Env\xEDo a toda Guatemala.`;
  const productImage = imagenesIniciales[0];
  const productUrl = `https://camizonas.com/producto/${prod.id}`;
  const breadcrumbs = [
    { label: prod.categoria || "Productos", href: `/catalogo?categoria=${prod.categoria}` },
    { label: prod.nombre, href: "#" }
  ];
  const productosRelacionados = productos.filter((p) => p.categoria === prod.categoria && p.id !== prod.id).slice(0, 4);
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
  // ============ VARIABLES DE ESTADO ============
  let versionActual = versionInicial;
  let precioBase = versionInicial === 'Fan' ? precioFan : precioJugador;
  let precioActual = precioBase;
  let tallaActual = '';
  let parcheSeleccionado = '';
  let tienePersonalizacion = false;

  // ============ ELEMENTOS DEL DOM ============
  const inputNombre = document.getElementById('input-nombre');
  const inputNumero = document.getElementById('input-numero');
  const precioDisplay = document.getElementById('precio-display');
  const personalizacionNotice = document.getElementById('personalizacion-notice');

  // ============ FUNCI\xD3N ACTUALIZAR PRECIO ============
  function actualizarPrecio() {
    const hayNombre = inputNombre?.value.trim().length > 0;
    const hayNumero = inputNumero?.value.trim().length > 0;
    tienePersonalizacion = hayNombre || hayNumero;

    precioActual = precioBase;
    if (tienePersonalizacion) {
      precioActual += 25;
    }

    if (precioDisplay) {
      precioDisplay.innerText = \`Q.\${precioActual}\`;
      
      // Animaci\xF3n sutil al cambiar precio
      precioDisplay.classList.remove('scale-110');
      void precioDisplay.offsetWidth;
      precioDisplay.classList.add('scale-110');
      setTimeout(() => precioDisplay.classList.remove('scale-110'), 200);
    }

    // Mostrar/ocultar aviso de personalizaci\xF3n
    if (personalizacionNotice) {
      if (tienePersonalizacion) {
        personalizacionNotice.classList.remove('hidden');
        setTimeout(() => personalizacionNotice.classList.add('opacity-100'), 10);
      } else {
        personalizacionNotice.classList.remove('opacity-100');
        setTimeout(() => personalizacionNotice.classList.add('hidden'), 300);
      }
    }
  }

  // ============ LISTENERS PARA INPUTS DE PERSONALIZACI\xD3N ============
  inputNombre?.addEventListener('input', actualizarPrecio);
  inputNumero?.addEventListener('input', actualizarPrecio);

  // ============ PARCHE DROPDOWN ============
  const parcheToggle = document.getElementById('parche-toggle');
  const parcheDropdown = document.getElementById('parche-dropdown');
  const parcheSelected = document.getElementById('parche-selected');
  const parcheArrow = document.getElementById('parche-arrow');
  const parcheOptions = document.querySelectorAll('.parche-option');
  const parcheContainer = document.getElementById('parche-preview-container');
  const parcheImg = document.getElementById('parche-img');
  const parchePlaceholder = document.getElementById('parche-placeholder');

  const imagenesParches = {
    'Champions': '/img/parches/UEFAparche.webp',
    'La Liga': '/img/parches/LALIGAparche.webp',
    'Premier': '/img/parches/PREMIERparche.webp',
    'Mundial': '/img/parches/FIFA parche.webp'
  };

  const nombresParches = {
    'Champions': 'Champions League',
    'La Liga': 'La Liga',
    'Premier': 'Premier League',
    'Mundial': 'Campe\xF3n Mundial'
  };

  if (parcheToggle && !esEdicionEspecial) {
    parcheToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !parcheDropdown.classList.contains('invisible');
      
      if (isOpen) {
        parcheDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
        parcheArrow.style.transform = 'rotate(0deg)';
      } else {
        parcheDropdown.classList.remove('opacity-0', 'invisible', 'translate-y-2');
        parcheArrow.style.transform = 'rotate(180deg)';
      }
    });

    document.addEventListener('click', (e) => {
      if (!parcheToggle?.contains(e.target) && !parcheDropdown?.contains(e.target)) {
        parcheDropdown?.classList.add('opacity-0', 'invisible', 'translate-y-2');
        if (parcheArrow) parcheArrow.style.transform = 'rotate(0deg)';
      }
    });

    parcheOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const valor = option.getAttribute('data-value') || '';
        parcheSeleccionado = valor;
        
        if (valor) {
          parcheSelected.textContent = nombresParches[valor];
          parcheSelected.classList.remove('text-gray-400');
          parcheSelected.classList.add('text-black');
        } else {
          parcheSelected.textContent = 'Sin Parche';
          parcheSelected.classList.add('text-gray-400');
          parcheSelected.classList.remove('text-black');
        }

        const rutaImagen = imagenesParches[valor];
        if (valor && rutaImagen) {
          parcheImg.src = rutaImagen;
          parcheImg.classList.remove('hidden');
          setTimeout(() => parcheImg.classList.remove('opacity-0'), 10);
          parchePlaceholder.classList.add('hidden');
          parcheContainer.classList.remove('border-dashed', 'bg-gray-50');
          parcheContainer.classList.add('border-solid', 'border-black', 'bg-white');
        } else {
          parcheImg.classList.add('opacity-0');
          setTimeout(() => parcheImg.classList.add('hidden'), 300);
          parchePlaceholder.classList.remove('hidden');
          parcheContainer.classList.add('border-dashed', 'bg-gray-50');
          parcheContainer.classList.remove('border-solid', 'border-black', 'bg-white');
        }

        parcheDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
        if (parcheArrow) parcheArrow.style.transform = 'rotate(0deg)';
      });
    });
  }

  // ============ CONTADOR DE IM\xC1GENES ============
  function setupImageCounter() {
    const contador = document.getElementById('contador-imagenes');
    if (!contador) return;

    const containerClass = versionActual === 'Fan' ? 'snap-container-fan' : 'snap-container-jugador';
    const container = document.querySelector(\`.\${containerClass}\`);
    const totalImages = versionActual === 'Fan' ? totalFan : totalJugador;

    if (!container) return;

    const updateCounter = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.offsetWidth;
      const currentIndex = Math.round(scrollLeft / itemWidth) + 1;
      
      const svgIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>\`;
      contador.innerHTML = \`\${svgIcon} \${currentIndex} / \${totalImages}\`;
    };

    container.addEventListener('scroll', updateCounter);
    updateCounter();
  }

  // ============ CAMBIAR VERSI\xD3N ============
  function cambiarVersion(version) {
    if (!tieneAmbas || esEdicionEspecial) return;
    
    versionActual = version;
    precioBase = (version === 'Fan') ? precioFan : precioJugador;
    actualizarPrecio();

    const sliderFan = document.getElementById('slider-fan');
    const sliderJugador = document.getElementById('slider-jugador');
    const btnFan = document.getElementById('btn-fan');
    const btnJugador = document.getElementById('btn-jugador');
    
    if(version === 'Fan') {
      sliderFan?.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
      sliderFan?.classList.add('opacity-100', 'z-10');
      sliderJugador?.classList.remove('opacity-100', 'z-10');
      sliderJugador?.classList.add('opacity-0', 'pointer-events-none', 'z-0');
      
      if (btnFan) btnFan.className = "flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wide transition-all duration-300 bg-white shadow-sm text-black border border-gray-100";
      if (btnJugador) btnJugador.className = "flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wide transition-all duration-300 text-gray-400 hover:text-gray-600 bg-transparent";
    } else {
      sliderJugador?.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
      sliderJugador?.classList.add('opacity-100', 'z-10');
      sliderFan?.classList.remove('opacity-100', 'z-10');
      sliderFan?.classList.add('opacity-0', 'pointer-events-none', 'z-0');
      
      if (btnJugador) btnJugador.className = "flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wide transition-all duration-300 bg-white shadow-sm text-black border border-gray-100";
      if (btnFan) btnFan.className = "flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wide transition-all duration-300 text-gray-400 hover:text-gray-600 bg-transparent";
    }

    setTimeout(setupImageCounter, 100);
  }

  // ============ FUNCI\xD3N WHATSAPP ACTUALIZADA ============
  function enviarWhatsApp() {
    if (!tallaActual) {
      if (typeof window.showToast === 'function') {
        window.showToast('\u26A0\uFE0F Por favor selecciona una talla', 'warning', 3000);
      } else {
        alert('Por favor selecciona una talla');
      }
      
      botonesTalla.forEach(btn => {
        btn.classList.add('animate-pulse', 'border-red-400');
        setTimeout(() => btn.classList.remove('animate-pulse', 'border-red-400'), 1000);
      });
      return;
    }

    const telefono = "50232650539";
    const nombrePers = inputNombre?.value.toUpperCase() || '';
    const numeroPers = inputNumero?.value || '';
    
    let extraTexto = '';

    if(nombrePers || numeroPers) {
      extraTexto += \`\\n\u2728 Personalizado: \${nombrePers} \${numeroPers ? '#' + numeroPers : ''} (+Q.25)\`;
    }
    if(parcheSeleccionado && !esEdicionEspecial) {
      extraTexto += \`\\n\u{1F6E1}\uFE0F Parche: \${nombresParches[parcheSeleccionado] || parcheSeleccionado} (GRATIS)\`;
    }

    const versionTexto = esEdicionEspecial ? '' : \`\\n\u{1F48E} Versi\xF3n: *\${versionActual.toUpperCase()}*\`;

    const mensaje = \`Hola \u{1F44B}, quiero pedir: \\n\\n\u26BD *\${nombreProd}*\${versionTexto}\\n\u{1F4CF} Talla: \${tallaActual}\${extraTexto}\\n\\n\u{1F4B0} Precio Total: Q.\${precioActual}\`;
    window.open(\`https://wa.me/\${telefono}?text=\${encodeURIComponent(mensaje)}\`, '_blank');
  }

  // ============ FUNCI\xD3N AGREGAR AL CARRITO ACTUALIZADA ============
  function agregarAlCarrito(btnElement) {
    if (!tallaActual) {
      if (typeof window.showToast === 'function') {
        window.showToast('\u26A0\uFE0F Por favor selecciona una talla', 'warning', 3000);
      } else {
        alert('Por favor selecciona una talla');
      }
      
      botonesTalla.forEach(btn => {
        btn.classList.add('animate-pulse', 'border-red-400');
        setTimeout(() => btn.classList.remove('animate-pulse', 'border-red-400'), 1000);
      });
      return;
    }

    const nombrePers = inputNombre?.value.toUpperCase() || '';
    const numeroPers = inputNumero?.value || '';

    const containerClass = versionActual === 'Fan' ? '.snap-container-fan img' : '.snap-container-jugador img';
    const primeraImagen = document.querySelector(containerClass)?.src || '';
    
    const productoCarrito = {
      id: Date.now(),
      nombre: nombreProd,
      version: esEdicionEspecial ? '\xDAnica' : versionActual,
      talla: tallaActual,
      precio: precioActual,
      imagen: primeraImagen,
      personalizacion: (nombrePers || numeroPers) ? { nombre: nombrePers, numero: numeroPers } : null,
      parche: (!esEdicionEspecial && parcheSeleccionado) ? parcheSeleccionado : null
    };

    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    carrito.push(productoCarrito);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    if (typeof window.flyToCart === 'function') {
      window.flyToCart(btnElement);
    }

    btnElement.classList.add('bg-green-500', 'border-green-500', 'scale-95');
    
    setTimeout(() => {
      btnElement.classList.remove('bg-green-500', 'border-green-500', 'scale-95');
    }, 600);

    let mensaje = \`\u{1F6D2} \${nombreProd} agregado al carrito\`;
    if (nombrePers || numeroPers) {
      mensaje = \`\u2728 \${nombreProd} personalizado agregado\`;
    }
    
    if (typeof window.showToast === 'function') {
      window.showToast(mensaje, 'success', 3000);
    }

    window.dispatchEvent(new CustomEvent('cartUpdated'));
  }

  // ============ EVENT LISTENERS ============
  document.addEventListener('DOMContentLoaded', () => {
    setupImageCounter();
  });

  document.getElementById('btn-fan')?.addEventListener('click', () => cambiarVersion('Fan'));
  document.getElementById('btn-jugador')?.addEventListener('click', () => cambiarVersion('Jugador'));

  // ============ SCROLL HIDE/SHOW ============
  let lastScrollY = window.scrollY;
  const whatsappContainer = document.getElementById('sticky-whatsapp');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (window.innerWidth < 768) {
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        if (whatsappContainer) whatsappContainer.style.transform = 'translateY(200%)';
      } else {
        if (whatsappContainer) whatsappContainer.style.transform = 'translateY(0)';
      }
    }
    lastScrollY = currentScrollY;
  });

  // ============ SELECTOR DE TALLAS ============
  const botonesTalla = document.querySelectorAll('.size-btn');
  botonesTalla.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      botonesTalla.forEach(b => {
        b.classList.remove('bg-black', 'text-white', 'border-black', 'scale-105');
        b.classList.add('border-gray-200', 'text-gray-700');
      });
      
      this.classList.remove('border-gray-200', 'text-gray-700');
      this.classList.add('bg-black', 'text-white', 'border-black', 'scale-105');
      
      tallaActual = this.innerText.trim();
    });
  });

  document.getElementById('whatsapp-btn')?.addEventListener('click', enviarWhatsApp);
  document.getElementById('whatsapp-btn-desktop')?.addEventListener('click', enviarWhatsApp);

  document.getElementById('add-to-cart')?.addEventListener('click', function() {
    agregarAlCarrito(this);
  });
  
  document.getElementById('add-to-cart-desktop')?.addEventListener('click', function() {
    agregarAlCarrito(this);
  });
})();<\/script> `], ["", " <script>(function(){", `
  // ============ VARIABLES DE ESTADO ============
  let versionActual = versionInicial;
  let precioBase = versionInicial === 'Fan' ? precioFan : precioJugador;
  let precioActual = precioBase;
  let tallaActual = '';
  let parcheSeleccionado = '';
  let tienePersonalizacion = false;

  // ============ ELEMENTOS DEL DOM ============
  const inputNombre = document.getElementById('input-nombre');
  const inputNumero = document.getElementById('input-numero');
  const precioDisplay = document.getElementById('precio-display');
  const personalizacionNotice = document.getElementById('personalizacion-notice');

  // ============ FUNCI\xD3N ACTUALIZAR PRECIO ============
  function actualizarPrecio() {
    const hayNombre = inputNombre?.value.trim().length > 0;
    const hayNumero = inputNumero?.value.trim().length > 0;
    tienePersonalizacion = hayNombre || hayNumero;

    precioActual = precioBase;
    if (tienePersonalizacion) {
      precioActual += 25;
    }

    if (precioDisplay) {
      precioDisplay.innerText = \\\`Q.\\\${precioActual}\\\`;
      
      // Animaci\xF3n sutil al cambiar precio
      precioDisplay.classList.remove('scale-110');
      void precioDisplay.offsetWidth;
      precioDisplay.classList.add('scale-110');
      setTimeout(() => precioDisplay.classList.remove('scale-110'), 200);
    }

    // Mostrar/ocultar aviso de personalizaci\xF3n
    if (personalizacionNotice) {
      if (tienePersonalizacion) {
        personalizacionNotice.classList.remove('hidden');
        setTimeout(() => personalizacionNotice.classList.add('opacity-100'), 10);
      } else {
        personalizacionNotice.classList.remove('opacity-100');
        setTimeout(() => personalizacionNotice.classList.add('hidden'), 300);
      }
    }
  }

  // ============ LISTENERS PARA INPUTS DE PERSONALIZACI\xD3N ============
  inputNombre?.addEventListener('input', actualizarPrecio);
  inputNumero?.addEventListener('input', actualizarPrecio);

  // ============ PARCHE DROPDOWN ============
  const parcheToggle = document.getElementById('parche-toggle');
  const parcheDropdown = document.getElementById('parche-dropdown');
  const parcheSelected = document.getElementById('parche-selected');
  const parcheArrow = document.getElementById('parche-arrow');
  const parcheOptions = document.querySelectorAll('.parche-option');
  const parcheContainer = document.getElementById('parche-preview-container');
  const parcheImg = document.getElementById('parche-img');
  const parchePlaceholder = document.getElementById('parche-placeholder');

  const imagenesParches = {
    'Champions': '/img/parches/UEFAparche.webp',
    'La Liga': '/img/parches/LALIGAparche.webp',
    'Premier': '/img/parches/PREMIERparche.webp',
    'Mundial': '/img/parches/FIFA parche.webp'
  };

  const nombresParches = {
    'Champions': 'Champions League',
    'La Liga': 'La Liga',
    'Premier': 'Premier League',
    'Mundial': 'Campe\xF3n Mundial'
  };

  if (parcheToggle && !esEdicionEspecial) {
    parcheToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !parcheDropdown.classList.contains('invisible');
      
      if (isOpen) {
        parcheDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
        parcheArrow.style.transform = 'rotate(0deg)';
      } else {
        parcheDropdown.classList.remove('opacity-0', 'invisible', 'translate-y-2');
        parcheArrow.style.transform = 'rotate(180deg)';
      }
    });

    document.addEventListener('click', (e) => {
      if (!parcheToggle?.contains(e.target) && !parcheDropdown?.contains(e.target)) {
        parcheDropdown?.classList.add('opacity-0', 'invisible', 'translate-y-2');
        if (parcheArrow) parcheArrow.style.transform = 'rotate(0deg)';
      }
    });

    parcheOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const valor = option.getAttribute('data-value') || '';
        parcheSeleccionado = valor;
        
        if (valor) {
          parcheSelected.textContent = nombresParches[valor];
          parcheSelected.classList.remove('text-gray-400');
          parcheSelected.classList.add('text-black');
        } else {
          parcheSelected.textContent = 'Sin Parche';
          parcheSelected.classList.add('text-gray-400');
          parcheSelected.classList.remove('text-black');
        }

        const rutaImagen = imagenesParches[valor];
        if (valor && rutaImagen) {
          parcheImg.src = rutaImagen;
          parcheImg.classList.remove('hidden');
          setTimeout(() => parcheImg.classList.remove('opacity-0'), 10);
          parchePlaceholder.classList.add('hidden');
          parcheContainer.classList.remove('border-dashed', 'bg-gray-50');
          parcheContainer.classList.add('border-solid', 'border-black', 'bg-white');
        } else {
          parcheImg.classList.add('opacity-0');
          setTimeout(() => parcheImg.classList.add('hidden'), 300);
          parchePlaceholder.classList.remove('hidden');
          parcheContainer.classList.add('border-dashed', 'bg-gray-50');
          parcheContainer.classList.remove('border-solid', 'border-black', 'bg-white');
        }

        parcheDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
        if (parcheArrow) parcheArrow.style.transform = 'rotate(0deg)';
      });
    });
  }

  // ============ CONTADOR DE IM\xC1GENES ============
  function setupImageCounter() {
    const contador = document.getElementById('contador-imagenes');
    if (!contador) return;

    const containerClass = versionActual === 'Fan' ? 'snap-container-fan' : 'snap-container-jugador';
    const container = document.querySelector(\\\`.\\\${containerClass}\\\`);
    const totalImages = versionActual === 'Fan' ? totalFan : totalJugador;

    if (!container) return;

    const updateCounter = () => {
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.offsetWidth;
      const currentIndex = Math.round(scrollLeft / itemWidth) + 1;
      
      const svgIcon = \\\`<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>\\\`;
      contador.innerHTML = \\\`\\\${svgIcon} \\\${currentIndex} / \\\${totalImages}\\\`;
    };

    container.addEventListener('scroll', updateCounter);
    updateCounter();
  }

  // ============ CAMBIAR VERSI\xD3N ============
  function cambiarVersion(version) {
    if (!tieneAmbas || esEdicionEspecial) return;
    
    versionActual = version;
    precioBase = (version === 'Fan') ? precioFan : precioJugador;
    actualizarPrecio();

    const sliderFan = document.getElementById('slider-fan');
    const sliderJugador = document.getElementById('slider-jugador');
    const btnFan = document.getElementById('btn-fan');
    const btnJugador = document.getElementById('btn-jugador');
    
    if(version === 'Fan') {
      sliderFan?.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
      sliderFan?.classList.add('opacity-100', 'z-10');
      sliderJugador?.classList.remove('opacity-100', 'z-10');
      sliderJugador?.classList.add('opacity-0', 'pointer-events-none', 'z-0');
      
      if (btnFan) btnFan.className = "flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wide transition-all duration-300 bg-white shadow-sm text-black border border-gray-100";
      if (btnJugador) btnJugador.className = "flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wide transition-all duration-300 text-gray-400 hover:text-gray-600 bg-transparent";
    } else {
      sliderJugador?.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
      sliderJugador?.classList.add('opacity-100', 'z-10');
      sliderFan?.classList.remove('opacity-100', 'z-10');
      sliderFan?.classList.add('opacity-0', 'pointer-events-none', 'z-0');
      
      if (btnJugador) btnJugador.className = "flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wide transition-all duration-300 bg-white shadow-sm text-black border border-gray-100";
      if (btnFan) btnFan.className = "flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wide transition-all duration-300 text-gray-400 hover:text-gray-600 bg-transparent";
    }

    setTimeout(setupImageCounter, 100);
  }

  // ============ FUNCI\xD3N WHATSAPP ACTUALIZADA ============
  function enviarWhatsApp() {
    if (!tallaActual) {
      if (typeof window.showToast === 'function') {
        window.showToast('\u26A0\uFE0F Por favor selecciona una talla', 'warning', 3000);
      } else {
        alert('Por favor selecciona una talla');
      }
      
      botonesTalla.forEach(btn => {
        btn.classList.add('animate-pulse', 'border-red-400');
        setTimeout(() => btn.classList.remove('animate-pulse', 'border-red-400'), 1000);
      });
      return;
    }

    const telefono = "50232650539";
    const nombrePers = inputNombre?.value.toUpperCase() || '';
    const numeroPers = inputNumero?.value || '';
    
    let extraTexto = '';

    if(nombrePers || numeroPers) {
      extraTexto += \\\`\\\\n\u2728 Personalizado: \\\${nombrePers} \\\${numeroPers ? '#' + numeroPers : ''} (+Q.25)\\\`;
    }
    if(parcheSeleccionado && !esEdicionEspecial) {
      extraTexto += \\\`\\\\n\u{1F6E1}\uFE0F Parche: \\\${nombresParches[parcheSeleccionado] || parcheSeleccionado} (GRATIS)\\\`;
    }

    const versionTexto = esEdicionEspecial ? '' : \\\`\\\\n\u{1F48E} Versi\xF3n: *\\\${versionActual.toUpperCase()}*\\\`;

    const mensaje = \\\`Hola \u{1F44B}, quiero pedir: \\\\n\\\\n\u26BD *\\\${nombreProd}*\\\${versionTexto}\\\\n\u{1F4CF} Talla: \\\${tallaActual}\\\${extraTexto}\\\\n\\\\n\u{1F4B0} Precio Total: Q.\\\${precioActual}\\\`;
    window.open(\\\`https://wa.me/\\\${telefono}?text=\\\${encodeURIComponent(mensaje)}\\\`, '_blank');
  }

  // ============ FUNCI\xD3N AGREGAR AL CARRITO ACTUALIZADA ============
  function agregarAlCarrito(btnElement) {
    if (!tallaActual) {
      if (typeof window.showToast === 'function') {
        window.showToast('\u26A0\uFE0F Por favor selecciona una talla', 'warning', 3000);
      } else {
        alert('Por favor selecciona una talla');
      }
      
      botonesTalla.forEach(btn => {
        btn.classList.add('animate-pulse', 'border-red-400');
        setTimeout(() => btn.classList.remove('animate-pulse', 'border-red-400'), 1000);
      });
      return;
    }

    const nombrePers = inputNombre?.value.toUpperCase() || '';
    const numeroPers = inputNumero?.value || '';

    const containerClass = versionActual === 'Fan' ? '.snap-container-fan img' : '.snap-container-jugador img';
    const primeraImagen = document.querySelector(containerClass)?.src || '';
    
    const productoCarrito = {
      id: Date.now(),
      nombre: nombreProd,
      version: esEdicionEspecial ? '\xDAnica' : versionActual,
      talla: tallaActual,
      precio: precioActual,
      imagen: primeraImagen,
      personalizacion: (nombrePers || numeroPers) ? { nombre: nombrePers, numero: numeroPers } : null,
      parche: (!esEdicionEspecial && parcheSeleccionado) ? parcheSeleccionado : null
    };

    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
    carrito.push(productoCarrito);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    if (typeof window.flyToCart === 'function') {
      window.flyToCart(btnElement);
    }

    btnElement.classList.add('bg-green-500', 'border-green-500', 'scale-95');
    
    setTimeout(() => {
      btnElement.classList.remove('bg-green-500', 'border-green-500', 'scale-95');
    }, 600);

    let mensaje = \\\`\u{1F6D2} \\\${nombreProd} agregado al carrito\\\`;
    if (nombrePers || numeroPers) {
      mensaje = \\\`\u2728 \\\${nombreProd} personalizado agregado\\\`;
    }
    
    if (typeof window.showToast === 'function') {
      window.showToast(mensaje, 'success', 3000);
    }

    window.dispatchEvent(new CustomEvent('cartUpdated'));
  }

  // ============ EVENT LISTENERS ============
  document.addEventListener('DOMContentLoaded', () => {
    setupImageCounter();
  });

  document.getElementById('btn-fan')?.addEventListener('click', () => cambiarVersion('Fan'));
  document.getElementById('btn-jugador')?.addEventListener('click', () => cambiarVersion('Jugador'));

  // ============ SCROLL HIDE/SHOW ============
  let lastScrollY = window.scrollY;
  const whatsappContainer = document.getElementById('sticky-whatsapp');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (window.innerWidth < 768) {
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        if (whatsappContainer) whatsappContainer.style.transform = 'translateY(200%)';
      } else {
        if (whatsappContainer) whatsappContainer.style.transform = 'translateY(0)';
      }
    }
    lastScrollY = currentScrollY;
  });

  // ============ SELECTOR DE TALLAS ============
  const botonesTalla = document.querySelectorAll('.size-btn');
  botonesTalla.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      botonesTalla.forEach(b => {
        b.classList.remove('bg-black', 'text-white', 'border-black', 'scale-105');
        b.classList.add('border-gray-200', 'text-gray-700');
      });
      
      this.classList.remove('border-gray-200', 'text-gray-700');
      this.classList.add('bg-black', 'text-white', 'border-black', 'scale-105');
      
      tallaActual = this.innerText.trim();
    });
  });

  document.getElementById('whatsapp-btn')?.addEventListener('click', enviarWhatsApp);
  document.getElementById('whatsapp-btn-desktop')?.addEventListener('click', enviarWhatsApp);

  document.getElementById('add-to-cart')?.addEventListener('click', function() {
    agregarAlCarrito(this);
  });
  
  document.getElementById('add-to-cart-desktop')?.addEventListener('click', function() {
    agregarAlCarrito(this);
  });
})();<\/script> `])), renderComponent($$result, "Layout", $$Layout, { "title": productTitle, "description": productDescription, "image": productImage, "url": productUrl, "breadcrumbs": breadcrumbs, "data-astro-cid-mvbiubgv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white min-h-screen pb-40 md:pb-12" data-astro-cid-mvbiubgv> <div class="max-w-7xl mx-auto md:grid md:grid-cols-2 md:gap-8 lg:gap-12 md:p-6 lg:p-8 md:items-start" data-astro-cid-mvbiubgv> <!-- GALERÍA DE IMÁGENES --> <div class="relative w-full bg-gradient-to-b from-gray-50 to-white overflow-hidden md:rounded-3xl md:sticky md:top-28 md:h-[calc(100vh-140px)] md:max-h-[600px]" data-astro-cid-mvbiubgv> <!-- ✅ BADGE ESPECIAL PARA RETRO/ESPECIALES --> ${esRetro && renderTemplate`<div class="absolute top-4 left-4 md:top-6 md:left-6 z-30" data-astro-cid-mvbiubgv> <span class="text-[9px] font-black bg-amber-500 text-white px-3 py-1.5 rounded-full tracking-widest shadow-lg" data-astro-cid-mvbiubgv>
EDICIÓN RETRO
</span> </div>`} ${esEspecial && renderTemplate`<div class="absolute top-4 left-4 md:top-6 md:left-6 z-30" data-astro-cid-mvbiubgv> <span class="text-[9px] font-black bg-purple-500 text-white px-3 py-1.5 rounded-full tracking-widest shadow-lg" data-astro-cid-mvbiubgv>
EDICIÓN ESPECIAL
</span> </div>`} <div class="absolute top-4 right-4 md:top-6 md:right-6 pointer-events-none z-30" data-astro-cid-mvbiubgv> <span id="contador-imagenes" class="text-[10px] font-bold bg-black/80 text-white px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 shadow-sm flex items-center gap-1" data-astro-cid-mvbiubgv> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70" data-astro-cid-mvbiubgv><rect width="18" height="18" x="3" y="3" rx="2" ry="2" data-astro-cid-mvbiubgv></rect><circle cx="9" cy="9" r="2" data-astro-cid-mvbiubgv></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" data-astro-cid-mvbiubgv></path></svg>
1 / ${imagenesIniciales.length} </span> </div> ${tieneFan && renderTemplate`<section id="slider-fan"${addAttribute(`slider-container relative w-full h-[420px] sm:h-[480px] md:h-full transition-opacity duration-300 ease-out ${versionInicial === "Fan" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none absolute inset-0"}`, "class")} data-astro-cid-mvbiubgv> <div class="snap-container-fan flex overflow-x-auto snap-x snap-mandatory no-scrollbar h-full w-full" data-astro-cid-mvbiubgv> ${prod.imagenesFan.map((img, index) => renderTemplate`<div class="slider-item-fan min-w-full h-full snap-center flex items-center justify-center p-6 sm:p-8 md:p-10" data-astro-cid-mvbiubgv> <img${addAttribute(img, "src")} class="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"${addAttribute(`${prod.nombre} - Imagen ${index + 1}`, "alt")}${addAttribute(index === 0 ? "eager" : "lazy", "loading")} decoding="async"${addAttribute(index + 1, "data-index")} data-astro-cid-mvbiubgv> </div>`)} </div> <!-- ✅ NO MOSTRAR BADGE DE VERSIÓN PARA RETRO/ESPECIALES --> ${!esEdicionEspecial && renderTemplate`<div class="absolute bottom-5 left-1/2 -translate-x-1/2" data-astro-cid-mvbiubgv> <span class="text-[9px] font-black bg-white/90 text-black px-3 py-1 rounded-full tracking-widest border border-gray-200 backdrop-blur-sm shadow-sm" data-astro-cid-mvbiubgv>VERSION FAN</span> </div>`} </section>`} ${tieneJugador && renderTemplate`<section id="slider-jugador"${addAttribute(`slider-container ${tieneFan ? "absolute inset-0" : "relative"} w-full h-[420px] sm:h-[480px] md:h-full transition-opacity duration-300 ease-out ${versionInicial === "Jugador" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`, "class")} data-astro-cid-mvbiubgv> <div class="snap-container-jugador flex overflow-x-auto snap-x snap-mandatory no-scrollbar h-full w-full" data-astro-cid-mvbiubgv> ${prod.imagenesJugador.map((img, index) => renderTemplate`<div class="slider-item-jugador min-w-full h-full snap-center flex items-center justify-center p-6 sm:p-8 md:p-10" data-astro-cid-mvbiubgv> <img${addAttribute(img, "src")} class="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"${addAttribute(`${prod.nombre} - Versi\xF3n Jugador ${index + 1}`, "alt")}${addAttribute(index === 0 && !tieneFan ? "eager" : "lazy", "loading")} decoding="async"${addAttribute(index + 1, "data-index")} data-astro-cid-mvbiubgv> </div>`)} </div> ${!esEdicionEspecial && renderTemplate`<div class="absolute bottom-5 left-1/2 -translate-x-1/2" data-astro-cid-mvbiubgv> <span class="text-[9px] font-black bg-black text-white px-3 py-1 rounded-full tracking-widest border border-white/20 backdrop-blur-sm shadow-xl" data-astro-cid-mvbiubgv>VERSION JUGADOR</span> </div>`} </section>`} </div> <!-- PANEL DE INFORMACIÓN --> <div class="p-5 sm:p-6 flex flex-col gap-4 sm:gap-5 -mt-4 relative z-20 bg-white rounded-t-[30px] md:mt-0 md:rounded-none md:p-0" data-astro-cid-mvbiubgv> <div class="flex justify-between items-start gap-4" data-astro-cid-mvbiubgv> <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black italic uppercase tracking-tighter leading-none text-[#1a1a1a] flex-1" data-astro-cid-mvbiubgv>${prod.nombre}</h1> <div class="text-right flex-shrink-0" data-astro-cid-mvbiubgv> <p class="text-xl sm:text-2xl md:text-3xl font-black text-black transition-all duration-300" id="precio-display" data-astro-cid-mvbiubgv>Q.${precioInicial}</p> <span class="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-wide" data-astro-cid-mvbiubgv> ${esEdicionEspecial ? "Precio \xDAnico" : "Precio Base"} </span> </div> </div> <!-- ✅ SELECTOR DE VERSIÓN: Solo para productos normales --> ${tieneAmbas && !esEdicionEspecial && renderTemplate`<div class="bg-gray-50 p-1 sm:p-1.5 rounded-xl sm:rounded-2xl flex relative border border-gray-100" data-astro-cid-mvbiubgv> <button class="flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wide transition-all duration-300 bg-white shadow-sm text-black border border-gray-100" id="btn-fan" data-astro-cid-mvbiubgv>
Versión Fan
</button> <button class="flex-1 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wide transition-all duration-300 text-gray-400 hover:text-gray-600 bg-transparent" id="btn-jugador" data-astro-cid-mvbiubgv>
Versión Jugador
</button> </div>`} <!-- ✅ BADGES PARA EDICIONES ESPECIALES --> ${esRetro && renderTemplate`<div class="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-center" data-astro-cid-mvbiubgv> <span class="text-xs font-bold text-amber-700" data-astro-cid-mvbiubgv>🏆 Edición Retro Clásica - Colección Limitada</span> </div>`} ${esEspecial && renderTemplate`<div class="bg-purple-50 border border-purple-200 rounded-xl px-4 py-3 text-center" data-astro-cid-mvbiubgv> <span class="text-xs font-bold text-purple-700" data-astro-cid-mvbiubgv>✨ Edición Especial Limitada</span> </div>`} ${soloFan && !esEdicionEspecial && renderTemplate`<div class="bg-blue-50 border border-blue-200 rounded-xl px-4 py-2 text-center" data-astro-cid-mvbiubgv> <span class="text-xs font-bold text-blue-700" data-astro-cid-mvbiubgv>📦 Solo disponible en Versión Fan</span> </div>`} ${soloJugador && !esEdicionEspecial && renderTemplate`<div class="bg-purple-50 border border-purple-200 rounded-xl px-4 py-2 text-center" data-astro-cid-mvbiubgv> <span class="text-xs font-bold text-purple-700" data-astro-cid-mvbiubgv>⭐ Solo disponible en Versión Jugador</span> </div>`} <!-- ✅ PERSONALIZACIÓN: Ahora cuesta Q.25 --> <div class="space-y-2 sm:space-y-3" data-astro-cid-mvbiubgv> <div class="flex items-center gap-2" data-astro-cid-mvbiubgv> <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400" data-astro-cid-mvbiubgv>Personalización</span> <span class="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded border border-white/20 backdrop-blur-sm shadow-sm" data-astro-cid-mvbiubgv>+Q.25</span> </div> <div class="grid grid-cols-3 gap-2 sm:gap-3" data-astro-cid-mvbiubgv> <div class="col-span-2" data-astro-cid-mvbiubgv> <input type="text" id="input-nombre" placeholder="Nombre (Ej. MESSI)" class="w-full bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold placeholder:font-medium placeholder:text-gray-400 outline-none focus:border-purple-500 focus:ring-2 ring-purple-500/20 transition-all uppercase" style="font-size:16px;" data-astro-cid-mvbiubgv> </div> <div class="col-span-1" data-astro-cid-mvbiubgv> <input type="number" id="input-numero" placeholder="#" class="w-full bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold placeholder:font-medium placeholder:text-gray-400 outline-none focus:border-purple-500 focus:ring-2 ring-purple-500/20 transition-all text-center" style="font-size:16px;" data-astro-cid-mvbiubgv> </div> </div> <!-- ✅ NUEVO: Indicador de costo de personalización --> <div id="personalizacion-notice" class="hidden bg-purple-50 border border-purple-200 rounded-lg px-3 py-2 text-center transition-all duration-300" data-astro-cid-mvbiubgv> <p class="text-[10px] font-bold text-purple-700 flex items-center justify-center gap-1" data-astro-cid-mvbiubgv>
Personalización agregada (+Q.25)
</p> </div> </div> <!-- ✅ PARCHE: Ahora GRATIS --> ${!esEdicionEspecial && renderTemplate`<div class="space-y-2 sm:space-y-3" data-astro-cid-mvbiubgv> <div class="flex items-center gap-2" data-astro-cid-mvbiubgv> <label class="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400 block" data-astro-cid-mvbiubgv>Parche Oficial</label> <span class="bg-green-50 text-green-600 text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded border border-green-100" data-astro-cid-mvbiubgv>GRATIS</span> </div> <div class="flex gap-2 sm:gap-3 items-start" data-astro-cid-mvbiubgv> <div class="relative flex-1" data-astro-cid-mvbiubgv> <button type="button" id="parche-toggle" class="w-full bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-[10px] sm:text-xs font-bold outline-none hover:border-black transition-all flex items-center justify-between group" data-astro-cid-mvbiubgv> <span id="parche-selected" class="uppercase text-gray-400 group-hover:text-black transition-colors" data-astro-cid-mvbiubgv>Sin Parche</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-200" id="parche-arrow" data-astro-cid-mvbiubgv> <path d="m6 9 6 6 6-6" data-astro-cid-mvbiubgv></path> </svg> </button> <div id="parche-dropdown" class="absolute left-0 w-full bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-2xl z-[9999] opacity-0 invisible translate-y-2 transition-all duration-300 overflow-hidden bottom-full mb-2 md:bottom-auto md:top-full md:mt-2 md:mb-0" data-astro-cid-mvbiubgv> <div class="p-1.5 sm:p-2 space-y-0.5 sm:space-y-1 max-h-[200px] overflow-y-auto" data-astro-cid-mvbiubgv> <button type="button" class="parche-option w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-between group" data-value="" data-astro-cid-mvbiubgv> <div class="flex items-center gap-2 sm:gap-3" data-astro-cid-mvbiubgv> <div class="w-7 h-7 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center" data-astro-cid-mvbiubgv> <span class="text-base sm:text-lg" data-astro-cid-mvbiubgv>❌</span> </div> <div data-astro-cid-mvbiubgv> <p class="text-[10px] sm:text-xs font-bold text-gray-700 group-hover:text-black" data-astro-cid-mvbiubgv>Sin Parche</p> <p class="text-[8px] sm:text-[10px] text-gray-400" data-astro-cid-mvbiubgv>Camiseta básica</p> </div> </div> <span class="text-[10px] sm:text-xs font-bold text-green-600" data-astro-cid-mvbiubgv>Gratis</span> </button> <button type="button" class="parche-option w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-between group" data-value="Champions" data-astro-cid-mvbiubgv> <div class="flex items-center gap-2 sm:gap-3" data-astro-cid-mvbiubgv> <div class="w-7 h-7 sm:w-8 sm:h-8 bg-blue-50 rounded-lg overflow-hidden flex items-center justify-center" data-astro-cid-mvbiubgv> <img src="/img/parches/UEFAparche.webp" alt="Champions" class="w-full h-full object-cover" data-astro-cid-mvbiubgv> </div> <div data-astro-cid-mvbiubgv> <p class="text-[10px] sm:text-xs font-bold text-gray-700 group-hover:text-blue-600" data-astro-cid-mvbiubgv>Champions League</p> <p class="text-[8px] sm:text-[10px] text-gray-400" data-astro-cid-mvbiubgv>UEFA Official</p> </div> </div> <span class="text-[10px] sm:text-xs font-bold text-green-600" data-astro-cid-mvbiubgv>Gratis</span> </button> <button type="button" class="parche-option w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-orange-50 transition-colors flex items-center justify-between group" data-value="La Liga" data-astro-cid-mvbiubgv> <div class="flex items-center gap-2 sm:gap-3" data-astro-cid-mvbiubgv> <div class="w-7 h-7 sm:w-8 sm:h-8 bg-orange-50 rounded-lg overflow-hidden flex items-center justify-center" data-astro-cid-mvbiubgv> <img src="/img/parches/LALIGAparche.webp" alt="La Liga" class="w-full h-full object-cover" data-astro-cid-mvbiubgv> </div> <div data-astro-cid-mvbiubgv> <p class="text-[10px] sm:text-xs font-bold text-gray-700 group-hover:text-orange-600" data-astro-cid-mvbiubgv>La Liga</p> <p class="text-[8px] sm:text-[10px] text-gray-400" data-astro-cid-mvbiubgv>España Official</p> </div> </div> <span class="text-[10px] sm:text-xs font-bold text-green-600" data-astro-cid-mvbiubgv>Gratis</span> </button> <button type="button" class="parche-option w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-purple-50 transition-colors flex items-center justify-between group" data-value="Premier" data-astro-cid-mvbiubgv> <div class="flex items-center gap-2 sm:gap-3" data-astro-cid-mvbiubgv> <div class="w-7 h-7 sm:w-8 sm:h-8 bg-purple-50 rounded-lg overflow-hidden flex items-center justify-center" data-astro-cid-mvbiubgv> <img src="/img/parches/PREMIERparche.webp" alt="Premier" class="w-full h-full object-cover" data-astro-cid-mvbiubgv> </div> <div data-astro-cid-mvbiubgv> <p class="text-[10px] sm:text-xs font-bold text-gray-700 group-hover:text-purple-600" data-astro-cid-mvbiubgv>Premier League</p> <p class="text-[8px] sm:text-[10px] text-gray-400" data-astro-cid-mvbiubgv>England Official</p> </div> </div> <span class="text-[10px] sm:text-xs font-bold text-green-600" data-astro-cid-mvbiubgv>Gratis</span> </button> <button type="button" class="parche-option w-full text-left px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-yellow-50 transition-colors flex items-center justify-between group" data-value="Mundial" data-astro-cid-mvbiubgv> <div class="flex items-center gap-2 sm:gap-3" data-astro-cid-mvbiubgv> <div class="w-7 h-7 sm:w-8 sm:h-8 bg-yellow-50 rounded-lg overflow-hidden flex items-center justify-center" data-astro-cid-mvbiubgv> <img src="/img/parches/FIFA parche.webp" alt="Mundial" class="w-full h-full object-cover" data-astro-cid-mvbiubgv> </div> <div data-astro-cid-mvbiubgv> <p class="text-[10px] sm:text-xs font-bold text-gray-700 group-hover:text-yellow-600" data-astro-cid-mvbiubgv>Campeón Mundial</p> <p class="text-[8px] sm:text-[10px] text-gray-400" data-astro-cid-mvbiubgv>FIFA Official</p> </div> </div> <span class="text-[10px] sm:text-xs font-bold text-green-600" data-astro-cid-mvbiubgv>Gratis</span> </button> </div> </div> </div> <div id="parche-preview-container" class="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 rounded-lg sm:rounded-xl border border-dashed border-gray-300 flex items-center justify-center overflow-hidden transition-all duration-300 flex-shrink-0" data-astro-cid-mvbiubgv> <svg id="parche-placeholder" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-300" data-astro-cid-mvbiubgv> <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-astro-cid-mvbiubgv></path> </svg> <img id="parche-img" src="" class="w-full h-full object-contain p-1.5 sm:p-2 hidden opacity-0 transition-opacity duration-300" alt="Parche" data-astro-cid-mvbiubgv> </div> </div> </div>`} <!-- Tallas --> <div class="space-y-2 sm:space-y-3" data-astro-cid-mvbiubgv> <span class="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-400" data-astro-cid-mvbiubgv>Talla</span> <div class="grid grid-cols-5 gap-2" data-astro-cid-mvbiubgv> ${["S", "M", "L", "XL", "XXL"].map((talla) => renderTemplate`<button class="size-btn h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl border-2 border-gray-200 text-gray-700 text-xs sm:text-sm font-bold flex items-center justify-center hover:border-black hover:bg-gray-50 transition-all active:scale-95" data-astro-cid-mvbiubgv> ${talla} </button>`)} </div> </div> <!-- ✅ DISCLAIMER DINÁMICO ACTUALIZADO --> <div${addAttribute(`rounded-xl p-4 border ${esRetro ? "bg-amber-50 border-amber-100" : esEspecial ? "bg-purple-50 border-purple-100" : "bg-gray-50 border-gray-100"}`, "class")} data-astro-cid-mvbiubgv> <p class="text-[10px] sm:text-xs text-gray-600 leading-relaxed" data-astro-cid-mvbiubgv> ${esRetro ? renderTemplate`<span data-astro-cid-mvbiubgv> <span class="font-bold text-amber-700" data-astro-cid-mvbiubgv>🏆 Edición Retro:</span>
Réplica de alta calidad inspirada en los diseños clásicos. Material premium y acabados de colección. Parches gratis.
</span>` : esEspecial ? renderTemplate`<span data-astro-cid-mvbiubgv> <span class="font-bold text-purple-700" data-astro-cid-mvbiubgv>✨ Edición Especial:</span>
Diseño exclusivo de edición limitada. Materiales premium y detalles únicos. Parches gratis.
</span>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-mvbiubgv": true }, { "default": ($$result3) => renderTemplate` <span class="block sm:inline" data-astro-cid-mvbiubgv> <span class="font-bold text-gray-700" data-astro-cid-mvbiubgv>📦 Versión Fan:</span>
Ideal para uso diario, tela cómoda y liviana. Parches gratis • Personalización +Q.25
</span> <span class="block sm:inline sm:ml-2" data-astro-cid-mvbiubgv> <span class="font-bold text-gray-700" data-astro-cid-mvbiubgv>⭐ Versión Jugador:</span>
Tecnología profesional para secado rápido. Parches gratis • Personalización +Q.25
</span> ` })}`} </p> </div> <!-- Botones Desktop --> <div class="hidden md:flex gap-3 mt-2" data-astro-cid-mvbiubgv> <button id="whatsapp-btn-desktop" class="flex-1 bg-[#121212] text-white h-14 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-200" data-astro-cid-mvbiubgv> <span class="bg-white/10 rounded-full p-2 flex items-center justify-center" data-astro-cid-mvbiubgv> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#25D366" data-astro-cid-mvbiubgv> <path d="M12 2C6.486 2 2 6.486 2 12c0 1.994.574 3.84 1.566 5.396L2 22l4.78-1.538A9.93 9.93 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.182a8.13 8.13 0 0 1-4.144-1.127l-.297-.176-2.834.911.923-2.761-.194-.306A8.126 8.126 0 1 1 12 20.182zm4.47-5.693c-.244-.122-1.444-.713-1.667-.794-.223-.082-.386-.122-.549.122-.163.245-.632.794-.774.958-.142.163-.284.183-.528.061-.244-.122-1.03-.38-1.96-1.21-.724-.646-1.212-1.444-1.354-1.688-.142-.244-.015-.375.107-.497.11-.11.244-.285.366-.427.122-.143.163-.244.244-.407.081-.163.041-.305-.02-.427-.061-.122-.549-1.326-.752-1.815-.198-.476-.399-.412-.549-.42-.142-.007-.305-.009-.467-.009-.163 0-.427.061-.651.305-.223.244-.854.834-.854 2.034s.875 2.36.997 2.523c.122.163 1.72 2.628 4.168 3.684.582.251 1.037.401 1.391.513.584.186 1.115.16 1.535.097.468-.07 1.444-.591 1.647-1.163.203-.571.203-1.061.142-1.163-.061-.102-.223-.163-.467-.285z" data-astro-cid-mvbiubgv></path> </svg> </span> <span class="text-sm" data-astro-cid-mvbiubgv>Pedir por WhatsApp</span> </button> <button id="add-to-cart-desktop" class="w-14 h-14 border-2 border-black rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 group" data-astro-cid-mvbiubgv> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-white transition-colors" data-astro-cid-mvbiubgv> <circle cx="8" cy="21" r="1" data-astro-cid-mvbiubgv></circle><circle cx="19" cy="21" r="1" data-astro-cid-mvbiubgv></circle> <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" data-astro-cid-mvbiubgv></path> </svg> </button> </div> </div> </div> <!-- SECCIÓN "TE PODRÍA INTERESAR" --> ${productosRelacionados.length > 0 && renderTemplate`<section class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 border-t border-gray-100 mt-8" data-astro-cid-mvbiubgv> <div class="flex items-center justify-between mb-6 md:mb-8" data-astro-cid-mvbiubgv> <div data-astro-cid-mvbiubgv> <h2 class="text-xl md:text-2xl font-black italic tracking-tight" data-astro-cid-mvbiubgv>Te podría interesar</h2> <p class="text-gray-400 text-sm mt-1" data-astro-cid-mvbiubgv>Otros productos de ${prod.categoria}</p> </div> <a${addAttribute(`/catalogo?categoria=${prod.categoria}`, "href")} class="text-sm font-bold text-gray-500 hover:text-black transition-colors flex items-center gap-1" data-astro-cid-mvbiubgv>
Ver más
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-mvbiubgv><path d="m9 18 6-6-6-6" data-astro-cid-mvbiubgv></path></svg> </a> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" data-astro-cid-mvbiubgv> ${productosRelacionados.map((producto) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "id": producto.id, "nombre": producto.nombre, "precioFan": producto.precioFan, "precioJugador": producto.precioJugador, "imagenesFan": producto.imagenesFan, "imagenesJugador": producto.imagenesJugador, "categoria": producto.categoria, "data-astro-cid-mvbiubgv": true })}`)} </div> </section>`} <!-- Botón Sticky Mobile --> <div id="sticky-whatsapp" class="fixed bottom-[88px] left-0 w-full px-4 sm:px-6 z-[55] md:hidden transition-transform duration-300" data-astro-cid-mvbiubgv> <div class="max-w-md mx-auto flex gap-2 sm:gap-3" data-astro-cid-mvbiubgv> <button id="whatsapp-btn" class="flex-1 bg-[#121212] text-white h-12 sm:h-14 rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-2xl active:scale-95 transition-all duration-200" data-astro-cid-mvbiubgv> <span class="bg-white/10 rounded-full p-1.5 sm:p-2 flex items-center justify-center" data-astro-cid-mvbiubgv> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#25D366" data-astro-cid-mvbiubgv> <path d="M12 2C6.486 2 2 6.486 2 12c0 1.994.574 3.84 1.566 5.396L2 22l4.78-1.538A9.93 9.93 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.182a8.13 8.13 0 0 1-4.144-1.127l-.297-.176-2.834.911.923-2.761-.194-.306A8.126 8.126 0 1 1 12 20.182zm4.47-5.693c-.244-.122-1.444-.713-1.667-.794-.223-.082-.386-.122-.549.122-.163.245-.632.794-.774.958-.142.163-.284.183-.528.061-.244-.122-1.03-.38-1.96-1.21-.724-.646-1.212-1.444-1.354-1.688-.142-.244-.015-.375.107-.497.11-.11.244-.285.366-.427.122-.143.163-.244.244-.407.081-.163.041-.305-.02-.427-.061-.122-.549-1.326-.752-1.815-.198-.476-.399-.412-.549-.42-.142-.007-.305-.009-.467-.009-.163 0-.427.061-.651.305-.223.244-.854.834-.854 2.034s.875 2.36.997 2.523c.122.163 1.72 2.628 4.168 3.684.582.251 1.037.401 1.391.513.584.186 1.115.16 1.535.097.468-.07 1.444-.591 1.647-1.163.203-.571.203-1.061.142-1.163-.061-.102-.223-.163-.467-.285z" data-astro-cid-mvbiubgv></path> </svg> </span> <span class="text-xs sm:text-sm" data-astro-cid-mvbiubgv>Pedir Ahora</span> </button> <button id="add-to-cart" class="w-12 h-12 sm:w-14 sm:h-14 border-2 border-black bg-white rounded-xl sm:rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-200 group shadow-lg" data-astro-cid-mvbiubgv> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-white transition-colors" data-astro-cid-mvbiubgv> <circle cx="8" cy="21" r="1" data-astro-cid-mvbiubgv></circle><circle cx="19" cy="21" r="1" data-astro-cid-mvbiubgv></circle> <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" data-astro-cid-mvbiubgv></path> </svg> </button> </div> </div> </main> ` }), defineScriptVars({
    precioFan: prod.precioFan,
    precioJugador: prod.precioJugador,
    nombreProd: prod.nombre,
    tieneFan,
    tieneJugador,
    tieneAmbas,
    esEdicionEspecial,
    versionInicial,
    totalFan: prod.imagenesFan ? prod.imagenesFan.length : 0,
    totalJugador: prod.imagenesJugador ? prod.imagenesJugador.length : 0
  }));
}, "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/producto/[id].astro", void 0);

const $$file = "C:/Users/EddyA/Escritorio/camiZona/camizonas-web/src/pages/producto/[id].astro";
const $$url = "/producto/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
