import { useState,useEffect } from "react"
import { useHistory } from "react-router-dom"
import { Button,TextField} from '@mui/material'
import { Checkbox, FormControlLabel, FormLabel, Typography } from "@material-ui/core"

const textStyle={ width: "400px", margin: "5px" }

const PetForm = () => {
  const [owners,setOwners]=useState([])
  const [ownerIds, setOwnerIds] = useState([]);
  const [pet,setPet]=useState({
    name:'',
    species:'',
    age:'',
    sex:'',
    breed:'',
    color:'',
    weight:''
  })

  useEffect(() => {
    fetch("http://127.0.0.1:9393/owners")
    .then((r) => r.json())
    .then((owners) => {
      setOwners(owners)
      setOwnerIds(owners.map(owner=>{
        return {
          id:owner.id,
          checked:false
        }
      }))
      });
  }, [])

  const history=useHistory()

  const handleChange = (e) => { 
    setPet({
      ...pet,
      [e.target.name]: e.target.value
    })
  }
  const handleOwnerChange = (position) => {
    setOwnerIds(
      ownerIds.map((ownerBox, index) => {
        return position === index
          ? { ...ownerBox, checked: !ownerBox.checked }
          : ownerBox;
      })
    );
  };

  const handleSubmit= e => {
    e.preventDefault()
    if ([pet.name,pet.species,pet.age,pet.sex,pet.breed,pet.color,pet.weight].some(val=>val.trim()==='')){
      alert('You must fill in all inputs before submitting.')
    }
    // format keys with snake case for backend
    const newPet={ 
      name:pet.name,
      species:pet.species,
      age:pet.age,
      sex:pet.sex,
      breed:pet.breed,
      color:pet.color,
      weight:pet.weight,
      owner_ids: ownerIds.filter((owner) => owner.checked).map((ownerBox) => `${ownerBox.id}`)
    }
    fetch('http://127.0.0.1:9393/pets',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newPet)
    })
    .then(()=>history.push('/pets'))
  }
  
  return (
    <div style={{justifyContent:'center',margin:'auto', width:'50%'}}>
      <Typography gutterBottom variant="h5" component="div"> Add a New Pet!</Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField onChange={handleChange} style={textStyle} type='text' label='Pet Name' placeholder="Your Pet's Name" focused name='name' value={pet.name} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='text' label='Species' placeholder='Ex. Dog, Cat' focused name='species' value={pet.species} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='number' label='Age' placeholder="Your Pet's Age" focused name='age' value={pet.age} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='text' label='Sex' placeholder='Male or Female' focused name='sex' value={pet.sex} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='text' label='Breed' placeholder='Ex. Labrador Retriever' focused name='breed' value={pet.breed} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='text' label='Color' placeholder='Ex. Brown' focused name='color' value={pet.color} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='number' label='Weight (lbs)' placeholder='Ex. 70' focused name='weight' value={pet.weight} required></TextField><br/>
        <div style={{width:'400px',flexWrap:'wrap',margin:'auto'}}>
          <FormLabel component='legend'>Pet's Owners</FormLabel>
          {owners.map((owner, index) => (
            <FormControlLabel key={owner.id} control={
                <Checkbox
                  id="checkbox-"
                  type="checkbox"
                  color='primary'
                  checked={ownerIds[index]?.checked}
                  value={ownerIds[index]?.id || false}
                  onChange={() => handleOwnerChange(index)}
                />
            }  
            label={`${owner.first_name} ${owner.last_name}`}
            />
          ))}
        </div>
        <Button type='submit' value='Add Owner' variant="contained" color="primary">Add Pet</Button>
      </form>
            {/* <div key={owner.id}>
                      <label htmlFor={owner.id}>{`${owner.first_name} ${owner.last_name}`}</label>
                      <input
                        id="checkbox-"
                        type="checkbox"
                        checked={ownerIds[index]?.checked}
                        value={ownerIds[index]?.id || false}
                        onChange={() => handleOwnerChange(index)}
                      />
            </div> */}
    </div>
  )
}

export default PetForm