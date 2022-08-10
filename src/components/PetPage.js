import { Typography } from "@material-ui/core"
import { useState , useEffect } from "react"
import {useParams } from "react-router-dom"
import StatusForm from "./StatusForm"
import StatusList from "./StatusList"

const PetPage = () => {
    const {petId}= useParams()
    const [petObj, setPetObj] = useState(null)
    const [petStatuses,setPetStatuses]=useState(null)

    useEffect(() => {
        fetch(`http://127.0.0.1:9393/pets/${petId}`)
        .then(resp=>resp.json())
        .then(pet=>{
            setPetObj(pet)
            setPetStatuses(pet.pet_statuses)
        })
    }, [petId])
    
    if(!petObj) return <h1>Loading...</h1>

    const handleAddStatus = (newStatus) => {
        setPetStatuses([...petStatuses,newStatus])
    }

    return (
        <div>
            <Typography variant='h2' component='div' >{petObj.name}</Typography>
            <StatusForm pet={petObj} onAddStatus={handleAddStatus}/>
            <StatusList petStatuses={petStatuses}/>
        </div>
    )
}

export default PetPage