function imprimirNumeros(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
imprimirNumeros(5, 6, 7);