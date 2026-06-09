const equiposGrupoD = [
  {
    id: "alemania",
    nombre: "Alemania",
    badge: "UEFA",
    imagen: "../img/alemania.png",
    descripcion:
      "Potencia histórica del fútbol, cuatro veces campeona del mundo, con tradición táctica y técnica.",
    curiosidades: [
      "Alemania ha ganado 4 Copas del Mundo (1954, 1974, 1990, 2014).",
      "Ha jugado 112 partidos mundialistas, solo superada por Brasil.",
      "Es el país europeo con más finales jugadas (8).",
      "Fue la primera selección en usar camisetas numeradas en un Mundial (1934).",
      "En 1954 venció a Hungría en la final, considerada uno de los mayores “milagros” del fútbol."
    ],
    jugadores: ["Jamal Musiala (Bayern Múnich)", "Kai Havertz (Arsenal)", "Joshua Kimmich (Bayern)"],
  },
  {
    id: "curazao",
    nombre: "Curazao",
    badge: "CONCACAF",
    imagen: "../img/curazao.png",
    descripcion:
      "La gran sorpresa del torneo, debutante absoluto en un Mundial.",
    curiosidades: [
      "Es el país más pequeño en clasificarse a un Mundial (150.000 habitantes).",
      "Fue parte de las Antillas Neerlandesas hasta 2010; desde entonces compite como Curazao.",
      "Su selección está formada en gran parte por jugadores nacidos en Países Bajos.",
      "Es su primer Mundial absoluto, dirigido por Dick Advocaat.",
    ],
    jugadores: ["Cuco Martina (ex Southampton)", "Leandro Bacuna (Watford)", "Vurnon Anita (ex Newcastle)"],
  },
  {
    id: "costaM",
    nombre: "Costa de Marfil",
    badge: "CAF",
    imagen: "../img/costaMarfil.png",
    descripcion:
      "Potencia africana, campeona de la Copa Africana de Naciones 2024, regresa al Mundial tras 12 años.",
    curiosidades: [
      "Debutó en un Mundial en 2006.",
      "Ha tenido generaciones doradas con Didier Drogba y Yaya Touré.",
      "Ganó la Copa Africana de Naciones 2024 como anfitrión.",
      "Es conocida por su estilo físico y ofensivo, con gran talento en Europa.",
    ],
    jugadores: ["Sébastien Haller (Borussia Dortmund)", "Franck Kessié (Al-Ahli)", "Wilfried Zaha (Galatasaray)"],
  },
  {
    id: "ecuador",
    nombre: "Ecuador",
    badge: "COMEBOL",
    imagen: "../img/ecuador.png",
    descripcion:
      "Selección sudamericana en crecimiento, con cinco participaciones mundialistas y gran solidez defensiva.",
    curiosidades: [
      "Su primera participación mundialista fue en 2002.",
      "En 2006 llegó a octavos de final, su mejor actuación.",
      "Enner Valencia es el máximo goleador histórico de Ecuador en Mundiales.",
      "Kendry Páez es uno de los jugadores más jóvenes en debutar en un Mundial (18 años).",
    ],
    jugadores: [" Moisés Caicedo (Chelsea)", "Piero Hincapié (Arsenal)", "Enner Valencia (Internacional)","Wiliam Pacho (PSG)"],
  },
];

function obtenerElemento(id) {
  return document.getElementById(id);
}

function alternarMenu() {
  let menu = obtenerElemento("mainNav");

  if (menu !== null) {
    menu.classList.toggle("open");
  }
}

function scrollEquipos() {
  let seccion = obtenerElemento("equiposGrupo");

  if (seccion !== null) {
    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function scrollResumen() {
  let seccion = obtenerElemento("resumenGrupo");

  if (seccion !== null) {
    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function pintarEquipos() {
  let contenedor = obtenerElemento("teamGrid");

  if (contenedor === null) {
    return;
  }

  contenedor.innerHTML = "";

  for (let i = 0; i < equiposGrupoD.length; i++) {
    let equipo = equiposGrupoD[i];

    let card = document.createElement("button");
    card.className = "team-card";
    card.type = "button";
    card.onclick = function () {
      window.location.href = `${equipo.id}.html`;
    };

    card.innerHTML = `
      <img src="${equipo.imagen}" alt="${equipo.nombre}">
      <div class="team-card__body">
        <span>${equipo.badge}</span>
        <h3>${equipo.nombre}</h3>
        <p>${equipo.descripcion}</p>
      </div>
    `;

    contenedor.appendChild(card);
  }
}

function buscarEquipo(idEquipo) {
  for (let i = 0; i < equiposGrupoD.length; i++) {
    if (equiposGrupoD[i].id === idEquipo) {
      return equiposGrupoD[i];
    }
  }

  return null;
}

function abrirSidebarEquipo(idEquipo) {
  let equipo = buscarEquipo(idEquipo);

  if (equipo === null) {
    return;
  }

  obtenerElemento("drawerImg").src = equipo.imagen;
  obtenerElemento("drawerImg").alt = equipo.nombre;
  obtenerElemento("drawerBadge").innerText = equipo.badge;
  obtenerElemento("drawerTitle").innerText = equipo.nombre;
  obtenerElemento("drawerDescription").innerText = equipo.descripcion;

  let curiosidades = obtenerElemento("drawerCuriosities");
  curiosidades.innerHTML = "";

  for (let i = 0; i < equipo.curiosidades.length; i++) {
    let item = document.createElement("li");
    item.innerText = equipo.curiosidades[i];
    curiosidades.appendChild(item);
  }

  let jugadores = obtenerElemento("drawerPlayers");
  jugadores.innerHTML = "";

  for (let i = 0; i < equipo.jugadores.length; i++) {
    let etiqueta = document.createElement("span");
    etiqueta.innerText = equipo.jugadores[i];
    jugadores.appendChild(etiqueta);
  }

  obtenerElemento("teamDrawer").classList.add("open");
  obtenerElemento("drawerBackdrop").classList.add("show");
}

function cerrarSidebarEquipo() {
  obtenerElemento("teamDrawer").classList.remove("open");
  obtenerElemento("drawerBackdrop").classList.remove("show");
}

pintarEquipos();