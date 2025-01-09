//FUNCTIONS

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then((addCard) => {

    console.log(addCard.data)
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


//EVENTS

