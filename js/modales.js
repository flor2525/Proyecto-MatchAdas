// ******************** MODALES ********************



// + Modal de selección de nivel

        const seleccionNivel = () => {
            swal({
                title: 'Nuevo Juego',
                text: 'Selecciona la dificultad',
                buttons: {
                    facil: {
                        text: 'Fácil',
                        value: 'facil'
                    },
                    normal: {
                        text: 'Normal',
                        value: 'normal'
                    },
                    dificil: {
                        text: 'Difícil',
                        value: 'dificil'
                    },
                },
                closeOnClickOutside: false,
                closeOnEsc: false,
            })
              .then((value) => {
                switch (value) {
               
                  case "facil":
                    generarTablero(nivelFacil)
                    break;
               
                  case "normal":
                    generarTablero(nivelNormal)
                    break;
                
                case "dificil":
                    generarTablero(nivelDificil)
                     break;
               
                }
              });
    
        }
    
    
   // + Modal de bienvenida

    const modalBienvenida = () =>{
        swal({
            title: '¡Bienvenid@!',
            text: ` En Zoo Crush! tu objetivo es juntar tres o más figuras del mismo tipo, ya sea en fila o columna. Para eso, selecciona una figura y a continuación una figura adyacente para intercambiarlas de lugar.
            
            Si se forma un grupo, esas figuras se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!
            
            Controles
            Click izquierdo: selección
            Enter o Espaciado: selección
            Flechas o WASD: movimiento e intercambio
            `,
            button: '¡Vamos a jugar!',
            closeOnClickOutside: false,
            closeOnEsc: false,
        }) 
            .then(seleccionNivel)
    };

    window.onload = modalBienvenida();

