let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    if (!carritoDiv) return; // Verifica que #carrito esté presente en tu HTML
    carritoDiv.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        carritoDiv.innerHTML += `<p>${producto.nombre} - $${producto.precio.toFixed(2)} 
        <button onclick="eliminarDelCarrito(${index})">Eliminar</button></p>`;
        total += producto.precio;
    });

    carritoDiv.innerHTML += `<p>Total: $${total.toFixed(2)}</p>`;
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarContadorCarrito();
    mostrarCarrito();
}

function actualizarContadorCarrito() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = carrito.length;
    }
}

function enviarPorWhatsApp() {
    let mensaje = '¡Hola! Aquí está tu pedido:\n';

    // Agregar cada producto al mensaje
    carrito.forEach((producto) => {
        mensaje += `${producto.nombre} - $${producto.precio.toFixed(2)}\n`;
    });

    // Agregar el total al mensaje
    let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    mensaje += `Total: $${total.toFixed(2)}`;

    // Codificar el mensaje para usarlo en el enlace de WhatsApp
    let mensajeCodificado = encodeURIComponent(mensaje);

    // Crear el enlace de WhatsApp con el mensaje predefinido
    let enlaceWhatsApp = `https://wa.me/3496540915?text=${mensajeCodificado}`;

    // Abrir la ventana de WhatsApp en una nueva pestaña
    window.open(enlaceWhatsApp, '_blank');
}

// Asignar la función enviarPorWhatsApp al botón correspondiente
const btnEnviarWhatsApp = document.getElementById('btnEnviarWhatsApp');
if (btnEnviarWhatsApp) {
    btnEnviarWhatsApp.addEventListener('click', enviarPorWhatsApp);
}

// Ejecutar al cargar la página
window.onload = () => {
    actualizarContadorCarrito();
    mostrarCarrito();
};