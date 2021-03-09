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
                    nivel = 9
                    generarTablero(nivel)
                    break;
               
                  case "normal":
                    nivel = 8
                    generarTablero(nivel)
                    break;
                
                  case "dificil":
                    nivel = 7
                    generarTablero(nivel)
                     break;
               
                }
              });

    
        }
    
    
   // + Modal de bienvenida

    const modalBienvenida = () => {
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


    // + Modal juego terminado - funciona pero no puedo hacer que mantenga el nivel

    const ModalJuegoTerminado = () => {
        swal({
            title: '¡Juego Terminado!',
            text: `Puntaje Final: 0`,
            buttons: {
                nuevoJuego: {
                    text: 'Nuevo Juego',
                    value: 'nuevoJuego'
                },
                reiniciar:{
                    text:'Reiniciar',
                    value: 'reiniciar'
                }
            },
            closeOnClickOutside: false,
            closeOnEsc: false
        })
        .then((value) => {
            switch (value) {
                case 'nuevoJuego':
                    seleccionNivel();
                    break;
                case 'reiniciar':
                    generarTablero(nivel)
                    break;
                }
        });
        FrenarTiempo();
    };


     // + Modal reiniciar juego - 

    //  const modalReiniciar = () => {
    //     FrenarTiempo(); 
    //     swal({
    //         title: '¿Reiniciar Juego?',
    //         text: '¡Perderás todo tu puntaje acumulado!',
    //         buttons: {
    //             cancel: 'Cancelar', 
    //             confirm:  'Nuevo Juego'
    //         },
    //             closeOnClickOutside: false,
    //             closeOnEsc: false,
    //     })
    //     .then((value) => {
    //         switch (value) {
    //             case null:
    //                 empezarTiempo = setInterval(reloj, 1000);
    //             break;
    //             case true:
    //                 seleccionNivel()
    //             break;
    //         }
    //     })
    // };


  

    // + Modal información

    // const modalInformacion = () => {
    //     FrenarTiempo();
    //     swal({
    //         title: '¡Bienvenid@!',
    //         text: ` En Zoo Crush! tu objetivo es juntar tres o más figuras del mismo tipo, ya sea en fila o columna. Para eso, selecciona una figura y a continuación una figura adyacente para intercambiarlas de lugar.
            
    //         Si se forma un grupo, esas figuras se eliminarán y ganarás puntos. ¡Sigue armando grupos de 3 o más antes de que se acabe el tiempo!
            
    //         Controles
    //         Click izquierdo: selección
    //         Enter o Espaciado: selección
    //         Flechas o WASD: movimiento e intercambio
    //         `,
    //         button: '¡Vamos a jugar!',
    //         closeOnClickOutside: false,
    //         closeOnEsc: false,
    //     }) 
        
    // };



