
console.log("Ejecutando JS...");

// LLamamos a los elementos identificadores del HTML
display = document.getElementById("display")
clear = document.getElementById("clear")
borrar = document.getElementById("borrar")
igual = document.getElementById("igual")
restar = document.getElementById("restar")


//-- Crear un array con todos los elementos
//-- de la clase digito

// ESTADOS DE 

const ESTADO = {
  inicial : 0,
  primerdigito : 1,
  signo : 2,
  segundodigito : 3,
}




digito = document.getElementsByClassName("digito")

for (i=0; i<digito.length; i++) {
  digito[i].onclick = (ev) => {
  numeros(ev.target.value);
  }
}

//-- Crear un array con todos los elementos
//-- de la clase operador
operador = document.getElementsByClassName("operador")

for (i=0; i<operador.length; i++) {
  operador[i].onclick = (ev) => {
  operation(ev.target.value);
  }
}




let state = ESTADO.inicial;

function operation(operador){
  if (state == ESTADO.inicial){ /* Para poder poner un menos al empezar */
      restar.onclick = () => {
        display.innerHTML += "-";
        state = ESTADO.primerdigito;
      }
  }
  else if (state == ESTADO.primerdigito){
    display.innerHTML += operador;
    state = ESTADO.signo;
  }
}

function numeros(digito){
  if (state == ESTADO.inicial){
    display.innerHTML = digito;
    state = ESTADO.primerdigito;
  }
  else if (state == ESTADO.primerdigito){
    display.innerHTML += digito;
  }
  else if (state == ESTADO.signo){
    display.innerHTML += digito;
    state = ESTADO.segundodigito;
  }
  else if (state == ESTADO.segundodigito){
    display.innerHTML += digito;
  }
}


//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
  state = ESTADO.primerdigito;
  
}

/* FUNCIÓN PARA ELIMINAR TODO LO DEL DISPLAY 'CLEAR' */
clear.onclick = () => {
  display.innerHTML = "0";
  state = ESTADO.inicial;
}

/* BORRAR EL ÚLTIMO NÚMERO U OPERADOR */

borrar.onclick = () => {
  /* Al borrar el primer dígito */
    if (state == ESTADO.primerdigito || state == ESTADO.segundodigito){
      display.innerHTML = display.innerHTML.slice(0,-1)
    }
    /* Al borrar el signo */
    else if (state == ESTADO.signo){
      display.innerHTML = display.innerHTML.slice(0,-1)
      state = ESTADO.primerdigito;
    }
}