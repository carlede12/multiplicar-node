/*

////////////solucion tipica con archivo externo

const { crearArchivo: creatablafile } = require('./multiplicar/multiplicaroper')


//crearArchivo(7);
creatablafile(9);

*/

//console.log(process);

let consola = process.argv;
console.log(`Longitu arreglo:${consola.length}`);
let parametro = consola[2];
console.log(parametro);
let base = parametro.split('=')[1];
console.log(base);


const { crearArchivo } = require('./multiplicar/multiplicaroper.js');

crearArchivo(base).then((respuesta) => {
    console.log(respuesta);
}).catch((error) => {
    console.log(error);
});