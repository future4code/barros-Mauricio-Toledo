// Parte 1 e 2
/*import chalk from "chalk"

let message: string|number = chalk.blue("Ola mundo,hello world!");

 message = 42


console.log(message);*/
// Parte 3

import app from "./app"
import getAllCharacters from "./endpoints/getAllCharacters"
import createCharacter from './endpoints/createCharacters';
import deleteCharacter from "./endpoints/deleteCharacter";

app.get("/character", getAllCharacters)
app.put("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)

// part4
//app.get("/movies")
//app.delete("/movies")