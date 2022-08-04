const now = DateTime.now()
console.log(now.toString());

function seguro(anio, marca, modelo, version) {
    this.anio = anio;
    this.marca = marca;
    this.modelo = modelo;
    this.version = version;
}

let anios = JSON.parse(localStorage.getItem [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001]);
let marcas = JSON.parse(localStorage.getItem ["Ford", "Volkswagen", "Toyota", "Fiat", "Nissan", "Jeep", "Peugeot", "Renault", "Chevrolet", "Honda"]);
let modelos = JSON.parse(localStorage.getItem ["Bronco", "Territory", "Kuga", "Ranger", "F-150", "Ecosport", "Maverick", "Focus","Fiesta", "Ka","Mondeo", "Amarok", "Taos", "T-croos", "Suran", "Fox", "Gol trend", "Tiguan", "Toaureg", "Up", "Gol power", "Polo", "Golf", "Corolla", "Hilux", "Etios", "Rav4", "500", "Argo", "Cronos", "Palio", "Toro", "Strada", "Mobi", "Siena", "Frontier", "Kicks", "Versa", "Note", "Journey", "Renegade", "208", "206", "207", "2008", "3008", "5008", "Partner", "408", "Alaskan", "Captur", "Duster", "Kangoo", "Koleos", "Kwid", "Logan", "Sandero", "Camaro", "Cobalt", "Cruze", "Montana", "Onix", "Prisma", "S-10", "Spin", "Tracker", "Accord", "Civic", "Crv", "Hrv"]);  

let formLabel1 = document.getElementsByClassName('formLabel1') 
let formLabel2 = document.getElementsByClassName('formLabel2') 

function recorrer(formLabel, valores) {
    formLabel2.innerHTML=''

    for (let index of valores){
        formLabel.innerHTML =>
        <option>$(index) </option>
    }
}

function llenarModelos() {
    recorrer(formLabel1, marcas)
}

llenarModelos()

formLabel1.addEventListener('change', (e) =>{
    let dato=e.target.value

    switch (dato) {
        case 'Ford':
            recorrer(formLabel2, modelos.slice(0, 10))
            break;
        case 'Volkswagen':
            recorrer(formLabel2, modelos.slice(11, 22))
            break;

        case 'Toyota':
            recorrer(formLabel2, modelos.slice(23, 26))
            break;

        case 'Fiat':
            recorrer(formLabel2, modelos.slice(27, 34))
            break;

        case 'Nissan':
            recorrer(formLabel2, modelos.slice(35, 38))
            break;

        case 'Jeep':
            recorrer(formLabel2, modelos.slice(39, 40))
            break;

        case 'Peugeot':
            recorrer(formLabel2, modelos.slice(41, 48))
            break;

        case 'Renault':
            recorrer(formLabel2, modelos.slice(49, 56))
            break;

        case 'Chevrolet':
            recorrer(formLabel2, modelos.slice(57, 65))
            break;

        case 'Honda':
            recorrer(formLabel2, modelos.slice(66, 69))
            break;

    
        default:
            break;
    }
})

