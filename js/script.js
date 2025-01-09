//FUNCTIONS

axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
.then(function(addPic){
    console.log(addPic.data)
})

//DOM ELEMENTS

const blogElm = document.getElementById("blogPics")


//EVENTS

