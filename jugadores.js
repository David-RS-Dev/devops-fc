const cromosMundial = [];

function crearCromoJugador(
  id,
  nombre,
  pais,
  posicion,
  urlImagen,
  urlBandera,
  colorFondoHex,
  goles,
  partidos,
  destacado,
) {
  return {
    id: id,
    nombre: nombre,
    pais: pais,
    posicion: posicion,
    urlImagen: urlImagen,
    urlBandera: urlBandera,
    colorFondoHex: colorFondoHex,
    estadisticas: {
      goles: goles,
      partidos: partidos,
    },
    destacado: destacado,
  };
}

function renderizarAlbum() {
  const contenedor = document.getElementById("albumGrid");
  const totalCromos = document.getElementById("totalCromos");

  if (!contenedor) return;

  contenedor.innerHTML = "";

  cromosMundial.forEach(function (jugador) {
    const card = document.createElement("article");

    card.className = "card-cromo";
    card.style.background = jugador.colorFondoHex;

    card.innerHTML = `
      <img src="${jugador.urlImagen}" alt="${jugador.nombre}">
      <h3>${jugador.nombre}</h3>
      <p>${jugador.pais}</p>
      <p>${jugador.posicion}</p>
      <p>Goles: ${jugador.estadisticas.goles}</p>
      <p>Partidos: ${jugador.estadisticas.partidos}</p>
    `;

    contenedor.appendChild(card);
  });

  if (totalCromos) {
    totalCromos.textContent = cromosMundial.length;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderizarAlbum();
});
