const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/paginas");

/**
 * Obteniendo todas las paginas
 */
router.get("/paginas", (req, res) => {
  _controlador.consultarPaginas().then(respuestaDB => {
      let registros = respuestaDB.rows;
      res.send({ ok: true, info: registros, mensaje: "Paginas consultadas" });
    }).catch(error => {
      res.send(error);
    });
});

/**
 * Guardando una pagina
 */
router.post("/paginas", (req, res) => {
  try {
    //Capturar el body desde la solicitud
    let info_pagina = req.body;

    // Valida la información, sino se envia al catch
    _controlador.validarPagina(info_pagina);

    // Guardar la pagina en base de datos
    _controlador.guardarPagina(info_pagina).then(respuestaDB => {
      res.send({ ok: true, mensaje: "Pagina guardada", info: info_pagina });
    }).catch(error => {
      res.send(error);
    });

    // Responder
  } catch (error) {
    res.send(error);
  }
});


module.exports = router;