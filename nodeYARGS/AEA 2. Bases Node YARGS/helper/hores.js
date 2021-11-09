require('colors');
const { rejects } = require('assert');
const fs =require('fs'); //requerir el file system


const crearHores = (nom = 'no_name',hores = 0) => {

    let sortida = "";

        sortida = `Alumne: ${nom}::Hores: ${hores}`;
        fs.writeFileSync(`${nom}.txt`, sortida);

        console.log("=================================".red);
        console.log(`El Alumne ${nom} , ha fet ${hores}`);
        console.log("=================================".red);
   
}

module.exports = {
    crearHores,
}