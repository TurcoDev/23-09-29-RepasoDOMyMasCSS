
function eventosBotones() {
  const botonAgregar = document.getElementById("boton-agregar");
  botonAgregar.addEventListener('click', agregarCajas);
  const botonResetear = document.getElementById("boton-resetear");
  botonResetear.addEventListener('click', resetearCajas);
}

eventosBotones();


function resetearCajas() {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = '';
}

function agregarCajas() {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML += `<div class="caja"></div>`;
}

// Creamos un nodo en el HTML
function agregarCajas2() {
  const contenedor = document.getElementById("contenedor");

  const nuevaCaja = document.createElement('div');
  nuevaCaja.classList.add('caja');
  console.log(nuevaCaja);
  contenedor.appendChild(nuevaCaja);

}

agregarCajas2();