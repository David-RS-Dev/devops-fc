const equiposGrupoB = [
  {
    id: "canada",
    nombre: "Canadá",
    badge: "Anfitrión",
    imagen:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Canadá llega como país anfitrión y busca hacer historia en casa.",
    curiosidades: [
      "Canadá es uno de los tres países anfitriones del Mundial 2026.",
      "Su participación como local aumenta el interés de sus aficionados.",
      "El equipo busca consolidar su crecimiento futbolístico en Norteamérica.",
      "Su grupo mezcla selecciones de Concacaf, UEFA y Asia.",
    ],
    jugadores: ["Alphonso Davies", "Jonathan David", "Tajon Buchanan"],
  },
  {
    id: "bosnia",
    nombre: "Bosnia y Herzegovina",
    badge: "UEFA",
    imagen:
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Bosnia y Herzegovina vuelve a una Copa del Mundo con ilusión renovada.",
    curiosidades: [
      "Regresa al escenario mundialista después de su participación de 2014.",
      "Es una selección europea con tradición técnica y jugadores fuertes físicamente.",
      "Puede convertirse en una de las sorpresas del grupo.",
      "El duelo ante Canadá abre su camino mundialista.",
    ],
    jugadores: ["Edin Džeko", "Miralem Pjanić", "Ermedin Demirović"],
  },
  {
    id: "qatar",
    nombre: "Qatar",
    badge: "AFC",
    imagen:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=80",
    descripcion: "Qatar llega tras haber sido anfitrión del Mundial 2022.",
    curiosidades: [
      "Fue país anfitrión de la Copa Mundial 2022.",
      "Su presencia mantiene representación asiática en el Grupo B.",
      "El equipo ha ganado experiencia internacional en los últimos años.",
      "Busca competir mejor que en su anterior aparición mundialista.",
    ],
    jugadores: ["Akram Afif", "Almoez Ali", "Hassan Al-Haydos"],
  },
  {
    id: "suiza",
    nombre: "Suiza",
    badge: "Favorito del grupo",
    imagen:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Suiza aparece como una de las selecciones más sólidas del Grupo B.",
    curiosidades: [
      "Suiza llega como el equipo europeo de mayor regularidad del grupo.",
      "Tiene experiencia reciente en torneos grandes.",
      "Es considerada una candidata fuerte para avanzar de ronda.",
      "Su organización defensiva suele ser una de sus fortalezas.",
    ],
    jugadores: ["Granit Xhaka", "Manuel Akanji", "Breel Embolo"],
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

  for (let i = 0; i < equiposGrupoB.length; i++) {
    let equipo = equiposGrupoB[i];

    let card = document.createElement("button");
    card.className = "team-card";
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
  for (let i = 0; i < equiposGrupoB.length; i++) {
    if (equiposGrupoB[i].id === idEquipo) {
      return equiposGrupoB[i];
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
