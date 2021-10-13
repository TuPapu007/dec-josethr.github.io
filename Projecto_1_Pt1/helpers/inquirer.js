const inquirer = require("inquirer");
require("colors");

const preguntes = [
  {
    type: "list",
    name: "opcio",
    message: "Què desea hacer el Admin?",
    choices: [
      {
        value: "1",
        name: `${"1 ".green} Crear tarea`,
      },
      {
        value: "2",
        name: `${"2 ".green} Llistar Tareas`,
      },
      {
        value: "3",
        name: `${"3 ".green} Llistar Tareas completadas`,
      },
      {
        value: "4",
        name: `${"4 ".green}  LListar Tarea pendientes`,
      },
      {
        value: "5",
        name: `${"5 ".green} Comletar Tarea(s)`,
      },
      
      {
        value: "6",
        name: `${"6 ".green} Borrar Tarea`,
      },
    
      {
        value: "0",
        name: `${"0 ".green} Salir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("========================".cyan);
  console.log("   Secciona una opció".yellow);
  console.log("========================\n".cyan);

  const { opcio } = await inquirer.prompt(preguntes);

  return opcio; // retorno un valor entre 0 i 5
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
};

const nuevaTarea = async (message) => {
  const question = [
    {
      type: "input",
      name: "tarea",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Pon una nueva Tarea";
        }
        return true;
      },
    },
  ];

  const { tarea } = await inquirer.prompt(question);
  return tarea;
};
//caso 5
const opcions = async (tareas=[]) => {

  const choices = tareas.map((tasca, i) => {
    const idx = `${i + 1}.`.green;
  
    
    const pen = `${tasca.horesFetes}` > 0 ? "Completada".green : "pendent".red;
    return {
      value: tasca.id,
      name: `${idx} ${tasca.nom} :: `+pen.gray,
    };
    
  });
  
  choices.unshift({
    value: "0",
    name: "0. ".green + "Cancel·lar",
  });
  const check=[
    {
      type:'checkbox',
      name: 'ids',
      message: 'Escull les tasques que vols completar',
      choices 
    },
  ];

  const {ids}= await inquirer.prompt(check);

  return ids;
}

//

const alumneSelect = async (tareas = []) => {
  const choices = tareas.map((tareas, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tareas.id,
      name: `${idx} ${tareas.nom}`,
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
      message: "Selecciona tarea",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(pregunta);
  return id;
};

//caso 4
const introHores = async (message) => {
  const question = [
    {
      type: "input",
      name: "hores",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Si us plau, introdueix un número";
        }
        return true;
      },
    },
  ];

  const { hores } = await inquirer.prompt(question);
  return hores;
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
  pausa,
  opcions,
  nuevaTarea,
  alumneSelect,
  introHores,
  confirmar
};
