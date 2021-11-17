const { Schema, model } = require("mongoose");

const UsuariSchema = Schema({
  nom: {
    type: String,
    required: [true, "El nom és obligatori"],
  },
  correu: {
    type: String,
    required: [true, "El correu és obligatori"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contrasenya és obligatoria"],
  },
  rol: {
    type: String,
    required: true,
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },
  estat: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

UsuariSchema.methods.toJSON = function () {
  const { __v, password, ...usuari } = this.toObject();
  return usuari;
};

//router.put :id //update de un determinado usuari
//router.delete /:id //eliminar un usuari determinat

//lo mismo de usuarios pero con clients

//Projecte3 10h
// acabar metodes 'put' i delete per als usuaris
// crear els mateixos metodes per a clients (model client ga de tenir 7 camps minim)
//nomes el 'GET' de 'serveis' (model servei ha de tenir com a minim 5 camps)

//==========els punts anteriors es pujaran a github

// de forma ordenada mostrar totes les captures de POSTMAN on es vegi que funcionen tots 


module.exports = model("Usuari", UsuariSchema);

