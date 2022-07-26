import { Button,Typography  } from "@material-ui/core"
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

    const handleUpdateOwner = (updatedOwner) => {
      const updatedOwners = owners.map((owner) => {
        if (owner.id === updatedOwner.id) {
          return updatedOwner;
        } else {
          return owner;
        }
      });
      setOwners(updatedOwners)
      setShowForm(!showForm)
    }

    const handleSelectOwner = (e) => { setSelectedOwnerId(e.target.value)}
 
    let selectedOwner
    if(selectedOwnerId){
        selectedOwner=owners.find(owner=>owner.id===parseInt(selectedOwnerId))
    }else selectedOwner=null

    const showEditForm = () => { setShowForm(!showForm)}

  return (
    <div style={{width:'600px',margin:'auto',justifyContent:'center'}}>
        <OwnerFilter owners={owners} onOwnerChange={handleSelectOwner}/>
        {selectedOwner? <OwnerCard owner={selectedOwner} onDeleteProfile={removeOwner}/>:<h1>Please Select an Owner!</h1>}
        {selectedOwner && !showForm ? <Button style={{marginTop:'30px'}} size='large' variant="contained" color='primary' onClick={showEditForm}>Edit {`${selectedOwner.first_name}'s Profile`}</Button> :null}
        {showForm? <Button style={{marginTop:'30px'}} size='large' variant="contained" color='primary' onClick={showEditForm}> Cancel Edit Profile</Button>:null}
        {showForm? <EditOwner selectedOwner={selectedOwner} onUpdateOwner={handleUpdateOwner}/>:null}
        {selectedOwner ? <Typography style={{marginTop:'50px'}} variant="h4" component="div">{selectedOwner.first_name}'s Pets:</Typography > : null}
        {selectedOwner ? <PetList pets={selectedOwner?.pets} interactive={false}/> : null}
    
    

    </div>
  )
}

export default OwnerProfile