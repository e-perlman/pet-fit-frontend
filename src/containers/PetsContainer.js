import { useState,useEffect } from "react"
import PetList from '../components/PetList'
const PetsContainer = () => {
  const [pets,setPets]=useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://127.0.0.1:9393/pets")
      .then((r) => r.json())
      .then((pets) => setPets(pets));
      setLoading(false)
  }, [])

  if (loading) return <h1>Loading...</h1>

  const removePet = (removedPetId) => {
    const updatedPets=pets.filter(petId=>petId.id!==removedPetId)
    setPets(updatedPets)
    fetch(`http://127.0.0.1:9393/pets/${removedPetId}`, {
    method: "DELETE",
    })
    .then((r) => r.json())
   }

  return (
    <div>
      <div> Pets </div>
      <PetList pets={pets} interactive={true} onDeletePet={removePet}/>
    </div>
  )
}

export default PetsContainer