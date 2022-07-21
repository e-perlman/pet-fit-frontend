import { useState , useEffect } from "react"
import { Link,useParams } from "react-router-dom"
import StatusCard from "./StatusCard"
import StatusForm from "./StatusForm"


const PetCard = ({pet}) => {
  
  return (
    <div>
      <h2><Link to={`/pets/${pet.id}`}>{pet.name}</Link></h2>  
      <StatusCard petStatus={pet.pet_statuses}/>
      <StatusForm pet={pet}/>
    </div>
  )
}

export default PetCard