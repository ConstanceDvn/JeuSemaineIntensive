/*Choix du joueur*/
let choice = document.querySelectorAll(".choice")
let player = 0
let avatar = new Image()

for(let i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click', function(){
    if (i == 0) {
      let ask = prompt("Entrez votre pseudo !")
      avatar.src = "../images/"
      player = (`Bienvenue ${ask} !`)
    }
    else {
      ask = prompt("Entrez votre pseudo !")
      avatar.src = "../images/"
      player = (`Bienvenue ${ask} !`)
    }
    document.querySelector("#player").innerHTML = player
  })
}


/*explications et choix sur du monde*/
let world = document.querySelectorAll(".items")
let mapExplain = document.querySelector(".mapExplain")

for(let i = 0; i < world.length; i++) {
  world[i].addEventListener( 'click', function() {
    mapExplain.classList.toggle('current');
  })
}
