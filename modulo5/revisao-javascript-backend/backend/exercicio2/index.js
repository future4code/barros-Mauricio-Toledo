console.log("exercício 2");
console.log("exercício 2.A");

const clients = [
    { id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano}"},
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

function newClient (id, name){

    const cadastro = clients.map((i)=>{  
        return i.id
    })
    if (cadastro.includes(id)){
        return (`ERROR.  invalido, ${id} ja existe.`)
    }else{
       clients.push({ id:id, name:name})
    }

return clients
}

console.log(newClient(5, "astrodev"))
console.log(newClient(4, "astrodev"))


console.log("exercicio 2.B")

const tabuada=(number)=>{
    if(typeof number === "string"){
        return `ERROR.  inválido (Número)`
    }if(number >=10 || number< 1){
        return `Error.  inválido (número  entre 1 e 10)`
    }else{

        return `${number} X 0 = 0
        ${number} X 1 = ${number}
        ${number} X 2 = ${number * 2}
        ${number} X 3 = ${number* 3}
        ${number} X 4 = ${number* 4}
        ${number} X 5 = ${number * 5}
        ${number} X 6 = ${number * 6}
        ${number} X 8 = ${number * 7}
        ${number} X 9 = ${number * 9}
        ${number} X 10 = ${number * 10}
        `
    }
}

console.log(tabuada(3))
console.log(tabuada("10"))
console.log(tabuada(50))