import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core"

const StatusCard = ({petStatus}) => {
  
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }
  const timestamp=formatDate(petStatus.created_at)
  const vetVisit=formatDate(petStatus.most_recent_vet_visit)


  
  return (
    <Card style={{width:500, margin:'auto',justifyContent:'center'}}>
      <CardContent style={{justifyContent:'center'}}>
        <Typography gutterBottom variant='h4' component='div'> Status on {timestamp}</Typography>
        <Typography gutterBottom variant='h5' component='div'> Cups of food per day: {petStatus.cups_of_food_daily}</Typography> 
        <Typography gutterBottom variant='h5' component='div'> Exercise: {petStatus.cups_of_food_daily} min</Typography> 
        <Typography gutterBottom variant='h5' component='div'> Food Type:{petStatus.food_type}</Typography> 
        <Typography gutterBottom variant='h5' component='div'> Sleep: {petStatus.hours_of_sleep} hours</Typography> 
        <Typography gutterBottom variant='h5' component='div'> Last Vet Visit: {vetVisit} </Typography> 
    </CardContent>
    </Card>
  )
}

export default StatusCard