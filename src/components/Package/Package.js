import React from 'react';
import { Button, Card, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = (props) => {
    const {_id,img,des,name,price}= props.package;
    return (
        <div>
            <Container className="pack-total">
        <Col>
      <Card className="bg-light card-title border border-light rounded shadow-sm p-3 mb-5 bg-body rounded">
        <Card.Img className="card-img" src={img}/>
        <Card.Body className="text-right">
          <Card.Title><h6>{name}</h6></Card.Title>
          <Card.Text>
            <h6>total cost <span>$</span>{price}</h6>
            {des.slice(0,30)}
          </Card.Text>
          <Link to={`/packagesdetails/${_id}`}><Button variant="outline-success " size="sm" className="rounded fw-bold btn text-center">Book Now</Button></Link>
        </Card.Body>
      </Card>
    </Col>
        </Container>
        </div>
    );
};

export default Package;