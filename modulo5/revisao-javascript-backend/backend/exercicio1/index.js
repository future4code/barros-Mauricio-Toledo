console.log("exercicio 1");


function converter(Celsius, mesure) {
    if(mesure === "F" ){
        farenheit = Celsius*9/5+32
        return(`${Celsius}° Celsius é = ${farenheit}° Farenheit.`)
    } if (mesure === "K"){
        kelvin = Celsius+273.15
        return(`${Celsius}° Celsius é = ${kelvin}° Kelvin`)
    } if (mesure !== "F" && mesure !== "K"){
        return (`Error, valor errado ${mesure}`)
    }if( typeof Number === Celsius ){
        return(`Erorr. wrong one ${Celsius}`)
    }
}

console.log(conversor(30, "F"))
console.log(conversor(40, "K"))
console.log(conversor(40,"j"))
