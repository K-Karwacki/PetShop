import { atom } from "jotai";
import { createPet, deletePetByID, getAllPets, type CreatePetDto, type PetDto } from "../api/pets";

// Raw fetch of pets once
export const fetchedPetsAtom = atom(async ()=> {
    try{
        return await getAllPets()
    }catch(err){
        return [{
            id:"1",
            name:"Chloe",
            breed:"Cat",
            sold:false,
            imgurl:"https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg"
        }]
    }
});

// Hold global state of pets array
export const petsAtom = atom<PetDto[]>([]);

// Get the fetched pets and set to the global state 
export const initPetsAtom = atom(null, async (get,set)=>{
    const pets = await get(fetchedPetsAtom);
    if(pets.length === 0){
        console.log("no pets fetched")
    }
    set(petsAtom, pets);
});


// Hook that calls the api that adds new pet and then updates the state
export const addNewPetAtom = atom(
    null,
    async (get,set, newPet: CreatePetDto) =>{
        try{
            const createdPet = await createPet(newPet);

            set(petsAtom, [...get(petsAtom), createdPet]);
        }catch(err){
            console.error("Error occured: ", err)
            throw err
        }
    }
)

export const removePetBtIDAtom = atom(
    null,
    async(get, set, petID: string)=>{
        try{
            const removedPet = await deletePetByID(petID);
            
            const currentPets = get(petsAtom);
            
            const updatedPets = currentPets.filter(pet=>{
                return pet.id !== removedPet.id
            })

            set(petsAtom, updatedPets)
        }catch(err){
            console.error("Error while removing pet: ", err);
            throw err;
        }
    }
)