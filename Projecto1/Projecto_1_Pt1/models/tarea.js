const { v4: uuidv4 } = require("uuid");

class Tarea {
  id = "";
  nom = "";
  horesFetes = 0;

  constructor(nom, hores) {
    this.id = uuidv4();
    this.nom = nom;
    this.horesFetes = hores;
  }
}
// ded 
module.exports = Tarea;
