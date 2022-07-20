import { useState,useEffect } from "react"
import { useHistory } from "react-router-dom"

const PetForm = () => {
  const [name, setName] = useState('')
  const [species, setSpecies] = useState('')
  const [age, setAge] = useState('')
  const [sex, setSex] = useState('')
  const [breed, setBreed] = useState('')
  const [color, setColor] = useState('')
  const [weight, setWeight] = useState('')


  return (
    <div>PetForm</div>
  )
}

export default PetForm