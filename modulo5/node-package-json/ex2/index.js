// ex 2


const op = process.argv[2]
const n1 = Number(process.argv[3])
const n2 = Number(process.argv[4])

function math(op, n1, n2){
    if(op == "+"){
        return n1+n2
    }if (op == "-"){
        return n1-n2
    }if(op == "*"){
        return  n1*n2
    }if(op == "/"){
        return n1/n2
    }
}
const operacoes= math(op, n1,n2)
console.log(operacoes)

