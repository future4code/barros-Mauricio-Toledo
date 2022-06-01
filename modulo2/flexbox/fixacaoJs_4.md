´´´function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
let contador = 0
let frase = "Número não encontrado"

for(let i = 0; i < arrayDeNumeros.length;i++){ 
  
if (arrayDeNumeros[i] === numeroEscolhido){contador++}}
if(contador > 0){ frase = `O número ${numeroEscolhido} aparece ${contador}x`}
return frase
 
}´´´