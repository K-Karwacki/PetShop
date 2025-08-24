import { useAtom } from "jotai";
import { addNewPetAtom, petsAtom, removePetBtIDAtom } from "../atoms/pets";
import { PetCard } from "./PetCard";
import { useState } from "react";

export function PetSlider(){
    const [pets] = useAtom(petsAtom);
    const [,addPet] = useAtom(addNewPetAtom);
    const [,removePetByID] = useAtom(removePetBtIDAtom);

    const [currentIndex, setCurrentIndex] = useState(0);

    if (pets.length === 0) {
        return <p>Loading pets</p>;
    }

    const prevIndex = (currentIndex - 1 + pets.length) % pets.length;
    const nextIndex = (currentIndex + 1) % pets.length;


    const handleAdd = async () => {
        try{
            await addPet({name:"test", breed:"test", imgUrl:"test"});
        }catch(err){
            console.error("Error: ", err);
            throw err;
        }
    }

    const handleRemove = async () => {
        try{
            await removePetByID("04d63b70-6a3e-42f5-a015-a46d8902ffa1")
        }catch(err){
            throw err
        }
    }

    return <>
        <div className="pet-slider">
            <div className="pet-slide prev">
                {/* <PetCard imgurl={pets[prevIndex].imgurl}/> */}
                 <img src={pets[prevIndex].imgurl} alt="Previous Pet" />
             </div>
            <div className="pet-slide active">
                <PetCard imgurl={pets[currentIndex].imgurl} breed={pets[currentIndex].breed} name={pets[currentIndex].name}/>
                {/* <img src={pets[currentIndex].imgurl} alt="Current Pet" /> */}
            </div>
            <div className="pet-slide next">
                {/* <PetCard imgurl={pets[nextIndex].imgurl}/> */}
                <img src={pets[nextIndex].imgurl} alt="Next Pet" />
            </div>
        </div>
    </>
}