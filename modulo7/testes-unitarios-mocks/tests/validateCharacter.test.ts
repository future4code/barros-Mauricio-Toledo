import { validateCharacter } from "../src/functions/validateCharacter"
import { character } from "../src/models/character"

describe("Testando validadeCharacter", () => {
    test("Recebe a via "" e retorna falso", () => {
        const character: character = {
            name: "",
            life: 200,
            defense: 50,
            strength: 5000
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Recebe vida = 0 e retorna falso", () => {
        const character: character = {
            name: "Carol",
            life: 0,
            defense: 200,
            strength: 100
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Recebe força = 0  retorna false", () => {
        const character: character = {
            name: "Eleanor",
            life: 55,
            defense: 150,
            strength: 0
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Recebe valor negativo da força e defesa e retorna falso", () => {
        const character: character = {
            name: "Esdras",
            life: 220,
            defense: -30,
            strength: -8
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    test("Recebe as informações e retona true", () => {
        const character: character = {
            name: "Bobby",
            life: 200,
            defense: 150,
            strength: 250
        }

        const result = validateCharacter(character)

        expect(result).toBe(true)
    })
})