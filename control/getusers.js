export let users = []
//getUsers è la chiamata asincrona di tipo GET che serve ad ottenere tutti gli users dal file JSON
export let getUsers = async ()=>{
 await fetch('../myJsonFile4.json')
  .then(res=>res.json())
  .then(data=>users=[...data.users])
}
      
