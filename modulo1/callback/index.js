// ----Ex 1a
/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })*/
  // Sera impresso os itens, a posição e os arreys os 3 no caso
 
 //----- Ex 2a
  /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)*/
  // Sera impresso somente os nomes da arrays que foram mapeados 

  //---- Ex 3a
  /*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)*/
  // serão impressos todos apelidos filtadros que o nome seja diferente de Chijo !==, o nome foi removido da array


//--------------------------Code Time---------------------------------//

//--------------------------Ex 1 ------------------------------------//
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 //a
 const somenteNomes = pets.map((item) => {
     return item.nome

 })
console.log(somenteNomes);

//b
const somenteSalsichas = pets.filter((item)=>{
    return item.raca === "Salsicha"
}) 
console.log(somenteSalsichas);

//c
const descontoNaTosa = pets.filter((item)=>{
  if (item.raca == "Poodle") { nomeDosDescontos = item.nome
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomeDosDescontos}!"`);
      
  }
    
})
//------------------------------------------2------------------------------------//

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 
 /*//a
 const soNomes = produtos.map((item)=>{
     return item.nome
 })
console.log(soNomes);

//b
const descontosDoProduto = produtos.map((item)=>{
    aplicarDesconto = item.preco * 5 / 100
    return item.preco - aplicarDesconto
})
console.log(descontosDoProduto);

//c

const categoriaBebidas = produtos.filter((item)=>{
    return item.categoria == "Bebidas"
})
console.log(categoriaBebidas);

//d

const somenteYpe = produtos.filter((item)=>{
   if (item.nome.includes("Ypê")) { return item.nome
       
   }
})
console.log(somenteYpe);*/

//e

const filtroDeprodutos = produtos.filter((item)=>{
    if (item.nome.includes("Ypê")) { return item.nome
        
    }

})


function produtosPrecos(produtos) {
    novaFrase = `Compre ${item.nome} por ${item.preco}`
    return novaFrase
    
}












