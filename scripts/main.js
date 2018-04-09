/*Choix du joueur*/
let choice = document.querySelectorAll(".choice")
let player = 0

for(let i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click', function(){
    if (i == 0) {
      let ask = prompt("Entrez votre pseudo !")
      player = (`Bienvenue ${ask} !`)
    }
    else {
      ask = prompt("Entrez votre pseudo !")
      player = (`Bienvenue ${ask} !`)
    }
    document.querySelector("#player").innerHTML = player
  })
}
/*explications et choix sur du monde*/
let world = document.querySelectorAll(".items")
let isActive = 0

for(let i = 0; i < world.length; i++) {
  world[i].addEventListener( 'click', function() {
    if(isActive == 0) {
        world[i].style.border=("2px solid red");
        world[i].style.borderRadius = ("50%");
        isActive=1;
    } else{
        world[i].style.border = ("none");
        isActive = 0;
    }
  })
}
