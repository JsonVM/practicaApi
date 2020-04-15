//añadiendo express
const express = require("express");
const cors = require("cors");

//inicializar la libreria
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Api de páginas favoritas");
  });
  
//ruta con su propio endpoint
const rutas_paginas = require('./routes/paginas')
app.use(rutas_paginas);

  // Puerto
  const port = 3000;
  // Levantar el servidor para escuchar los puertos
  app.listen(port, () => {
    console.log(`Escuchando API en http://localhost:${port}`);
  });
  