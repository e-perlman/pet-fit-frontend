
const StatusCard = ({petStatus}) => {
  
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  const timestamp=formatDate(petStatus.created_at)
  const vetVisit=formatDate(petStatus.most_recent_vet_visit)


  
  return (
    <div>
      <h3> Status for {timestamp}</h3>
      <h4>Cups of food per day: {petStatus.cups_of_food_daily}</h4>
      <h4>Exercise: {petStatus.cups_of_food_daily} min</h4>
      <h4>Food Type:{petStatus.food_type}</h4>
      <h4>Sleep: {petStatus.hours_of_sleep} hours</h4>
      <h4>Last Vet Visit: {vetVisit} </h4>
    </div>
  )
}

export default StatusCard