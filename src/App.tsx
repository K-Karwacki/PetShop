import { useEffect, useState } from 'react'
import { createPet, deletePetByID, getAllPets, getPetByID } from './api/pets'
import { PetCardComponent } from './components/PetCardComponent'
import { useAtom } from 'jotai'
import { allPetsAtom } from './atoms/pets'

function App() {
  const [pets] = useAtom(allPetsAtom)

  useEffect(()=>{
    
    pets.map(pet=>{
      console.log(pet)
    })
    // getAllPets().then(res=>{console.log(res)})


    createPet({name:"pet3", breed:"breed", imgUrl:"https://images.dog.ceo/breeds/sharpei/noel.jpg"}).then(res=>{
      console.log(res)
    })

    // getPetByID("3").then(petRes=>{
    //   console.log(petRes)
    // })
  })

  return (
    <>
    {
      pets.map(pet=>{
      return <PetCardComponent key={pet.id} name={pet.name} breed={pet.breed}/>
    })
    }
    </>
    
  )
}

export default App
