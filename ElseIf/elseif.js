let nome = prompt('Qual seu nome?')
let idade = Number(prompt(`Olá ${nome}, por favor informe sua idade:`))

if(idade <= 18) {
  alert('Voce não tem idade para ver o conteudo desse site')
}
else {
  alert('Bem vindo ' + nome + '! ' + 
        'Voce é maior de idade e pode ver o conteudo desse site!')
}