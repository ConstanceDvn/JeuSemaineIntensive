//Choix du joueur
let choice = document.querySelectorAll(".choice")
let pseudo = document.querySelector('#pseudo')
let player, ask, image
let avatar = [[new Image(), new Image(), new Image(), new Image()],[new Image(), new Image(), new Image(), new Image()]]
let avatarChoice = 0

for(let i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click', function(){
    if (i == 0) {
      choice[0].style.border = ("2px solid #1C2164")
      choice[1].style.border = ("0px")
      //Rentrer son pseudo
      pseudo.addEventListener('keypress', (e) => {
        if(e.keyCode == 13) {
            ask = document.querySelector('#pseudo').value
            avatar[0].src = ["../sprites/perso0.png","../sprites/perso1.png","../sprites/perso2.png","../sprites/perso3.png"]
            player = (`Bienvenue ${ask} !`)
            image = 0
            avatarChoice += 1
            document.querySelector("#player").innerHTML = player
        }
      }
      )
    }
    else {
      choice[1].style.border = ("2px solid #1C2164")
      choice[0].style.border = ("0px")
      //Rentrer son pseudo
      pseudo.addEventListener('keypress', (e) => {
        if(e.keyCode == 13) {
            ask = document.querySelector('#pseudo').value
            avatar[1].src = "../images/"
            player = (`Bienvenue ${ask} !`)
            image = 1
            avatarChoice += 1
            document.querySelector("#player").innerHTML = player
        }
      }
      )
    }
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
    if(avatarChoice > 0) {
      mapExplain.classList.toggle('current');

    }
    else {
      window.alert("Choisissez d'abord un personnage !")
    }
  })
}
