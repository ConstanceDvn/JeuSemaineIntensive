let explanations = document.querySelector('#showRules');

explanations.addEventListener('click', function() {
  if(this.parentNode.classList.contains('current')) {
    this.parentNode.classList.remove('current')
  }
  else {
    this.parentNode.classList.add('current')
    }
})
