//palabras reservadas de JS//
//break, case, catch, continue, default, let delete, do, else, finally, for, function, if, in, instanceof, new, return, switch, this, throw, try, typeof, var, void, while, with//


//cotizador de seguros//

/*const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }
console.log( suma(15,20) )
console.log( resta(15,5) )

const suma  = (a,b) => a + b
const resta = (a,b) => a - b
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21
let precioProducto  = 500
let descuento = 50 
//Calculo el precioProducto + IVA - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento) 
console.log(nuevoPrecio)
*/

// Variables globales
let edad = prompt("Ingrese edad"); // Declaracion con asignacion
let genero = prompt("Ingrese genero");
let email = prompt("Ingrese email");
let phone = prompt("Ingrese teléfono");// recomendable variables en inglés/ entrevistas técnicas
let marca = prompt("Ingrese marca del automóvil");
let modelo = prompt("Ingrese el modelo de su automóvil")
let anio = prompt("Ingrese año del automovil")
let km = prompt("Ingrese kilometraje")


function coticeSuVehiculo(edad, anio, km) {
    if ((edad >= 69) || (anio <= 1998) || (km >= 150000));{
        alert("No puede ser asegurado");
    }else{
        alert("Cotice su vehículo");
    }
    }

    const validations = (edad, genero, email, phone, marca, anio, km) => {
        // Declaración sin asignación
        let isValidEdad, isValidGenero, isValidEmail, isValidPhone, isValidMarca, isValidAnio, isValidKm;

        //Validacion de numeros
        if (isNaN(edad) || isNaN(phone) || isNaN(anio) || isNaN(km)) {
            alert("Error, revise haber tipeado correctamente");
        }

        console.log(
            edad,
            genero,
            email,
            phone,
            marca,
            anio,
            km
        );

        function seguro(marca, modelo, anio, km) {
            this.marca = marca;
            this.modelo = modelo;
            this.anio = anio;
            this.km = km;
        }

        /* 
            1= >=100milkm && <=150milkm
            2= >=75milkm && <=99milkm
            3= >=0milkm && <=74milkm
            
        */

        let cotizacion;
        const base = 10000

        switch (key) {
            case '1':
                cotizacion = base * 1.35
                break;
            case '2':
                cotizacion = base * 1.25
                break;
            case '3':
                cotizacion = base * 1.05
                break;

            default:
                break;
        }

        //desafio complementario arrays//
        const aseguradoras = [{ id: 1, aseguradora: "Mapfre" },
        { id: 2, aseguradora: "Meridional" },
        { id: 3, aseguradora: "Sancor" }];
        for (const aseguradora of aseguradoras) {
            console.log(aseguradora.id);
            console.log(aseguradora.aseguradora);
        }

        //clase 7//
        function mayorQue(n) {
            return m => m > n;
        }

        function iteradora(arreglo, funcion) {
            for(const item of arreglo){
                function(item)
            }
        }

        
        iteradora([1,7,3,5,8], console.log);
 