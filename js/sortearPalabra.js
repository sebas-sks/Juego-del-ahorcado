//////////////////////////////DESARROLLADO POR SEBASTIAN VELASCO///////////////////////////////////
////////////////////////////////ESTE ARCHIVO REALIZA LOS PROCESOS PRINCIPALES DEL JUEGO/////////////////////////////////
/////////////////////INICIALIZANDO LAS VARIBLES QUE SE VAN A USAR DENTRO LA MAYORIA DE LAS FUNCIONES//////////////////////////////
const palabras = ["JAVA", "ALURA", "AHORCADO", "JAVASCRIPT","COMPUTADORA", "MOUSE", "WIFI", "TECLADO", "FRONTEND"];
var palabraAzar = "";
var intentos = 0;
var letrasInco = [];
var letrasCo = [];
let width = screen.width;

function iniciarJuego(){     
    limpiarTablero();
    limpiarEspacios();
    focus();   
    espaciosLetras(); 
    if(width<780){
        escribirMobile();    
    }else{
        escribirComputadora();
    }    
    intentos = 0;       
    letrasInco = [];
    letrasCo = [];
}//Funcion cuyo objetivo es regresar los procesos a su estado inicial para preparar un nuevo juego


function sortear(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraAzar = palabra;    
    return palabraAzar;
}//Función que hace la eleccion de la palabra que debera ser adivinada por el usuario

function espaciosLetras(){
    var palabraAzar = sortear();    
    var i = 0;
    while(i<palabraAzar.length){
        crearEspacio(i);
        i++;
    }    
}//Función que se encarga de invocar la creacion de los espacios en html segun las letras que tenga la palabra

function limpiarEspacios(){
    var list = document.getElementById("listPalabra");
    while (list.hasChildNodes()) {  
        list.removeChild(list.firstChild);
    }
}//Funcion que elimina los espacios una vez se inicia un nuevo juego para que no se sobrepongan

function crearEspacio(i){    
    lista = document.querySelector("#listPalabra");
    var li = document.createElement("li");
    li.classList.add("items");
    li.classList.add("letra");
    li.id = ("item"+i+"");
    li.textContent = "_____";
    lista.appendChild(li);
}//Funcion que crea los espacios segun la letra a adivinar

function focus(){
    document.querySelector("#key").focus();    
}//Funcion para el uso dentro de dispositivos mobiles, activa automaticamente el teclado cuando la pagina se abre


function mostrarPalabraInco(letra){
    var span = document.getElementById("span");       
    span.innerText = letra.join("");        
}//Funcion que muestra las letras erradas al usuario

function mostrarPalabraCo(indice, letra){    
    var i = 0;    
    while(i<indice.length){
        document.getElementById("item"+""+indice[i]).innerHTML = letra;
        i++;
    }        
}//Funcion para mostrar las letras que ha acertado el usuario


function escribirComputadora(){
    var ind = [];    
    var canva = document.querySelector("#secJuego");
    canva.addEventListener("keyup", (event)=>{        
        var letra = event.path[0].value;        
        if((letra.length>0)&&(letra.length<=1)){
            if(verificarTeclado(letra)){   
                ind.push(letra);                             
                if(palabraAzar.includes(letra.toUpperCase())){                                        
                    ind = encontrarPosicion(palabraAzar, letra.toUpperCase());                    
                    mostrarPalabraCo(ind, letra.toUpperCase());
                    for(var i = 0; i<ind.length;i++){
                        letrasCo[ind[i]] = letra.toUpperCase();
                    }                                        
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
        }else{
            event.path[0].value = "";
        }        
    });
}//Funcion para uso en computadoras, esta funcion es la que invoca, revisa y procesa el funcionamiento del juego, tanto como si el 
//usuario no logra completar el juego, como si gana e incluso cuando se rinde.


function escribirMobile(){
    var ind = [];   
    var input = document.querySelector("#key");
    input.addEventListener("keyup", (event)=>{        
        var letra = event.path[0].value;
        if((letra.length>0)&&(letra.length<=1)){            
            if(verificarTeclado(letra)){   
                ind.push(letra);                             
                if(palabraAzar.includes(letra.toUpperCase())){                                        
                    ind = encontrarPosicion(palabraAzar, letra.toUpperCase());                    
                    mostrarPalabraCo(ind, letra.toUpperCase());
                    for(var i = 0; i<ind.length;i++){
                        letrasCo[ind[i]] = letra.toUpperCase();
                    }                                        
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
        }else{
            event.path[0].value = "";
        }      
    });
}//Funcion para uso en telefonos celulares, esta funcion es la que invoca, revisa y procesa el funcionamiento del juego, tanto como si el 
//usuario no logra completar el juego, como si gana e incluso cuando se rinde.

function verificarGanador(arr){    
    var win = false;    
    if(palabraAzar == arr.join("")){        
        mostrarMensajes("success", "Has Ganado", "Adivinaste la palabra "+palabraAzar);
        win = true;
    }          
    return win;
}//Evalua si el usuario ha acertado la palabra dentro de los intentos establecidos


function encontrarPosicion(palabraAzar, letr){
    var indices = [];
    var arr = palabraAzar.split("");        
    var idx = arr.indexOf(letr);
    while (idx!=-1) {
        indices.push(idx);
        idx = arr.indexOf(letr, idx + 1);
    }
    return indices;
}//Funcion que regresa la posicion de la letra para ubicarla en el orden correcto y que el usuario pueda guiarse adecuadamente 

function verificarTeclado(letr){
    var regex = new RegExp("^[a-zA-Z]+$");   
    if(regex.test(letr)){        
        return true;
    }            
    return false;    
}//Funcion que evita que caracteres o numeros sean procesados por el juego.

