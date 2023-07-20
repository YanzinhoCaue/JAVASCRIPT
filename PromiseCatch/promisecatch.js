let promiseErr = Promise.resolve(new Error('Algo deu errado'));

promiseErr.then((value) => console.log(value)).catch(e =>console.log('Erro: ' + e));