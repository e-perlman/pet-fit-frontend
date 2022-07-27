import React from 'react'
import { useState,useEffect } from "react"
const EditOwner = ({selectedOwner,onUpdateOwner}) => {
    const [pets,setPets]=useState([])
    const [petIds, setPetIds] = useState([]);

    const [owner,setOwner]=useState({
        firstName:selectedOwner.first_name,
        lastName:selectedOwner.last_name,
        age:selectedOwner.age,
        email:selectedOwner.email,
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
        // if ([owner.firstName,owner.lastName,owner.age,owner.email].some(val=>val.trim()==='')){
        //     alert('You must fill in all inputs before submitting.')
        // }
        // format keys with snake case for backend
        const updatedOwner={ 
        first_name:owner.firstName,
        last_name:owner.lastName,
        age:owner.age,
        email:owner.email,
        breed:owner.breed,
        pet_ids: petIds.filter((pet) => pet.checked).map((petBox) => `${petBox.id}`)
        }
        fetch(`http://127.0.0.1:9393/owners/${selectedOwner.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(updatedOwner)
        })
        .then((r) => r.json())
        .then((changedOwner) => onUpdateOwner(changedOwner))
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
        <label htmlFor="selected-pets">Choose My Pets:</label>
        {pets.map((pet, index) => (
          <div key={pet.id}>
            <label htmlFor={pet.id}>{pet.name}</label>
            <input
              id="checkbox-"
              type="checkbox"
              checked={petIds[index]?.checked}
              value={petIds[index]?.id || false}
              onChange={() => handleOwnerChange(index)}
            />
          </div>
        ))}

        <input type='submit' value='Update Owner'></input>

      </form>
    </>
  )
}

export default EditOwner