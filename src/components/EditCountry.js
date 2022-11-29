import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { Button,Card, b, CardBody,CardTitle,CardSubtitle,CardText , Modal, ModalHeader, ModalBody, ModalFooter , Input , Table , Col,FormGroup , Row } from 'reactstrap'
import { BrowserRouter as Router,Routes, Route, NavLink , Link } from 'react-router-dom'


const EditCountry = (props, args) => {
  const {id}= useParams();
  const country = props.country[id]
  const currencies = Object.values(country[0].currencies)
  const languages = Object.entries(country[0].languages)
  const [addLang, setLang]= useState('');

// console.log( props.country[id][0].languages)

const [modal, setModal] = useState(false);

  const toggle = () => {
    if(addLang !== ''){
      // languages[addLang]=addLang;
      Object.assign(props.country[id][0].languages, {[addLang]: addLang});
      // console.log(addLang)
      console.log(props.country[id][0].languages)
      setLang('')
    }
    setModal(!modal)
  };
const [editlang, setEditLang] = useState('');
const [editname, setName] = useState('');

const handleChange = (e) => {
  // setData({ ...data, [e.target.name]: e.target.value });
  setEditLang(e.target.value)
  setName(e.target.name)
  // console.log(e.target.name);
};
const updateLang = (e) => {
  if(editlang != ''){
    Object.assign(props.country[id][0].languages, {[editname]: editlang});
    setModal(!modal)
  }
};
    

  return (
    <>

    <div className='my-4 d-flex justify-content-center'>
        <Card style={{
            width: '38rem'
          }} >
          <div className='my-3 d-flex justify-content-center'>

          <img alt="Sample" style={{
            width: '18rem'
          }} src={country[0].flags.png} />
          </div>
          <CardBody>
            <CardTitle tag="h4" className='my-1 d-flex justify-content-center'>
              {country[0].name.common}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted d-flex justify-content-center"
              tag="h5"
            >
              {country[0].name.official}
            </CardSubtitle>
            <CardText>
            
              <b>Currencies : </b>{currencies[0].name} <b>({currencies[0].symbol})</b><br/>
              <b>Region : </b>{country[0].region}<br/>
              <b>Subregion : </b>{country[0].subregion}<br/>
              <b>Map : <a href={country[0].maps.googleMaps}>Map<i className="fas fa-map-marked-alt"></i></a></b><br/>
              <b>Languages : </b>{Object.values(country[0].languages).toString(", ")}<br/>
            </CardText>
            <div className='mx-5 d-flex justify-content-end'>
            <Button onClick={toggle} color="success" >
              Edit Langiages
            </Button>
            </div>
            
          </CardBody>
        </Card>
    </div>
    <div className='mx-5 d-flex justify-content-end'>
    <Link to={`/`} ><Button color="primary" >Back</Button></Link>
    </div>
    <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Edit languages</ModalHeader>
        <ModalBody>{
          languages.map(function(item,i){
              return <ul className='d-flex '><Input key={i} name={item[0]} onChange={handleChange} style={{width:'250px'}} type='text' defaultValue={item[1] || ''} /><Button onClick={updateLang} className='mx-2' color="primary">Update</Button></ul>
              })
        }
        
        </ModalBody>
        <ModalFooter>
        <Input  style={{width:'250px'}} onChange={e => setLang(e.target.value)} type='text'  />
          <Button className='mx-2' color="primary"  onClick={toggle}>
            Add
          </Button>{' '}
          <Button className='mx-2' color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>

  )
}

export default EditCountry