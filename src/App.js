import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom'

import { useState } from 'react';
import Home from './components/Home';
import EditCountry from './components/EditCountry';

function App() {
  const [countriesData,setCountriesData] =useState([]);

    const countries = (data)=>{
        // console.log(data);
        setCountriesData(countriesData => [...countriesData,data])
        // console.log(countriesData)
    
      }

  return (
          
    <>
          
    <Router>
      <Routes>
        <Route index  element={<Home country={countries} countries={countriesData}/>} />
        <Route exact path='/country-details/:id'  element={<EditCountry updateCountries country={countriesData} />} />
      </Routes>
      
    </Router>
    </>
    
  );
}

export default App;
