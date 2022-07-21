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
  return (
    <div>
      <div> Pets </div>
      <PetList pets={pets}/>
    </div>
  )
}

export default PetsContainer