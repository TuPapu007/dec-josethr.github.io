const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const Client = require("../models/client");

const clientsGet = async (req = request, res = response) => {
  const clients = await Client.find();
  res.json({
    clients,
  });
};

const clientsPost = async (req, res = response) => {
  const { nom, estat, correu, password, rol, google, edad } = req.body;
  const client = new Client({
    nom,
    estat,
    correu,
    password,
    rol,
    google,
    edad,
  });

  // Encriptar passwd
  const salt = bcryptjs.genSaltSync();
  client.password = bcryptjs.hashSync(password, salt);

  await client.save();

  res.json({
    client,
  });
};

const clientsDelete = async (req = request, res = response) => {
  const { _id } = req.body;
  Client.deleteOne({ _id }, (err) => {
    if (err) {
      return res.status(400).json({
        ok: "Error al eliminar el cliente con la id " + `${_id}`,
        err,
      });
    }

    res.json({
      _id: `${_id}` + " Eliminat",
    });
  });
};

const clientsPUT = async (req = request, res = response) => {
  const { _id, nom, correu, rol, estat, google, edad } = req.body;

  const filter = { _id: { _id } };
  const update = {
    nom: `${nom}`,
    correu: `${correu}`,
    rol: `${rol}`,
    estat: `${estat}`,
    google: `${google}`,
    edad: `${edad}`,
  };

  Client.findOneAndUpdate(filter, update, (err) => {
    if (err) {
      return res.status(400).json({
        ok: "Hi ha hagut un error",
        err,
      });
    }

    res.json({
      ok:
        "El Cliente con esta ID: " +
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
        `${google}` +
        " Edad: " +
        `${edad}`,
    });
  });
};

module.exports = {
  clientsGet,
  clientsPost,
  clientsDelete,
  clientsPUT,
};
