const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const Usuari = require("../models/usuari");

const usuarisGet = async (req = request, res = response) => {
  const usuaris = await Usuari.find();
  res.json({
    usuaris,
  });
};

const usuarisPost = async (req, res = response) => {
  const { nom, estat, correu, password, rol, google } = req.body;
  const usuari = new Usuari({
    nom,
    estat,
    correu,
    password,
    rol,
    google,
  });

  // Encriptar passwd
  const salt = bcryptjs.genSaltSync();
  usuari.password = bcryptjs.hashSync(password, salt);

  await usuari.save();

  res.json({
    usuari,
  });
};

const usuarisDelete = async (req = request, res = response) => {
  const { _id } = req.body;
  Usuari.deleteOne({ _id }, (err) => {
    if (err) {
      return res.status(400).json({
        ok: "Error al eliminar l'usuari amb id " + `${_id}`,
        err,
      });
    }

    res.json({
      _id: `${_id}` + " Eliminat",
    });
  });
};

const usuarisPUT = async (req = request, res = response) => {
  const { _id, nom, correu,rol, estat, google } = req.body;

  const filter = { _id: { _id } };
  const update = {
    nom: `${nom}`,
    correu: `${correu}`,
    rol: `${rol}`,
    estat: `${estat}`,
    google: `${google}`,
  };

  Usuari.findOneAndUpdate(filter, update, (err) => {
    if (err) {
      return res.status(400).json({
        ok: "Hi ha hagut un error",
        err,
      });
    }

    res.json({
      ok:
        "El usuario con esta ID: " +
        `${_id}` +
        "Se an cambiado los datos Nombre " +
        `${nom}` +
        " Correo: " +
        `${correu}` +
        " Rol: " +
        `${rol}` +
        " Estat: " +
        `${estat}` +
        " Google: " +
        `${google}`,
    });
  });
};

module.exports = {
  usuarisGet,
  usuarisPost,
  usuarisDelete,
  usuarisPUT,
};
