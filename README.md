# Cómo he realizado la práctica del submarino

Para la realización del juego del subamrino he escogido la segunda plantilla, ya que veía algo más claro cómo separar la lógica de la interfaz.

He dividido el juego en la parte gráfica y en la lógica. `UI.js` se encarga de la parte gráfica, donde he añadido la función para pintar el tablero, y la lógica del juego la lleva `GameSubmarine.js`, 
donde he utilizado el módulo `Sumbmarine.js` que contiene la lógica del movimiento del submarino y donde se asigna la posición aleatoria al comenzar el juego, y el módulo `Cell.js` que lo utilizo para
guardar la información de las celdas del tablero y los vecinos de esa celda. Esto se utilizará para asignar una celda al submarino y ver los posibles movimientos según sus vecinos. 

Gracias a los vecinos, el submarino solo tendrá en cuenta los movimientos que no se salgan del tablero. Tanto la inicialización como la asignación de celdas y sus vecinos se ha hecho a partir
de una tabla bidimensional que posteriormente se ha aplanado con el método `flat()`, que convierte el array a una dimensión. 

Mientras revisaba el código, cambié la creación de la tabla gráfica del `start()` al `init()`, ya que esta tabla no necesita ser reiniciada cuando empieza una nueva partida,
ya que la parte visual no cambia entre partidas, únicamente la lógica. Tras esto, he añadido que al finalizar una partida se reinicie.

La parte más problemática de la práctica ha sido separar la parte lógica de la gráfica, más que el juego en sí.
