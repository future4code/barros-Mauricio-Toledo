type Estatistica={
    maior: number,
    menor: number,
    media: number,
}

function obterEstatisticas(numeros:number[]):Estatistica {
//a) Ja é uma função de array de numeros
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )
//b) soma tipagem number
    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([2,6,8]))


//b
type Amostra={
    numeros: number[],
    obterEstatisticas: (numeros:number[] )=>Estatistica
}
const amostras: Amostra={
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: obterEstatisticas
}
console.log(amostras.obterEstatisticas(amostras.numeros))