let perso, persoX, persoY, dir, door
door = document.querySelector(".door")
init()
console.log('ok')
function init(){
    perso = document.createElement("img")
    let srcImgPerso = "sprites/perso0.png"
    perso.setAttribute('src', srcImgPerso)
    perso.setAttribute('id', 'charac')
    persoX = 0
    persoY = 0
    document.querySelector('body').appendChild(perso)
    placePerso()
}

window.addEventListener('keydown', (e) => {
    console.log(e.keyCode)
    switch (e.keyCode) {
        case 90 :
            persoY -= 64
            console.log(persoY)
            if (persoY < 0 || persoY > window.innerHeight) {
                persoY += 64
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/perso2.png"
            break;
        case 68 :
            persoX += 64
            console.log(persoX)
            if (persoX < 0 || persoX > window.innerWidth-1) {
                persoX -= 64
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/perso3.png"
            break;
        case 83 :
            persoY += 64
            console.log(persoY)
            if (persoY < 0 || persoY > window.innerHeight) {
                persoY -= 64
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/perso0.png"
            perso.setAttribute('src', srcImgPerso)
            break;
        case 81 :
            persoX -= 64
            console.log(persoX)
            if (persoX < 0 || persoX > window.innerWidth-1) {
                persoX += 64
            }
            else{
                placePerso()
            }
            srcImgPerso = "sprites/perso1.png"
            break;
        default:
    }
    perso.setAttribute('src', srcImgPerso)
    if (persoX == 400 && persoY == 400) {
        //setTimeout(enterHouse(), 5000)
        door.setAttribute('src','sprites/opendoor.png')
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
