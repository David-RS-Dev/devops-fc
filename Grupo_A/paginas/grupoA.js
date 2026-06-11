const equiposGrupoA = [
  {
    id: "mexico",
    nombre: "México",
    badge: "Anfitrión",
    imagen:
      "https://i0.wp.com/laverdadnoticias.com/wp-content/uploads/2025/12/Mexico-en-el-Mundial-2026.jpg",
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
    id: "coreaDelSur",
    nombre: "Corea del Sur",
    badge: "AFC",
    imagen:
      "https://yrdbjwyvojsmeajcrdli.supabase.co/storage/v1/object/public/news/convocatoria-corea-sur-mundial-2026-hong-myung-bo-son-1779234345508.png",
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
      "https://welcomeafrica.org/wp-content/uploads/2026/04/Sudafrica-MundialFutbol2026.jpg",
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
      "https://objetos-xlk.estaticos-marca.com/uploads/2026/03/31/69cc36f740376.jpeg",
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
