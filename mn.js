
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
]
cardArray.sort(() => 0.5-Math.random())
const griD = document.querySelector('#grid')

function createBoard (){
    for (let i = 0; i<10; i++){
    let card = document.createElement('img')
    card.setAttribute('src',"alien.jpg")
    card.setAttribute('data-id',i)
    griD.appendChild(card)}



}
