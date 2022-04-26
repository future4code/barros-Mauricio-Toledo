/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/
//A: Sera impreso no console o promeiro elemento[0] "Matheus Nachtergaele", o ultimo elemento[-1] "Virninia Cavendish"//
// Em transmisão sera impreso o terceiro objeto[2] no caso Globo e o horario 14//
/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
 A: Sera impresso o objeto cachorro no primeiro caso, no segundo caso sera impresso o objeto cachorro subistituindo o nome
 No terceiro caso sera impresso o objeto cachorro subistituindo o nome e todas as letras "a" pela letra "o".
 B: A Sintaxe"..." Se chama spread, ela chama as imformaçoes de outro objeto ex const animal={...cachorro} no caso ira copiar o objeto acima.*/
 /*function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
A: Sera impreso false e undefined
B: Isso acontece porque altura não é um atributo declarado e no backender esta declarado o atributo como false,
nos dois casos a função esta sendo chamada o objeto esta sendo usado para declarar os valores da função*/
//1a//
const pessoa = {
    nome: "Elias",
    apelidos:["Pão com ovo", "Tio da fanta","Zoio"]

}
function pessoaA(pessoa1) {
   return `Eu sou ${pessoa.nome},mas pode me chamar de ${pessoa.apelidos}`
    
}
console.log(pessoaA(pessoa));
//1b//
const novaPessoa = {...pessoa.apelidos = ["Helou","Monocelha","Bicudo"]


}
console.log(pessoaA(novaPessoa))
//2a//
let personaA = {
    nome : "Tamyres",
    idade : 27,
    profissão : "Enfermeira",
}
let personaB = {
    nome : "Elisabete",
    idade : 50,
    profissão : "Vendedora",
}
function retornoArray(primeiroNome,segundoNome) {
    return   [personaA.nome, personaA.nome.length,personaA.idade,personaA.profissão,personaA.profissão.length]
            
    

}

console.log(retornoArray(personaA))
//3//
let carrinho = []
let frutaA = {
    nome:"Maça",
    disponibilidade:true,
}
let frutaB ={
    nome:"Uva",
    disponibilidade:true,
}
let frutaC ={
    nome:"Banana",
    disponibilidade:true,
}

function frutas(fruta1,fruta2,frutac) {
    carrinho.push(frutaA,frutaB,frutaC)
    return carrinho
    
}
console.log(frutas(frutaA,frutaB,frutaC));
//Desafio


function userInfo() { 
    let nome = prompt("Digite o nome")
    let idade = prompt("Digite a idade")
    let job = prompt("Digite a sua profissão ")
    
   
    
    let info = {
        nome,
        idade,
        job,

       
    }
    return info 
  
} 
console.log(userInfo());
console.log(typeof userInfo())
//2//
function filmes() { let filme1 = { lancamento1: 2004,
    nome: "A paixão de cristo",

}
let filme2 = {
    lancamento2: 2022,
    nome: "Sonic 2"
}
return `O promeiro filme foi lançado antes do segundo ? , ${filme1.lancamento1 == filme2.lancamento2}`


    
} 
console.log(filmes());  
//3//
function parteDoSacolao(frutasi1) {
   let frutasinver =  frutaA.disponibilidade  !== frutaA.disponibilidade
    return frutasinver
}
console.log(parteDoSacolao());



