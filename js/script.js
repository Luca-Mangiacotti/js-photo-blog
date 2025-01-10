//FUNCTIONS


//facciamo una chiamata all'api per ottenere la lista delle cards 
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then((addCard) => {

    //salviamo in una variabile (in questo caso è un array di oggetti) le informazioni da elaborare
    const cardData = addCard.data
    // console.log(cardData)

    //cicliamo sulla lunghezza dell'array per andare ad iniettare le varie strutture "card" nell'html con i relativi dati
    for(let i = 0; i < cardData.length; i++ ){
        blogElm.innerHTML += `<div class="card">
                                  <img class="img-fluid" src="${cardData[i].url}" alt="imgcard">
                                  <p>${cardData[i].title}</p>
                                  <div class="nailPic"><img src="./img/pin.svg" alt="chiodino"></div>
                              </div>`
    }

    //andiamo a selezionare tutte le strutture con classe "card" appena iniettate nell' html
    const cards = document.querySelectorAll(".card")
    

    //cicliamo sulla nostra selezione di strutture "card" in attesa dell'evento "click"
    cards.forEach((card) => {
        card.addEventListener("click", ()=>{
            
            //andiamo a selezionare il tag src della card cliccata che conterrà l'url da sostituire
            const currentImg = card.querySelector("img").src
            // console.log(toggleImg)

            //iniettiamo l'url nel contenitore dell'immagine che sara visualizzata sull'overlay
            toggleImg.innerHTML = `<img class="img-fluid" src="${currentImg}" alt="${currentImg}"></img>`
            // console.log( currentImg)

            //al click su una qualsiasi card andremo a rimuovere la classe shadow che restituirà l'overlay in fullscreen
            shadowElm.classList.remove("shadow")
        })
    })


    
    //test
    // addCard.forEach(cardElm => {

    //     const currentCard = addCard.data
    //     blogElm.innerHTML += `<div class="card">
    //                              <img class="img-fluid" src="${currentCard.url}" alt="imgcard">
    //                              <p>${currentCard.title}</p>
    //                              <div class="nailPic"><img src="./img/pin.svg" alt="chiodino"></div>
    //                           </div>`
    //     console.log(currentCard.title)
    
    // })
})

//DOM ELEMENTS

const blogElm = document.getElementById("blogPics")
const btnShadElm = document.querySelector(".btnShad")
const shadowElm = document.getElementById("overShade")
const toggleImg = document.getElementById("imgShad")

//EVENTS


//evento che al click sul bottone "CHIUDI" aggiunge la classe shadow in modo da nascondere l'overlay
btnShadElm.addEventListener("click", () =>{
    shadowElm.classList.add("shadow");
})