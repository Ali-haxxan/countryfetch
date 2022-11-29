import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button, Input , Table , Col,FormGroup , Row } from 'reactstrap'

const AddCountry = (props) => {
  const [country, setCountry] = useState("");
  const [fetch, setFetch] = useState(false);

 function clicked(props){
  // alert(country)
  setFetch(!fetch)
 }
 useEffect(()=>{
if(country != ''){

  axios.get('https://restcountries.com/v3.1/name/'+country).then((response)=>{
    const data =response.data;
    // console.log(data)
    props.countryData(data)
    setCountry('')
  }).catch(function (error) {
    alert('Unable to get country due to Incorrect Name: '+country+' Please enter a valid country!');
  });
}
  // setFetch(false)
 },[fetch])
  return (
    <>
      <h5 className=" col-12 d-flex justify-content-center modal-title">Add Country</h5>
    <div className=' d-flex justify-content-center'>
      
          <Row>
          
            <Col md={8}>

            <Input className='my-3' value={country} onChange={e => setCountry(e.target.value)} placeholder="Country Name"></Input>
            </Col>
            <Col md={4}>
              <Button className='my-3'  color="primary" onClick={clicked} > Add Country</Button>

            </Col>

          </Row>
    </div>
    </>
  )
}

export default AddCountry