function leerOpcion(opcion) {
    var index = process.argv.indexOf(opcion);
    if (index === -1) {
        return false;
    } else {
        return process.argv[index + 1];
    }
}
var nombre = leerOpcion("-nombre");
console.log("Nombre es " + nombre);
process.stdout.write("Cual es el apellido");
process.stdin.on("data", function(data) {
    process.stdout.write(`el nombre completo es ${nombre} ${data}\n`);
});