import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import notfound from '../../images/404.jpg'

const NotFound = () => {
    return (
    
         <Container>
          <Row>
            <Col xs={12} md={12}>
              <Image className="w-75 h-75" src={notfound} rounded />
            </Col>
          </Row>
        </Container>
    );
};

export default NotFound;