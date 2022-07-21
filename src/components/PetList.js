
import PetCard from "./PetCard"


const PetList = ({pets}) => {
console.log('pets in petList', pets)
  // const renderPets=pets.map(pet=><PetCard key={pet.id} pet={pet}/>)
  return (
    <div>
     {pets.map(pet => {return (
       <PetCard key={pet.id} 
       pet={pet}/>)
     })}
    </div>
    
  )
}

export default PetList