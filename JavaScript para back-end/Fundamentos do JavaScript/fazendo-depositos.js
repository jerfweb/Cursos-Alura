const cliente = {
  nome: 'Andre',
  idade: 36,
  cpf: '12543652266',
  email: 'andre@email.com',
  fones: ['5591235498', '5521988743124'],
  dependentes: [
    {
      nome: 'Sara Silva',
      parentesco: 'filha',
      dataNasc: '20/03/2011'
    },
    {
      nome: 'Samia Maria',
      parentesco: 'filha',
      dataNasc: '04/01/2014'
    }
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor
  },
  sacar: function (valor) {
    this.saldo -= valor
  }
}

console.log(`saldo atual ${cliente.saldo}`)
console.log(`deposito de 30`)
cliente.depositar(30)
console.log(`saldo atual ${cliente.saldo}`)
console.log(`saque de 30`)
cliente.sacar(20)
console.log(`saldo atual ${cliente.saldo}`)