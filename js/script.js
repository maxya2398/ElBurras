document.addEventListener('DOMContentLoaded', () => {
    display_ct();
    platillos();
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    draggable: true,
                }
            }
        ]
    });
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
    limpiarHtml(contenedorPlatillos)
    burritos.forEach(burrito => contenedorPlatillos.appendChild(burrito))
    mostrarPlatillos(burritos, gringas, tacos, tortas)
}
const mostrarPlatillos = (burritos, gringas, tacos, tortas) => {
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
}
const limpiarHtml = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);

    }
}


const promocion1 = document.querySelector('.card_inner1');
const promocion2 = document.querySelector('.card_inner2');
const promocion3 = document.querySelector('.card_inner3');
const promocion4 = document.querySelector('.card_inner4');
promocion1.addEventListener('click', () => {
    promocion1.classList.toggle('is-flipped');
})
promocion2.addEventListener('click', () => {
    promocion2.classList.toggle('is-flipped');
})
promocion3.addEventListener('click', () => {
    promocion3.classList.toggle('is-flipped');
})
promocion4.addEventListener('click', () => {
    promocion4.classList.toggle('is-flipped');
})