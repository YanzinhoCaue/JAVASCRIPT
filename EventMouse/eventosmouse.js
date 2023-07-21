let btn = document.querySelector('button');
let input = document.querySelector('input')
let timeout;

btn.addEventListener('mouseup', () => {
  console.log('Bota');
});

btn.addEventListener('mousedown', () => {
  console.log('Tira');
});

btn.addEventListener('dblclick', () => {
  console.log('Pei pei');
});

btn.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  console.log('Outra Botada');
});

window.addEventListener('mousemove', (e) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => console.log(e.x), 500);
});

window.addEventListener('scroll', (e) => {
  if(window.pageYOffset > 100) {
    console.log('Chegou');
  }
});

input.addEventListener('focus', () => {
  console.log('Focou');
});

input.addEventListener('blur', () => {
  console.log('Desfocou');
});

window.addEventListener('load', (e) => {
  alert("Carregando...");
});

window.addEventListener('beforeunload', (e) => {
  event.returnValue = null;
});