import { useState,useEffect } from "react"
import { useHistory } from "react-router-dom"

const OwnerForm = () => {
  const [pets,setPets]=useState([])
  const [petIds, setPetIds] = useState([]);
  const [owner,setOwner]=useState({
    firstName:'',
    lastName:'',
    age:'',
    email:'',
  })

  useEffect(() => {
    fetch("http://127.0.0.1:9393/pets")
    .then((r) => r.json())
    .then((pets) => {
      setPets(pets)
      setPetIds(pets.map(pet=>{
        return {
          id:pet.id,
          checked:false
        }
      }))
      });
  }, [])

  const history=useHistory()

  const handleChange = (e) => { 
    setOwner({
      ...owner,
      [e.target.name]: e.target.value
    })
  }
  const handleOwnerChange = (position) => {
    setPetIds(
      petIds.map((petBox, index) => {
        return position === index
          ? { ...petBox, checked: !petBox.checked }
          : petBox;
      })
    );
  };

  const handleSubmit= e => {
    e.preventDefault()
    if ([owner.firstName,owner.lastName,owner.age,owner.email].some(val=>val.trim()==='')){
      alert('You must fill in all inputs before submitting.')
    }
    // format keys with snake case for backend
    const newOwner={ 
      first_name:owner.firstName,
      last_name:owner.lastName,
      age:owner.age,
      email:owner.email,
      breed:owner.breed,
      pet_ids: petIds.filter((pet) => pet.checked).map((petBox) => `${petBox.id}`)
    }
    fetch('http://127.0.0.1:9393/owners',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newOwner)
    })
    .then(()=>history.push('/ownerprofile'))
  }

  return (
    <>
      <h3>Add a new owner</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input onChange={handleChange} type='text' name='firstName' value={owner.firstName} required></input><br/>

        <label htmlFor="lastName">Last Name</label>
        <input onChange={handleChange} type='text' name='lastName' value={owner.lastName} required></input><br/>

        <label htmlFor="age">Age</label>
        <input onChange={handleChange} type='number' name='age' value={owner.age} required></input><br/>

        <label htmlFor="email">Email</label>
        <input onChange={handleChange} type='text' name='email' value={owner.email} required></input><br/>

        {pets.map((pet, index) => (
          <div key={pet.id}>
            <label htmlFor={pet.id}>{pet.name}</label>
            <input
              id="checkbox-"
              type="checkbox"
              checked={petIds[index]?.checked}
              value={petIds[index]?.id}
              onChange={() => handleOwnerChange(index)}
            />
          </div>
        ))}

        <input type='submit' value='Add Owner'></input>

      </form>
    </>
  )
}

export default OwnerForm