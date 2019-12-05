//ejemplo con promesa

const fs = require('fs');



const colors = require('colors');

let crearArchivo = (base, limite = 10) => {


    let data = ''; //en esta variable voy a concatenar cada impresion en cada ciclo




    return new Promise((resolve, reject) => {

        if (isNaN(parseInt(base)) == true) {
            reject(`base: ${base} debe ser un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} =${base*i} \n`;
        }

        fs.writeFile(`tablas/Tabla-${base} del 1 hasta el ${limite}.txt`, data, (err) => {

            if (err) {
                reject(err);
            } else {
                resolve(`Archivo  de la tabla ${base} creado exitosamente`);
            }
        });
    });

}

//-------------------------------------listar

let listarTabla = (base, limite = 10) => {


    console.log(`=======================================================`.green);
    console.log(`                Tabla del ${base}                      `.blue);
    console.log(`=======================================================`.red);


    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}



//--------------------------------------exports



module.exports = { crearArchivo, listarTabla }





/*

//ejemplo con callback

const fs = require('fs');


let crearArchivo = (base, callback) => {



    let data = ''; //en esta variable voy a concatenar cada impresion en cada ciclo

    if (isNaN(parseInt(base)) == true) {
        callback(`base: ${base} debe ser un numero`);
        return;
    }

    for (let i = 0; i <= 10; i++) {
        data += `${base} x ${i} =${base*i} \n`;
    }

    fs.writeFile(`multiplicar/Tabla-${base}.txt`, data, (err) => {

        if (err) {
            callback(err);
            console.log('entro1');
        } else {
            console.log('entro2');
            callback(null, `Archivo  de la tabla ${base} creado exitosamente`);
        }
    });

}


module.exports = {
    crearArchivo
}

*/

//con async y await