import React from 'react'
import { BrowserRouter as Router,Routes, Route, NavLink , Link } from 'react-router-dom'
import AddCountry from './AddCountry';
import CountryList from './CountryList';
import EditCountry from './EditCountry';
import { useState } from 'react';

const Home = (props) => {
//   const [contryData,setCountryData] =useState([]);

    const country = (data)=>{
        // console.log(data);
        // setCountryData(contryData => [...contryData,data])
        // console.log(contryData)
        props.country(data)
    }
    // var countriesData = props.countries(contryData)
    var countriesData = props.countries

  return (
    <>
    <AddCountry countryData={country}/>
    <CountryList countriesData={countriesData}/>
    </>
  )
}

export default Home