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
}

function elementoExiste(palabras, palabra){
    if(palabras.indexOf(palabra) === -1){        
        return true;
    }else{
        mostrarMensajes("warning", "¡Elemento duplicado!", "Esta palabra ya existe");
        return false;
    }
}

function agregarJuego(){    
    const vrfPalabra = validarPalabra(); 
    if(vrfPalabra){            
        palabras.push(vrfPalabra.toUpperCase());
        document.getElementById("txtAgre").value = "";
        console.log(palabras);
        return true;      
    }
    return false;
}

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
}