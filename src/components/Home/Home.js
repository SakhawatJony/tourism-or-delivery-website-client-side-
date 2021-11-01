import React from 'react';
import { Container } from 'react-bootstrap';
import Bounce from "react-reveal/Bounce";
import { NavLink } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Package from '../Package/Package';
import Packages from '../Packages/Packages';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center header-container" >

            
          
        <Container>
          <div className="d-flex justify-content-center align-items-center" >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white">Holiday Tours & Travels<br /> THE WORLD</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fw-bold fs-5">
                My Best Travel Agency 
                </p>
              </Bounce>

              <Bounce>
                <NavLink
                  to="/services"
                  className="rounded-pill btn btn-primary fs-5 py-2 px-4"
                >
                   READING
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>

      </div>
      <Packages></Packages>
      <AboutUs></AboutUs>
      </div>
      
    );
};

export default Home;