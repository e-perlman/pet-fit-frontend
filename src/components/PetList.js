import PetCard from "./PetCard"

const PetList = ({pets}) => {
  const renderPets=pets.map(pet=><PetCard keyt={pet.id} pet={pet}/>)
  return (
    <div>{renderPets}</div>
  )
}

export default PetList