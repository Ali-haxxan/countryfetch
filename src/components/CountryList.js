import React from 'react'
import { Button, Input , Table , Col,FormGroup , Row } from 'reactstrap'
import { BrowserRouter as Router,Routes, Route, NavLink , Link } from 'react-router-dom'



const CountryList = (props) => {
  var j = 1
  var data = props.countriesData
  return (
    <>
      <div className='my-2 mx-4 col-12'>
          <h5 className="my-2 col-12 d-flex justify-content-center modal-title">Countries List</h5>
          <Table>
            <thead>
            <tr>
              <th>#</th>
              <th>Common Name</th>
              <th>Official Name</th>
              <th>Languages</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
              data.map(function(item,i){
                const lang = Object.values(item[0].languages); 
                {/* console.log(i) */}

                return <tr key={i}>
                  <td>{j++}</td>
                  <td>{item[0].name.common} </td>
                  <td>{item[0].name.official}</td>
                  <td>{lang.toString(", ")}</td>
                  <td> <Link to={`/country-details/${i}`} >View</Link></td>
                </tr>
              })
            }
            {/* <tr>
              <td>{i++}</td>
              <td>Pakistan</td>
              <td>Islamic republic of pakistan</td>
              <td>English,Urdu</td>
              <td> <a href='' >View</a></td>
            </tr> */}
            </tbody>
          </Table>
        </div>
    </>
  )
}

export default CountryList