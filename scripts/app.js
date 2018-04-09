/*règles du jeu*/
let rules = document.querySelector('#showRules')
let explanations = document.querySelector('#explanations')

rules.addEventListener('click', function() {
  explanations.classList.toggle('current');
})
