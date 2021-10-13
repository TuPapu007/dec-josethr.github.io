//!Requerimos fs para tener funciones sobre guardado de fitxers
const fs = require('fs');
//*para indicarle la ubicacion debes de decirle des de la ubicacion del app.js si pones ../db/data.json nunca lo encontrara
const fitxer = "./db/data.json";

const guardarDB = (data) =>{
    fs.writeFileSync(fitxer, JSON.stringify(data));
};

const readDB = () =>{
    if (!fs.existsSync(fitxer)) {
        return null;
    }
    const info = fs.readFileSync(fitxer, { encoding: "utf-8" });
    const data = JSON.parse(info);

    return data;
};
module.exports = {
    guardarDB,
    readDB,
  };