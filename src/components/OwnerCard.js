import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    justifyContent:'center',
    margin: "1em auto",
  },
  button:{
    justifyContent:'center',
    margin:'0 auto',
    float:'none'
  }
});

const OwnerCard = ({owner,onDeleteProfile}) => {
  const classes = useStyles();
  const handleClick = () => {onDeleteProfile(owner.id) }
  return (
    <>
      {/* <h1>{`${owner.first_name} ${owner.last_name}`}</h1>
      <h3>{`Age: ${owner.age}`}</h3>
      <h3>{`Email: ${owner.email}`}</h3>
      <button onClick={handleClick}>Remove Profile</button> */}
      <Card style={{width:600, margin:'auto',justifyContent:'center'}}>
        <CardContent style={{justifyContent:'center'}}>
        <Typography gutterBottom variant="h3" component="div">{`${owner.first_name} ${owner.last_name}`}</Typography>
          <Typography gutterBottom variant="h4" component="div"> Age: {owner.age}</Typography>
          <Typography gutterBottom variant="h4" component="div"> Email: {owner.email}</Typography>
        </CardContent>
        <CardActions className={classes.button}>
          <Button onClick={handleClick} size="small" color="primary"> Remove Profile</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default OwnerCard