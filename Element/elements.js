let nomes = ['Yan', 'Benicio', 'Fabricio'];

let idades = [24, 2, 1, 30];

function numFamily() {
  if(nomes.length <= 3) {
    console.log('Esta faltando uma pessoa');
  } else {
    console.log('Familia Completa');
  }
};

function idadeFamily() {
  if(idades.length <= 3) {
    console.log('Esta faltando a idade de alguem');
  } else {
    console.log('A idade de todos esta correta');
  }
};

numFamily();
idadeFamily();