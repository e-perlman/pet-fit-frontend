import { useState,useEffect } from "react"
import OwnerFilter from "../components/OwnerFilter"

const OwnerProfile = () => {
    const [owners,setOwners]=useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("http://127.0.0.1:9393/owners")
        .then((r) => r.json())
        .then((owners) => setOwners(owners));
        setLoading(false)
    }, [])
    if (loading) return <h1>Loading...</h1>
  return (
    <>
        <div>OwnerProfile</div>
        <OwnerFilter owners={owners}></OwnerFilter>
    </>
  )
}

export default OwnerProfile