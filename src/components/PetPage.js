import { useState , useEffect } from "react"
import {useParams } from "react-router-dom"
import StatusForm from "./StatusForm"
import StatusList from "./StatusList"

const PetPage = () => {
    const {petId}= useParams()
    const [petObj, setPetObj] = useState(null)

    useEffect(() => {
        fetch(`http://127.0.0.1:9393/pets/${petId}`)
        .then(resp=>resp.json())
        .then(pet=>setPetObj(pet))
    }, [petId])
    
    if(!petObj) return <h1>Loading...</h1>

    return (
        <div>Pet page
            <h1>{petObj.name}</h1>
            <StatusForm/>
            <StatusList pet={petObj}/>
        </div>
    )
}

export default PetPage