require("colors");
const argv = require('./config/yargs').argv;

const {llistarTaula,crearFitxer,}=require('./helper/multiplica')
const{crearHores,}=require('./helper/hores')


console.clear();
console.log(argv);
let param = argv._[0];
//crea param  para guarda el primer parametro de yargs en una variable

switch(param){
    case 'llistar':
        llistarTaula(argv.base,argv.limit);
        break;
    case 'crear':
        crearFitxer(argv.base,argv.limit);
        break;
    case 'crearHores':
        crearHores(argv.nom,argv.hores,argv.color);
        break;
    default:
        console.log("No s'ha reconegut la comanda");
}