opts = {
    base: {
        demand: true, //es bligatorio este parametro
        alias: 'b' //se puede llamar como b en lugar de base
    },
    limite: {
        alias: 'l', //una forma de llamar al limite
        default: 10 //si no se pone limite o se pone pero no se pone un valor para el limite  por default se toma 10
    }
}


const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multuplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multuplicar', opts)
    .help() //esta funcion la agregas
    .argv;


module.exports = {
    argv
}