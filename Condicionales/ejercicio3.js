
const readline = require('readline');

// Crear interfaz para leer entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mostrar menú al usuario
console.log(`
    Menú de opciones:
    1. Mostrar saludo
    2. Sumar dos números
    3. Mostrar el día actual
    4. Salir
    `);

// Preguntar al usuario
rl.question("Introduce un número (1-7) para seleccionar el día: ", (respuesta) => {
    const dia = parseInt(respuesta);

    switch (dia) {
        case 1: 
            console.log("Lunes");
            break;
        case 2: 
            console.log("Martes");
            break;
        case 3: 
            console.log("Miércoles");
            break;
        case 4: 
            console.log("Jueves");
            break;
        case 5: 
            console.log("Viernes");
            break;
        case 6: 
            console.log("Sábado");
            break;
        case 7: 
            console.log("Domingo");
            break;
        default: 
            console.log("Opción incorrecta!");
    }

    rl.close(); // Cerrar la interfaz
});
