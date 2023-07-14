function loopDecr(num) {
  for(let i = num; i >= 0; i--) {
    if(i % 2 == 0) {
      console.log(`Numero ${i} é par`);
    } else {
      console.log('');
    }
  }
}

loopDecr(10);