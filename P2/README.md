 # Práctica 2

DIEGO MARTÍN GRANJA

 HTML
 Respecto al HTML, es un código bastante básico con distintas divisiones para poder mover la disposición de la calculadora, de los botones y de la pantalla o display. He usado también clases e identificadores en los botones y en los operadores para usarlos en el código de javascript que explicaré posteriormente. Por último quise poner un párrafo con la marca 'CASIO' de mi calculadora.

 CSS
 Respecto a CSS primero he querido usar una fuente diferente a la que viene por defevto en html, asi que me descargué la mostrada en el código por internet. Luego puse un fonto de una mesa con materiales de trabajo y coloqué la calculadora en ese lugar mediante el comando 'border' dentro del div de calculadora.
 Continué dándole forma y estilo a los botones y al display con márgenes, colores, fondos de imágenes, la fuente descargada nombrada previamente, cambio de tamaño ...

 JAVASCRIPT
 Respecto al JavaScript, lo primero que hemos hecho ha sido llamar a las clases e identificadores del código html.
 Una vez llamados, hemos creado constantes de estado, que nos ayudarán a situarnos para saber si el siguiente paso es un dígito o un operador.
 Después hemos hecho dos bucles for que recorren y reconocen el array de dígitos y de signos.
 Tras los bucles, hemos creado una función para los dígitos, que básicamente con ayuda de los estados, son los que hacen que unicamente podamos hacer una operación con un único operador como se pide en la práctica.
 La otra función mostrada es la de los operadores, que tiene una mejora, y es para poder comenzar con unnúmero negativo a operar. Esto lo he conseguido gracias al identificador 'resta'.
 Por último he usado los comandos mostrados en el código para realizar las funciones de 'borrado de un dígito/operador', 'reinicio' y 'mostrar el resultado' al pulsar los botones respectivo

