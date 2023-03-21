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