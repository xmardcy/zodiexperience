function iniciar() {
    const nombre = document.getElementById('nombre').value.trim();
    if (nombre) {
        document.getElementById('nombreDisplay').innerText = nombre;
        mostrarMenu();
    } else {
        alert("Por favor, introduce tu nombre.");
    }
}

function mostrarMenu() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function mostrarOpcion(opcion) {
    document.getElementById('menu').style.display = 'none';
    document.querySelectorAll('.option').forEach(div => div.style.display = 'none');
    document.getElementById(opcion).style.display = 'block';
}

function volverMenu() {
    document.querySelectorAll('.option').forEach(div => div.style.display = 'none');
    document.getElementById('menu').style.display = 'block';
}

function conocerSigno() {
    const dia = parseInt(document.getElementById('dia').value);
    const mes = parseInt(document.getElementById('mes').value);
    let signo = "";

    switch (mes) {
        case 1: signo = dia >= 20 ? "Acuario" : "Capricornio"; break;
        case 2: signo = dia >= 19 ? "Piscis" : "Acuario"; break;
        case 3: signo = dia >= 21 ? "Aries" : "Piscis"; break;
        case 4: signo = dia >= 20 ? "Tauro" : "Aries"; break;
        case 5: signo = dia >= 21 ? "Géminis" : "Tauro"; break;
        case 6: signo = dia >= 21 ? "Cáncer" : "Géminis"; break;
        case 7: signo = dia >= 23 ? "Leo" : "Cáncer"; break;
        case 8: signo = dia >= 23 ? "Virgo" : "Leo"; break;
        case 9: signo = dia >= 23 ? "Libra" : "Virgo"; break;
        case 10: signo = dia >= 23 ? "Escorpio" : "Libra"; break;
        case 11: signo = dia >= 22 ? "Sagitario" : "Escorpio"; break;
        case 12: signo = dia >= 22 ? "Capricornio" : "Sagitario"; break;
    }
    document.getElementById('signoResultado').innerText = `Tu signo zodiacal es: ${signo}`;
}

function calcularCompatibilidad() {
    const signo1 = document.getElementById('signo1').value.toLowerCase();
    const signo2 = document.getElementById('signo2').value.toLowerCase();
    let compatibilidad = 50;

    if ((signo1 === "aries" && signo2 === "leo") || (signo1 === "leo" && signo2 === "aries")) compatibilidad = 90;
    document.getElementById('compatibilidadResultado').innerText = `Compatibilidad: ${compatibilidad}%`;
}

function mostrarFamosos() {
    const signo = document.getElementById('signoFamoso').value.toLowerCase();
    const famosos = {
        aries: "Lady Gaga, Robert Downey Jr., Emma Watson...",
        tauro: "Adele, Dwayne Johnson, George Clooney...",
    };
    document.getElementById('famososResultado').innerText = famosos[signo] || "Signo no encontrado.";
}

function mostrarPrediccion() {
    const elemento = document.getElementById('elemento').value;
    const actividad = document.getElementById('actividad').value;
    const virtud = document.getElementById('virtud').value;
    document.getElementById('prediccionResultado').innerText = `Esta semana, tu energía de ${elemento} te llevará a ${actividad} con ${virtud}.`;
}
