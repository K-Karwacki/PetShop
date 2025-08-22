const API_PATH = 'https://api-divine-grass-2111.fly.dev'

export interface PetDto{
    id: string,
    name: string,
    breed: string,
    imgurl: string,
    sold: boolean
}

export interface CreatePetDto{
    name: string,
    breed: string,
    imgUrl: string
}


export async function getAllPets(): Promise<PetDto[]>{
    const response = await fetch(API_PATH + "/GetPets", {
        method: "GET",
        headers: {"Content-Type": "application/json"}
    });

    if(!response.ok){
        throw new Error(response.statusText)
    }

    return await response.json() as PetDto[]
}

export async function getPetByID(petID: string): Promise<PetDto> {
    const params = new URLSearchParams({
        id: petID
    }).toString()

    const response = await fetch(API_PATH + "/GetPetById?" + params)

    if(!response.ok){
        throw new Error(response.statusText)
    }

    return await response.json() as PetDto
}

export async function createPet(newPet: CreatePetDto): Promise<PetDto> {
    const response = await fetch(API_PATH + "/CreatePet", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(newPet)
    });

    if(!response.ok){
        throw new Error(response.statusText)
    }

    return await response.json() as PetDto;
}

export async function updatePet(updatedPet: Partial<PetDto>): Promise<PetDto> {
    const response = await fetch(API_PATH + "/UpdatePet", {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(updatedPet)
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json() as PetDto;
}

export async function deletePetByID(petID: string): Promise<PetDto>{
    const params = new URLSearchParams({
        id: petID
    }).toString();

    const response = await fetch(API_PATH + "/DeletePet?" + params, {
        method: "DELETE"
    });

    if(!response.ok) throw new Error(response.statusText);

    return await response.json() as PetDto;
}

