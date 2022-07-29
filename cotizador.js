function Seguro(anio, marca, modelo, version) {
    this.anio = anio;
    this.marca = marca;
    this.modelo = modelo;
    this.version = version;
}

let anios = JSON.parse(localStorage.getItem [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001]);
let marcas = JSON.parse(localStorage.getItem ["Ford", "Volkswagen", "Toyota", "Fiat", "Nissan", "Jeep", "Peugeot", "Renault", "Chevrolet", "Honda"]);
let modelos = JSON.parse(localStorage.getItem ["Bronco", "Territory", "Kuga", "Ranger", "F-150", "Ecosport", "Maverick", "Focus","Fiesta", "Ka","Mondeo", "Amarok", "Taos", "T-croos", "Suran", "Fox", "Gol trend", "Tiguan", "Toaureg", "Up", "Gol power", "Polo", "Golf", "Corolla", "Hilux", "Etios", "Rav4", "500", "Argo", "Cronos", "Palio", "Toro", "Strada", "Mobi", "Siena", "Frontier", "Kicks", "Versa", "Note", "Journey", "Renegade", "208", "206", "207", "2008", "3008", "5008", "Partner", "408", "Alaskan", "Captur", "Duster", "Kangoo", "Koleos", "Kwid", "Logan", "Sandero", "Camaro", "Cobalt", "Cruze", "Montana", "Onix", "Prisma", "S-10", "Spin", "Tracker", "Accord", "Civic", "Crv", "Hrv"]);  

let form-label1 = document.getElementsByClassName(´form-label1´) 
let form-label2 = document.getElementsByClassName(´form-label2´) 

function recorrer(form-label, valores) {
    form-label2.innerHTML=´´

    for (let index of valores){
        form-label.innerHTML =>
        <option>$(index) </option>
    }
}

function llenarModelos() {
    recorrer(form-label1, marcas)
}

llenarModelos()

form-label1.addEventListener(´change´, (e) =>{
    let dato=e.target.value

    switch (dato) {
        case ´Ford´:
            recorrer(form-label2, modelos.slice(0, 10))
            break;
        case ´Volkswagen´:
            recorrer(form-label2, modelos.slice(11, 22))
            break;

        case ´Toyota´:
            recorrer(form-label2, modelos.slice(23, 26))
            break;

        case ´Fiat´:
            recorrer(form-label2, modelos.slice(27, 34))
            break;

        case ´Nissan´:
            recorrer(form-label2, modelos.slice(35, 38))
            break;

        case ´Jeep´:
            recorrer(form-label2, modelos.slice(39, 40))
            break;

        case ´Peugeot´:
            recorrer(form-label2, modelos.slice(41, 48))
            break;

        case ´Renault´:
            recorrer(form-label2, modelos.slice(49, 56))
            break;

        case ´Chevrolet´:
            recorrer(form-label2, modelos.slice(57, 65))
            break;

        case ´Honda´:
            recorrer(form-label2, modelos.slice(66, 69))
            break;

    
        default:
            break;
    }
})

