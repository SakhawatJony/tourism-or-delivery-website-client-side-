import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Package from '../Package/Package';
import Bounce from 'react-reveal/Bounce';


const Packages = () => {
    const [packages,setPackages] = useState([])

    useEffect(()=>{
        fetch('https://ghoulish-werewolf-82380.herokuapp.com/packages')
        .then(res=>res.json())
        .then(data=>setPackages(data))


    },[])


    return (
        <div>
             <Container className="">
             <Bounce>
             <h4 className="text-center pt-5 pb-5 fw-bold">Our Packages</h4>
        </Bounce>
               
            <Row xs={1} md={3} className="g-4 caed-container">   
            {
            packages.map(pack=> <Package
            key={pack._id}
            package={pack}
            
            ></Package>)  
          }
           </Row>
            </Container>
        </div>
    );
};

export default Packages;