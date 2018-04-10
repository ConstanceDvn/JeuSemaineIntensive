let perso, persoX, persoY, dir = 2, n = 0, village
door = document.querySelector(".door")
village = document.querySelector("#village")
let obstacles = [
    {ymin:60,ymax:170,xmin:10,xmax:140},
    {ymin:30,ymax:140,xmin:170,xmax:330},
    {ymin:-10,ymax:140,xmin:390,xmax:590},
    {ymin:30,ymax:140,xmin:840,xmax:1000},
    {ymin:250,ymax:360,xmin:300,xmax:460},
    {ymin:250,ymax:390,xmin:490,xmax:680},
    {ymin:350,ymax:490,xmin:-10,xmax:110},
    {ymin:480,ymax:710,xmin:130,xmax:260},
    {ymin:510,ymax:680,xmin:140,xmax:780},
    {ymin:480,ymax:710,xmin:650,xmax:780},
    {ymin:480,ymax:710,xmin:840,xmax:970},
    {ymin:480,ymax:520,xmin:260,xmax:390},
    {ymin:480,ymax:520,xmin:390,xmax:520},
    {ymin:480,ymax:520,xmin:520,xmax:650},
    {ymin:0,ymax:0,xmin:0,xmax:0},
]
let doors = [
    {}
]
init()
console.log('ok')
function init(){
    // Création du personnage et placement du personnage
    perso = document.createElement("img")
    let srcImgPerso = "sprites/face_sprite0.png"
    perso.setAttribute('src', srcImgPerso)
    perso.setAttribute('id', 'charac')
    persoX = 250
    persoY = 390
    document.querySelector('body').appendChild(perso)
    placePerso()
}
// Déplacement du personnage
window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        // Vers le haut
        case 90 :
            dir = 0
            persoY -= 10
            console.log(persoY)
            srcImgPerso = "sprites/back_sprite" + n + ".png"
            if (persoY < 0 || persoY > window.innerHeight) {
                persoY += 10
            }
            else{
            }
            break;
            // À droite
        case 68 :
            dir = 1
            persoX += 10
            console.log(persoX)
            srcImgPerso = "sprites/right_sprite" + n + ".png"
            if (persoX < 0 || persoX > window.innerWidth - 1) {
                persoX -= 10
            }
            else{
            }
            break;
            // Vers le bas
        case 83 :
            dir = 2
            persoY += 10
            console.log(persoY)
            srcImgPerso = "sprites/face_sprite" + n + ".png"
            if (persoY < 0 || persoY > window.innerHeight) {
                persoY -= 10
            }
            else{
            }
            break;
            // À gauche
        case 81 :
            dir = 3
            persoX -= 10
            console.log(persoX)
            srcImgPerso = "sprites/left_sprite" + n + ".png"
            if (persoX < 0 || persoX > window.innerWidth - 1) {
                persoX += 10
            }
            else{
            }
            break;
        default:
    }
    for (var i = 0; i < obstacles.length; i++) {
        if ((persoY > obstacles[i].ymin && persoY < obstacles[i].ymax) && (persoX > obstacles[i].xmin && persoX < obstacles[i].xmax)){
            if (dir == 0){
                persoY += 10
            }
            else if (dir == 1){
                persoX -= 10
            }
            else if (dir == 2){
                persoY -= 10
            }
            else if (dir == 3){
                persoX += 10
            }
        }
        else{
            placePerso()
        }
}

    n++
    if (n == 4) {
        n = 0
    }
    perso.setAttribute('src', srcImgPerso)
    if (persoX == 380 && persoY == 380) {
        door.setAttribute('src','sprites/opendoor.png')
        // enterHouse()
    }
})
// window.addEventListener('keyup', (e) => {
//     n = 0
//     srcImgPerso = "sprites/face_sprite" + n + ".png"
//     perso.setAttribute('src', srcImgPerso)
//     placePerso()
// })
function enterHouse(){
    window.location.href="https://www.google.fr/"
}
function placePerso(){
    perso.style.top = persoY + 'px'
    perso.style.left = persoX + 'px'
    console.log("X :"+parseInt(perso.style.left))
    console.log("Y :"+parseInt(perso.style.top))
}
