function calculaPrecoTotal(quantidade) {
let macas = 1.30
if(quantidade >= 12){macas = 1.00}
let valorTotal = macas*quantidade
return valorTotal
}