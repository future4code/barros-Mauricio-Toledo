/*1 let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) */
// O codigo ira criar um loop imprimindo os valores de 0 até 5

/*2const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}*/
// O codigo  ira imprimir todos os numeros maiores  que 18 dentro da array

/*3const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}*/
// O codigo ira imprimir o numero de linhas digitado no prompt, e o numero de asteristicos iria aumentando a cada linha

// Exercicio 1

/*let humanosDePatas = Number(prompt("Quantos animais de estimação você tem ?"))
let nomeDosBichos = []

if (humanosDePatas == 0) {console.log("Que pena! Você pode adotar um pet");

    
} else {
    for (let A = 0; A < humanosDePatas; A++) {
        const nomeDospets = prompt("Digite o nome deles!!");
        nomeDosBichos.push(nomeDospets)
        
 }
    
}    
console.log(nomeDosBichos);*/
// Comentado para não atrapalhar os outros exercicios
// Exercicio 2
//a
let arrayOriginal = [25,32,43,55,38,44,52]

/*for (let B = 0; B < arrayOriginal.length; B++) {
    const arrayOriginal2 = arrayOriginal[B];
    console.log(arrayOriginal2);
}

//b
for (let C = 0; C < arrayOriginal.length; C++) {
    const divisao= arrayOriginal[C] / 10 ;
    console.log(divisao);

    
}
//c
let arrayPar =[]
for (let index = 0; index < arrayOriginal.length; index++) {
    if (arrayOriginal[index] % 2 == 0) { arrayPar.push(arrayOriginal[index])
        
    }
    console.log(arrayPar)
}
    
    
//d 

let stringArray = []
let i=0
for (let valor of arrayOriginal) {
    stringArray.push(`O elemento index  ${i} é ${valor}`)
    i++
    console.log(stringArray);
    
}*/
// e


let valorMaior = 0
let valorMenor = 0
for (let index = 1; index < arrayOriginal.length; index++) {
    if (arrayOriginal.length[index] > arrayOriginal.length[valorMaior] ) {
        valorMaior = index
    } else if (arrayOriginal.length[index] < arrayOriginal.length[valorMenor]) {
        valorMenor = index
        
    }
    console.log(`Maior valor : ${valorMaior}`);
    console.log(`Menor valor: ${valorMenor}`);
}
