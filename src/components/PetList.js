import PetCard from "./PetCard"
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@mui/material"
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    },
    justifyContent:'center',
    display:'flex',
    flexWrap:'wrap'
  }
}));

const PetList = ({pets,interactive,onDeletePet}) => {
  const classes = useStyles();

  const renderPets=pets.map(pet=><PetCard key={pet.id} pet={pet} interactive={interactive} onDeletePet={onDeletePet}/>)
  return (
    <Grid className={classes.root}>
     {renderPets}
    </Grid>
    
  )
}

export default PetList