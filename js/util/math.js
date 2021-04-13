
/**
 * Semplice funzione che fa la somma dei due valori passati come parametri
 *  - IMPORTANTE: notare la keyword iniziale sulla firma della funzione (export)
 * @param  {} a primo valore 
 * @param  {} b secondo valore
 */
export function add(a, b) {  
    
  if (isNaN(a)){
      alert ("primo valore non numerico")
  } 
  else if (isNan(b)) {
      alert("secondo valore non numerico")
  }
  else{
    return a + b;
}
}
export function sott(a, b) {       
    if (isNaN(a)){
        alert ("primo valore non numerico")
    } 
    else if (isNan(b)) {
        alert("secondo valore non numerico")
    }
    else{
      return a - b;
  }
}

//TODO: Add arrow function version