// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.



function fetchDataFromAPI(callback) {
  //stampo in console una simulazione di ricerca dati appena la funzione viene richiamata
    console.log("Sto cercando i dati")

    //Do la promise come ritorno, applicandone gli errori
    return new Promise((resolve, reject) => {

      //stabilisco un delay per dare l'impressione che il programma ha impiegato 2 secondi per cercare i dati richiesti(oggetto)
      setTimeout(() => {

        //mi dichiaro l'oggetto dentro la promise perchè la mia callback ha bisogno di un parametro dichiarato in ingresso
          const oggetto = {name: "Andrea", age: 23}

          //condizioni della mia promise dipendenti dalla mia callback(handleData)
          if(callback(oggetto)) {
            resolve(oggetto);
          } else {
            reject("Non ci sono oggetti")
          }

      }, 2000)

     })
  }


  //dichiarazione della mia callback, che nel caso in cui ritorno "false" avrò la verifica dell'errore della mia promise
  function handleData(data) {
    return data
  }
  

  //richiamo della mia main function con i comportamenti che dovrà avere la promise
  fetchDataFromAPI(handleData)
    .then((result)=> {
      console.log("successo", result)
    })
    .catch((error)=> {
      console.log("Errore",error)
    })