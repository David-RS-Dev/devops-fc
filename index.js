// index.js
document.addEventListener('DOMContentLoaded', () => {
    // Lista oficial de integrantes de DevOps FC
    const integrantes = [
        { nombre: "David Rivera", usuario: "David-RS-Dev", rol: "Líder / Grupo A" },
        { nombre: "Stalyn Peña", usuario: "Stalyin", rol: "Grupo B" },
        { nombre: "Scarlet Córdova", usuario: "ScarlettCordova", rol: "Grupo C" },
        { nombre: "Xavo Palacios", usuario: "xavopalacios", rol: "Grupo D" },
        { nombre: "Víctor Pilachanga", usuario: "Victor-DREC", rol: "Grupo E" }
    ];

    const listaContenedor = document.getElementById('lista-miembros');

    if (listaContenedor) {
        integrantes.forEach(miembro => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${miembro.nombre}</strong> (${miembro.usuario}) - <span class="rol-tag">${miembro.rol}</span>`;
            listaContenedor.appendChild(li);
        });
    }
});