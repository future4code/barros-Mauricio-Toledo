/*const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
a) Explique o que o código faz. Qual o teste que ele realiza? 
O codigo pergunta ao usuario o numero que ele quer testar se é divisivel por 2 e se não deixa scrollbars,
se for divisivel por 2 ele imprime passou no teste se nao, imprime não passou no teste.
b) Para que tipos de números ele imprime no console "Passou no teste"? 
numeros que não deixam scrollbars, diviseiveis por 2
c) Para que tipos de números a mensagem é "Não passou no teste"?
qualquer numero não divisivel por dois não deixam sobras*/

/*let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?
O codigo serve para solicitar uma fruta ao usuario e imprime o preço dela

b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
O preço da fruta , Maçã é R$ 2,25
c) Seria impresso o valor da fruta solicitada, porque o item D não tem uma variavel definida*/

/*const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)*/
// a) O que a primeira linha está fazendo?
// convertendo qualquer mensagem do usuario em numero
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// seria impresso a mensagem esse número passou no teste e se fosse -10 não seria impresso nenhuma mensagem
//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Sim, O erro da como se a variavel não esta definida porque ela esta depois do console.

// Exercicios de escrita de codigo
// 1//
let idadeDoUsuario = Number(prompt("Digite sua idade"))
if (idadeDoUsuario >= 18) {
    console.log("Você pode dirigir");
} else {console.log("Você não pode dirigir");
    
}
//2//
let horarioDoEstudo = prompt("Digite M para matuino, V para vesperino e N para noturno.")
if (horarioDoEstudo == "M") {console.log("Bom dia");

}if (horarioDoEstudo == "V") {console.log("Boa tarde");
    
}if (horarioDoEstudo == "N") {console.log("Boa noite");
    
}
//3//
let novoHorarioDoEstudo = prompt("Digite M para matuino, V para vesperino e N para noturno.")
switch (novoHorarioDoEstudo) {
    case "M":
        console.log("Bom dia");
        break;
        case "V":
            console.log("Boa tarde");
            break;
            case "N":
                console.log("Boa noite");

    default:

        break;
}
/*let amigoFrescoPraFilme = prompt("Você vai assistir qual gênero de filme ?")
let amigoQuetaSemDinhero = Number(prompt("Digite o valor do ingresso"))
if (amigoFrescoPraFilme == "Fantasia" && amigoQuetaSemDinhero <= 15) { console.log("Bom filme");
    
} else {console.log("Escolha outro filme");
    
} comentado para não atrapalhar os desafios*/

//Desafios 1
let amigoFrescoPraFilme = prompt("Você vai assistir qual gênero de filme ?")
let amigoQuetaSemDinhero = Number(prompt("Digite o valor do ingresso"))
let lanchinho = prompt("Digite o lanche que você vai comer")
if (amigoFrescoPraFilme == "Fantasia" && amigoQuetaSemDinhero <= 15) { console.log(`Bom filme e aproveite seu/sua ${lanchinho}.`);
    
} else {console.log("Escolha outro filme");
    
}
//Desafios 2
let nomeDoComprador = prompt("Por favor insira seu nome completo")
let tipoDoJogo = prompt("Se o jogo for internacional digite IN, e se for nacional/domestico digite DO")
let etapaDoJogo = prompt("Digite a Etapa do jogo: DT se for disputa para 3o lugar, SF para semi-final e FI para final")
let categoria = Number(prompt("Digite a categoria 1,2,3 ou 4"))
let quantidadeDeIngressos = Number(prompt("Qual a quantidade de ingressos ?"))

let valoresDoDomestico = function cauculoDodomestico() {
if (tipoDoJogo == "DO" && etapaDoJogo == "DT" && categoria == 1) { 660*quantidadeDeIngressos}
if (tipoDoJogo == "DO" && etapaDoJogo == "DT" && categoria == 2) { 440*quantidadeDeIngressos}
if (tipoDoJogo == "DO" && etapaDoJogo == "DT" && categoria == 3) { 330*quantidadeDeIngressos}
if (tipoDoJogo == "DO" && etapaDoJogo == "DT" && categoria == 4) { 170*quantidadeDeIngressos}

if (tipoDoJogo == "DO" && etapaDoJogo == "SF" && categoria == 1) { 1320*quantidadeDeIngressos}
if (tipoDoJogo == "DO" && etapaDoJogo == "SF" && categoria == 2) { 880*quantidadeDeIngressos}
if (tipoDoJogo == "DO" && etapaDoJogo == "SF" && categoria == 3) { 550*quantidadeDeIngressos}
if (tipoDoJogo == "DO" && etapaDoJogo == "SF" && categoria == 4) { 220*quantidadeDeIngressos}

if (tipoDoJogo == "DO" && etapaDoJogo == "FI" && categoria == 1) { 1980*quantidadeDeIngressos}
if (tipoDoJogo == "DO" && etapaDoJogo == "FI" && categoria == 2) { 1320*quantidadeDeIngressos}
if (tipoDoJogo == "DO" && etapaDoJogo == "FI" && categoria == 3) { 820*quantidadeDeIngressos}
if (tipoDoJogo == "DO" && etapaDoJogo == "FI" && categoria == 4) { 330*quantidadeDeIngressos}}

let valoresDoInternacional = function cauculoDoInternacional() {
    if (tipoDoJogo == "IN" && etapaDoJogo == "DT" && categoria == 1) {(4.10*660)*quantidadeDeIngressos}
    if (tipoDoJogo == "IN" && etapaDoJogo == "DT" && categoria == 2) {(4.10*440)*quantidadeDeIngressos}
    if (tipoDoJogo == "IN" && etapaDoJogo == "DT" && categoria == 3) { (4.10*330)*quantidadeDeIngressos}
    if (tipoDoJogo == "IN" && etapaDoJogo == "DT" && categoria == 4) { (4.10*170)*quantidadeDeIngressos}
    
    if (tipoDoJogo == "IN" && etapaDoJogo == "SF" && categoria == 1) { (4.10*1320)*quantidadeDeIngressos}
    if (tipoDoJogo == "IN" && etapaDoJogo == "SF" && categoria == 2) { (4.10*880)*quantidadeDeIngressos}
    if (tipoDoJogo == "IN" && etapaDoJogo == "SF" && categoria == 3) { (4.10*550)*quantidadeDeIngressos}
    if (tipoDoJogo == "IN" && etapaDoJogo == "SF" && categoria == 4) { (4.10*220)*quantidadeDeIngressos}
    
    if (tipoDoJogo == "IN" && etapaDoJogo == "FI" && categoria == 1) { (4.10*1980)*quantidadeDeIngressos}
    if (tipoDoJogo == "IN" && etapaDoJogo == "FI" && categoria == 2) { (4.10*1320)*quantidadeDeIngressos}
    if (tipoDoJogo == "IN" && etapaDoJogo == "FI" && categoria == 3) { (4.10*820)*quantidadeDeIngressos}
    if (tipoDoJogo == "IN" && etapaDoJogo == "FI" && categoria == 4) { (4.10*330)*quantidadeDeIngressos}}

   /* ---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Nacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  R$ 1980
Valor total:  R$ 19800*/
if (tipoDoJogo == "DO" && etapaDoJogo == "DT") {console.log(`---Dados da compra--
Nome do cliente ${nomeDoComprador}
Etapa do jogo: Disputa do terceiro lugar
Categoria: ${categoria}
Quantidade de ingressos: ${quantidadeDeIngressos} ingressos
Valor do Ingresso: ${cauculoDodomestico()}
Valor total: ${cauculoDodomestico()}`);
    
}

    



