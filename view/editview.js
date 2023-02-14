import { filmSelectedWrapper, name} from "../control/variables.js"
import {getFilms} from "../control/getFilms.js"

/* editView() è la funzione principale che interviene quando l'utente inserisce 
una stringa nel campo di input, viene interecettato il valore della stringa (titolo del film)
e viene passata a getFilms() che ha il compito principale di effettuare la chiamata asincora
per effettuare la ricerca dei titoli dei film sulla base del film cercato
 */
export let editView = ()=>{
 document.addEventListener("DOMContentLoaded",function(){
  name.addEventListener("input",function(event){
   getFilms(event.target.value)

   //da scrivere meglio inserendolo in una funzione:
   name.value.length===0 ? filmSelectedWrapper.innerHTML="" : filmSelectedWrapper.innerHTML=filmSelectedWrapper.innerHTML
  })
 })
}