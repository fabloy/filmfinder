import { showAutocomplete } from "../view/showautocomplete.js"
import { selectFilmToshow } from "./selectfilmtoshow.js"
import { listNames } from "./variables.js"


export let films = []
//getFilms è la chiamata asincrona di tipo GET che serve ad ottenere tutti i film
export let getFilms = async (filmSerched)=>{
 await fetch("http://www.omdbapi.com/?apikey=141d687&s="+filmSerched)
  .then(res=>res.json())
  .then(data=>{
    films=data.Search
   //showAutocomplete fa apparire e aggiorna l'autocomplete dipendente dal ricerca dell'utente in campo input
    showAutocomplete(listNames, films) 
    selectFilmToshow(films)
  })
}

      
