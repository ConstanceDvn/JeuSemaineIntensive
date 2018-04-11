//Choix du joueur
let choice = document.querySelectorAll(".choice")
let player = 0
let avatar = [[new Image(), new Image(), new Image(), new Image()],[new Image(), new Image(), new Image(), new Image()]]
let ask = 0
let image = 0

for(let i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click', function(){
    if (i == 0) {
      ask = prompt("Entrez votre pseudo !")
      avatar[0].src = ["../sprites/perso0.png","../sprites/perso1.png","../sprites/perso2.png","../sprites/perso3.png"]
      player = (`Bienvenue ${ask} !`)
      image = 0
    }
    else {
      ask = prompt("Entrez votre pseudo !")
      avatar[1].src = "../images/"
      player = (`Bienvenue ${ask} !`)
      image = 1
    }
    document.querySelector("#player").innerHTML = player
    let character = {
      sexe : image,
      pseudo : ask
    }
    localStorage.setItem("character", JSON.stringify(character))
  })
}

//explications et choix sur du monde
let world = document.querySelectorAll(".items")
let mapExplain = document.querySelector(".mapExplain")

for(let i = 0; i < world.length; i++) {
  world[i].addEventListener( 'click', function() {
    mapExplain.classList.toggle('current');
  })
}
