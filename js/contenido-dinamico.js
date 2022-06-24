//////////////////////////////DESARROLLADO POR SEBASTIAN VELASCO///////////////////////////////////
////////////////////////////////ESTE ARCHIVO INVOCA LAS SECCIONES Y LAS FUNCIONES SEGUN EL BOTON QUE EL USUARIO PULSE/////////////////////////////////
/////////////////////INICIALIZANDO LAS VARIBLES QUE SE VAN A USAR DENTRO LA MAYORIA DE LAS FUNCIONES//////////////////////////////
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
});//Evento para el boton que inicia el juego

btnAgregar.addEventListener("click", function(){            
    gestorContenido(frmAgregar,frmIniciar);   
});//Evento para el boton que abre la sección que permite agregar nuevas palabras al juego

btnGuardar.addEventListener("click", function(){
    const val = agregarJuego();    
    if(val){
        setTimeout(gestorContenido, 2000, frmIniciar, frmAgregar);    
    }    
});//Evento para el boton que invoca el guardado de la nueva palabra que el usuario desee

btnCancelar.addEventListener("click", function(){
    gestorContenido(frmIniciar,frmAgregar);
});//Evento para el boton cancelar

btnNuevo.addEventListener("click",function(){    
    limpiarEspacios();
    iniciarJuego();     
});//Evento para el botón que inicia un nuevo juego

btnDesistir.addEventListener("click", function(){
    gestorContenido(frmIniciar,frmJuego);
    limpiarEspacios();
});//Evento para el boton que regresa a la pantalla principal si es que el usuario desea rendirse

function gestorContenido(mostrar, quitar){    
    quitar.classList.add("ocultar");
    mostrar.classList.remove("ocultar");
}//Funcion que oculta la seccion que se este mostrando y muestra solo la que se necesita




   

