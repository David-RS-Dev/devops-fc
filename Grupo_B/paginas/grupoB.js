const equiposGrupoB = [
  {
    id: "canada",
    nombre: "Canadá",
    badge: "Anfitrión",
    imagen: "https://www.ole.com.ar/images/2026/06/02/oJVvJ5iv7_970x660__1.jpg",
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
      "https://scontent.fuio10-1.fna.fbcdn.net/v/t39.99422-6/698284676_1566490605257466_6548107269195329167_n.png?stp=dst-jpg_tt6&cstp=mx1122x1402&ctp=s1122x1402&_nc_cat=104&cb2=07a86f17-38790ae2&ccb=1-7&_nc_sid=127cfc&_nc_ohc=m5xjvefRrR0Q7kNvwEv6dsE&_nc_oc=Adp93LV2IkHzOgvthrLe86vfSiCQe8_b2yjmZsQtnborh8GOTGiFJgJTwNdmgWIkUHw&_nc_zt=14&_nc_ht=scontent.fuio10-1.fna&_nc_gid=KBkr0Ow9_COAVD4fKNQbXA&_nc_ss=7b2a8&oh=00_Af8-vPRmCOgDE7rKRhTwr_BbkZSwtgmg-0HcRC5HEyGe8w&oe=6A297499",
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
      "https://www.ole.com.ar/images/2025/11/28/yLd198oXf_1290x650__1.jpg",
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
    imagen: "https://www.ole.com.ar/2026/05/27/q1G3kfZNe_1200x630__1.jpg",
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
