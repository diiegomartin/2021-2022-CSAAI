 # Práctica 3

HTML
Respecto al HTML, es bastante sencillo, simplemente he creado el canvas, o el cuadrado donde se va a realizar el juego, y posteriormente he escrito las instrucciones y he creado los botones para poder usarlo en el móvil.

CSS
Respecto al CSS he usado de fondo una imágen de una máquina de arcade, donde en su pantalla está situado el canvas en el que se juega al breakout.
Para la versión de móvil se debe rotarlo y visualizarlo desde la 'Vista de ordenador' en los ajustes del navegador, y se debe utilizar los botones de 'Right' y 'Left'.

JAVASCRIPT
Respecto al Javascript, lo he creado de tal manera como se nos orienta en las instrucciones básicas de la práctica. 
Para comenzar el juego debemos de pulsar la tecla SPACE correspondiente al número 32 en el teclado, llamada mediante el comando 'document.addEventListener'.
Al iniciar el juego pulsando el espacio, la pelota va hacia una dirección aleatoria, es decir, izquierda o derecha.
Para poder mover la raqueta, usamos las FLECHAS, correspondientes a los números 37 y 39 en el teclado.
He usado el mínimo de ladrillos que se podían con 9 columnas y 5 filas.
Arriba a la izquierda del canvas he puesto un contador con la puntuación que lleva el jugador miestras va eliminando ladrillos.
Arriba a la derecha están puestas las vidas que tiene el jugador. Cuando la pelota se apoya en el eje horizontal inferior del canvas se resta una vida.
Como punto adicional he conseguido meter sonidos a la pelota cada vez que golpea con la raqueta; y cada vez que se destruye un ladrillo.