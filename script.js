// EDITA ESTE BLOQUE PARA CAMBIAR TU MENÚ. Precios ilustrativos en MXN.
const productos = [
  { nombre: 'Taco al pastor', precio: 24, categoria: 'tacos', emoji: '🌮', descripcion: 'Carne al pastor, cebolla, cilantro y piña.' },
  { nombre: 'Taco de suadero', precio: 30, categoria: 'tacos', emoji: '🌮', descripcion: 'Suadero doradito con cebolla y cilantro.' },
  { nombre: 'Taco de bistec', precio: 35, categoria: 'tacos', emoji: '🥩', descripcion: 'Bistec recién hecho en tortilla de maíz.' },
  { nombre: 'Taco campechano', precio: 35, categoria: 'tacos', emoji: '🌶️', descripcion: 'Combinación de suadero y longaniza.' },
  { nombre: 'Gringa al pastor', precio: 95, categoria: 'especiales', emoji: '🧀', descripcion: 'Tortilla de harina, queso fundido y pastor.' },
  { nombre: 'Quesadilla con queso', precio: 45, categoria: 'especiales', emoji: '🫓', descripcion: 'Queso derretido en tortilla calientita.' },
  { nombre: 'Orden de cebollitas', precio: 45, categoria: 'especiales', emoji: '🧅', descripcion: 'Cebollitas asadas para acompañar.' },
  { nombre: 'Agua fresca', precio: 35, categoria: 'bebidas', emoji: '🥤', descripcion: 'Vaso de 500 ml. Sabores sujetos a disponibilidad.' },
  { nombre: 'Refresco', precio: 30, categoria: 'bebidas', emoji: '🧊', descripcion: 'Presentación individual de 355 ml.' }
];

// CONFIGURACIÓN: número de WhatsApp con código de país y sin +, espacios ni guiones.
// Ejemplo: '525512345678'. Déjalo vacío hasta que tengas un número real.
const whatsappNumero = '';

const formatoPrecio = numero => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(numero);
const menuGrid = document.querySelector('#menu-grid');
function mostrarMenu(categoria = 'todos') {
  menuGrid.replaceChildren();
  productos.filter(p => categoria === 'todos' || p.categoria === categoria).forEach(p => {
    const article = document.createElement('article');
    article.className = 'menu-item';
    const top = document.createElement('div'); top.className = 'item-top';
    const emoji = document.createElement('div'); emoji.className = 'item-icon'; emoji.textContent = p.emoji;
    const precio = document.createElement('span'); precio.className = 'item-price'; precio.textContent = formatoPrecio(p.precio);
    const nombre = document.createElement('h3'); nombre.className = 'item-title'; nombre.textContent = p.nombre;
    const descripcion = document.createElement('p'); descripcion.className = 'item-desc'; descripcion.textContent = p.descripcion;
    top.append(emoji, precio); article.append(top, nombre, descripcion); menuGrid.append(article);
  });
}
document.querySelectorAll('.filter').forEach(boton => boton.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
  boton.classList.add('active'); boton.setAttribute('aria-pressed', 'true'); mostrarMenu(boton.dataset.filter);
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const whatsappLink = document.querySelector('#whatsapp-link');
if (/^\d{10,15}$/.test(whatsappNumero)) {
  whatsappLink.href = `https://wa.me/${whatsappNumero}?text=${encodeURIComponent('Hola, quiero hacer un pedido 🌮')}`;
  whatsappLink.target = '_blank'; whatsappLink.rel = 'noopener noreferrer';
  document.querySelector('.setup-hint').hidden = true;
} else {
  whatsappLink.addEventListener('click', event => {event.preventDefault(); alert('Configura primero el número de WhatsApp en script.js.');});
}
mostrarMenu();
