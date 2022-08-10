import { useState,useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Button,TextField} from '@mui/material'
import { Checkbox, FormControlLabel, FormLabel, Typography } from "@material-ui/core"

const textStyle={ width: "400px", margin: "5px" }

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
    <div style={{justifyContent:'center',margin:'auto', width:'50%'}}>
      <Typography gutterBottom variant="h5" component="div"> Make a New Owner Profile!</Typography>

      <form onSubmit={handleSubmit}>
        <TextField onChange={handleChange}  style={textStyle} type='text' label='First Name' placeholder='Your First Name' focused name='firstName' value={owner.firstName} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='text' label='Last Name' placeholder='Your Last Name' focused name='lastName' value={owner.lastName} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='number' label='Age' placeholder='Your age' focused name='age' value={owner.age} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='text' label='Email' placeholder='Your email' focused name='email' value={owner.email} required></TextField><br/>

        <div style={{width:'400px',flexWrap:'wrap',margin:'auto'}}>
          <FormLabel component='legend'>Choose Your Pets</FormLabel>
          {pets.map((pet, index) => (
            <FormControlLabel key={pet.id} control={
              <Checkbox
                id="checkbox-"
                type="checkbox"
                color='primary'
                checked={petIds[index]?.checked || false}
                value={petIds[index]?.id || false}
                onChange={() => handleOwnerChange(index)}
              />
            } 
            label={pet.name} 
            />
          ))}
        {/* {pets.map((pet, index) => (
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
        ))} */}
        </div>
        <Button type='submit' value='Add Owner' variant="contained" color="primary">Add Profile</Button>

      </form>
    </div>
  )
}

export default OwnerForm
