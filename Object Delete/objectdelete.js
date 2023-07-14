let weapon = {
  nome: 'Mk14',
  munição: 762,
  silenciador: true,
  pente: false,
  carregada: true,
  coronha: 'Leve',
  tiro: function() {
    console.log('pei pei');
  }
}

console.log(weapon.carregada);
weapon.tiro();
delete weapon.carregada;
console.log(weapon);