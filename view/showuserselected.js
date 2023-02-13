export let showUserSelected = (user)=>{
    
    document.getElementById("userSelectedWrapper").innerHTML=`<article>
     <p>${user.firstname}</p>
     <p>${user.lastname}</p>
     <img src=${user.picture.large} style="width=100px heigth=100px"/>
    </article>`
   }