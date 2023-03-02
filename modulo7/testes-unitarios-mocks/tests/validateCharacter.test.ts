import { validateCharacter } from "../src/functions/validateCharacter";
import { character } from '../src/models/character';

describe("Testing the function validadeCharacter", () => {
    test("Should receive a character with the property name empty and return false", () => {
        const character: character = {
            name: "",
            life: 20,
            defense: 100,
            strength: 50
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
   } )})