let perso, persoX, persoY, dir
init()
function init(){
    perso = document.createElement("img")
    srcImgPerso = "sprites/perso.png"
    perso.setAttribute('src', srcImgPerso)
    perso.setAttribute('id', 'charac')
    persoX = 32
    persoY = 32
    placePerso()
}
function placePerso(){
    perso.style.top = persoY + 'px'
    perso.style.left = persoX + 'px'
}
