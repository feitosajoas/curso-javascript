const pessoa = {
    saudacao: 'Bom dia! ',
    nome: 'Joás',
    falar() {
        console.log(this.saudacao + this.nome)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funciona e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
