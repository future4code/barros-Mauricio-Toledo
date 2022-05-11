// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararOrdem(a,b) {
        if (a == b) {return 0
            
        } if (a < b) { return -1
            
        }if (a > b) { return 1
            
        }
        
    } array.sort(compararOrdem)
 
  return  array.sort(compararOrdem)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const somentePares = array.filter(numeroPar => numeroPar % 2 === 0)
  return somentePares
  
    
  
  

  
   
 
} 

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) { 
  const somentePares = array.filter(numeroPar => numeroPar % 2 === 0)
  const elevadoAdois = somentePares.map(numeroPar => numeroPar * numeroPar)
  return elevadoAdois
        
    
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for (let index = 1; index < array.length; index++) {
    if (array[index] > maiorNumero) { maiorNumero = array[index]
      
    } }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero 
  let maiorDivisivelPorMenor
  let diferenca
  let menorNumero
  if (num1 > num2) { maiorNumero = num1 , menorNumero = num2
    
  } else {maiorNumero = num2, menorNumero = num1}
   maiorNumero
  if (maiorNumero % menorNumero == 0) { maiorDivisivelPorMenor = true
    
  } else { maiorDivisivelPorMenor = false
    
  }
   maiorDivisivelPorMenor
  if (num1 > num2) { diferenca = num1 - num2
    
  } else { diferenca = num2 - num1}
  diferenca
   let resultado = {maiorNumero:maiorNumero,
    maiorDivisivelPorMenor:maiorDivisivelPorMenor,
    diferenca:diferenca,}
    return resultado
  
  
    
  
  


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numberPares = [];
    for (let i = 0; numberPares.length < n; i++) 
    {
        if (i % 2 == 0) {
            numberPares.push(i);
        }
    }
    return numberPares;
}
   


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) { 
  if (ladoA === ladoB && ladoA === ladoC) {
    return "Equilátero"
  }else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC  ){
    return "Escaleno"

  }else {
    return "Isósceles"

  }
 
 
 
} 

 

  
  
    
  



// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let maiorNumero = array[0]
  for (let index = 1; index < array.length; index++) {
    if (array[index] > maiorNumero) { maiorNumero = array[index]
      
    } }
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}