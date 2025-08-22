import { useEffect } from "react";
import type { PetDto } from "../api/pets";

export function PetCardComponent({name, breed}: Partial<PetDto>){
    return (
        <div>
            <span>Pet Name: {name}</span>
            <span>Breed: {breed}</span>
        </div>
    )
}