var btnAgregar = document.querySelector("#btnAgr");
//var btnIniciar = document.querySelector("#btnIni");
//var frmJuego = document.querySelector("");
const frmIniciar = document.querySelector("#menu");
const frmAgregar = document.querySelector("#agrPalabra");


btnAgregar.addEventListener("click", function(){            
    gestorContenido(frmAgregar,frmIniciar);
    const btnCancelar = document.querySelector("btnCancelar");
});



btnCancelar.addEventListener("click", function(){
    gestorContenido(frmIniciar,frmAgregar);
});

function gestorContenido(mostrar, quitar){    
    quitar.classList.add("ocultar");
    mostrar.classList.remove("ocultar");
}