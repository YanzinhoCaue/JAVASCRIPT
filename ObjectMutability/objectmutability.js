let filho1 = {
  nome: 'Benicio',
  idade: 2.7,
  peso: '17kg',
  fala: true,
}

let filho2 = {
  nome: 'Fabricio',
  idade: 1.7,
  peso: '15kg',
  fala: false,
}

filho3 = filho1;

console.log(filho1 == filho2);
console.log(filho2 == filho3);
console.log(filho3 == filho1);