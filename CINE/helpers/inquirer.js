//!requiere las dependencias
const inquirer = require("inquirer");
require("colors");

//*Creamos las opciones una Array []
const Opciones = [
  {
    type: "list",
    name: "opcio",
    message: "Que desea el admin?",
    choices: [
      {
        value: "1",
        name: `${"1".green} Crear Reserva`,
      },
      {
        value: "2",
        name: `${"2".green} Lista de Reservas`,
      },
      {
        value: "3",
        name: `${"3".green} Borrar Reserva`,
      },
      {
        value: "4",
        name: `${"4".green} Mostrar Recaudacio`,
      },
      
      
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("========================".cyan);
  console.log("   Secciona una opció".yellow);
  console.log("========================\n".cyan);

  const { opcio } = await inquirer.prompt(Opciones);

  return opcio; // retorno un valor entre 0 i 2
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presiona ${"enter".yellow} per a continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
  //espera al question
};

//*esto solo para decir que si esta vacio ponga algo
const nuevaReserva = async (message) => {
  const question = [
    {
      type: "input",
      name: "reserva",
      message,
      validate(value) {
        if (value=='0' ||
          value>= 9) {
          return "Ponga un numero entre 1-8 PLS";
        }
        return true;
      },
    },
  ];

  const { reserva } = await inquirer.prompt(question);
  return reserva;
};
//caso 3 para eleminar
const SelectReserva = async (App_Reserva = []) => {
  const choices = App_Reserva.map((App_Reserva, i) => {
    const idx = `${i + 1}.`.green;

    return {
      value: App_Reserva.id,
      name: `${idx} Columna : ${App_Reserva.asiento_Fila} Fila : ${App_Reserva.asiento_Columna}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0. ".green + "Cancel·lar",
  });

  const pregunta = [
    {
      type: "list",
      name: "id",
      message: "Selecciona la butaca que desea eliminar",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(pregunta);
  return id;
};
const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};




module.exports = {
  inquirerMenu,
  nuevaReserva,
  pausa,
  SelectReserva,
  confirmar,
};
