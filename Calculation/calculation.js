let calculation = {
  soma: function(a, b) {
    return a + b
  },
  subtração: function(a, b) {
    return a - b
  },
  multiplicação: function(a, b) {
    return a * b
  },
  divisão: function(a, b) {
    return a / b
  }, 
}

console.log(calculation.soma(5, 6));
console.log(calculation.subtração(5, 6));
console.log(calculation.multiplicação(5, 6));
console.log(calculation.divisão(5, 6));