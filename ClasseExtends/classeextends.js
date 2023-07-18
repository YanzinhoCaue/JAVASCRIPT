class Mamifero {
  constructor(patas) {
    this.patas = patas;
  };
};

class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  };
};

let pug = new Cachorro(4, 'Pug');
console.log(pug);