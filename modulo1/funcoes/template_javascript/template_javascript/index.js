/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))*/
// O console ira subistituir  a variavel pelo numero entre () e os multiplicara por 5 ou seja : 10 e 50//
// retiranto do console.log apenas executaria o promgrama//


/*```jsx
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
```

a. Explique o que essa função faz e qual é sua utilidade
// Acima é chamada de expressão de função serve para declarar a função como uma variavel podendo ser invocada quando desjado
b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura` > a case esta em letras minusculas por causa do comando toLowerCase
     ii.  `CENOURA é bom pra vista`
     iii. `Cenouras crescem na terra`*/


     /*a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

```
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
```

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:

```
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].*/

//A//
let minhasInformacoes = function () {
     let meusDados = "Eu sou Mauricio, tenho 31 anos, moro em São Paulo e sou Recepcionista"
     return meusDados
}
console.log(minhasInformacoes)
//B//
let novosDados = function (nome,idade,endereco,profissao) {
     console.log(`Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${endereco} e sou ${profissao} `)
    
     
}
console.log(novosDados("Mauricio",31,"São Paulo","Recepcionista"))
//2a//
let numerosDafuncao = function (numero1,numero2) {
    let soma = numero1 + numero2
    return soma
     
     
}
console.log(numerosDafuncao(3,5))
//2b//
let booleana = function (numeronovo,numeronovo2) {
     let maiorQueopromeiro = numeronovo == numeronovo2
     return maiorQueopromeiro
     
}
console.log(booleana(31,34))
//2c//
let parOunao = function (NMP) {
     let ePar = NMP % 2 == 0
     return ePar

     
}
console.log(parOunao(5))
//2d//
let umaString = function (Stringnova) {
     let stringnew = String(Stringnova)
     return stringnew.toUpperCase()

}
console.log(umaString("Tio da fanta"))
//3//

let numerosOperacoes = function (itsnumber,outronumer) {
     return Number (itsnumber) + Number (outronumer)
   
     
}
let diferenca = function(itsnumber,outronumer) {
     return Number (itsnumber) - Number (outronumer)
}

let multiplica = function (itsnumber,outronumber) {
     return Number (itsnumber) * Number (outronumber)
     
}
let divide = function (itsnumber,outronumber) {
     return Number (itsnumber) / Number (outronumber)
     
}
console.log(numerosOperacoes(Number(prompt("DIgite um numero")),Number(prompt("Digite mais um"))))
console.log(diferenca(Number(prompt("DIgite um numero")),Number(prompt("Digite mais um"))))
console.log(multiplica(Number(prompt("DIgite um numero")),Number(prompt("Digite mais um"))))
console.log(divide(Number(prompt("DIgite um numero")),Number(prompt("Digite mais um"))))

