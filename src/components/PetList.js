
import PetCard from "./PetCard"

const PetList = ({pets,interactive,onDeletePet}) => {

  const renderPets=pets.map(pet=><PetCard key={pet.id} pet={pet} interactive={interactive} onDeletePet={onDeletePet}/>)
  return (
    <div>
     {renderPets}
    </div>
    
  )
}

export default PetList