//////////////////////////////DESARROLLADO POR SEBASTIAN VELASCO///////////////////////////////////
////////////////////////////////ESTE ARCHIVO SE ENCARGA DE LOS PROCESOS PARA GUARDAR UNA NUEVA PALABRA DENTRO DEL JUEGO/////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validarPalabra(){    
    var nuevaPalabra = document.getElementById("txtAgre").value.toLowerCase();    
    if(nuevaPalabra==""){
        mostrarMensajes("error", "¡Error!", "Por favor, escriba la palabra");                
        return false;
    }else{
        if(nuevaPalabra.length>8){
            mostrarMensajes("warning", "¡Cuidado!", "Ingrese palabras de maximo 8 caracteres");                
            return false;
        }else{
            var regex = new RegExp("^[a-zA-Z ]+$");
            if(!regex.test(nuevaPalabra)){
                mostrarMensajes("warning", "¡Cuidado!", "No se aceptan números ni caracteres especiales");   
                return false;
            }else{               
                if(elementoExiste(palabras, nuevaPalabra.toUpperCase())){
                    mostrarMensajes("success", "¡Realizado con exito!", "Se ha agregado la palabra al juego");   
                return nuevaPalabra;
                }                                
            }
        }
    }
}//Funcion que realiza la validacion del input donde el usuario coloca la nueva palabra a agregar
//Verifica que no sobrepase los 8 caracteres, que no trate de ingresar un valor numerico 
//ni mucho menos una palabra repetida u nula

function elementoExiste(palabras, palabra){
    if(palabras.indexOf(palabra) === -1){        
        return true;
    }else{
        mostrarMensajes("warning", "¡Elemento duplicado!", "Esta palabra ya existe");
        return false;
    }
}//Verifica que la palabra no exista en el juego

function agregarJuego(){    
    const vrfPalabra = validarPalabra(); 
    if(vrfPalabra){            
        palabras.push(vrfPalabra.toUpperCase());
        document.getElementById("txtAgre").value = "";        
        return true;      
    }
    return false;
}//Funcion que agrega la palabra dentro del arreglo para usarla en el juego

function mostrarMensajes(icono, titulo, mensaje){
    Swal.fire(
        {
            icon: icono,
            title: titulo,
            text: mensaje,            
            confirmButtonText: "¡Entendido!",
            toast: "true"
        }
    );
}//Funcion usada dentro de todo el juego para poder mostrar mensajes al usuario