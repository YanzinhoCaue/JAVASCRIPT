let navio = {
  nome: 'Titanic',
  afundado: true,
};

let navio2 = {};

Object.assign(navio2, navio)

console.log(navio2);