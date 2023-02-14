import { name } from "../control/variables.js"


//showAutocomplete fa apparire e aggiorna l'autocomplete 
//dipendente dalla ricerca dell'utente in campo input
export let showAutocomplete = (elementHTML, filmsFind)=>{
 //azione di modifica del DOM con inserimento dei titoli dei film all'interno dell'autocomplete.
 filmsFind!==undefined ? elementHTML.innerHTML = filmsFind?.map(el=>{
  return `
          <li 
           class="autocompleteElement" 
           code=${el.imdbID}
           >
           <p>${el.Title}</p>
           
           <img src=${el.Poster}  width="50" height="50">
          </li>
         `
    })
    :
    elementHTML.innerHTML=""
    name.value.length === 0 ? elementHTML.innerHTML = "" : elementHTML.innerHTML=elementHTML.innerHTML
}







