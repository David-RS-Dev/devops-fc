// index.js
document.addEventListener('DOMContentLoaded', () => {
    // Lista de integrantes de DevOps FC
    const integrantes = [
        { nombre: "David Rivera", rol: "Líder / Grupo A" },
        { nombre: "Stalyn Peña", rol: "Desarrollador" },
        { nombre: "Scarlet Córdova", rol: "Desarrolladora" },
        { nombre: "Xavo Palacios", rol: "Desarrollador" }
    ];

    const listaContenedor = document.getElementById('lista-miembros');

    if (listaContenedor) {
        integrantes.forEach(miembro => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${miembro.nombre}</strong> - ${miembro.rol}`;
            listaContenedor.appendChild(li);
        });
    }
});