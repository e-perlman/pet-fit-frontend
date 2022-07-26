import { useState , useEffect } from "react"
import { Link} from "react-router-dom"


const PetCard = ({pet,interactive,onDeletePet}) => {
  const handleClick = () => { onDeletePet(pet.id) }
  return (
    <div>
      <h2>{pet.name}</h2>
      <h4>Species: {pet.species}</h4>
      <h4>Age: {`${pet.age} years`}</h4>
      <h4>Sex: {pet.sex}</h4>
      <h4>Breed: {pet.breed}</h4>
      <h4>Color: {pet.color}</h4>
      <h4>Weight: {`${pet.weight} lbs`}</h4>
      <button><Link to={`/pets/${pet.id}`}>View My Page!</Link></button> 
      {interactive?<button onClick={handleClick}>Remove Pet</button>:null} 
    </div>
  )
}

export default PetCard