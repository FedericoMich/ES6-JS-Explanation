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


export const addItem = () => {
  
  const ul = document.getElementById("myList"); //prendo la ul con quell'id
  const li=document.createElement('li'); //creo la li
  li.setAttribute('id', 'mylist-item'); //setto attributo id alla li dandogli l'id 'mylist-item'
  li.appendChild(document.createTextNode('Nuovo elemento')); //creo un child alla li che è testo e dice "elemento lista"
  ul.appendChild(li); //aggiungo il child alla li
}


export const removetext = () => {
  const ul=document.getElementById("myList");
  const li=document.getElementById("mylist-item");
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


export function elaboraElemento(){
   
  arrImages.forEach(function(image){
      let img = document.createElement('img');
      img.setAttribute("id","myFilm");
      img.src=image.src;
      img.height = "120";
      img.weidth = "120";
      document.body.appendChild(img);

  });
}


const arrImages = [
  {
      name: 'Immagine 1',
      src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
  },
  {
      name: 'Immagine 2',
      src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
  },
  {
      name: 'Immagine 3',
      src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
  },
  {
      name: 'Immagine 4',
      src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
  },
  {
      name: 'Immagine 5',
      src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
  },
  {
      name: 'Immagine 6',
      src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
  },
  {
      name: 'Immagine 7',
      src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
  },
  {
    name: 'Immagine 8',
    src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
},
{
  name: 'Immagine 9',
  src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
}
,
{
  name: 'Immagine 10',
  src: 'https://www.itstechtalentfactory.it/wp-content/uploads/2018/08/itssys.jpg'
}

]


export const film = () => {

const promiseFetch = fetch('http://www.omdbapi.com/?s=%27blade%20runner%27&apikey=4fb63998');
console.info (promiseFetch);

promiseFetch
  .then(
      res => {
          if(res) return res.json ();
      })

  .then(arrjson => {
   // console.log(resjson.Title);
   //console.log(resjson.Year);
  arrjson.Search.forEach(stampa); 
  
  })
  .catch(err => {
      console.error(err);
  })
 
};

const stampa = (item) => {
  console.log(item.Title);
  console.log(item.Year);
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
