const { crearHores } = require('../helper/multiplica');

const opts={
    nom:{
        alias:'n'
    },
    hores:{
        alias: 'h'
    },
    base:{
        alias:'b'
    },
    limit:{
        alias:'l',
        default:10,
    },
    color:{
        alias:'c',
    },

};

const argv=require('yargs')
            .command('llistar','Imprimeix en consola la taula de multiplicar',opts)
            .command('crear','Genera un fitxer amb la taula de multiplicar',opts)
            .command('crearHores','ej:  crearHores -n joseth -h 15 ',opts)
            .help().argv;

module.exports={
    argv,
}