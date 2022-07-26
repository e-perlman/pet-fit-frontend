import { useState,useEffect } from "react"
import EditOwner from "../components/EditOwner"
import OwnerCard from "../components/OwnerCard"
import OwnerFilter from "../components/OwnerFilter"
import PetList from "../components/PetList"

const OwnerProfile = () => {
    const [owners,setOwners]=useState([])
    const [loading, setLoading] = useState(true)
    const [selectedOwnerId, setSelectedOwnerId]=useState(null)
    const [showForm,setShowForm]=useState(false)

    useEffect(() => {
        fetch("http://127.0.0.1:9393/owners")
        .then((r) => r.json())
        .then((owners) => setOwners(owners));
        setLoading(false)
    }, [])
    if (loading) return <h1>Loading...</h1>

    const removeOwner = (removedOwnerId) => {
      const updatedOwners=owners.filter(owner=>owner.id!==removedOwnerId)
      setOwners(updatedOwners)
      fetch(`http://127.0.0.1:9393/owners/${removedOwnerId}`, {
      method: "DELETE",
      })
    .then((r) => r.json())
    }

    const handleSelectOwner = (e) => { setSelectedOwnerId(e.target.value)}
 
    let selectedOwner
    if(selectedOwnerId){
        selectedOwner=owners.find(owner=>owner.id===parseInt(selectedOwnerId))
    }else selectedOwner=null

    const showEditForm = () => { setShowForm(!showForm)}

  return (
    <>
        <div>OwnerProfile</div>
        <OwnerFilter owners={owners} onOwnerChange={handleSelectOwner}/>
        {selectedOwner? <OwnerCard owner={selectedOwner} onDeleteProfile={removeOwner}/>:<h1>Please Select an Owner!</h1>}
        {selectedOwner && !showForm ? <button onClick={showEditForm}>Edit {`${selectedOwner.first_name}'s Profile`}</button> :null}
        {showForm? <button onClick={showEditForm}> Cancel Edit Profile</button>:null}
        {showForm? <EditOwner owner={selectedOwner}/>:null}
        {selectedOwner ? <PetList pets={selectedOwner?.pets} interactive={false}/> : null}

    </>
  )
}

export default OwnerProfile