let pessoa = {
  nome: '',
  setNome: function(novoNome) {
    this.nome = novoNome;
  },
  getNome: function() {
    return this.nome;
  },
};

pessoa.setNome('Yan');

console.log(pessoa.getNome());