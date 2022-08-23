const cardArray = [
    {
        name:"alien",
        img: "alien.jpg"
    },
    {
        name:"research",
        img: "research.jpg"
    },
    {
        name:"rocket",
        img: "rocket.png"
    },
    {
        name:"satellite",
        img: "satellite.png"
    },
    {
        name:"energy",
        img: "energy.jpg"
    },
    {
        name:"astreoid_mine",
        img: "astreoid_mine.jpg"
    },
    {
        name:"alien",
        img: "alien.jpg"
    },
    {
        name:"research",
        img: "research.jpg"
    },
    {
        name:"rocket",
        img: "rocket.png"
    },
    {
        name:"satellite",
        img: "satellite.png"
    },
    {
        name:"energy",
        img: "energy.jpg"
    },
    {
        name:"astreoid_mine",
        img: "astreoid_mine.jpg"
    },
]
cardArray.sort(() => 0.5-Math.random())
const resultDisplay = document.querySelector("#result")
const griD = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard (){
    for (let i = 0; i<cardArray.length; i++){
    let card = document.createElement('img')
    card.setAttribute('src',"blue_giant.jpg")
    card.setAttribute('data-id',i)
    card.addEventListener("click",flipCard)
    griD.appendChild(card)}
}
createBoard()
function checkMatch(){ 
    let win = true
    let cards = document.querySelectorAll("img")
    if (cardsChosenIds[0] === cardsChosenIds[1]){
      alert("hackerman?")
      win = false
    }
    if (cardsChosen[0]===cardsChosen[1] && win){
      alert("found match")
      cards[cardsChosenIds[0]].setAttribute("src","R.jfif")
      cards[cardsChosenIds[1]].setAttribute("src","R.jfif")
      cards[cardsChosenIds[0]].removeEventListener("click",flipCard)
      cards[cardsChosenIds[1]].removeEventListener("click",flipCard)
      cardsWon.push(cardsChosen)
    }
    else{
      cards[cardsChosenIds[0]].setAttribute("src","blue_giant.jpg")
      cards[cardsChosenIds[1]].setAttribute("src","blue_giant.jpg")
      alert("try again")
    }
    cardsChosen = []
    cardsChosenIds = []
    

    if (cardsWon.length === cardArray.length/2){
      resultDisplay.innerHTML = "Won"}
    else{resultDisplay.textContent = `${cardsWon.lenght*2}/${cardArray.length}`
}
}
function flipCard(){
    let cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute("src",cardArray[cardId].img)

    if (cardsChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}