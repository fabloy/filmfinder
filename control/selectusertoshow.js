import { showUserSelected } from "../view/showuserselected.js"
import { listNames, name } from "./variables.js"

// selectusertoshow restituisce l'id dell'user selezionato con il click dell'utente nell'autocomplete
export let selectUserToshow = (users)=>{
//usersToShow è l'HTMLcollection contenente gli user che appaiono nell'autocomplete:
 let usersToShow = document.getElementsByClassName("autocompleteElement")
// utilizzo lo spread operator per trasformare l'HTMLcollection in Array così da poterlo mappare nellla riga 8 
  usersToShow=[...usersToShow] 
  
  //utilizzo il map per iterare l'array usersToShow contenente tutti gli user presenti nell'autocomplete,
  //in questo modo ad ognuno di essi posso aggiungere l'evento click, se l'utente cliccherà su uno deli user dell'autocomplete
  // otterrò l'attributo 'code' che contiene l'id dell'user selezionato dall'utente.
  usersToShow.map(user=>user.addEventListener("click",function(){
    let idSelected = user.getAttribute("code")
     let userSelected = users.filter(user=>user.user.id===idSelected)
     showUserSelected(userSelected[0].user)
     cleanInput()
     }))
    }


    export let cleanInput = ()=>{
     name.value=""
     listNames.innerHTML=""
    }

