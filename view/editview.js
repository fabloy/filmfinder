import { showAutocomplete } from "../view/showautocomplete.js"
import { searchUsers } from "../control/searchuser.js"
import { name, listNames, downList } from "../control/variables.js"
import { selectUserToshow} from "../control/selectusertoshow.js"


export let editView = ()=>{
 document.addEventListener("DOMContentLoaded",function(){
  name.addEventListener("input",function(event){
   //showAutocomplete fa apparire e aggiorna l'autocomplete dipendente dal ricerca dell'utente in campo input
   showAutocomplete(listNames, searchUsers(event.target.value)) 
   selectUserToshow(searchUsers(event.target.value))
  })

   
  
 })
}