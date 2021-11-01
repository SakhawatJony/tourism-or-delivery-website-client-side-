import React from 'react';
import { Col, Container, Image, Ratio, Row } from 'react-bootstrap';
import aboutbg from "../../images/pic3.jpg";
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>   
           
           <Container>
               <h2 className="text-center">About Us</h2>
            <Row className="mt-5">
            <Col  xs={6} md={6}><Image src= {aboutbg} thumbnail />
            <div  className="mb-3 p-1">
  <Ratio aspectRatio="16x9">
  <iframe  height="315"type="image/svg+xml" src="https://www.youtube.com/embed/nkwLjnragtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </Ratio>
</div>
          </Col>


          <Col xs={6} md={6}>
              <h3> Our  Holidy Tours and Travles </h3>
           <p>Holidy Tours and Travles about your visa processing? Do you want your visa to get a higher chance of approval? Don’t take any chances. Consult now with the top-ranking visa consultant who has years of long experience and expertise to get your job done. Ensure the success of your visa application process. India is considered a large market for travel and tourism. Indian tourism has gradually increased during the period time and the country is now more hospitable to foreign tourists with its improved infrastructure and atmosphere. Some of the best travel agencies in India have contributed to the growth of Indian tourism at large and offer a diverse portfolio of premium tourism products to travelers. From adventure tourism to medical tourism, and from sports tourism to religious tourism, the best tour operator in India caters to everyone and everything. The fine ecosystem and perfect atmosphere created by the best travel agencies in India have positively impacted  Indian tourism and help it to flourish further.

In recent times, Indian tourism has transformed itself into the top destination for spiritual tourism for both domestic and international tourists. The growth and prosperity of Indian tourism have largely been credited to the efforts and initiatives showcased by some of the best travel agencies in India. In recent times, the government of India has taken major initiatives to boost Indian tourism by encouraging domestic travelers to visit 15 tourist destinations in the country by 2022. According to the world economic forum, Indian tourism ranked 34th in overall competitiveness among the world.</p>
            </Col>
            </Row>
           </Container>
          
        
</>
        
    );
};

export default AboutUs;