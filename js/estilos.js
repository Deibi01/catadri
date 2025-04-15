
//sobre los gatos estimados

document.getElementById('mostrarAdopciones').addEventListener('click', function() {
    // Estimación basada en datos anuales
    const adopcionesAnuales = 365000; // Número total de adopciones en un año
    const diasEnUnAño = 365;
    const adopcionesDiarias = Math.round(adopcionesAnuales / diasEnUnAño);

    document.getElementById('resultado').textContent = `Se estima que hoy se adoptan alrededor de ${adopcionesDiarias} gatos.`;
});





