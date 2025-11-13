# Cómo he realizado la práctica del submarino

Para la realización del juego del subamrino he escogido la segunda plantilla, ya que veía algo más claro cómo separar la lógica de la interfaz.

He dividido el juego en la parte gráfica y en la lógica. `UI.js` se encarga de la parte gráfica, donde he añadido la función para pintar el tablero, y la lógica del juego la lleva `GameSubmarine.js`, 
donde he utilizado el módulo `Sumbmarine.js` que contiene la lógica del movimiento del submarino y donde se asigna la posición aleatoria al comenzar el juego, y el módulo `Cell.js` que lo utilizo para
guardar la información de las celdas del tablero y los vecinos de esa celda. Esto se utilizará para asignar una celda al submarino y ver los posibles movimientos según sus vecinos. 

Gracias a los vecinos, el submarino solo tendrá en cuenta los movimientos que no se salgan del tablero. Tanto la inicialización como la asignación de celdas y sus vecinos se ha hecho a partir
de una tabla bidimensional que posteriormente se ha aplanado con el método `flat()`, que convierte el array a una dimensión. 

Dentro de `UI.js` se enceuntra el método `init` que es el encargado de dar los valores a las propiedades del juego, mientras que `start` se encarga de limpiar el juego anterior,
dando paso a una nueva partida.

Siguiendo lo anterior, el orden de inicio del juego comenzaría en `game.js` que llama y le da valor a las propiedades del juego. Tras esto, se selecciona el juego (submarino) y se llama 
a su método `start()`. Este inicializa la tabla lógica con las celdas y sus vecinos y llama al método `start()` de la parte gráfica que inicializa el tablero visual.

# Dificultades

Más que problemas, lo que más me ha costado ha sido separar la parte lógica de la gráfica.
