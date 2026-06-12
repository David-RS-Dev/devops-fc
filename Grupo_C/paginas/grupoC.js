const equiposGrupoC = [
  {
    id: "brasil",
    nombre: "Brasil",
    badge: "CONMEBOL",
    imagen:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Brasil, pentacampeón del mundo y máxima referencia histórica del fútbol mundial.",
    curiosidades: [
      "Es la única selección que ha disputado todas las Copas del Mundo de la historia.",
      "Posee el récord de títulos mundiales con cinco campeonatos (1958, 1962, 1970, 1994 y 2002).",
      "La 'Canarinha' es famosa por su fútbol vistoso, técnico y profundamente ofensivo.",
      "De su cantera salieron leyendas como Pelé, Ronaldo, Ronaldinho y Neymar.",
    ],
    jugadores: ["Vinícius Júnior", "Rodrygo", "Raphinha", "Casemiro"],
  },
  {
    id: "marruecos",
    nombre: "Marruecos",
    badge: "CAF",
    imagen:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Marruecos, los 'Leones del Atlas', orgullo de África y del mundo árabe.",
    curiosidades: [
      "Fue la primera selección africana y árabe en alcanzar las semifinales de un Mundial (Qatar 2022).",
      "En 2022 dejó en el camino a potencias como Bélgica, España y Portugal.",
      "Se les conoce como los 'Leones del Atlas' por la cordillera que cruza el país.",
      "Su afición es una de las más apasionadas y numerosas de cada torneo.",
    ],
    jugadores: ["Achraf Hakimi", "Hakim Ziyech", "Sofyan Amrabat", "Youssef En-Nesyri"],
  },
  {
    id: "haiti",
    nombre: "Haití",
    badge: "Concacaf",
    imagen:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Haití, la garra caribeña que vuelve a ilusionar a todo un país.",
    curiosidades: [
      "Su única participación mundialista hasta ahora fue en Alemania 1974.",
      "En aquel torneo, Emmanuel Sanon cortó una larga racha invicta del legendario portero Dino Zoff.",
      "Se les apoda 'Les Grenadiers' (Los Granaderos).",
      "Para el país, el fútbol es un enorme símbolo de unión y esperanza nacional.",
    ],
    jugadores: ["Frantzdy Pierrot", "Duckens Nazon", "Derrick Étienne", "Danley Jean-Jacques"],
  },
  {
    id: "escocia",
    nombre: "Escocia",
    badge: "UEFA",
    imagen:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=80",
    descripcion:
      "Escocia, intensidad, tradición y el inconfundible espíritu del fútbol británico.",
    curiosidades: [
      "Disputó, junto a Inglaterra, el primer partido internacional oficial de la historia (1872).",
      "Su afición, la 'Tartan Army', es célebre por su pasión y buen humor.",
      "Es una de las federaciones de fútbol más antiguas del planeta.",
      "Su estilo combina garra, orden defensivo y mucha entrega física.",
    ],
    jugadores: ["Andrew Robertson", "Scott McTominay", "John McGinn", "Billy Gilmour"],
  },
];

function obtenerElementoC(id) {
  return document.getElementById(id);
}

function alternarMenuC() {
  let menu = obtenerElementoC("mainNav");

  if (menu !== null) {
    menu.classList.toggle("open");
  }
}

function scrollEquiposC() {
  let seccion = obtenerElementoC("equiposGrupoC");

  if (seccion !== null) {
    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function scrollResumenC() {
  let seccion = obtenerElementoC("resumenGrupoC");

  if (seccion !== null) {
    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function pintarEquiposC() {
  let contenedor = obtenerElementoC("teamGridC");

  if (contenedor === null) {
    return;
  }

  contenedor.innerHTML = "";

  for (let i = 0; i < equiposGrupoC.length; i++) {
    let equipo = equiposGrupoC[i];

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

function buscarEquipoC(idEquipo) {
  for (let i = 0; i < equiposGrupoC.length; i++) {
    if (equiposGrupoC[i].id === idEquipo) {
      return equiposGrupoC[i];
    }
  }

  return null;
}

function abrirSidebarEquipoC(idEquipo) {
  let equipo = buscarEquipoC(idEquipo);

  if (equipo === null) {
    return;
  }

  obtenerElementoC("drawerImgC").src = equipo.imagen;
  obtenerElementoC("drawerImgC").alt = equipo.nombre;
  obtenerElementoC("drawerBadgeC").innerText = equipo.badge;
  obtenerElementoC("drawerTitleC").innerText = equipo.nombre;
  obtenerElementoC("drawerDescriptionC").innerText = equipo.descripcion;

  let curiosidades = obtenerElementoC("drawerCuriositiesC");
  curiosidades.innerHTML = "";

  for (let i = 0; i < equipo.curiosidades.length; i++) {
    let item = document.createElement("li");
    item.innerText = equipo.curiosidades[i];
    curiosidades.appendChild(item);
  }

  let jugadores = obtenerElementoC("drawerPlayersC");
  jugadores.innerHTML = "";

  for (let i = 0; i < equipo.jugadores.length; i++) {
    let etiqueta = document.createElement("span");
    etiqueta.innerText = equipo.jugadores[i];
    jugadores.appendChild(etiqueta);
  }

  obtenerElementoC("teamDrawerC").classList.add("open");
  obtenerElementoC("drawerBackdropC").classList.add("show");
}

function cerrarSidebarEquipoC() {
  obtenerElementoC("teamDrawerC").classList.remove("open");
  obtenerElementoC("drawerBackdropC").classList.remove("show");
}

pintarEquiposC();