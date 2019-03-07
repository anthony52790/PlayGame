function Jugador(nombre){
    this.nombre = nombre;
    this.puntosVida = 100;
    this.specialPunts = 100;

    this.curar = function (jugadorObjetivo) {
        if(this.specialPunts >= 20){
            this.specialPunts -= 20;
            jugadorObjetivo.puntosVida += 20;            
        }
        else{
            console.log(this.nombre + "no tiene puntos de vida")
        }
        this.estado(jugadorObjetivo)
    }
    this.tirarFlecha = function (jugadorObjetivo) {
        if(jugadorObjetivo.puntosVida >=20){
          jugadorObjetivo.puntosVida -= 20;  
        }
        else{
            jugadorObjetivo.puntosVida = 0;
            console.log(jugadorObjetivo.nombre+ " murio!!")
        }
        this.estado (jugadorObjetivo);
    }
    this.autorecuperacion = function (jugadorObjetivo) {
        if(jugadorObjetivo.puntosVida == 0){
            jugadorObjetivo.puntosVida +=20;
            jugadorObjetivo.specialPunts -=20;            
        }else{
            console.log(this.nombre+" aun tiene vida")
        }

        this.estado(jugadorObjetivo);
    }
    this.estado = function (jugadorObjetivo) {
        console.log(this)
        console.log(jugadorObjetivo)
    }
}

var op1;
var op2;

window.addEventListener('load',init,false);
function init(){
    var jugar = document.getElementById("jugar");
    jugar.addEventListener('click',start,false);
}
function start(e){
    var jugador1 = document.getElementById("op1").value;
    var jugador2 = document.getElementById("op2").value;   
    op1 = new Jugador(jugador1);
    op2 = new Jugador(jugador2);
    document.addEventListener('keypress',dispararFlecha,false);
}
function dispararFlecha(e){
    if(e.key == 'a'){
        console.log(op1.tirarFlecha(op2))
    }else if(e.key == 'l'){
        console.log(op2.tirarFlecha(op1))
    }else{
        e.preventDefault();
    }
}