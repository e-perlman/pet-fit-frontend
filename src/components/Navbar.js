import {NavLink} from 'react-router-dom';
import '../Navbar.css';
// import Box from '@mui/material/Box';
import {
    Box,
    AppBar,
    Toolbar,
    ButtonGroup,
    makeStyles,
    Button
  } from "@material-ui/core";
  
  const useStyles = makeStyles(() => ({
    title: {
      flexGrow: 1
    },
    appbar:{
      backgroundColor:'#1f3d7a'
    },
    navlink:{
      color:'white',
  
    },
    
  }));
  const active= {
    fontWeight:'bolder',
    textDecoration: 'underline',
    backgroundColor:'#aec2ea',
    color:'black'
  }

// const style = {
//   width: "60%",
//   margin: "5% 0 1%",
//   padding: "1em",
//   textDecoration: "none",
//   color: "black",
//   backgroundColor: "rgb(2555, 120, 44)",
//   fontWeight: "bold",
//   verticalAlign: "center"
// }

const Navbar = () => {
    const classes = useStyles();
  return (
        <AppBar position='static' className={classes.appbar}>
        <Toolbar>
        <Box sx={{flexGrow: 1,justifyContent:'center', display: { md: 'flex' }}}>
            <ButtonGroup variant="text" aria-label="text button group">
              <Button variant='text' component={NavLink} exact to="/" activeStyle={active} className={classes.navlink}>
                Home
              </Button>
              <Button component={NavLink} exact to="/pets" activeStyle={active} className={classes.navlink}>
                Pets
              </Button>
              <Button component={NavLink} exact to="/pets/new" activeStyle={active} className={classes.navlink}>
                New Pet
              </Button>
              <Button component={NavLink} exact to='/owners/new' activeStyle={active} className={classes.navlink}>
                New Owner
              </Button>
              <Button component={NavLink} exact to="/ownerprofile" activeStyle={active} className={classes.navlink}>
                Owner Profile
              </Button>
            </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>
    // <div>
    //   <NavLink
    //         activeStyle={{
    //             fontWeight: "bolder",
    //             color: "red"
    //         }}
    //             exact
    //             style={style}
    //             to="/"
    //         >Home</NavLink>
    //         <NavLink
    //         activeStyle={{
    //             fontWeight: "bolder",
    //             color: "red"
    //         }}
    //             exact
    //             style={style}
    //             to="/pets"
    //         >Pets</NavLink>
    //         <NavLink
    //         activeStyle={{
    //             fontWeight: "bolder",
    //             color: "red"
    //         }}
    //             exact
    //             style={style}
    //             to="/pets/new"
    //         >New Pet</NavLink>
    //         <NavLink
    //         activeStyle={{
    //             fontWeight: "bolder",
    //             color: "red"
    //         }}
    //             exact
    //             style={style}
    //             to='/owners/new'
    //         >New Owner</NavLink>
    //         <NavLink
    //         activeStyle={{
    //             fontWeight: "bolder",
    //             color: "red"
    //         }}
    //             exact
    //             style={style}
    //             to="/ownerprofile"
    //         >Owner Profile</NavLink>
    // </div>
  )
}

export default Navbar