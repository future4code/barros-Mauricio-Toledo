// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function compararOrdem(a, b) {
    if (a == b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
  }
  array.sort(compararOrdem);

  return array.sort(compararOrdem);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const somentePares = array.filter((numeroPar) => numeroPar % 2 === 0);
  return somentePares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const somentePares = array.filter((numeroPar) => numeroPar % 2 === 0);
  const elevadoAdois = somentePares.map((numeroPar) => numeroPar * numeroPar);
  return elevadoAdois;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = array[0];
  for (let index = 1; index < array.length; index++) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  return maiorNumero;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maiorNumero;
  let maiorDivisivelPorMenor;
  let diferenca;
  let menorNumero;
  if (num1 > num2) {
    (maiorNumero = num1), (menorNumero = num2);
  } else {
    (maiorNumero = num2), (menorNumero = num1);
  }
  maiorNumero;
  if (maiorNumero % menorNumero == 0) {
    maiorDivisivelPorMenor = true;
  } else {
    maiorDivisivelPorMenor = false;
  }
  maiorDivisivelPorMenor;
  if (num1 > num2) {
    diferenca = num1 - num2;
  } else {
    diferenca = num2 - num1;
  }
  diferenca;
  let resultado = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  };
  return resultado;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numberPares = [];
  for (let i = 0; numberPares.length < n; i++) {
    if (i % 2 == 0) {
      numberPares.push(i);
    }
  }
  return numberPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC) {
    return "Equilátero";
  } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
    return "Escaleno";
  } else {
    return "Isósceles";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });
  let segunMenor = array[1];
  let segundoMaior = array[array.length - 2];
  return [segundoMaior, segunMenor];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const frase = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
  return frase;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const anonimoNome = { nome: "ANÔNIMO" };
  const srAnonimo = { ...pessoa, ...anonimoNome };
  return srAnonimo;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const autorizadaAusar = [];
  for (let pessoa of pessoas) {
    if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5) {
      autorizadaAusar.push(pessoa);
    }
  }
  return autorizadaAusar;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const naoAutorizada = [];
  for (let pessoa of pessoas) {
    if (pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.5) {
      naoAutorizada.push(pessoa);
    }
  }
  return naoAutorizada;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  let saldoDaConta = contas.map((item) => {
    return item.compras.reduce((v1, v2) => {
      return v1 + v2;
    }, 0);
  });

  for (let i = 0; i < contas.length; i++) {
    contas[i].saldoTotal -= saldoDaConta[i];
    contas[i].compras = [];
  }
  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let ordemAlfabetica = consultas.sort(function (a, b) {
    if (a.nome < b.nome) {
      return -1;
    } else {
      return true;
    }
  });
  return ordemAlfabetica;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  let datasDasConsultas = consultas.map((item) => {
    return { nome: item.nome, dataDaConsulta: item.dataDaConsulta.split("/") };
  });

  for (let i = 0; i < datasDasConsultas.length; i++) {
    datasDasConsultas.sort((a, b) => {
      if (a.dataDaConsulta[i] > b.dataDaConsulta[i]) {
        return 1;
      } else if (a.dataDaConsulta[i] < b.dataDaConsulta[i]) {
        return -1;
      }
      return 0;
    });
  }

  let consultasPorData = datasDasConsultas.map((item) => {
    return { nome: item.nome, dataDaConsulta: item.dataDaConsulta.join("/") };
  });
  return consultasPorData;
}
