import { useEffect, useState } from 'react'
import { createPet, deletePetByID, getAllPets, getPetByID } from './api/pets'
import { useAtom } from 'jotai'
import { initPetsAtom } from './atoms/pets'
import { PetSlider } from './components/PetSlider'
import { Header } from './components/Header'
import "./style/css/Index.css";
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { AddPetForm, PetList } from './components/PetList'
import { About } from './components/About'

function App() {
  const [, initPets] = useAtom(initPetsAtom)

  useEffect(()=>{
    initPets()
  }, [initPets])

  return <>
    <Header/>
    <Routes>
      <Route path="/" element={<PetSlider />} />
      <Route path="/list" element={<PetList />} />
      <Route path='/list/add' element={<AddPetForm/>}/>
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer/>
  </>
}

export default App
