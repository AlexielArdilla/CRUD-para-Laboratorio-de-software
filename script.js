let boton = document.getElementById("miButton");
let clientesLista = document.getElementById("clientesLista");

class cliente {
    constructor(nombreYApellido, edad) {

        this.nombreYApellido = nombreYApellido;
        this.edad = edad;

    }
}

let clientes = [];

function comenzar() {

    let respuesta = 0;

    while (respuesta != 3) {
        respuesta = parseInt(prompt("Qué quiere reealizar a continuación:\n"
            + "1) Ingresar datos de un cliente"
            + "2) Ver los clientes ingresados"
            + "3) Salir."));


        if (respuesta === 1) {

            alert("Se le pedirán los datos de un cliente:");

            let nombreCliente = prompt("Ingrese el nombre y apellido:");
            let edadCliente = prompt("Ingrese la edad del cliente");
            let miCliente = new cliente(nombreCliente, edadCliente);
            clientes.push(miCliente);

        } else if (respuesta === 2) {
            if (clientes.length > 0) {
                mostrarClientes()
            } else {
                document.getElementById("clientesLista").innerHTML = "<p>Codeado con amor por Alejandro G. Vera</p>";
            }
            break;
        } else if (respuesta === 3) {
            alert("Gracias por usar esta aplicación");
            document.getElementById("clientesLista").innerHTML = "<p>Codeado con amor por Alejandro G. Vera</p>";
            clientes = [];
        } else {
            alert("Opción no válida");
        }
    }
}


function mostrarClientes() {

    document.getElementById("clientesLista").innerHTML = crearTextoEnHTML();

}


function crearTextoEnHTML() {

    let stringParaMostrar = "";

    for (let i = 0; i < clientes.length; i++) {

        stringParaMostrar += "<li>"
            + "Nombre y Apellido: " + clientes[i].nombreYApellido
            + " Edad: " + clientes[i].edad
            + "</li>"


    }

    return "<ul>" + stringParaMostrar + "</ul>";

}