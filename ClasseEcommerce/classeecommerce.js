class Carrinho {
  constructor(itens, quantidade, valor) {
    this.itens = itens;
    this.quantidade = quantidade;
    this.valor = valor;
  };
  addItem(item) {
    let contador = 0;


    for(let itemCarrinho in this.itens) {
      if(this.itens[itemCarrinho].id == item.id) {
        this.itens[itemCarrinho].quantidade += item.quantidade;
        contador = 1;
      }
    };
    if(contador == 0) {
      this.itens.push(item)
    }
    this.quantidade += item.quantidade;
    this.valor += item.preco * item.quantidade;
  };
  removeItem(item) {
    for(let itemCarrinho in this.itens) {
      if(this.itens[itemCarrinho].id == item.id) {
        let obj = this.itens[itemCarrinho];
        let index = this.itens.findIndex(function(obj) { return obj.id == item.id});

        this.quantidade -= this.itens[itemCarrinho].quantidade;
        this.valor -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].quantidade;

        this.itens.splice(index, 1);
      }
    }
  }
};

let carrinho = new Carrinho([
  {
    id: 1,
    nome: 'Camisa',
    quantidade: 1,
    preco: 20,
  },
  {
    id: 2,
    nome: 'Calça',
    quantidade: 2,
    preço: 50,
  }
], 3, 120)

console.log(carrinho);

carrinho.addItem({
  id: 1,
  nome: 'Camisa',
  quantidade: 1,
  preco: 20,
})

console.log(carrinho);

carrinho.addItem({
  id: 3,
  nome: 'Bone',
  quantidade: 1,
  preco: 15,
})

carrinho.removeItem({id: 1, nome: 'Camisa', quantidade: 2, preco: 20});

console.log(carrinho);