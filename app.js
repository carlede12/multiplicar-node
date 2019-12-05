//ejemplo promesa

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const { argv } = require('./config/yargs');
//const argv = require('.//config/yargs').argv;

const colors = require('colors');


//let argv2 = process.argv;
console.log(argv);
let comando = argv._[0];


console.log(module);


switch (comando) {
    case 'listar':
        console.log(`ejecutar listar`);
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log(`ejecutar crear`);

        crearArchivo(argv.base, argv.limite).then((archivo) => {
            console.log(`Ok:`, colors.yellow(archivo));

        }).catch((error) => {
            console.log(`Error:`, error);
        });


        break;
    default:
        console.log('Comando no reconocido');
        break;
}



//console.log(`base: ${argv.base}`);
//console.log(`limite: ${argv.limite}`);
//console.log(argv2);

/*

//////-----------esta parte es para poder capturar datos de entrada a traves de consola: ejemplo
// node app --base=5 //en este caso queremos obtener el 5


let argv = process.argv;
let parametro = argv[2];
console.log(parametro);
let base = parametro.split('=')[1];
console.log(base);

//console.log(`process:`, process.argv); //para ver procesos
//console.log(module);


/////---------------ejemplo escribir archivo con tabla(multiplicar)usando fs=require(fs); usando promesa y calbck


//let base = 8;

crearArchivo(base).then((archivo) => {
    console.log(`Ok:`, archivo);

}).catch((error) => {
    console.log(`Error:`, error);
});

*/



/*
//ejemplo callback
const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 4;

crearArchivo(base, (error, respuesta) => {

    if (error) {

        return console.log(`Error:`, error);
    }

    console.log(`Ok:`, respuesta);
});
*/