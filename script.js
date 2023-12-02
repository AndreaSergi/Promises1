// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.

function fetchDataFromAPI(callback) {
    console.log("Sto cercando i dati")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        
          const oggetto = {name: "Andrea", age: 23}
          if(callback(oggetto)) {
            resolve(oggetto);
          } else {
            reject("Ko")
          }
      }, 2000)
     })
  }

  function handleData(data) {
    return data
  }
  
  fetchDataFromAPI(handleData)
    .then((result)=> {
      console.log("successo", result)
    })
    .catch((error)=> {
      console.log("Errore",error)
    })