const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const Servei = require("../models/serveis");

const serveisGet = async (req = request, res = response) => {
  const serveis = await Servei.find();
  res.json({
    serveis,
  });
};

const serveisPost = async (req, res = response) => {
  const { nom, origen, domicilio, precio, destino } = req.body;
  const servei = new Servei({
    nom,
    origen,
    domicilio,
    precio,
    destino,

  });
  await servei.save();

  res.json({
    servei,
  });
};

module.exports = {
  serveisGet,
  serveisPost,
};
