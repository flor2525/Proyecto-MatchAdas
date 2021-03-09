// ******************** ELEMENTOS DE HTML ********************

const grilla = document.getElementById('grilla');
const temporizador = document.getElementById('temporizador')
const botonInfo = document.getElementById('boton-info')
const botonReiniciar = document.getElementById('boton-reiniciar')


// ******************** VARIABLES GLOBALES ********************

const items = ["🦁", "🐻", "🦊", "🐼", "🐨"];

let nivel ;
let tiempo ;
let pausa ;
let empezarTiempo ;



// ******************** FUNCIONES ********************


//  + Función para generar emojis random

const generaRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


// + Función para adaptar tamaño de la grilla

 const ajustarTamano = (nivel, div) => {
    if (nivel === 9) {
            div.classList.add('emoji-facil')
        } else if (nivel === 8) {
            div.classList.add('emoji-normal')
        } else {
            div.classList.add('emoji-dificil')
        }

}


// + Función para generar tablero

const generarTablero = (nivel) => {
        tiempo = 30
        grilla.innerHTML = '';
        nuevoArr = [];
        for (let i = 0; i < nivel; i++){
            for (let j = 0; j < nivel; j++){
                nuevoArr.push(items[generaRandom(0, 4)])   
            }
        }

        for (let k = 0; k < nuevoArr.length; k++){
            const nuevoDiv = document.createElement('div');
            nuevoDiv.innerHTML = nuevoArr[k]
            grilla.appendChild(nuevoDiv);
            ajustarTamano(nivel, nuevoDiv);
                
        }
        empezarTiempo = setInterval(reloj, 1000);
          
    }


    // + Función para limpiar el tablero

    const limpiarTablero = () => {
        grilla.innerHTML = ''
    }

    // + Función de temporizador

    const reloj = () => {
        if (tiempo > 0) {
        tiempo--
        let  segundos  =  tiempo % 60 ;
        let  minutos  =  (( tiempo  -  segundos ) / 60 ) % 60 ; 
        let  txtSegundos  =  segundos  <  10 ? '0'  +  segundos : segundos ;
        pausa = txtSegundos
        let  txtMinutos  =  minutos  <  10 ? '0'  +  minutos : minutos ;
        temporizador . innerHTML  =  `${txtMinutos}:${txtSegundos}`;
             
        } else {

            ModalJuegoTerminado()
        }
    }

    // + Función para frenar temporizador

    const FrenarTiempo = () => {
        clearInterval(empezarTiempo)
    }



    
       
    botonReiniciar.addEventListener('click', () => {
        modalReiniciar()
      })


