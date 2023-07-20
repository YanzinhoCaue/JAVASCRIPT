function somaComDelay(a , b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 5000)
  });
};

async function soma(a, b, c, d) {
  let x = somaComDelay(a, b);
  let y = somaComDelay(c, d);
  return await x + await y;
};

soma(2, 4, 6, 8). then(y => console.log(y));