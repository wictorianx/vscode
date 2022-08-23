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
        name:"astreoid mine",
        img: "astreoid mine.jpg"
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
        name:"astreoid mine",
        img: "astreoid mine.jpg"
    },
]
cardArray.sort(() => 0.5-Math.random())
const griD = document.querySelector('#grid')
const cardsChosen = []
const cardsChosenIds = []


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
    let cards = document.querySelectorAll("#grid img")
    if (cardsChosen[0]===cardsChosen[1]){
        alert("found match")


    }
}
function flipCard(){
    let cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute("src",cardArray[cardId.img])
    if (cardsChosen.length === 2){
        setTimeout(checkMatch,500)
    }






}