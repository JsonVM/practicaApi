/**
 * Controlador de paginas
 */

//importar el servicion de postgres
const servicioPg = require('../services/postgres')

/**
 * Validando la informacion de la pagina
 * @param {*} pagina pagina en forma de JSON
 */
let validarPagina = (pagina) => {
    if (!pagina) {
        throw {
            ok: false, mensaje: "La info de la pagina es obligatoria"
        }
    }

    //haciendo obligatorio el id de la pagina
    //if(!pagina.id){
    //    throw{
    //        ok:false, mensaje:"El id es obligatorio"
    //    }
    //}

    //haciendo obligatoria la url
    if (!pagina.url) {
        throw {
            ok: false, mensaje: "La url es obligatoria"
        }
    }

    //haciendo obligatorio el nombre de la url
    if (!pagina.nombre) {
        throw {
            ok: false, mensaje: "El nombre es obligatoria"
        }
    }
}

/**
 * Guardando la pagina en la base de datos
 * @param {*} pagina pagina en forma de JSON
 */
let guardarPagina = async pagina => {
    try {
        let _servicio = new servicioPg()
        let sql = `INSERT INTO public.paginas(
        url, nombre, descripcion)
        VALUES (
            '${pagina.url}',
            '${pagina.nombre}',
            '${pagina.descripcion}'
            );`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false };
    }
}

let consultarPaginas = async () => {
    try {
        let _servicio = new servicioPg()
        let sql = `SELECT * from paginas`;
        let respuesta = await _servicio.ejecutarSql(sql);
        return respuesta;
    } catch (error) {
        throw{ok: false };
    }
}

//exportando en forma de JSON
module.exports = { validarPagina, guardarPagina, consultarPaginas };