const cromosMundial = [];

cromosMundial.push(
  crearCromoJugador({
    id: 1,
    nombre: "Alphonso Davies",
    pais: "Canadá",
    posicion: "Defensa",
    urlImagen:
      "https://www.ole.com.ar/images/2023/06/11/b3CfoIUe__1290x650__1.jpg",
    urlBandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png",
    colorFondoHex: "#D80621",
    estadisticas: {
      goles: 15,
      partidos: 50,
    },
    destacado: true,
    curiosidad: "Es considerado uno de los laterales más rápidos del mundo.",
  }),

  crearCromoJugador({
    id: 2,
    nombre: "Jonathan David",
    pais: "Canadá",
    posicion: "Delantero",
    urlImagen:
      "https://www.ole.com.ar/images/2026/06/18/NjjANbpLA_400x400__1.jpg",
    urlBandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png",
    colorFondoHex: "#D80621",
    estadisticas: {
      goles: 32,
      partidos: 62,
    },
    destacado: true,
    curiosidad: "Es el máximo goleador histórico de la selección canadiense.",
  }),

  crearCromoJugador({
    id: 3,
    nombre: "Granit Xhaka",
    pais: "Suiza",
    posicion: "Mediocampista",
    urlImagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNIWrOICPkTUlUIUSFMgXcHiv3mIEmtbLTXLb6zKxCMQ&s=10",
    urlBandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1280px-Flag_of_Switzerland.svg.png",
    colorFondoHex: "#D52B1E",
    estadisticas: {
      goles: 14,
      partidos: 135,
    },
    destacado: true,
    curiosidad:
      "Ha sido capitán de Suiza durante varios torneos internacionales.",
  }),

  crearCromoJugador({
    id: 4,
    nombre: "Breel Embolo",
    pais: "Suiza",
    posicion: "Delantero",
    urlImagen:
      "https://www.ole.com.ar/images/2022/12/24/U_cYSOkts_720x0__1.jpg",
    urlBandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/1280px-Flag_of_Switzerland.svg.png",
    colorFondoHex: "#D52B1E",
    estadisticas: {
      goles: 18,
      partidos: 72,
    },
    destacado: false,
    curiosidad: "Debutó con la selección absoluta cuando tenía apenas 17 años.",
  }),

  crearCromoJugador({
    id: 5,
    nombre: "Akram Afif",
    pais: "Qatar",
    posicion: "Extremo",
    urlImagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Sj7vyn92j5_UnJ5mOGxb3iTWXvqIw1aHrQaK35MIhA&s=10",
    urlBandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1280px-Flag_of_Qatar.svg.png",
    colorFondoHex: "#8A1538",
    estadisticas: {
      goles: 33,
      partidos: 112,
    },
    destacado: true,
    curiosidad: "Fue el mejor jugador de la Copa Asiática 2023.",
  }),

  crearCromoJugador({
    id: 6,
    nombre: "Edin Džeko",
    pais: "Bosnia y Herzegovina",
    posicion: "Delantero",
    urlImagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rKZHadAOEXMBofwsYrk4qNUrdkLRlcZtTn_j2c4sNA&s=10",
    urlBandera:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1280px-Flag_of_Bosnia_and_Herzegovina.svg.png",
    colorFondoHex: "#002F6C",
    estadisticas: {
      goles: 67,
      partidos: 140,
    },
    destacado: true,
    curiosidad: "Es el máximo goleador histórico de Bosnia y Herzegovina.",
  }),
);

function crearCromoJugador(datosJugador) {
  return {
    id: datosJugador.id,
    nombre: datosJugador.nombre,
    pais: datosJugador.pais,
    posicion: datosJugador.posicion,
    urlImagen: datosJugador.urlImagen,
    urlBandera: datosJugador.urlBandera,
    colorFondoHex: datosJugador.colorFondoHex,
    estadisticas: {
      goles: datosJugador.estadisticas.goles,
      partidos: datosJugador.estadisticas.partidos,
    },
    destacado: datosJugador.destacado,
    curiosidad: datosJugador.curiosidad,
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
      <p>${jugador.curiosidad}</p>
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
