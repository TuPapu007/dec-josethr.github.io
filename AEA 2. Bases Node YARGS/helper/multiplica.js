require('colors');
const { rejects } = require('assert');
const fs =require('fs'); //requerir el file system
const llistarTaula=(base, limit=10)=> {

    console.log('==========='.green);
    console.log(`Taula del ${base}`.yellow);
    console.log('==========='.green);

    for (let i = 0; i < limit; i++) {
        console.log(`${base}*${i}=${base*i}`.cyan);
    }
}

const crearFitxer=(base=1, limit=10)=> {
    if (!Number(base)){
        console.log('EL valor de la base ha de ser numèric');
        return;
    }
    let data='';
    for (let i = 0; i <= limit; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }
        console.log("=================================".red);
        console.log(`Creant fitxer taula del ${base}`);
        console.log("=================================".red);
        fs.writeFileSync(`taula_del_${base}-${limit}.txt`, data,(err) =>{
            if(err) throw Error(err);
            else console.log('a');
        });
        //el "+= es para acumular"
}

module.exports={
    llistarTaula,
    crearFitxer
}