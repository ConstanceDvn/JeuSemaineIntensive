let perso, persoX, persoY, dir, door, n = 0
door = document.querySelector(".door")

init()
console.log('ok')
function init(){
    // Création du personnage et placement du personnage
    perso = document.createElement("img")
    let srcImgPerso = "sprites/face_sprite0.png"
    perso.setAttribute('src', srcImgPerso)
    perso.setAttribute('id', 'charac')
    persoX = 0
    persoY = 0
    document.querySelector('body').appendChild(perso)
    placePerso()
}
// Déplacement du personnage
window.addEventListener('keydown', (e) => {
    console.log(e.keyCode)
    switch (e.keyCode) {
        // Vers le haut
        case 90 :
            persoY -= 20
            console.log(persoY)
            if (persoY < 0 || persoY > window.innerHeight) {
                persoY += 20
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/back_sprite" + n + ".png"
            break;
            // À gauche
        case 68 :
            persoX += 20
            console.log(persoX)
            if (persoX < 0 || persoX > window.innerWidth-1) {
                persoX -= 20
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/right_sprite" + n + ".png"
            break;
            // Vers le bas
        case 83 :
            persoY += 20
            console.log(persoY)
            srcImgPerso = "sprites/face_sprite" + n + ".png"
            if (persoY < 0 || persoY > window.innerHeight) {
                persoY -= 20
            }
            else{
                placePerso()
            }

            break;
            // À droite
        case 81 :
            persoX -= 20
            console.log(persoX)
            if (persoX < 0 || persoX > window.innerWidth-1) {
                persoX += 20
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/left_sprite" + n + ".png"
            break;
        default:
    }
    n++
    if (n == 4) {
        n = 0
    }
    perso.setAttribute('src', srcImgPerso)
    if (persoX == 384 && persoY == 384) {
        door.setAttribute('src','sprites/opendoor.png')
        enterHouse()
    }
})
function enterHouse(){
    window.location.href="https://www.google.fr/"
}
function placePerso(){
    perso.style.top = persoY + 'px'
    perso.style.left = persoX + 'px'
    console.log(parseInt(perso.style.left))
    console.log(parseInt(perso.style.top))
}
