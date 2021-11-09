const fs = require('fs');

const crearAlumne = (nom = 'no_name',hores = 0) => {

    let sortida = "";

        sortida = `Alumne: ${nom}::Hores: ${hores}`;
        fs.writeFileSync(`${nom}.txt`, sortida); 
}

module.exports = {
    crearAlumne,
}