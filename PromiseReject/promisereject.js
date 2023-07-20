function verific(num) {
  return new Promise((resolve, reject) => {
    if(num == 2) {
      resolve(console.log('O numero é 2'));
    } else {
      reject(new Error('Err'));
    };
  });
};

verific(3);
verific(2);