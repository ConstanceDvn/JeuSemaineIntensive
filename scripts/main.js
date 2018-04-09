/*Choix du joueur, choix du monde*/
let choice = document.querySelectorAll(".choice")
let player = 0

for(let i = 0; i<choice.length; i++) {
  choice[i].addEventListener('click', function(){
    if (i == 0) {
      player = "Vous avez choisi un homme !"
    }
    else {
      player = "Vous avez choisi une femme !"
    }
    document.querySelector("#player").innerHTML = player
  })
}
