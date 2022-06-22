var btnIniciar = document.querySelector("#btnIni");
var btnAgregar = document.querySelector("#btnAgr");
var btnGuardar = document.querySelector("#btnGuardar");
var btnCancelar = document.querySelector("#btnCancelar");
var btnDesistir = document.querySelector("#btnDesistir");
var btnNuevo = document.querySelector("#btnNuevo");
const frmIniciar = document.querySelector("#menu");
const frmAgregar = document.querySelector("#agrPalabra");
const frmJuego = document.querySelector("#secJuego");


btnIniciar.addEventListener("click", function(){       
    gestorContenido(frmJuego, frmIniciar);           
    iniciarJuego();     
    
});

btnAgregar.addEventListener("click", function(){            
    gestorContenido(frmAgregar,frmIniciar);
   
});

btnGuardar.addEventListener("click", function(){
    const val = agregarJuego();    
    if(val){
        setTimeout(gestorContenido, 2000, frmIniciar, frmAgregar);    
    }
    
});

btnCancelar.addEventListener("click", function(){
    gestorContenido(frmIniciar,frmAgregar);
});

btnNuevo.addEventListener("click",function(){    
    limpiarEspacios();
    iniciarJuego();     
});

btnDesistir.addEventListener("click", function(){
    gestorContenido(frmIniciar,frmJuego);
    limpiarEspacios();
});
function gestorContenido(mostrar, quitar){    
    quitar.classList.add("ocultar");
    mostrar.classList.remove("ocultar");
}




   

