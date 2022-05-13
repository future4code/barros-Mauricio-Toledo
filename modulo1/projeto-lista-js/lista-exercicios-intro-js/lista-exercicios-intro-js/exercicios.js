// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
const altura = prompt("Digite a altura")
const largura = prompt("Digite a largura")
console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano atual")
const anoDeNascimento = prompt("Digite o seu ano de nascimento")
console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 
  const Imc = (peso) / (altura * altura) 
  return(Imc)
 

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let userName = prompt("Digite seu nome")
let userAge = prompt("Digite sua idade")
let userEmail = prompt ("Digite seu email")
console.log(`Meu nome é ${userName}, tenho ${userAge} anos, e o meu email é ${userEmail}.`)
  
  
  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite uma cor")
  const cor2 = prompt("Digite outra cor")
  const cor3 = prompt("Digite mais uma cor")
  const cores = [cor1,cor2,cor3]
  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
 // implemente sua lógica aqui
 
 return string.toUpperCase()


  

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 return custo / valorIngresso
  

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
 return  string1.length == string2.length
 
 


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
  

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

return array[array.length-1]


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let Ultimo = array.pop()
let Primeiro = array.shift()
array.push(Primeiro)
array.unshift(Ultimo)



return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const Upper1 = string1.toUpperCase()
const upper2 = string2.toUpperCase()
return Upper1 === upper2
}
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtualdeAgora = prompt("Digite o ano atual")
  let digiteoAno = prompt("Digite o ano de nascimento")
  let aigiteaEmissão = prompt("Digite a emissão")
let idade = AnoAtualdeAgora - DigiteoAno
let prescisaRenovar = anoAtualdeAgora - aigiteaEmissão

    
  
  



  

  

  

  

  

  

  



}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}