const { Schema, model } = require("mongoose");

const ServeiSchema = Schema({
  nom: {
    type: String,
    required: [true, "El nom és obligatori"],
  },
  origen: {
    type: String,
    required: [true, "El origen és obligatoria"],
  },
  domicilio: {
    type: Boolean,
    default: false,
  },
  precio: {
    type: Number,
    required: true,
  },
  destino: {
    type: String,
  },
});

module.exports = model("servei", ServeiSchema);
