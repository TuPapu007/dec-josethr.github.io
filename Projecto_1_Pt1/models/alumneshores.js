const Tarea = require("./tarea");

/**
 * _llista :
 *  { uuid-234235324-234234523: {id: uuid-234235324-234234523, nom: 'pepito', hores: 10 }}
 */

class AlumnesHores {
  _llista = {
    abc: 123,
  };
  _llistaids={
    abc: 123,
  };

  get llistatArr() { //listar la array
    const llistat = []; //crea la array llistat 
    //object.keys devuel el array que se encuentren dentro 
    Object.keys(this._llista).forEach((key) => {
      //
      const tarea = this._llista[key];
      llistat.push(tarea);
    });

    return llistat;
  }

  constructor() {
    this._llista = {};
  }

  crearAlumne(nom = "", hores) {
    const tarea = new Tarea(nom, hores);
    this._llista[tarea.id] = tarea;
  }

  carregarAlumnesFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._llista[tarea.id] = tarea;
    });
  }

  llistarAlumnes() {
    console.log(); // sóc un salt de línia

    let conta = 0;
    //foreach par mostrar la aray
    this.llistatArr.forEach((tarea) => {
      const { nom } = tarea;
      conta += 1;
      console.log(`${(conta + ".").green} ${nom}`);
    });
  }
  const5(id,horesFetes){
    const tarea = this._llista[id];
    if (tarea.horesFetes==0) {
      tarea.horesFetes = 1;
    }else if(tarea.horesFetes == 1 ){
      tarea.horesFetes=0;
    };
    //si tasca hores fetes es iguall0
  }
  //!--------------------------------------------------------------------------
  get llistatids() { //listar la array
    const llistatids = []; //crea la array llistatids 
    //object.keys devuel el array que se encuentren dentro 
    Object.keys(this._llista).forEach((key) => {
      //
      const tarea = this._llista[key];
      llistatids.push(tarea);
    });

    return llistatids;
  }



  llistarTareasCompletas() {
    console.log();
    let conta = 0;

          //foreach par mostrar
      this.llistatArr.forEach((tarea) => {
        const { nom, horesFetes } = tarea;
        conta += 1;
        if (horesFetes==1) {
          console.log(`${(conta + ".").green} ${nom} :: Estado de la tarea ${horesFetes}`);

        }
      }); 
  }

  llistarTareasIncompletas() {
    console.log();
    let conta = 0;

          //foreach par mostrar
      this.llistatArr.forEach((tarea) => {
        const { nom, horesFetes } = tarea;
        conta += 1;
        if (horesFetes==0) {
          console.log(`${(conta + ".").green} ${nom} :: Estado de la tarea ${horesFetes}`);

        }
      }); 
  }

  async introNumHores(id, hores) {
    const tarea = this._llista[id];
    tarea.horesFetes = hores;
    return tarea.nom;
  }

  async eliminarAlumne(id) {
    delete this._llista[id];
  }
}

module.exports = AlumnesHores;
