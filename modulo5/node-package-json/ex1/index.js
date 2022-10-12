// ex 1.A

const name= process.argv[2];
const age =Number(process.argv[3]);

function data(name, age){
        return (`Hello, ${name}! Você tem ${age} anos.`)
}
const userData = data(name, age)

console.log(userData)

//ex 1.B
function somaDaIdade(name ,age){
        return (`Hello, ${name}! Você tem ${age} anos.Em sete anos você terá ${age + 7}. `)
}

const newAge = somaDaIdade(name, age)
console.log(newAge)