const {v4: uuidv4} = require('uuid');

class Reserva{
    id = "";
    asiento_Fila = "";
    asiento_Columna = "";

    constructor(asiento_Fila, asiento_Columna){
        this.id = uuidv4();
        this.asiento_Fila = asiento_Fila;
        this.asiento_Columna = asiento_Columna;
    }
}

module.exports = Reserva;
//Lo estamos exportando al asientos.js