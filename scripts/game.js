let perso, persoX, persoY, dir = 2, n = 0, village
door = document.querySelector(".door")
background = document.querySelector("#background")
// Listes des collision sur la carte
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
// Liste des portes sur la carte
let doors = [
    {ydoor:140,xdoor:230,xdoor2:240},
    {ydoor:140,xdoor:480,xdoor2:490},
    {ydoor:140,xdoor:930,xdoor2:940},
    {ydoor:420,xdoor:930,xdoor2:940},
    {ydoor:390,xdoor:580,xdoor2:590},
]
//Initialisation du jeu
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
            break;
        default:
    }
    // Gestion des collisions
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

    // Gestion des portes
    for (var i = 0; i < doors.length; i++) {
        if ((persoY == doors[i].ydoor && (persoX == doors[i].xdoor || persoX == doors[i].xdoor2)) && dir == 0) {
            console.log("LETS GOOO")
        }
    }
})
function changeBackground(){

}
function enterHouse(){
    window.location.href="https://www.google.fr/"
}
function placePerso(){
    
    perso.style.top = persoY + 'px'
    perso.style.left = persoX + 'px'
    console.log("X :"+parseInt(perso.style.left))
    console.log("Y :"+parseInt(perso.style.top))
}
