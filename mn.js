
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

function createBoard (){
    for (let i = 0; i<cardArray.length; i++){
    let card = document.createElement('img')
    card.setAttribute('src',"blue_giant.jpg")
    card.setAttribute('data-id',i)
    card.addEventListener("click",flipCard)
    griD.appendChild(card)}
}
createBoard()

function flipCard(){
    let CardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[CardId].name)
    this.setAttribute("src",cardArray[CardId.img])






}