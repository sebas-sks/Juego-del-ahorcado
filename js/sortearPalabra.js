const palabras = ["JAVA", "ALURA", "AHORCADO", "JAVASCRIPT","COMPUTADORA", "MOUSE", "WIFI", "TECLADO", "FRONTEND"];
var palabraAzar = "";
var palabraCambio = [];
var l = document.querySelector("#key");
var intentos = 0;



function iniciarJuego(){ 
    intentos = 0;
    limpiarTablero();
    limpiarEspacios();
    focus();   
    espaciosLetras();            
    escribir();    
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
    li.id = ("item"+i+"");
    li.textContent = "_____";
    lista.appendChild(li);
}

function focus(){
    document.querySelector("#key").focus();    
}


function mostrarPalabraInco(letra){
    var span = document.getElementById("span");       
    span.innerText = letra.join("");    
    
}

function mostrarPalabraCo(indice, letra){    
    var i = 0;    
    while(i<indice.length){
        document.getElementById("item"+""+indice[i]).innerHTML = letra;
        i++;
    }        
}

function escribir(){
    var ind = [];
    var letrasInco = [];
    var letrasCo = [];
    var input = document.querySelector("#key");
    input.addEventListener("keyup", (event)=>{
        
        var letra = event.path[0].value;
        if(letra.length>0){
            if(verificarTeclado(letra)){   
                ind.push(letra);
                             
                if(palabraAzar.includes(letra.toUpperCase())){                                        
                    ind = encontrarPosicion(palabraAzar, letra.toUpperCase());                    
                    mostrarPalabraCo(ind, letra.toUpperCase());
                    for(var i = 0; i<ind.length;i++){
                        letrasCo[ind[i]] = letra.toUpperCase();
                    }                    
                    console.log(letrasCo);
                    if(verificarGanador(letrasCo)){
                        letrasCo = [];
                        letrasInco = [];                                             
                    }              
                }else{                                                                                                                                
                    if(!letrasInco.includes(letra.toUpperCase())){
                        intentos++;  
                        letrasInco.push(letra.toUpperCase());
                        mostrarPalabraInco(letrasInco);                    
                        dibujoCompleto(intentos);
                        if(intentos>=8){
                            letrasInco = [];
                            letrasCo = [];
                        }
                    }                                                     
                }                
                document.getElementById("key").value = ""; 
                                        
            }   
            
        }        
    });
}

function verificarGanador(arr){    
    var win = false;
    if(palabraAzar == arr.join("")){        
        mostrarMensajes("success", "Has Ganado", "Adivinaste la palabra "+palabraAzar);
        win = true;
    }        
    return win;
}


function encontrarPosicion(palabraAzar, letr){
    var indices = [];
    var arr = palabraAzar.split("");        
    var idx = arr.indexOf(letr);
    console.log(idx);
    while (idx!=-1) {
        indices.push(idx);
        idx = arr.indexOf(letr, idx + 1);
    }
    return indices;
}

function verificarTeclado(letr){
    var regex = new RegExp("^[a-zA-Z]+$");
    if(regex.test(letr)){
        return true;
    }        
    return false;
}

