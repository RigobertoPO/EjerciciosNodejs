console.log(process.argv);

function leerOpcion(opcion) {
    var index = process.argv.indexOf(opcion);
    if (index === -1) {
        return false;
    } else {
        return process.argv[index + 1];
    }
}
var nombre = leerOpcion("-nombre");
console.log("Nombre es" + nombre);