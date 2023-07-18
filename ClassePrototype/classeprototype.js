function cachorro(raca) {
  this.raca = raca;
};

cachorro.prototype.uivar = () => console.log('Auuuuuu');

let pug = new cachorro('Pug');

console.log(pug.raca);
pug.uivar();