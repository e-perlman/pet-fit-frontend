import { useState,useEffect } from "react"
import { useHistory } from "react-router-dom"

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
  
  console.log('owner id',ownerIds)

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
    <>
      <h3>Add a new pet</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} type='text' name='name' value={pet.name} required></input><br/>

        <label htmlFor="species">Species</label>
        <input onChange={handleChange} type='text' name='species' value={pet.species} required></input><br/>

        <label htmlFor="age">Age</label>
        <input onChange={handleChange} type='number' name='age' value={pet.age} required></input><br/>

        <label htmlFor="sex">Sex</label>
        <input onChange={handleChange} type='text' name='sex' value={pet.sex} required></input><br/>

        <label htmlFor="breed">Breed</label>
        <input onChange={handleChange} type='text' name='breed' value={pet.breed} required></input><br/>

        <label htmlFor="color">Color</label>
        <input onChange={handleChange} type='text' name='color' value={pet.color} required></input><br/>

        <label htmlFor="weight">Weight</label>
        <input onChange={handleChange} type='number' name='weight' value={pet.weight} required></input><br/>
        {owners.map((owner, index) => (
          <div key={owner.id}>
            <label htmlFor={owner.id}>{`${owner.first_name} ${owner.last_name}`}</label>
            <input
              id="checkbox-"
              type="checkbox"
              checked={ownerIds[index]?.checked}
              value={ownerIds[index]?.id}
              onChange={() => handleOwnerChange(index)}
            />
          </div>
        ))}

        <input type='submit' value='Add Pet'></input>

      </form>
    </>
  )
}

export default PetForm