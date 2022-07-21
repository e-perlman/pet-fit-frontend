import { useState,useEffect } from "react"
import { Link,useParams } from "react-router-dom"


const PetCard = ({pet}) => {
  const {id}= useParams()
  const [petObj, setPetObj] = useState(null)

  useEffect(() => {
    if(!pet){
      fetch(`http://127.0.0.1:9393/pets/${id}`)
      .then(resp=>resp.json())
      .then(pet=>setPetObj(pet))
    }
  }, [pet,id])
  
  const finalPet=pet? pet:petObj
  if(!finalPet) return <h1>Loading...</h1>
  return (
    <div>
      <h2><Link to={`/pets/${finalPet.id}`}>{finalPet.name}</Link></h2>   
    </div>
  )
}

export default PetCard