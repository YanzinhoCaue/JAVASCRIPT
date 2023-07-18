let mamiferos =  {
  patas: 2,
};

let leao = Object.create(mamiferos);

leao.patas = 2;

console.log(leao.patas);