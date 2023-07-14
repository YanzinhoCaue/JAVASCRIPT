let pessoa1 = {
  nome: 'Yan',
  idade: 24,
  vivo: true,
};

let pessoa2 = {
  nome: 'Jesus',
  idade: 2023,
  vivo: false,
  fala: function() {
    console.log('Não faltara nada para aqueles que buscam a Jeová');
  },
};

console.log(pessoa1.vivo);
console.log(pessoa2.idade);
console.log(pessoa1.nome.length);
pessoa2.fala();