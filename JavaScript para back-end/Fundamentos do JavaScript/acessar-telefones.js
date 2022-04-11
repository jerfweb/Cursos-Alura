const cliente = {
  nome: "Andre",
  idade: 36,
  cpf: "12543652266",
  email: "andre@email.com",
  fones: ["5591235498", "5521988743124"]
}

let indice = 0
cliente.fones.forEach(fone => console.log(`fones: ${fone}`))