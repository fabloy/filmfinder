import { users } from "./getusers.js"

//searchUsers filtra e ritorna user/users trovato/trovati nel file json 
// sulla base della ricerca del nome nel campo input effettuata dall'utente.
export let searchUsers = (user)=>{
  user = user.toLowerCase() // user è la stringa inserita nel campo input dall'utente.
  
//usersFind prende tutti gli user presenti nel JSON e confronta il nome di essi con 
// la stringa inserita dall'utente, se la stringa corrisponde ad uno degli utenti nel JSON
// l'oggetto dentro il map conterra come valore della proprietà find = true (l'utente esiste)
// invece se nessun utente esiste nel JSON la proprietà find dell'ogg. conterrà valore false.
// il risultato di usersFind dunque è un array di oggetti con tutti gli user e 
// il relativo valore nella proprietà find (true = esiste, false = non esiste)
 let usersFind = users.map(u=>{
  return {
         find: u.firstname.toLowerCase().includes(user),
         user:u
        }
  })
//usersToShow filtra da usersFind solo gli user con find=true 
//ovvero gli utenti trovati che saranno da mostrare.
 let usersToShow = usersFind.filter(u=>u.find===true) 
  return usersToShow //elemento/elementi eventualmente esistenti nel JSON cercati dall'utente
}