const palabras = ["JAVA", "AUTO", "CASA", "PERRO","NADIE", "MOUSE", "NUEVE", "CARTON"];

const palabraCambio = "NADIE";

function relevo(palabraAzar){
    if(palabraCambio==palabraAzar){
        palabraCambio=palabraAzar;
        return palabraCambio;
    }
    return false;
}



function aletatorio(){
    var rango = palabras.length;     
    return Math.round(Math.random()*rango); 
        
}

function iniciarJuego(){    
    espaciosLetras(palabras);
    //limpiarTablero();
}

function sortear(arr){                   
    var azar = aletatorio();
    if(arr[azar]===undefined){                
        return arr[0];               
    }    
    return arr[azar];        
}

function espaciosLetras(arr){
    var palabraAzar = sortear(arr);
    console.log(palabraAzar);    
    var i = 0;
    while(i<palabraAzar.length){
        crearEspacio();
        i++;
    }
    
}

function limpiarEspacios(){
    var list = document.getElementById("listPalabra");

    while (list.hasChildNodes()) {  
        list.removeChild(list.firstChild);
    }
}

function crearEspacio(){
    lista = document.querySelector("#listPalabra");
    var li = document.createElement("li");
    li.classList.add("items");
    li.classList.add("letra");
    li.textContent = "_____";
    lista.appendChild(li);
}




