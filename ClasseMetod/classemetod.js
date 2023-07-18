class Cachorro {
  constructor(raca) {
    this.raca = raca;
  };
  latir() {
    console.log('Au au');
  };
};

Cachorro.prototype.patas = 4;

let pug = new Cachorro('Pug');

pug.latir();
console.log(pug);