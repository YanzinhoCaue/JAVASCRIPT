let pessoa = {
  pernas: 2,
};

let pessoaNova = Object.create(pessoa);

console.log(pessoaNova.pernas);
console.log(Object.getPrototypeOf(pessoaNova) == pessoa);