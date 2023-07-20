window.addEventListener('keydown', function(e) {
  if(e.key == 'v') {
    console.log('Clicou no V');
  }
})

window.addEventListener('keyup', (e) => {
  if(e.key == 'b') {
    console.log('Soltou a tecla B');
  }
})

window.addEventListener('keypress', (e) => {
  if(e.key == 'n') {
    console.log('Apertou no N');
  }
})