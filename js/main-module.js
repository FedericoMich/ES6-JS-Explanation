import {add,sott,div,molt} from './util/math.js'; // Importo un modulo esterno e in particolare una sua funzione.

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


   if (isNaN(a) && isNaN(b)){
    document.getElementById ("errormex").innerHTML= "ATTENZIONE!! entrambi i valori  non sono numerici";
  }else if (isNaN(a)){
    document.getElementById ("errormex").innerHTML= "ATTENZIONE!! primo valore non numerico";
  } else if (isNaN(b)){ 
  document.getElementById ("errormex").innerHTML= "ATTENZIONE!! secondo valore non numerico";
  } else {
    return add (parseInt (a), parseInt (b)); 

  }
 
 
}

export function callsott (a, b) {
  if (isNaN(a) && isNaN(b)){
    document.getElementById ("errormex").innerHTML= "ATTENZIONE!! entrambi i valori  non sono numerici";
  }else if (isNaN(a)){
    document.getElementById ("errormex").innerHTML= "ATTENZIONE!! primo valore non numerico";
  } else if (isNaN(b)){ 
  document.getElementById ("errormex").innerHTML= "ATTENZIONE!! secondo valore non numerico";
  } else {
    return sott (parseInt (a), parseInt (b)); 

  }

}

export function calldiv (a, b) {
  if (isNaN(a) && isNaN(b)){
    document.getElementById ("errormex").innerHTML= "ATTENZIONE!! entrambi i valori  non sono numerici";
  }else if (isNaN(a)){
    document.getElementById ("errormex").innerHTML= "ATTENZIONE!! primo valore non numerico";
  } else if (isNaN(b)){ 
  document.getElementById ("errormex").innerHTML= "ATTENZIONE!! secondo valore non numerico";
  } else {
    return div (parseInt (a), parseInt (b)); 

  }

}

export function callmolt (a, b) {
  if (isNaN(a) && isNaN(b)){
    document.getElementById ("errormex").innerHTML= "ATTENZIONE!! entrambi i valori  non sono numerici";
  }else if (isNaN(a)){
    document.getElementById ("errormex").innerHTML= "ATTENZIONE!! primo valore non numerico";
  } else if (isNaN(b)){ 
  document.getElementById ("errormex").innerHTML= "ATTENZIONE!! secondo valore non numerico";
  } else {
    return molt (parseInt (a), parseInt (b)); 

  }

}





export function addItem(){
  const ul = document.getElementById("myList");
  const li = document.createElement("li");

  li.setAttribute('id','mylist-li');

  li.appendChild(
    document.createTextNode('Nuovo Elemento lista')
  );
  ul.appendChild(li);

}


export function removetext(){
  const ul = document.getElementById("myList");
  const li = document.getElementById('mylist-li');
  ul.removeChild(li);
}



export function addimg(){
 
  const imgid = document.getElementById("imgid");

  const img = document.createElement("img");

  img.src = "./img/js_img.png";

  img.setAttribute('id','img');

  imgid.appendChild(img);

}

export function removeimg(){

  const img = document.getElementById("img");

  img.parentNode.removeChild(img);
 

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
