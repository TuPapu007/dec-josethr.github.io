const { Router } = require("express");
const { response, request } = require("express");

const { check, validationResult } = require("express-validator");

//clients
const {
  clientsGet,
  clientsPost,
  clientsDelete,
  clientsPUT,
} = require("../controllers/clients");

const router = Router();

const validarCamps = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  next();
};

const validaedad = async (edad) => {
  if (edad < 18) {
    throw new Error("la edad debe ser major o igual a 18");
  }
};

router.get("/", (req = request, res = response) => {
  res.send("Accés denegat...");
});

router.get("/clients", clientsGet);

router.post(
  "/clients",
  [
    check("correu", "El correu no és vàlid").isEmail(),
    check("edad").custom(validaedad),
    check("nom", "El nom és obligatori").not().isEmpty(),
    check("password", "El password ha de tenir més de 6 caràcters").isLength({
      min: 6,
    }),

    validarCamps,
  ],
  clientsPost
);
router.delete("/clients", clientsDelete);

router.delete("/clients", (req, res) => {
  router.deleteOne({ _id: req.body.id }, (err) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
    });
  });
});

router.put("/clients", clientsPUT);

module.exports = router;
