import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';
function MemeCard(props) {
    const navigate=useNavigate()
  return (
    <>
    <Card style={{ width: '18rem' }} className='m-3'>
      <Card.Img variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary" onClick={()=>navigate(`/editmeme?url=${props.url}`)}>Edit</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default MemeCard