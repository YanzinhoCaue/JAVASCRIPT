let novoElemento = document.createElement('p');
let elementoAlvo = document.querySelector('#algum-id');
let elementoPai = document.querySelector('#container');

elementoPai.insertBefore(novoElemento, elementoAlvo);