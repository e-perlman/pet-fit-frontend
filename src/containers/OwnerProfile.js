import { useState,useEffect } from "react"
import OwnerCard from "../components/OwnerCard"
import OwnerFilter from "../components/OwnerFilter"
import PetList from "../components/PetList"

const OwnerProfile = () => {
    const [owners,setOwners]=useState([])
    const [loading, setLoading] = useState(true)
    const [selectedOwnerId, setSelectedOwnerId]=useState(null)
    useEffect(() => {
        fetch("http://127.0.0.1:9393/owners")
        .then((r) => r.json())
        .then((owners) => setOwners(owners));
        setLoading(false)
    }, [])
    if (loading) return <h1>Loading...</h1>

    const handleSelectOwner = (e) => { setSelectedOwnerId(e.target.value)}
 
    let selectedOwner
    if(selectedOwnerId){
        selectedOwner=owners.find(owner=>owner.id===parseInt(selectedOwnerId))
    }else selectedOwner=null
   
  return (
    <>
        <div>OwnerProfile</div>
        <OwnerFilter owners={owners} onOwnerChange={handleSelectOwner}/>
        <OwnerCard owner={selectedOwner}/>
        <PetList/>
    </>
  )
}

export default OwnerProfile