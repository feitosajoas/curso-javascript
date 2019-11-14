const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const Pessoa = {
    nome: 'Daniella',
    sobrenome: 'Milena',
    idade: 21,
    peso: 64
}

for (let atributo in Pessoa) {
    console.log(`${atributo} = ${Pessoa[atributo]}`)
}