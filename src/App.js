import React from 'react';
import './App.css';
import Footer from './myComponent/Footer';
import Navigation from './myComponent/Navigation';
import Allfavrt from './myComponent/Allfavrt';
import { Route,Switch,BrowserRouter as Router } from '../node_modules/react-router-dom';
import People from './myComponent/People';
import Ownfavrt from './myComponent/Ownfavrt';



function App() {
  return (
    <Router>
  <div className="App">
      <Navigation/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/people" component={People}/>
      <Route path="/allfavrt" component={Allfavrt}/>
      <Route path="/Ownfavrt" component={Ownfavrt}/>
      </Switch>
  </div>
  <Footer/>
  </Router>
  
  );
}
const Home = () =>(
  <div>
  <h1>StarWars</h1>
  </div>
);

export default App;
