const fs = require('fs');

const crearAlumne = (nom = 'no_name', hores = 0) => {

    let sortida = '';


    console.log('===========');
    console.log('   Taula del'+base);
    console.log('===========');

    let sortida = '';
    sortida = `Alumne: ${nom} :: Hores: ${hores}`;

     fs.writeFileSync(`taula ${nom}.txt`,sortida);

}

module.exports = {
    crearAlumne,
}