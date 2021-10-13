require("colors");


//joseth hars una lista de compras 
//sustituye alumne por producto 
//lista de productos
//lista de productos y valor dinero
//introducir valor
//borrar alumno
const {
  inquirerMenu,
  pausa,
  nuevaTarea,
  alumneSelect,
  opcions,
  confirmar,
} = require("./helpers/inquirer");

const { guardarDB, readDB } = require("./helpers/guardarFitxer");

const AlumnesHores = require("./models/alumneshores");

const main = async () => {
  let opt = "";
  const tareas = new AlumnesHores();
  const alumnesDB = readDB();

  if (alumnesDB) {
    // si hi ha dades, carrégales
    tareas.carregarAlumnesFromArray(alumnesDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const nomAlumne = await nuevaTarea("Tarea: ");
        tareas.crearAlumne(nomAlumne, 0);
        // const alumne = new Alumne("Ricard", 10);
        // console.log(alumne);
        break;

      case "2":
        //llama a la funcion llistarAlumnes -> alumnehores
        tareas.llistarAlumnes();
        break;

      case "3":
        tareas.llistarTareasCompletas();
        break;
      
      case "4":
        tareas.llistarTareasIncompletas();
        break;
        

      case "5":
        const opci= await opcions(tareas.llistatArr);
        
        //!Esta mal esto
        tareas.const5(opci,tareas.horesFetes);
        //tareas.toogle(tareas.)
        break;
      case "6":

        const id2 = await alumneSelect(tareas.llistatArr);

        if (id2 !== "0") {
          const ok = await confirmar("Confirma");

          if (ok) {
            tareas.eliminarAlumne(id2);
            console.log('Tarea eliminada');
          }
          
        }

    
        break;

      default:
        break;
    }

    guardarDB(tareas.llistatArr);

    await pausa();
  } while (opt !== "0");
};

main();
