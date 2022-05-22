var btnIniciar = document.querySelector("#btnIni");
var btnAgregar = document.querySelector("#btnAgr");
var btnCancelar = document.querySelector("#btnCancelar");
var btnDesistir = document.querySelector("#btnDesistir");

//var frmJuego = document.querySelector("");
const frmIniciar = document.querySelector("#menu");
const frmAgregar = document.querySelector("#agrPalabra");
const frmJuego = document.querySelector("#secJuego");

btnIniciar.addEventListener("click", function(){
    gestorContenido(frmJuego, frmIniciar);
});

btnAgregar.addEventListener("click", function(){            
    gestorContenido(frmAgregar,frmIniciar);
    
});

btnCancelar.addEventListener("click", function(){
    gestorContenido(frmIniciar,frmAgregar);
});

btnDesistir.addEventListener("click", function(){
    gestorContenido(frmIniciar,frmJuego);
});
function gestorContenido(mostrar, quitar){    
    quitar.classList.add("ocultar");
    mostrar.classList.remove("ocultar");
}