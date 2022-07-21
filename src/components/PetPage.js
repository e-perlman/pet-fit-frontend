import { useState , useEffect } from "react"
import {useParams } from "react-router-dom"

const PetPage = () => {
    const {petId}= useParams()
    console.log(petId)
  const [petObj, setPetObj] = useState(null)
    console.log(petId)

  useEffect(() => {
      fetch(`http://127.0.0.1:9393/pets/${petId}`)
      .then(resp=>resp.json())
      .then(pet=>setPetObj(pet))
    }, [petId])
    console.log(petObj)
  if(!petObj) return <h1>Loading...</h1>
  return (
    <div>Pet page
        <h1>{petObj.name}</h1>
    </div>
  )
}

export default PetPage