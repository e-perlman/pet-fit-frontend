import { useState,useEffect } from "react"
import { Button,TextField} from '@mui/material'
import { Typography } from "@material-ui/core"

const textStyle={ width: "400px", margin: "5px" }


const StatusForm = ({pet,onAddStatus}) => {
  const [petStatus,setPetStatus]=useState({
    foodType:'',
    cupsOfFoodDaily:'',
    dailyExerciseMinutes:'',
    hoursOfSleep:'',
    mostRecentVetVisit:'',
    petId:'',
    createdAt:''
  })
  // const history=useHistory()

  const handleChange = (e) => { 
    setPetStatus({
      ...petStatus,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit= e => {
    e.preventDefault()
    if ([petStatus.foodType,petStatus.cupsOfFoodDaily,petStatus.dailyExerciseMinutes,petStatus.hoursOfSleep,petStatus.mostRecentVetVisit].some(val=>val.trim()==='')){
      alert('You must fill in all inputs before submitting.')
    }
    // format keys with snake case for backend
    const newPetStatus={ 
      food_type:petStatus.foodType,
      cups_of_food_daily:petStatus.cupsOfFoodDaily,
      daily_exercise_minutes:petStatus.dailyExerciseMinutes,
      hours_of_sleep:petStatus.hoursOfSleep,
      most_recent_vet_visit:petStatus.mostRecentVetVisit,
      pet_id:pet.id,
      created_at:Date.now()
    }
    
    fetch('http://127.0.0.1:9393/pet_statuses',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(newPetStatus)
    })
    .then((r) => r.json())
    .then((newStatus) => onAddStatus(newStatus));
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography style={{marginBottom:"20px"}}variant="h5" component='div'>Add A New Status!</Typography>

        <TextField onChange={handleChange}  style={textStyle} type='text' label='Food Type' placeholder="Your Pet's Food " focused name='foodType' value={petStatus.foodType} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='text' label='Cups of Food Eaten' placeholder='Number of Cups Eaten Today' focused name='cupsOfFoodDaily' value={petStatus.cupsOfFoodDaily} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='number' label='Minutes of Exercise' placeholder='Minutes of Exercise Today' focused name='dailyExerciseMinutes' value={petStatus.dailyExerciseMinutes} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='text' label='Hours of Sleep' placeholder='Amount of Sleep Today' focused name='hoursOfSleep' value={petStatus.hoursOfSleep} required></TextField><br/>

        <TextField onChange={handleChange} style={textStyle} type='date' label='Most Recent Vet Visit' placeholder='Date of Last Vet Visit' focused name='mostRecentVetVisit' value={petStatus.mostRecentVetVisit} required></TextField><br/>

        <Button type='submit' value='Add Pet Status' variant="contained" color="primary">Add Status</Button>
      </form>
    </>
  )
}

export default StatusForm