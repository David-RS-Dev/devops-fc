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

window.addEventListener("DOMContentLoaded", function () {
  const parametros = new URLSearchParams(window.location.search);
  const seccion = parametros.get("seccion");
  if (seccion === "grupos") {
    mostrarSeccion("grupos");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let loader = document.getElementById("intro-loader");

  if (loader !== null) {
    setTimeout(function () {
      loader.classList.add("intro-loader--hide");
    }, 2000);
  }
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
