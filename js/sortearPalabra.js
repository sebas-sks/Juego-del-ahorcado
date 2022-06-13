const palabras = ["JAVA", "AUTO", "CASA", "PERRO","NADIE", "MOUSE", "NUEVE", "CARTON"];
var palabraAzar = "";
var palabraCambio = [];

function iniciarJuego(){    
    espaciosLetras();
    //limpiarTablero();
}

function sortear(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraAzar = palabra;    
    return palabraAzar;
}

function espaciosLetras(){
    var palabraAzar = sortear();
    console.log(palabraAzar);    
    var i = 0;
    while(i<palabraAzar.length){
        crearEspacio(i);
        i++;
    }
    
}



function limpiarEspacios(){
    var list = document.getElementById("listPalabra");
    while (list.hasChildNodes()) {  
        list.removeChild(list.firstChild);
    }
}

function crearEspacio(i){
    
    lista = document.querySelector("#listPalabra");
    var li = document.createElement("li");
    li.classList.add("items");
    li.classList.add("letra");
    li.id = (i);
    li.textContent = "_____";
    lista.appendChild(li);
}




