//Creo mi arreglo de páginas
let paginas = [
  {
    id: 999,
    url: "http://www.spotify.com",
    nombre: "spotify",
    descripcion: "página contenido mp3",
  },
];

//agregar paginas a la base de datos
function agregarPagina() {
  let url = document.getElementById("url").value;
  let nombre = document.getElementById("nombre").value;
  let descripcion = document.getElementById("descripcion").value;

  let pagina = { url: url, nombre: nombre, descripcion: descripcion };

  //agregar a la base de datos
  let direccion = "http://localhost:3000/paginas";
  axios
    .post(direccion, pagina)
    .then((response) => {
      console.log("Respuesta del API");
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  //limpiando los campos del formulario
  limpiarCampos();
  //listando las paginas(actualizando)
  listarPaginas();
}

//funcion para limpiar los campos del formulario
function limpiarCampos() {
  document.getElementById("url").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("descripcion").value = "";
}

//Funcion para listar las páginas en la tabla
function listarPaginas() {
  // tomar datos de la base de datos

  let direccion = "http://localhost:3000/paginas";
  axios
    .get(direccion)
    .then((response) => {

      console.log("Respuesta del API");
      console.log(response);

      paginas = response.data.info;

      let data = "";
      for (let i = 0; i < paginas.length; i++) {
        let pagina = paginas[i];

        data += "<tr>";
        data += `<td>${pagina.id}</td>`;
        data += `<td>${pagina.url}</td>`;
        data += `<td>${pagina.nombre}</td>`;
        data += `<td>${pagina.descripcion}</td>`;
        data += "</tr>";
      }

      document.getElementById("lista_paginas").innerHTML = data;
    })
    .catch((error) => {
      console.log(error);
    });
}
listarPaginas();
