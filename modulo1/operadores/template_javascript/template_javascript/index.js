// Exercicio 1//

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
// && = se todas variantes forem true
resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
// && = false, se qualquer variante for false
resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
// !resultado = transforma a boolean no oposto, no caso era false virou true
console.log("d. ", typeof resultado)
// O resultado de && sera de uma boolean ou seja true ou false

// Exercicio 2,3//
/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)*/
/* O erro do codigo acima é porque não ouve a conversão da string
o prompt sempre sera uma string, entao temos que converter com o comando Number*/
let primeiroNumero =  prompt("Digite um numero!")
let segundoNumero =  prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)
console.log(soma)
// Para convertermos em numero basta usar o comando Number(ex) do lado da string que desjamos//

/*- **Exercícios de escrita de código**
    1. Faça um programa que:
        
        a) Pergunte a idade do usuário
        
        b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
        
        c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
        
        d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)*/
let Myage = prompt("Digite sua idade")
let MyfriendAge = prompt("Digite a idade de seu amigo(a)")

console.log("Sua idade é maior do que a do seu melho amigo ?", Myage >= MyfriendAge)

console.log("A diferença de idade é", Myage - MyfriendAge , "anos" ) 

/* 2. Faça um programa que:
    
    a) Peça ao usuário que insira um número **par**
    
    b) Imprima na console **o resto da divisão** desse número por 2.
    
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
    
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */


    let NumeroPar = prompt("Digite um número par")
console.log(Number(NumeroPar)% 2 )
/* O resultado sempre sera 0 pois nessa divisão não a sobra
Se o numero for impar o console mostrara a sobra da divisão*/ 

/*3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas*/

let suaIdade = prompt("Digite sua idade")
console.log("Sua idade em meses é" , Number(suaIdade) * 12 , "meses")

console.log("Sua idade em dias é" , Number(suaIdade) * 365 , "dias")

console.log("Sua idade em horas é" , Number(suaIdade) * 365 * 24 , "horas")

// Exercico 4 //
let FalaNumero = prompt("Escolha um número")
let FalaOutroNumero = prompt("Escolha outro número")

console.log("O primeiro numero é maior que o segundo ?" , Number(FalaNumero)> Number(FalaOutroNumero))

console.log("O primeiro numero é igual ao segundo ?" , Number(FalaNumero) === Number(FalaOutroNumero))

console.log("O primeiro numero é divisivel pelo o segundo ?" , (Number(FalaNumero) % Number(FalaOutroNumero)) === 0  )

console.log("O segundo numero é divisivel pelo primeiro ?" , (Number(FalaOutroNumero) % Number(FalaNumero)) === 0  )

// Desafios//
/*
    
    Todos os exercícios aqui são de escrita de código! 
    
    1. Para este exercício, será necessário o conhecimento das fórmulas para mudar a unidade de temperatura entre Graus Celsius(°C),  Graus Fahrenheit(°F) e Kelvin(K). Abaixo estão duas delas:
        - Graus Fahrenheit(°F) para Kelvin(K)
            
            ```
            (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
            ```
            
        - Graus Celsius(°C) para Graus Fahrenheit (°C)
            
            ```
            (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32 */
let Kelvin = (77 - 32) * (5 / 9) + 273.15 

console.log("77f é igual a =" , Kelvin , "Kelvin")

let Fahrenheit = 80 * (9/5) + 32

console.log(Fahrenheit)
let TemperaturaCparaF = 30 * (9/5) + 32
let temperaturaCparaK = (TemperaturaCparaF - 32) * (5 / 9) + 273.15          
// para saber a temperura de Celsius em F ou em K, basta subistituir o numero  30 pela temperatura desejada//
console.log("30 graus Celsius em F é" , TemperaturaCparaF)

console.log("30 graus Celsius em K é" , temperaturaCparaK)    

// Desafio 2 //
 // Considerando 1 quilowat = a R$ 0,05 por hora, a residencia gasta 280 quilowat por hora//
 let gastoDiario = (0.05 * 280) * 24
 // A casa gastando 280 quilowat por hora a R$ 0,05 por quilowat da R$ 14,00
 let gastoMensal = gastoDiario * 30
 console.log(gastoMensal)
let Desconto = gastoMensal * 0.15
console.log(Desconto) 


// Desafio 3 //
/* a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
`20lb equivalem a X kg */
// Formula divida o numero de libras por 2,2046 considerando 20 libras//
let LibrasParaKg = 20 / 2.2046
console.log("20lb equivalem" , LibrasParaKg , "quilogramas")

/*b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
`10.5oz equivalem a X kg*/
// formula divida o numero de oz por 35,274//
let OzparaKg = 10.5 / 35.274
console.log("10.5 oz equivalem a " , OzparaKg , "quilogramas")

/* c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
100mi equivalem a X m */
// formula multiplicar o valor por 1609//

let MilhasPmetros = 100 * 1609
console.log("100milha equivalem" , MilhasPmetros , "metros") 

/* d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
50ft equivalem a X m */
//Formula dividir por 3,281//
let FtPm = 50 / 3.281
console.log("50 pes equivalem" , FtPm , "metros")

/*e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
103.56gal equivalem a X l */
// formula multiplicar por 3,785//
let GalPl = 103.56 * 3.785
console.log("103.56 gal equivalem a " ,GalPl , "litros")

/*f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
450 xic equivalem a X l*/
//Formula multiplicar por 0,24//
let XicEl = 450 * 0.24
console.log("450 xicaras equivalem a " , XicEl , "litros")
//g//
let conversor = prompt("escolha um valor em galão para ser convertido em litros")
console.log(" o valor em litros é " , conversor * 3.785)

