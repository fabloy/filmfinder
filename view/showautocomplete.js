import { name } from "../control/variables.js"

//showAutocomplete fa apparire e aggiorna l'autocomplete 
//dipendente dalla ricerca dell'utente in campo input
export let showAutocomplete = (elementHTML, usersFind)=>{
  
 //azione di inserimento degli utenti all'interno dell'autocomplete.
 usersFind.length>0 && name.value.length>0 ? elementHTML.innerHTML = usersFind.map(el=>{
  return `
          <li 
           class="autocompleteElement" 
           code=${el.user.id}
           >
           ${el?.user.firstname} ${el?.user.lastname}
           <img src=${el?.user.picture.large}  width="40" height="40">
          </li>
         `
    })
  :
   listNames.innerHTML=""
}







