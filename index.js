function obtenerElemento(id) {
  return document.getElementById(id);
}

function mostrarSeccion(idSeccion) {
  let secciones = document.querySelectorAll(".view");

  for (let i = 0; i < secciones.length; i++) {
    secciones[i].classList.remove("view--active");
  }

  let seccion = obtenerElemento(idSeccion);

  if (seccion !== null) {
    seccion.classList.add("view--active");
  }

  actualizarNavbar(idSeccion);

  history.pushState({ seccion: idSeccion }, "", `?seccion=${idSeccion}`);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  cerrarMenu();
}

function actualizarNavbar(idSeccion) {
  let enlaces = document.querySelectorAll(".nav-link");

  for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].classList.remove("active");

    if (enlaces[i].dataset.section === idSeccion) {
      enlaces[i].classList.add("active");
    }
  }
}

function alternarMenu() {
  let menu = obtenerElemento("mainNav");

  if (menu !== null) {
    menu.classList.toggle("open");
  }
}

function cerrarMenu() {
  let menu = obtenerElemento("mainNav");

  if (menu !== null) {
    menu.classList.remove("open");
  }
}

function abrirRepositorio() {
  window.open("https://github.com/David-RS-Dev/devops-fc", "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  let loader = document.getElementById("intro-loader");

  if (loader === null) return;

  let navegacion = performance.getEntriesByType("navigation")[0];
  let esRecarga = navegacion && navegacion.type === "reload";
  let loaderVisto = sessionStorage.getItem("loaderVisto");

  if (loaderVisto === "true" && !esRecarga) {
    loader.style.display = "none";
    return;
  }

  setTimeout(function () {
    loader.classList.add("intro-loader--hide");
    sessionStorage.setItem("loaderVisto", "true");
  }, 2000);
});

function moverMomentosHome(direccion) {
  let slider = obtenerElemento("homeMomentsGrid");

  if (slider === null) {
    return;
  }

  slider.scrollBy({
    left: direccion * 340,
    behavior: "smooth",
  });
}

const momentosEspeciales = [
  {
    titulo: "Golazo de chilena",
    categoria: "Goles",
    texto: "Uno de esos goles que hacen gritar a todo el estadio.",
    tipo: "youtube",
    url: "https://www.youtube.com/embed/nr8WWGv7d7E",
    imagen:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=90",
  },
  {
    titulo: "Celebración TikTok",
    categoria: "TikTok",
    texto: "Momento viral del mundial.",
    tipo: "tiktok",
    url: "https://www.tiktok.com/embed/v2/7651553089043844374",
    imagen:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=900&q=90",
  },
  {
    titulo: "Atajada imposible",
    categoria: "Atajadas",
    texto: "Una reacción que cambia todo el partido.",
    tipo: "youtube",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
    imagen:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=90",
  },
];

function pintarVideos() {
  let contenedor = obtenerElemento("videoFeed");

  if (contenedor === null) {
    return;
  }

  contenedor.innerHTML = "";

  for (let i = 0; i < momentosEspeciales.length; i++) {
    let video = momentosEspeciales[i];

    let card = document.createElement("article");
    card.className = "video-item";
    card.id = "momento-" + i;

    card.innerHTML = `
      <div class="video-frame">
        <iframe
          data-url="${video.url}"
          src="" 
          title="${video.titulo}" 
          allow="autoplay; encrypted-media" 
          allowfullscreen>
        </iframe>
      </div>

      <div class="video-info-feed">
        <span>${video.categoria}</span>
        <h3>${video.titulo}</h3>
        <p>${video.texto}</p>
      </div>
    `;

    contenedor.appendChild(card);
  }

  activarAutoPlayVideos();
}

function activarAutoPlayVideos() {
  let videos = document.querySelectorAll(".video-item iframe");

  let observador = new IntersectionObserver(
    function (entradas) {
      for (let i = 0; i < entradas.length; i++) {
        let iframe = entradas[i].target;
        let url = iframe.dataset.url;

        if (entradas[i].isIntersecting) {
          iframe.src = url + "?autoplay=1&mute=1";
        } else {
          iframe.src = "";
        }
      }
    },
    {
      threshold: 0.7,
    },
  );

  for (let i = 0; i < videos.length; i++) {
    observador.observe(videos[i]);
  }
}

function abrirMomento(posicion) {
  mostrarSeccion("momentos");

  setTimeout(function () {
    let video = obtenerElemento("momento-" + posicion);

    if (video !== null) {
      video.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 150);
}

window.addEventListener("DOMContentLoaded", function () {
  pintarVideos();

  const parametros = new URLSearchParams(window.location.search);
  const seccion = parametros.get("seccion");

  if (seccion !== null) {
    mostrarSeccion(seccion);
  }
});

const textosHero = [
  "a lo grande.",
  "con pasión.",
  "con la tri.",
  "con tu album.",
];

let textoActual = 0;
let letraActual = 0;
let borrando = false;

function animarTextoHero() {
  let elemento = obtenerElemento("typewriterText");

  if (elemento === null) return;

  let texto = textosHero[textoActual];

  if (borrando) {
    letraActual--;
  } else {
    letraActual++;
  }

  elemento.textContent = texto.substring(0, letraActual);

  if (!borrando && letraActual === texto.length) {
    borrando = true;
    setTimeout(animarTextoHero, 2600);
    return;
  }

  if (borrando && letraActual === 0) {
    borrando = false;
    textoActual++;

    if (textoActual >= textosHero.length) {
      textoActual = 0;
    }
  }

  setTimeout(animarTextoHero, borrando ? 45 : 80);
}

function cambiarImagenHero() {
  let imagenes = document.querySelectorAll(".hero-player");
  let activa = 0;

  setInterval(function () {
    imagenes[activa].classList.remove("active");

    activa++;

    if (activa >= imagenes.length) {
      activa = 0;
    }

    imagenes[activa].classList.add("active");
  }, 5000);
}

function pintarMomentosHome() {
  let contenedor = obtenerElemento("homeMomentsGrid");

  if (contenedor === null) return;

  contenedor.innerHTML = "";

  for (let i = 0; i < momentosEspeciales.length; i++) {
    let momento = momentosEspeciales[i];

    let card = document.createElement("article");
    card.className = "home-moment-card";
    card.onclick = function () {
      abrirMomento(i);
    };

    card.innerHTML = `
      <img src="${momento.imagen}" alt="${momento.titulo}">
      <div>
        <span>${momento.categoria}</span>
        <h3>${momento.titulo}</h3>
        <p>${momento.texto}</p>
      </div>
    `;

    contenedor.appendChild(card);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  animarTextoHero();
  cambiarImagenHero();
  pintarMomentosHome();
});

const gruposMundial = [
  {
    grupo: "Grupo A",
    equipos: [
      ["🇲🇽", "México", 1, 1, 0, 0, 2, 0, 2, 3],
      ["🇰🇷", "Corea del Sur", 1, 1, 0, 0, 2, 1, 1, 3],
      ["🇨🇿", "Chequia", 1, 0, 0, 1, 1, 2, -1, 0],
      ["🇿🇦", "Sudáfrica", 1, 0, 0, 1, 0, 2, -2, 0],
    ],
  },
  {
    grupo: "Grupo B",
    equipos: [
      ["🇨🇭", "Suiza", 1, 0, 1, 0, 1, 1, 0, 1],
      ["🇨🇦", "Canadá", 1, 0, 1, 0, 1, 1, 0, 1],
      ["🇶🇦", "Catar", 1, 0, 1, 0, 1, 1, 0, 1],
      ["🇧🇦", "Bosnia y Herzegovina", 1, 0, 1, 0, 1, 1, 0, 1],
    ],
  },
];

const estadiosMundial = [
  [
    "Atlanta Stadium",
    "Estados Unidos",
    "Atlanta",
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Boston Stadium",
    "Estados Unidos",
    "Boston",
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Dallas Stadium",
    "Estados Unidos",
    "Dallas",
    "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Guadalajara Stadium",
    "México",
    "Guadalajara",
    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Houston Stadium",
    "Estados Unidos",
    "Houston",
    "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Kansas City Stadium",
    "Estados Unidos",
    "Kansas City",
    "https://images.unsplash.com/photo-1509027572446-af8401acfdc3?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Los Angeles Stadium",
    "Estados Unidos",
    "Los Angeles",
    "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Mexico City Stadium",
    "México",
    "Ciudad de México",
    "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Miami Stadium",
    "Estados Unidos",
    "Miami",
    "https://images.unsplash.com/photo-1536122985607-4fe00b283652?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Monterrey Stadium",
    "México",
    "Monterrey",
    "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "New York New Jersey Stadium",
    "Estados Unidos",
    "New York New Jersey",
    "https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Philadelphia Stadium",
    "Estados Unidos",
    "Philadelphia",
    "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "San Francisco Bay Area Stadium",
    "Estados Unidos",
    "San Francisco Bay Area",
    "https://images.unsplash.com/photo-1494697536454-6f39e2cc972d?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Seattle Stadium",
    "Estados Unidos",
    "Seattle",
    "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Toronto Stadium",
    "Canadá",
    "Toronto",
    "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=900&q=90",
  ],
  [
    "Vancouver Stadium",
    "Canadá",
    "Vancouver",
    "https://images.unsplash.com/photo-1540379708242-14a809bef941?auto=format&fit=crop&w=900&q=90",
  ],
];

function pintarClasificacion() {
  let contenedor = obtenerElemento("gruposRanking");
  if (contenedor === null) return;

  contenedor.innerHTML = "";

  for (let i = 0; i < gruposMundial.length; i++) {
    let grupo = gruposMundial[i];

    let tabla = document.createElement("article");
    tabla.className = "ranking-group";

    let filas = "";

    for (let j = 0; j < grupo.equipos.length; j++) {
      let e = grupo.equipos[j];

      filas += `
        <tr>
          <td>${j + 1}</td>
          <td class="team-name"><span>${e[0]}</span>${e[1]}</td>
          <td>${e[2]}</td>
          <td>${e[3]}</td>
          <td>${e[4]}</td>
          <td>${e[5]}</td>
          <td>${e[6]}</td>
          <td>${e[7]}</td>
          <td>${e[8]}</td>
          <td><strong>${e[9]}</strong></td>
        </tr>
      `;
    }

    tabla.innerHTML = `
      <h3>${grupo.grupo}</h3>
      <div class="ranking-table-wrap">
        <table class="ranking-table">
          <thead>
            <tr>
              <th>#</th><th>Equipo</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th>Pts</th>
            </tr>
          </thead>
          <tbody>${filas}</tbody>
        </table>
      </div>
    `;

    contenedor.appendChild(tabla);
  }

  pintarEliminatorias();
}

function pintarEliminatorias() {
  let contenedor = obtenerElemento("eliminatoriasRanking");
  if (contenedor === null) return;

  contenedor.innerHTML = `
    <section class="knockout-bracket">
      <div class="knockout-title">
        <h3>FIFA WORLD CUP 26</h3>
        <p>Fase de eliminación directa</p>
      </div>

      <div class="knockout-layout">
        <div class="bracket-half left">
          ${crearRonda("Octavos", [
            ["1A", "2B"],
            ["1C", "2D"],
            ["1E", "2F"],
            ["1G", "2H"],
          ])}

          ${crearRonda("Cuartos", [
            ["A definir", "A definir"],
            ["A definir", "A definir"],
          ])}

          ${crearRonda("Semifinal", [["A definir", "A definir"]])}
        </div>

        <div class="champion-center">
          <img src="mask.svg" alt="Copa Mundial">
          <span>FINAL</span>
          <strong>A definir</strong>
          <small>Campeón Mundial 2026</small>
        </div>

        <div class="bracket-half right">
          ${crearRonda("Semifinal", [["A definir", "A definir"]])}

          ${crearRonda("Cuartos", [
            ["A definir", "A definir"],
            ["A definir", "A definir"],
          ])}

          ${crearRonda("Octavos", [
            ["1I", "2J"],
            ["1K", "2L"],
            ["1B", "2A"],
            ["1D", "2C"],
          ])}
        </div>
      </div>
    </section>
  `;
}

function crearRonda(titulo, partidos) {
  let html = `<div class="bracket-round"><h4>${titulo}</h4>`;

  for (let i = 0; i < partidos.length; i++) {
    html += `
      <article class="match-box">
        <div>${partidos[i][0]}</div>
        <div>${partidos[i][1]}</div>
      </article>
    `;
  }

  html += `</div>`;
  return html;
}

function crearPartidoBracket(fecha, local, visitante) {
  return `
    <article class="bracket-card">
      <small>${fecha}</small>
      <p>🛡️ ${local}</p>
      <p>🛡️ ${visitante}</p>
    </article>
  `;
}

function mostrarRankingTab(idPanel) {
  let paneles = document.querySelectorAll(".ranking-panel");
  let botones = document.querySelectorAll(".ranking-tab");

  for (let i = 0; i < paneles.length; i++) {
    paneles[i].classList.remove("active");
  }

  for (let i = 0; i < botones.length; i++) {
    botones[i].classList.remove("active");
  }

  let panel = obtenerElemento(idPanel);
  if (panel !== null) {
    panel.classList.add("active");
  }

  event.target.classList.add("active");
}

function pintarEstadios() {
  let contenedor = obtenerElemento("stadiumsGrid");
  if (contenedor === null) return;

  contenedor.innerHTML = "";

  for (let i = 0; i < estadiosMundial.length; i++) {
    let estadio = estadiosMundial[i];

    contenedor.innerHTML += `
      <article class="stadium-card">
        <img src="${estadio[3]}" alt="${estadio[0]}">
        <div>
          <span>${estadio[1]}</span>
          <h3>${estadio[0]}</h3>
          <p>${estadio[2]}</p>
        </div>
      </article>
    `;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  pintarClasificacion();
  pintarEstadios();
});

function alternarMenuIntegrantes() {
  const menu = document.getElementById("mainNav");
  if (menu !== null) {
    menu.classList.toggle("open");
  }
}

function alternarMenuSeleccion() {
  let menu = document.getElementById("mainNav");

  if (menu !== null) {
    menu.classList.toggle("open");
  }
}
