import { Link} from "react-router-dom"
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { Button,CardActions } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 400,
    justifyContent:'center'
  },
  media: {
    display: "block",
    marginLeft: "auto",
    marginRight:" auto",
    height: "150px",
    width: 'auto'
  },
  button:{
    justifyContent:'center',
    margin:'0 auto',
    float:'none'
  }
});


const PetCard = ({pet,interactive,onDeletePet}) => {
  const classes = useStyles();
  const handleClick = () => { onDeletePet(pet.id) }
  return (
    <Card className={classes.root}>
      <CardContent style={{justifyContent:'center'}}>
        <Typography gutterBottom variant="h3" component="div"> {pet.name}</Typography>
        <Typography gutterBottom variant="h5" component="div"> Species: {pet.species}</Typography>
        <Typography gutterBottom variant="h5" component="div"> Age: {`${pet.age} years`}</Typography>
        <Typography gutterBottom variant="h5" component="div"> Sex: {pet.sex}</Typography>
        <Typography gutterBottom variant="h5" component="div"> Breed: {pet.breed}</Typography>
        <Typography gutterBottom variant="h5" component="div"> Color: {pet.color}</Typography>
        <Typography gutterBottom variant="h5" component="div"> Weight: {`${pet.weight} lbs`}</Typography>
      </CardContent>
      <CardActions className={classes.button}>
       <Button component={Link} to={`/pets/${pet.id}`} size="small" color="primary">
         View {`${pet.name}`}'s Page
       </Button>
       {interactive? <Button onClick={handleClick}> Remove Pet</Button>:null}
    </CardActions>
    </Card>
    // <div>
    //   <h2>{pet.name}</h2>
    //   <h4>Species: {pet.species}</h4>
    //   <h4>Age: {`${pet.age} years`}</h4>
    //   <h4>Sex: {pet.sex}</h4>
    //   <h4>Breed: {pet.breed}</h4>
    //   <h4>Color: {pet.color}</h4>
    //   <h4>Weight: {`${pet.weight} lbs`}</h4>
    //   <button><Link to={`/pets/${pet.id}`}>View My Page!</Link></button> 
    //   {interactive?<button onClick={handleClick}>Remove Pet</button>:null} 
    // </div>
  )
}

export default PetCard