/*- **Exercícios de interpretação de código**
    
    Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
    1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.
        
        ```jsx
        let array
        console.log('a. ', array)
        
        array = null
        console.log('b. ', array)
        
        array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        console.log('c. ', array.length)
        
        let i = 0
        console.log('d. ', array[i])
        
        array[i+1] = 19
        console.log('e. ', array)
        
        const valor = array[i+6]
        console.log**('f. ', valor)**
        ```
        
    2. Leia o código abaixo com atenção 
        
        ```jsx
        const frase = prompt("Digite uma frase")
        
        console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
        ```
        
        Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?*/ 

        // A frase acima seria imprimida assim "SUBI NUM ÔNIBUS EM MIRROCOS" 26 //

// Exercicios de codigo//
//1//
let nomeDousuario = prompt("Digite seu nome")
let emailDousuario = prompt("Digite seu email")
console.log(`O email ${emailDousuario} foi cadastrada com sucesso. Seja bem vindo(a) ${nomeDousuario}`)


//2//
let comidasFavoritas = ["Hamburguer","Pudim","Feijoada","Pizza","Torta"]
console.log(comidasFavoritas)
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

let comidaNova = prompt("Digite sua comida")

comidasFavoritas.splice(1,0,comidaNova)


console.log(comidasFavoritas)

/*3. Faça um programa, seguindo os passos:
    
a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

c) Imprima o array no console

d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

e) Remova da lista o item de índice que o usuário escolheu.

f) Imprima o array no console*/

let listaDeTarefas 
let tarefa1 =prompt("Digite uma tarefa")
let tarefa2 =prompt("Digite outra tarefa")
let tarefa3 = prompt("Digite mais uma tarefa")
listaDeTarefas = [tarefa1,tarefa2,tarefa3]
console.log(listaDeTarefas)
let atarefa = Number(prompt("Qual tarefa foi conclida ? 0,1 ou 2"))
console.log(listaDeTarefas.splice(atarefa,1))


