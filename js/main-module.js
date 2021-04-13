import {add,sott} from './util/math.js'; // Importo un modulo esterno e in particolare una sua funzione.

/**
 * Funsione ad uso dimostrativo:
 *  - La funzione è esportata dal modulo e utilizza al suo interno la funzione "add" precedentemente importata.
 * 
 * @param  {} a primo valore
 * @param  {} b secondo valore
 */
export function callAdd (a, b) {
  // Viene usata la funzione "parseInt()" su ogni parametro per convertire il valore in formato numerico.
  // Si rende necessario questo cast perchè i value dei tag INPUT non sono tipizzati ma solo stringhe. 
  return add (parseInt (a), parseInt (b)); 
}

export function callsott (a, b) {
  return sott (parseInt (a), parseInt (b)); 

}





























//TODO: callAdd arrow function version

export function addListElements () {
  for (let index = 1; index < 5; index++) {
    const node = document.createElement ('LI'); // Create a <li> node
    const textnode = document.createTextNode ('Elemento' + index); // Create a text node
    node.appendChild (textnode); // Append the text to <li>
    document.getElementById ('myList').appendChild (node); // Append <li> to <ul> with id="myList"
  } 
}

export function removeListElements() {
    const domElement = document.getElementById('myList');
    while (domElement.hasChildNodes()) {  
        domElement.removeChild(domElement.firstChild);
      }
}
