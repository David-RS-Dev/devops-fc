const equiposGrupoD = [
  {
    id: "usa",
    nombre: "Estados Unidos",
    badge: "Anfitrión",
    imagen: "../img/usa.jpg",
    descripcion:
      "Estados Unidos disputa el Mundial como país anfitrión y buscará aprovechar la localía para avanzar.",
    curiosidades: [
      "Es uno de los tres anfitriones del Mundial 2026.",
      "Su mejor resultado fue el tercer lugar en 1930.",
      "Christian Pulisic es una de sus principales figuras.",
      "Llega con una generación joven y competitiva.",
    ],
    jugadores: ["Christian Pulisic", "Weston McKennie", "Tim Weah"],
  },
  {
    id: "paraguay",
    nombre: "Paraguay",
    badge: "CONMEBOL",
    imagen: "../img/paraguay.jpg",
    descripcion:
      "Paraguay regresa a una Copa del Mundo con una selección competitiva y de tradición sudamericana.",
    curiosidades: [
      "Su mejor participación fue cuartos de final en 2010.",
      "Se caracteriza históricamente por su fortaleza defensiva.",
      "Es una selección con tradición en CONMEBOL.",
      "Cuenta con jugadores de experiencia internacional.",
    ],
    jugadores: ["Miguel Almirón", "Julio Enciso", "Gustavo Gómez"],
  },
  {
    id: "australia",
    nombre: "Australia",
    badge: "AFC",
    imagen: "../img/australia.jpg",
    descripcion:
      "Australia llega con experiencia mundialista y un estilo físico, intenso y competitivo.",
    curiosidades: [
      "Ha participado en varios Mundiales consecutivos.",
      "Alcanzó octavos de final en 2006 y 2022.",
      "Representa a la Confederación Asiática.",
      "Es conocida por su intensidad física.",
    ],
    jugadores: ["Mathew Ryan", "Jackson Irvine", "Kusini Yengi"],
  },
  {
    id: "turquia",
    nombre: "Turquía",
    badge: "UEFA",
    imagen: "../img/turquia.jpg",
    descripcion:
      "Turquía vuelve con una generación joven, técnica y con jugadores destacados en Europa.",
    curiosidades: [
      "Terminó tercera en el Mundial de 2002.",
      "Tiene una afición muy apasionada.",
      "Cuenta con jugadores en ligas europeas importantes.",
      "Es una selección peligrosa por su talento ofensivo.",
    ],
    jugadores: ["Hakan Çalhanoğlu", "Arda Güler", "Kenan Yıldız"],
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
      abrirSidebarEquipo(equipo.id);
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