
import './App.css';
import { useState,useEffect } from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import Navbar from './components/Navbar'
import PetPage from './components/PetPage'
import PetCard from './components/PetCard'
import PetForm from './components/PetForm'
import PetsContainer from './containers/PetsContainer'
import OwnerProfile from './containers/OwnerProfile';
import OwnerForm from './components/OwnerForm';

function App() {
  const [pets,setPets]=useState([])
  const [owners,setOwners]=useState([])
 
  useEffect(() => {
    fetch("http://127.0.0.1:9393/pets")
      .then((r) => r.json())
      .then((pets) => setPets(pets));
  }, [])

    useEffect(() => {
        fetch("http://127.0.0.1:9393/owners")
        .then((r) => r.json())
        .then((owners) => setOwners(owners));
    }, [])

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Header title='Pet Fit'/>
        <Switch>
          <Route  path='/pets/new'>
            <PetForm/>
          </Route>
          <Route path='/pets/:petId'>
            <PetPage/>
          </Route>
          <Route  path='/pets'>
            <PetsContainer/>
          </Route>
          <Route path='/ownerprofile'>
            <OwnerProfile/>
          </Route>
          <Route path='/owners/new'>
            <OwnerForm/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
