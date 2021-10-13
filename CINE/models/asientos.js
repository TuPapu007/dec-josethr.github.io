const Reserva = require("./reserva");

class Resevas_Asientos {
  _lista = {
    abc: 123,
  };

  get llistatArr() {
    //listar la array
    const llistat = []; //crea la array llistat
    //object.keys devuel el array que se encuentren dentro
    Object.keys(this._lista).forEach((key) => {
      //
      const tarea = this._lista[key];
      llistat.push(tarea);
    });

    return llistat;
  }

  constructor() {
    this._lista = {};
  }

  crearReserva(asiento_Fila = "", asiento_Columna = "") {
    /*
    const Con_reserva = new Reserva(asiento_Columna);
    const Fila_Reserva = new Reserva(asiento_Fila);/*/

    const reserva = new Reserva(asiento_Fila, asiento_Columna);
    this._lista[reserva.id] = reserva;
  }

  carregarReservasFromArray(App_Reserva = []) {
    App_Reserva.forEach((App_Reserva) => {
      this._lista[App_Reserva.id] = App_Reserva;
    });
  }
  llistarReservas() {
    console.log(); // sócK un salt de línia

    let conta = 0;

    //foreach par mostrar

    this.llistatArr.forEach((App_Reserva) => {
      const { asiento_Fila } = App_Reserva;
      const { asiento_Columna } = App_Reserva;

      conta += 1;
      console.log(
        `${
          (conta + ".").green
        } Fila: ${asiento_Fila} Columna: ${asiento_Columna} `
      );
    });
  }
  async eliminarTarea(id) {
    delete this._lista[id];
  }



  //caso 3
  mostrar_Sala(App_Reserva) {
    var fi1 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
    var fi2 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
    var fi3 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
    var fi4 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
    var fi5 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
    var fi6 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
    var fi7 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];
    var fi8 = ["■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ ", "■ "];

    //Introducir

    for (let but = 1; but < 9; but++) {
      fi1[but] = "■ ";
      fi2[but] = "■ ";
      fi3[but] = "■ ";
      fi4[but] = "■ ";
      fi5[but] = "■ ";
      fi6[but] = "■ ";
      fi7[but] = "■ ";
      fi8[but] = "■ ";
    }
    for (let but = 1; but < 9; but++) {
      this.llistatArr.forEach((App_Reserva) => {
        const { asiento_Fila, asiento_Columna } = App_Reserva;

        if (asiento_Fila == "1" && but == asiento_Columna) {
          fi1[but - 1] = "■ ".red;
        } else if (asiento_Fila == "2" && but == asiento_Columna) {
          fi2[but - 1] = "■ ".red;
        } else if (asiento_Fila == "3" && but == asiento_Columna) {
          fi3[but - 1] = "■ ".red;
        } else if (asiento_Fila == "4" && but == asiento_Columna) {
          fi4[but - 1] = "■ ".red;
        } else if (asiento_Fila == "5" && but == asiento_Columna) {
          fi5[but - 1] = "■ ".red;
        } else if (asiento_Fila == "6" && but == asiento_Columna) {
          fi6[but - 1] = "■ ".red;
        } else if (asiento_Fila == "7" && but == asiento_Columna) {
          fi7[but - 1] = "■ ".red;
        } else if (asiento_Fila == "8" && but == asiento_Columna) {
          fi8[but - 1] = "■ ".red;
        }
      });
    }

    //Mostrar

    console.log("----PANTALLA-----");
    console.log("");

    for (let fi = 0; fi < 8; fi++) {
      process.stdout.write(fi1[fi]);
    }
    console.log("");
    for (let fi = 0; fi < 8; fi++) {
      process.stdout.write(fi2[fi]);
    }
    console.log("");
    for (let fi = 0; fi < 8; fi++) {
      process.stdout.write(fi3[fi]);
    }
    console.log("");
    for (let fi = 0; fi < 8; fi++) {
      process.stdout.write(fi4[fi]);
    }
    console.log("");
    for (let fi = 0; fi < 8; fi++) {
      process.stdout.write(fi5[fi]);
    }
    console.log("");
    for (let fi = 0; fi < 8; fi++) {
      process.stdout.write(fi6[fi]);
    }
    console.log("");
    for (let fi = 0; fi < 8; fi++) {
      process.stdout.write(fi7[fi]);
    }
    console.log("");
    for (let fi = 0; fi < 8; fi++) {
      process.stdout.write(fi8[fi]);
    }
    console.log("");
    console.log("");
    console.log("______________  ");
    console.log("             / /");

  }

  //caso 4
  recaudacio() {
    console.log();

    let precio = 7;
    var contador = 0;

    this.llistatArr.forEach((App_Reserva) => {
      contador += 1;
    });
    let n_reservas = contador;
    let ganancias = contador * precio;
    console.log(
      `Numero reservas : ${(n_reservas + "").red} x ${(precio + "€").red}`
    );
    console.log(`Ganancias conseguida: ${(ganancias + "€").green}`);
  }
}
module.exports = Resevas_Asientos;
