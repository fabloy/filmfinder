/* showFilmSelected modfica la parte bassa della view mostrando il dettaglio 
del film selezionato dal click dell'utente */


export let showFilmSelected = (film)=>{
   document.getElementById("filmSelectedWrapper").innerHTML=`<article>
     <p>${film.Title}</p>
     <p>${film.Year}</p>
     <img src=${film.Poster} style="width=100px heigth=100px"/>
    </article>`
   }