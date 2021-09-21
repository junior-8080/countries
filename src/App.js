import React,{useEffect} from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Countries from './pages/Countries';
import Country from './pages/Country';
import Map from './components/Map'


function App() {

    useEffect(() => {
      localStorage.setItem('darkMode',false)
    }, []);
    return (
        <Switch className="App">
           <Route  path="/" exact component = {Countries} />
           <Route path="/countries/:property/:countryName"component={Country} />
           <Route path="/location/:lat/:long" component={Map}  />
        </Switch>
    );
}

export default App;
