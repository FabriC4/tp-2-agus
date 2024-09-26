const botonMenu = document.querySelector('#menu_responsivo');
const menuNavegacion = document.querySelector('.menu_navegacion');

botonMenu.addEventListener('click', () => {
    menuNavegacion.classList.toggle('menu_abierto');
});

const carruselContenido = document.querySelector('.carrusel_contenido');
let indice = 0;

function moverCarrusel(direccion) {
    const totalItems = document.querySelectorAll('.producto_item').length;
    const itemsVisibles = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1;
    const maxIndice = totalItems - itemsVisibles;

    if (direccion === 'siguiente') {
        indice = indice < maxIndice ? indice + 1 : 0;
    } else if (direccion === 'anterior') {
        indice = indice > 0 ? indice - 1 : maxIndice;
    }

    const desplazamiento = indice * -100 / itemsVisibles;
    carruselContenido.style.transform = `translateX(${desplazamiento}%)`;
}

document.querySelector('#siguiente').addEventListener('click', () => moverCarrusel('siguiente'));
document.querySelector('#anterior').addEventListener('click', () => moverCarrusel('anterior'));
