import { atom } from "jotai";
import { getAllPets, type PetDto } from "../api/pets";

export const allPetsAtom = atom<Promise<PetDto[]>>(async ()=>{
    return await getAllPets();
})