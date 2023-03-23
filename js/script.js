document.addEventListener('DOMContentLoaded', () => {
    display_ct();
    platillos();
})
function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}

function display_ct() {
    var x = new Date()
    let dia = x.getDay();
    let hora = x.getHours();
    document.getElementById(dia).classList.add('list-group-item-success');
    if (dia === 2 || (hora < 17 || hora >= 23)) {
        document.getElementById('botonDisponibilidad').classList.add('btn-danger');
        document.getElementById('botonDisponibilidad').innerHTML = 'Cerrado'
        document.getElementById('textoAbiertoCerrado').innerHTML = 'Nuestro negocio se encuentra cerrado por el momento. ¡Revisa nuestra carta haz tu pedido apenas abrimos!'

    } else {
        document.getElementById('botonDisponibilidad').classList.add('btn-success');
        document.getElementById('botonDisponibilidad').innerHTML = 'Abierto'
        document.getElementById('textoAbiertoCerrado').innerHTML = 'Estamos laborando. ¡Contáctanos para hacer tu pedido!'
    }
    display_c();
}

const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnBurritos = document.querySelector('.burritosBtn');
const btnGringas = document.querySelector('.gringasBtn');
const btnTacos = document.querySelector('.tacosBtn');
const btnTortas = document.querySelector('.tortasBtn');
const contenedorPlatillos = document.querySelector('.platillos');


imagenes.forEach(imagen => {
    imagen.src = imagen.dataset.src;
})
const platillos = () => {
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');
    platillos.forEach(platillo => {
        platillosArreglo = [...platillosArreglo, platillo]
    })
    const burritos = platillosArreglo.filter(burrito => burrito.getAttribute('data-platillo') === 'burrito');
    const gringas = platillosArreglo.filter(gringa => gringa.getAttribute('data-platillo') === 'gringa');
    const tacos = platillosArreglo.filter(tacos => tacos.getAttribute('data-platillo') === 'tacos');
    const tortas = platillosArreglo.filter(tortas => tortas.getAttribute('data-platillo') === 'tortas');
    mostrarPlatillos(burritos, gringas, tacos, tortas, platillosArreglo)
}
const mostrarPlatillos = (burritos, gringas, tacos, tortas, todos) => {
    btnBurritos.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos)
        burritos.forEach(burrito => contenedorPlatillos.appendChild(burrito))
    })

    btnGringas.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos)
        gringas.forEach(gringa => contenedorPlatillos.appendChild(gringa))
    })

    btnTacos.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos)
        tacos.forEach(taco => contenedorPlatillos.appendChild(taco))
    })

    btnTortas.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos)
        tortas.forEach(torta => contenedorPlatillos.appendChild(torta))
    });

    btnTodos.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos)
        todos.forEach(todo => contenedorPlatillos.appendChild(todo))
    })
}
const limpiarHtml = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);

    }
}
//seccion videos, checar si funciona mejor luego
// let videoBtn = document.querySelectorAll('.vid-btn');
// videoBtn.forEach((btn) => {
//     console.log('hey')
//     btn.addEventListener('click', () => {
//         document.querySelector('.controls .active').classList.remove('active');
//         btn.classList.add('active');
//         let src = btn.getAttribute('data-src');
//         document.querySelector('#video-slider').src = src;
//     });
// });
