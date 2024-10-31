import {Character} from "../types/Character.ts";
import {makeAutoObservable} from "mobx";

class CharactersStore {
    characters: Character[] = [];

    constructor() {
        makeAutoObservable(this)
    }
    removeCharacter(id: number) {
        this.characters = this.characters.filter(character => character.id !== id);
    }

    editCharacter(updatedCharacter: Character) {
        const index = this.characters.findIndex(character => character.id === updatedCharacter.id);
        if (index !== -1) {
            this.characters[index] = updatedCharacter;
        }
    }
}

export const charactersStore = new CharactersStore();