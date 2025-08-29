class Usuario {
  static totalUsuarios = 0

  #ativo

  constructor(nome, idade, email) {
    this.nome = nome
    this.idade = idade
    this.email = email
    this.#ativo = false
    Usuario.contarUsuarios()
  }

  static contarUsuarios() {
    Usuario.totalUsuarios++
  }

  get ativo() {
    return this.#ativo
  }

  set ativo(valor) {
    if (typeof valor === "boolean") {
      this.#ativo = valor
    } else if (valor.toUpperCase() === "S") {
      this.#ativo = true
    } else if (valor.toUpperCase() === "N") {
      this.#ativo = false
    } else {
      console.log("Dado incorreto!")
      process.exit()
    }
  }

  get boasVindas() {
    return `Bem-vindo, ${this.nome}!`
  }

  mostrarDados() {
    console.log("==========================")
    console.log(this.boasVindas)
    console.log(`Nome: ${this.nome}`)
    console.log(`Idade: ${this.idade}`)
    console.log(`Email: ${this.email}`)
    console.log(`Ativo: ${this.ativo ? "true" : "false"}`)
  }
}

module.exports = Usuario
