let perso, persoX, persoY, dir = 2, n = 0, background
// Listes des collisions sur la carte
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
    {ymin:70,ymax:170,xmin:680,xmax:780},
    {ymin:290,ymax:410,xmin:820,xmax:870},
    {ymin:290,ymax:420,xmin:850,xmax:1060},
    {ymin:240,ymax:300,xmin:850,xmax:1020},
    {ymin:610,ymax:710,xmin:30,xmax:160},
    {ymin:710,ymax:730,xmin:-10,xmax:1310},
    {ymin:-10,ymax:720,xmin:1070,xmax:1300},
    {ymin:390,ymax:720,xmin:1010,xmax:1300},
    {ymin:150,ymax:190,xmin:1020,xmax:1060},
    {ymin:100,ymax:170,xmin:770,xmax:780},
    {ymin:10,ymax:50,xmin:780,xmax:830},
    {ymin:-10,ymax:10,xmin:590,xmax:640},
    {ymin:130,ymax:160,xmin:500,xmax:580},
    {ymin:450,ymax:740,xmin:940,xmax:1030},
    {ymin:480,ymax:740,xmin:940,xmax:1030},
    {ymin:450,ymax:550,xmin:1010,xmax:1100},
    {ymin:290,ymax:360,xmin:460,xmax:500},
    {ymin:220,ymax:300,xmin:530,xmax:640},
    {ymin:10,ymax:200,xmin:330,xmax:350},
    {ymin:0,ymax:20,xmin:120,xmax:350},
    {ymin:10,ymax:50,xmin:110,xmax:140},
    {ymin:30,ymax:50,xmin:-10,xmax:120},
    {ymin:150,ymax:200,xmin:260,xmax:320},
    {ymin:670,ymax:710,xmin:810,xmax:850},
    {ymin:-10,ymax:20,xmin:350,xmax:390},
    {ymin:170,ymax:230,xmin:340,xmax:410},
    {ymin:140,ymax:180,xmin:340,xmax:370},
    {ymin:220,ymax:260,xmin:120,xmax:280},
    {ymin:530,ymax:560,xmin:50,xmax:110},
    {ymin:570,ymax:620,xmin:0,xmax:60},
    {ymin:640,ymax:710,xmin:-10,xmax:30},
    {ymin:290,ymax:380,xmin:200,xmax:290},
    {ymin:220,ymax:330,xmin:120,xmax:160},
    {ymin:220,ymax:330,xmin:40,xmax:90},
    {ymin:220,ymax:290,xmin:20,xmax:60},
    {ymin:180,ymax:230,xmin:-10,xmax:30},
    {ymin:250,ymax:300,xmin:150,xmax:190},
    {ymin:210,ymax:260,xmin:250,xmax:290},
    {ymin:190,ymax:230,xmin:250,xmax:300},
    {ymin:130,ymax:200,xmin:310,xmax:340},
    {ymin:170,ymax:200,xmin:180,xmax:230},
    {ymin:430,ymax:450,xmin:650,xmax:710},
    {ymin:230,ymax:260,xmin:790,xmax:830},
    {ymin:100,ymax:170,xmin:760,xmax:830},
    {ymin:690,ymax:720,xmin:110,xmax:170},
]
// Liste des portes sur la carte
let doors = [
    {ydoor:140,xdoor:230,xdoor2:240, door: 0, visited: false},
    {ydoor:140,xdoor:480,xdoor2:490, door: 1, visited: false},
    {ydoor:140,xdoor:930,xdoor2:940, door: 2, visited: false},
    {ydoor:420,xdoor:930,xdoor2:940, door: 3, visited: false},
    {ydoor:390,xdoor:580,xdoor2:590, door: 4, visited: false},
    {ydoor:390,xdoor:580,xdoor2:590, door: 5, visited: false},
    {ydoor:360,xdoor:360,xdoor2:370, door: 6, visited: false},
]
let repliques = [
        "Marchand : *nom du joueur*, j’ai entendu ce qui est arrivé à Louise… Pauvre fille, qu’elle repose en paix.",
        "Hibou : Pauvre fille, qu’elle repose en paix.",
        "*nom du joueur* : Tu es ouvert toute la nuit, tu as entendu quelque chose ? N’importe quoi ? <br /> Youssef le marchand : Malheureusement je n’ai pas pu voir ce qui est arrivé à Louise, je faisais une sieste à ce moment et j’ai été réveillé par ses cris d’agonie. Néanmoins, j’ai pu apercevoir une silhouette dans la pénombre sortir de chez elle en vitesse. Je n’ai pas pu distinguer de qui il s’agissait, désolé.",
        "Je vois que tu vends des armes, donne moi la liste des tes derniers acheteurs d’armes. Spécialement ceux qui t’ont acheté des couteaux. <br /> Je ne peux rien te révéler, pardonnes-moi *nom du joueur* mais j’ai une réputation à tenir, une réputation qui tient sur ma capacité à garder le secret professionnel inviolé.",
        "Je n’ai jamais vu cet oiseau, il vient d’où et… c’est moi où il répète tout ce qu’il entend ? <br /> Youssef le marchand : Ahah, j’ai amené cet oiseau de mon dernier voyage au pays des épices. J’ai décidé de l’installer en boutique pour qu’il me tienne compagnie. En effet, il répète tout ce qu’il entend, c’est un oiseau magique."
]
//Initialisation du jeu
init()
function init(){
    // Création de la map
    background = document.createElement("img")
    let srcImgBg = "sprites/village.png"
    background.setAttribute('src', srcImgBg)
    background.setAttribute('id', 'background')
    document.querySelector('.container').appendChild(background)
    // Création de la boite de dialogue
    dialogue = document.createElement("div")
    dialogue.setAttribute('id', 'dialogue')
    dialogue.style.display = "none"
    document.querySelector('.container').appendChild(dialogue)
    dialogue.innerHTML = "vous savez je ne pense pas qu'il y est de bonne ou de mauvaise situation lorem ipsum dolor esta ki move les prout douchia stekli monte la boiut"
    // Création du personnage et placement du personnage
    perso = document.createElement("img")
    let srcImgPerso = "sprites/face_sprite0.png"
    perso.setAttribute('src', srcImgPerso)
    perso.setAttribute('id', 'charac')
    persoX = 250
    persoY = 390
    document.querySelector('.container').appendChild(perso)
    placePerso()
}
// Déplacement du personnage
window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        // Vers le haut
        case 90:
        case 38:
            dir = 0
            persoY -= 10
            srcImgPerso = "sprites/back_sprite" + n + ".png"
            if (persoY < 0 || persoY > window.innerHeight) {
                persoY += 10
            }
            break;
            // À droite
        case 68:
        case 39:
            dir = 1
            persoX += 10
            srcImgPerso = "sprites/right_sprite" + n + ".png"
            if (persoX < 0 || persoX > window.innerWidth - 1) {
                persoX -= 10
            }
            break;
            // Vers le bas
        case 83:
        case 40:
            dir = 2
            persoY += 10
            srcImgPerso = "sprites/face_sprite" + n + ".png"
            if (persoY < 0 || persoY > window.innerHeight) {
                persoY -= 10
            }
            break;
            // À gauche
        case 81:
        case 37:
            dir = 3
            persoX -= 10
            srcImgPerso = "sprites/left_sprite" + n + ".png"
            if (persoX < 0 || persoX > window.innerWidth - 1) {
                persoX += 10
            }
            break;
        default:
    }
    n++
    if (n == 4) {
        n = 0
    }
    perso.setAttribute('src', srcImgPerso)

    console.log(perso.style.left)
    console.log(perso.style.top)

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
    // Gestion des portes
    for (var i = 0; i < doors.length; i++) {
        if ((persoY == doors[i].ydoor && (persoX == doors[i].xdoor || persoX == doors[i].xdoor2)) && dir == 0) {
                enterHouse(doors[i].door)
        }
    }
})
function enterHouse(index){
    if (index == 6) {
    srcImgBg = "sprites/marchand.jpg"
    background.setAttribute('src', srcImgBg)
    perso.style.display = "none";
    dialogue.style.display = "block"
    let j=0;
    dialogue.innerHTML = repliques[j]
    document.addEventListener('click', (e) => {
                if(j < repliques.length - 1){
                    j++
                    dialogue.innerHTML = repliques[j]
                    console.log(j)
                    console.log(e.keyCode)
                }
                else{
                    srcImgBg = "sprites/village.png"
                    background.setAttribute('src', srcImgBg)
                    perso.style.display = "block"
                    dialogue.style.display = "none"
                    j = 0
                }
    })
    }
}
function placePerso(){
    perso.style.top = persoY + 'px'
    perso.style.left = persoX + 'px'
}
