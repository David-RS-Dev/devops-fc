const equiposGrupoA = [
  {
    id: "mexico",
    nombre: "México",
    badge: "Anfitrión",
    imagen:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "México llega como país anfitrión con la ilusión de trascender en casa.",
    curiosidades: [
      "México es uno de los tres países anfitriones del Mundial 2026.",
      "Será la tercera vez que México organice una Copa del Mundo.",
      "El Tri busca romper su racha de octavos de final.",
      "Su grupo combina selecciones de Concacaf, AFC, CAF y UEFA.",
    ],
    jugadores: ["Hirving Lozano", "Edson Álvarez", "Santiago Giménez"],
  },
  {
    id: "corea",
    nombre: "Corea del Sur",
    badge: "AFC",
    imagen:
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Corea del Sur llega con su característica intensidad y talento técnico.",
    curiosidades: [
      "Corea del Sur es una de las selecciones más consistentes de Asia.",
      "Cuenta con figuras que brillan en las principales ligas europeas.",
      "Su estilo de juego presionante los hace peligrosos ante cualquier rival.",
      "Busca repetir el histórico cuarto lugar conseguido en 2002.",
    ],
    jugadores: ["Son Heung-min", "Kim Min-jae", "Lee Kang-in"],
  },
  {
    id: "sudafrica",
    nombre: "Sudáfrica",
    badge: "CAF",
    imagen:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Sudáfrica regresa al Mundial con un equipo joven y lleno de garra.",
    curiosidades: [
      "Sudáfrica fue sede del Mundial 2010, el primero en territorio africano.",
      "Conocidos como Bafana Bafana, buscan superar la fase de grupos.",
      "Su fútbol combina velocidad, físico y talento individual.",
      "Representan con orgullo al continente africano en Norteamérica.",
    ],
    jugadores: ["Percy Tau", "Themba Zwane", "Ronwen Williams"],
  },
  {
    id: "chequia",
    nombre: "Chequia",
    badge: "UEFA",
    imagen:
      "https://images.unsplash.com/photo-1549131068-1d6b2c3c3b3c?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Chequia llega con la solidez táctica que caracteriza al fútbol centroeuropeo.",
    curiosidades: [
      "Chequia es heredera de la tradición futbolística de Checoslovaquia.",
      "Tienen un estilo de juego ordenado y efectivo en ataque.",
      "Cuentan con jugadores experimentados en ligas top de Europa.",
      "Pueden ser el equipo revelación del Grupo A.",
    ],
    jugadores: ["Tomáš Souček", "Patrik Schick", "Vladimír Coufal"],
  },
];

function obtenerElementoA(id) {
  return document.getElementById(id);
}

function alternarMenuA() {
  let menu = obtenerElementoA("mainNav");

  if (menu !== null) {
    menu.classList.toggle("open");
  }
}

function scrollEquiposA() {
  let seccion = obtenerElementoA("equiposGrupoA");

  if (seccion !== null) {
    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function scrollResumenA() {
  let seccion = obtenerElementoA("resumenGrupoA");

  if (seccion !== null) {
    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function pintarEquiposA() {
  let contenedor = obtenerElementoA("teamGridA");

  if (contenedor === null) {
    return;
  }

  contenedor.innerHTML = "";

  for (let i = 0; i < equiposGrupoA.length; i++) {
    let equipo = equiposGrupoA[i];

    let card = document.createElement("button");
    card.className = "team-card";
    card.onclick = function () {
      abrirSidebarEquipoA(equipo.id);
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

function buscarEquipoA(idEquipo) {
  for (let i = 0; i < equiposGrupoA.length; i++) {
    if (equiposGrupoA[i].id === idEquipo) {
      return equiposGrupoA[i];
    }
  }

  return null;
}

function abrirSidebarEquipoA(idEquipo) {
  let equipo = buscarEquipoA(idEquipo);

  if (equipo === null) {
    return;
  }

  obtenerElementoA("drawerImgA").src = equipo.imagen;
  obtenerElementoA("drawerImgA").alt = equipo.nombre;
  obtenerElementoA("drawerBadgeA").innerText = equipo.badge;
  obtenerElementoA("drawerTitleA").innerText = equipo.nombre;
  obtenerElementoA("drawerDescriptionA").innerText = equipo.descripcion;

  let curiosidades = obtenerElementoA("drawerCuriositiesA");
  curiosidades.innerHTML = "";

  for (let i = 0; i < equipo.curiosidades.length; i++) {
    let item = document.createElement("li");
    item.innerText = equipo.curiosidades[i];
    curiosidades.appendChild(item);
  }

  let jugadores = obtenerElementoA("drawerPlayersA");
  jugadores.innerHTML = "";

  for (let i = 0; i < equipo.jugadores.length; i++) {
    let etiqueta = document.createElement("span");
    etiqueta.innerText = equipo.jugadores[i];
    jugadores.appendChild(etiqueta);
  }

  obtenerElementoA("teamDrawerA").classList.add("open");
  obtenerElementoA("drawerBackdropA").classList.add("show");
}

function cerrarSidebarEquipoA() {
  obtenerElementoA("teamDrawerA").classList.remove("open");
  obtenerElementoA("drawerBackdropA").classList.remove("show");
}

pintarEquiposA();