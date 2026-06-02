// grupoA.js
document.addEventListener('DOMContentLoaded', () => {
    // Datos completos del Grupo A
    const infoGrupoA = {
        historia: "El Grupo A históricamente alberga al país anfitrión de la cita mundialista, abriendo el telón del torneo con altas expectativas y una presión mediática inmensa. Ha sido el escenario de debuts memorables y sorpresas mayúsculas en la inauguración.",
        estadisticas: "Promedio de gol histórico en partidos de inauguración: 2.8 goles por encuentro. El 75% de los equipos cabezas de serie en este grupo logran clasificar a los octavos de final.",
        curiosidades: [
            "Desde el cambio de formato, solo una selección anfitriona no logró superar la fase de grupos estando en el Grupo A.",
            "El partido inaugural del Grupo A es el evento televisivo más visto del año a nivel global."
        ],
        sedes: [
            { ciudad: "Quito", estadio: "Estadio Olímpico Atahualpa", capacidad: "35,258 espectadores" },
            { ciudad: "Guayaquil", estadio: "Estadio Monumental", capacidad: "57,267 espectadores" }
        ]
    };

    // Capturar elementos de la interfaz para inyectar datos
    const btnDetalles = document.getElementById('btn-ecuador');
    const mainContainer = document.querySelector('main');

    if (btnDetalles && mainContainer) {
        btnDetalles.addEventListener('click', () => {
            // Verificar si la sección de información ya existe para no duplicarla
            if (document.getElementById('info-complementaria')) return;

            // Crear el contenedor de información adicional
            const infoSection = document.createElement('section');
            infoSection.id = 'info-complementaria';
            infoSection.className = 'info-dinamica';

            // Construir el diseño estructurado
            infoSection.innerHTML = `
                <h2>Información Complementaria del Grupo A</h2>
                <div class="info-grid">
                    <div class="info-block">
                        <h3>Historia</h3>
                        <p>${infoGrupoA.historia}</p>
                    </div>
                    <div class="info-block">
                        <h3>Estadísticas</h3>
                        <p>${infoGrupoA.estadisticas}</p>
                    </div>
                    <div class="info-block">
                        <h3>Curiosidades</h3>
                        <ul>
                            ${infoGrupoA.curiosidades.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="info-block">
                        <h3>Sedes del Grupo</h3>
                        <ul>
                            ${infoGrupoA.sedes.map(s => `<li><strong>${s.ciudad}:</strong> ${s.estadio} (${s.capacidad})</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;

            // Insertar la sección al final del contenedor principal
            mainContainer.appendChild(infoSection);
            
            // Hacer scroll suave hacia la nueva información
            infoSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});