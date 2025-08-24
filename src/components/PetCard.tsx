import { useEffect } from "react";
import type { PetDto } from "../api/pets";

export function PetCard({id, name, breed, sold, imgurl}: Partial<PetDto>){
    let isAvaliableStatus;

    if(sold){
        isAvaliableStatus = <span>Sold</span>
    }else{
        isAvaliableStatus = <span>Avaliable</span>
    }

    return (
        <div id="pet-card">
            <div className="pet-card-info">
                <span>{breed}</span>
                <span>{name}</span>
                {isAvaliableStatus}
                {/* <button>Delete</button> */}
            </div>
            <img src={imgurl} alt="pet image" srcSet={imgurl} />
        </div>
    )
}