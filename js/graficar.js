var canvAhorcado = document.querySelector("#canvahorcado");
var pincel = canvAhorcado.getContext("2d");


const x = 450;
const y = 800;

function dibujoCompleto(intentos){
    switch (intentos) {
        case 1:
            dibujarMarco();        
            break;
        case 2:
            dibujarVigaY();    
            break;
        case 3:
            dibujarCabeza();
            break;
        case 4:
            dbjbrazoIzquierdo();    
            break;
        case 5:
            dbjbrazoDerecho();    
            break;
        case 6:
            dibujarPieIzquierdo();
            break;
        case 7:
            dibujarPieDerecho();
            break;
        default:
            mostrarMensajes("warning", "Juego Terminado", "Has perdido la palabra era "+palabraAzar);
            //iniciarJuego();
            break;
    }    
}

function limpiarTablero(){
    pincel.clearRect(0,0,1200,800);
    document.getElementById("span").innerHTML = "";
}

function dibujarMarco(){
    pincel.fillStyle="black" //Este es el codigo de la base
    pincel.beginPath(); 
    pincel.moveTo(x, y-50); //primero para el punto donde hacer cruzar el tringunlo y su altura
    pincel.lineTo(x-50, y); //punto de inicio de el triangulo y final 
    pincel.lineTo(x+50, y); //punto final 
    pincel.fill();
    pincel.beginPath(); 
    pincel.fillRect(x-5,y-450,10,450); //Este es la viga principal de la horca
}
function dibujarVigaY(){    
    pincel.fillRect(x-5,y-450,200,10); //Este es el mastil superior de la horca
    pincel.fillRect(x+195,y-450,10,70);     
}

function dibujarCabeza(){
    //cabeza del muñeco
    pincel.beginPath(); 
    pincel.fillStyle = "black";
    pincel.arc(x+200, y-380, 30, 0, 2 * Math.PI);

    pincel.fill();

    pincel.beginPath(); 
    pincel.fillStyle = "white";
    pincel.arc(x+200, y-380, 20, 0, 2 * Math.PI);
    pincel.fill();
    //cabeza del muñeco

}

function dbjbrazoDerecho(){
    pincel.beginPath(); 
    pincel.fillStyle = "black";
    pincel.fillRect(x+195,y-350,10,20); 

    pincel.lineWidth = 10;
    pincel.moveTo(x+160, y-300);
    pincel.lineTo(x+200,y-330);
    pincel.stroke();

}

function dbjbrazoIzquierdo(){
    pincel.lineWidth = 10;
    pincel.moveTo(x+235, y-300);
    pincel.lineTo(x+200,y-330);
    pincel.stroke();

}

function dibujarPieIzquierdo(){
    pincel.fillRect(x+195,y-330,10,60); 

    pincel.lineWidth = 10;
    pincel.moveTo(x+160, y-230);
    pincel.lineTo(x+200,y-270);
    pincel.stroke();

}

function dibujarPieDerecho(){
    pincel.lineWidth = 10;
    pincel.moveTo(x+235, y-230);
    pincel.lineTo(x+200,y-270);
    pincel.stroke();
}
