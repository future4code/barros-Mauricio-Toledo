/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let playerCarta = comprarCarta()
let pcCarta = comprarCarta()

let playerCarta2 = comprarCarta()
let pcCarta2 = comprarCarta()

let pontuacaoDoJogador = playerCarta.valor + playerCarta2.valor
let pontuacaoDoPc = pcCarta.valor + pcCarta2.valor

let cartaEscondida = comprarCarta()
let comecar = confirm("Deseja começar uma partida ?")

if (comecar && playerCarta.texto != "A" && playerCarta2.texto != "A" && pcCarta.texto != "A" && pcCarta2.texto != "A") 
{ console.log("Bem vindo ao Blackjack");
console.log("Player:",playerCarta.texto,playerCarta2.texto,`Pontuação ${pontuacaoDoJogador}`);
console.log("Pc:",pcCarta.texto,pcCarta2.texto,`Pontuação ${pontuacaoDoPc}`);   
}
let comprarMaisUma = confirm("Deseja comprar mais uma ?") 

if (comprarMaisUma && pontuacaoDoJogador <= 20 ) { novaPontuacao = pontuacaoDoJogador + cartaEscondida.valor
   
   console.log(cartaEscondida.texto, `Pontuação: ${novaPontuacao}`);
   
   novaPontuacaoPc = cartaEscondida.valor+ pontuacaoDoPc
   
   console.log(`Pontuação pc : ${novaPontuacaoPc}`);
   

  }  
   
novaPontuacaoPc 
novaPontuacao


  
 if  (novaPontuacao > 21 || pontuacaoDoPc == 21 || novaPontuacao < pontuacaoDoJogador) { console.log(" Você perdeu!");

 console.log(`Sua pontuação: ${novaPontuacao}`);

 console.log(`Pontuação do pc: ${novaPontuacaoPc}`);

}
   
else if (novaPontuacao == 21 &&  novaPontuacao > novaPontuacaoPc) 
  {
     console.log(`Sua pontuação: ${novaPontuacao}`);
  
     console.log(`Pontuação do pc: ${novaPontuacaoPc}`);
     
     console.log(" Você venceu!!");
  
} else if (novaPontuacao == novaPontuacaoPc) { 
   console.log(`Sua pontuação: ${novaPontuacao}, Pontação do Pc: ${novaPontuacaoPc}`);
   console.log("Empate");
   
} else console.log("Fim.");



