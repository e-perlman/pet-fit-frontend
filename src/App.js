
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './components/Home'
import Header from './components/Header'
import Navbar from './components/Navbar'
import PetCard from './components/PetCard'
import PetForm from './components/PetForm'
import PetsContainer from './containers/PetsContainer'
import OwnerProfile from './containers/OwnerProfile';
import OwnerForm from './components/OwnerForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Header title='Pet Fit'/>
        <Switch>
          <Route  path='/pets/new'>
            <PetForm/>
          </Route>
          <Route path='/pets/:id'>
            <PetCard/>
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
