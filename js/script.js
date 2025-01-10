//FUNCTIONS

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then((addCard) => {

    const cardData = addCard.data
    console.log(cardData)

    for(let i = 0; i < cardData.length; i++ ){
        console.log(cardData[i])
        blogElm.innerHTML += `<div class="card">
                                  <img class="img-fluid" src="${cardData[i].url}" alt="imgcard">
                                  <p>${cardData[i].title}</p>
                                  <div class="nailPic"><img src="./img/pin.svg" alt="chiodino"></div>
                              </div>`
    }

    const cards = document.querySelectorAll(".card")

    cards.forEach((card) => {
        card.addEventListener("click", ()=>{
            shadowElm.classList.toggle("shadow");
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

//EVENTS



btnShadElm.addEventListener("click", () =>{
    shadowElm.classList.toggle("shadow");
})