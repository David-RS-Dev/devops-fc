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

function scrollAEstudiantes() {
  mostrarSeccion("home");

  setTimeout(function () {
    let seccion = obtenerElemento("cardsEstudiantes");

    if (seccion !== null) {
      seccion.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 120);
}
