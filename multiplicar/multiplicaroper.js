/*

const fs = require('fs');



let crearArchivo = (base) => {
    let data = '';
    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${base*i} \n`;
    }

    console.log(data);

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (error) => {
        if (error) {
            return console.log(error);;
        } else {
            console.log(`Archivo creado`);
        }
    });

}

module.exports = {
    crearArchivo
}

*/
const fs = require('fs');


let crearArchivo = (base) => {

    let datos = '';
    for (let i = 1; i <= 10; i++) {
        datos += `${base} * ${i} = ${base*i} \n`;
    }
    return new Promise((resolve, reject) => {
        fs.writeFile(`tablas/tabla-${base}.txt`, datos, (error) => {
            if (error) {
                reject(error);
            } else {
                resolve(`El archivo fue creado`);
            }

        });
    });
}


module.exports = {
    crearArchivo
}