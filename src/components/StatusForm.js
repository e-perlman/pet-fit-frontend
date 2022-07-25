import { useState,useEffect } from "react"


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
      <h3>Add a new status</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="foodType">Food Type:</label>
        <input onChange={handleChange} type='text' name='foodType' value={petStatus.foodType} required></input><br/>

        <label htmlFor="cupsOfFoodDaily">Cups of Food: </label>
        <input onChange={handleChange} type='text' name='cupsOfFoodDaily' value={petStatus.cupsOfFoodDaily} required></input><br/>

        <label htmlFor="dailyExerciseMinutes">Exercise (min):</label>
        <input onChange={handleChange} type='number' name='dailyExerciseMinutes' value={petStatus.dailyExerciseMinutes} required></input><br/>

        <label htmlFor="hoursOfSleep">Hours of Sleep:</label>
        <input onChange={handleChange} type='text' name='hoursOfSleep' value={petStatus.hoursOfSleep} required></input><br/>

        <label htmlFor="mostRecentVetVisit">Most Recent Vet Visit:</label>
        <input onChange={handleChange} type='date' name='mostRecentVetVisit' value={petStatus.mostRecentVetVisit} required></input><br/>

        <input type='submit' value='Add Pet Status'></input>

      </form>
    </>
  )
}

export default StatusForm