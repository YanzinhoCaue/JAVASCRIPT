function autoEscola() {
  let idade = Number(prompt('Qual sua idade?'))
  if(idade < 18) {
    alert(`Você tem ${idade} anos, e não pode dirigir ainda!`);
  } else {
    alert(`Você tem ${idade} anos, e já pode dirigir!`);
  }
}

autoEscola();