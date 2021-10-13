require("colors");

const{
    inquirerMenu,
    nuevaReserva,
    pausa,
    SelectReserva,
    confirmar,
}= require("./helpers/inquirer");

//const asientos = require("./models/reserva");

//? BD Reseras
const { guardarDB, readDB } = require("./helpers/guardar_Asiento");

const Resevas_Asientos = require("./models/asientos");



const main = async () => {
  //eleccion lo utilizaras para la eleccion de la lista para que el user ponga los datos
  let eleccion = "";
  const App_Reserva = new Resevas_Asientos();

  //? BD Resercas
  const DB_Reserva = readDB();

  if (DB_Reserva) {
    // si hi ha dades, carrégales
    App_Reserva.carregarReservasFromArray(DB_Reserva);
  }

  do {
    eleccion = await inquirerMenu();

    switch (eleccion) {
      case "1":
        const lugarF = await nuevaReserva("Fila Deseada 1-8");
        const lugarC = await nuevaReserva("Columna Deseada 1-8");

        App_Reserva.crearReserva(lugarF,lugarC);
        // const alumne = new Alumne("Ricard", 10);

        break;

      case "2":
        //llama a la funcion llistarAlumnes -> alumnehores
        App_Reserva.mostrar_Sala();
        break;
      
      case "3":
        const id2 = await SelectReserva(App_Reserva.llistatArr);

        if (id2 !== "0") {
          const ok = await confirmar("Confirma");

          if (ok) {
            App_Reserva.eliminarTarea(id2);
            console.log('Reserva Eliminada');
          }   
        }  
      break;

      case "4":
        App_Reserva.recaudacio();

      break;

      default:
        break;
    }

    guardarDB(App_Reserva.llistatArr);

    await pausa();
  } while (eleccion !== "0");
};
main();