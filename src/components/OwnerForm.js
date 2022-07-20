import { useState,useEffect } from "react"
import { useHistory } from "react-router-dom"

const OwnerForm = () => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div>OwnerForm</div>
  )
}

export default OwnerForm