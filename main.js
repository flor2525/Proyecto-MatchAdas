// ******************** GRILLA ********************

// + Arr para sacar emojis aleatorios

 const items = ["🦁", "🐻", "🦊", "🐼", "🐨"];

// + Niveles de juego

 const nivelFacil = 9;
 const nivelNormal = 8;
 const nivelDificil = 7;


//  + Tablero

const grilla = document.getElementById('grilla');

//  + Función para generar emojis random

const generaRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}


// + Función para adaptar tamaño de la grilla

 const ajustarTamano = (nivel, div) => {
    if (nivel === nivelFacil) {
            div.classList.add('emoji-facil')
        } else if (nivel === nivelNormal) {
            div.classList.add('emoji-normal')
        } else {
            div.classList.add('emoji-dificil')
        }

}


// + Función para generar tablero

const generarTablero = (nivel) => {
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
          
    }
    
    generarTablero(nivelDificil)

    
    