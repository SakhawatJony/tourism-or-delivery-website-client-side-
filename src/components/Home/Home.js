import React from 'react';
import { Container } from 'react-bootstrap';
import Bounce from "react-reveal/Bounce";
import { NavLink } from 'react-router-dom';
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
                <h1 className="text-primary">TRAVELLING AROUND <br /> THE WORLD</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-primary fw-bold fs-5">
                Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic proident ullam, eaque donec delectus tempor consectetur nunc, purus congue? Rem volutpat sodales! Mollit. Minus exercitationem wisi. 
                </p>
              </Bounce>

              <Bounce>
                <NavLink
                  to="/services"
                  className="rounded-pill btn btn-primary fs-5 py-2 px-4"
                >
                  CONTINUE READING
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>

      </div>
      <Packages></Packages>
      </div>
      
    );
};

export default Home;