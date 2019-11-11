// par nome/valor
const saudacao = 'Olá!' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares/valor
const Cliente = {
    nome: 'Joás',
    idade: 21,
    peso: 80,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)