import React, { useEffect, useState } from 'react';
import "./PackageDetails.css";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PackageDetails = () => {
    const { packagesId } = useParams();
    const [packa,setPackag] =useState([]);
    const { user } = useAuth();


    useEffect(()=>{
    fetch('http://localhost:5000/packages')
    .then(res => res.json())
    .then(data=>setPackag(data))
    },[])

   

    const matchingPackag = packa.find(pack => pack._id === String(packagesId))
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const onSubmit = data => {
     
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    };

    return (
        <div>
          <div className="d-flex">
          
          <Row>
          
          <div className="">
     {
     matchingPackag?.name?(
   
           <Col xs={6} md={6} className="pt-3 pb-3">
             <img className="img-fluid" src={matchingPackag.img} alt="" />
             <h2>packages name:{matchingPackag.name}</h2>
             <h5>{matchingPackag.des}</h5>
            <h5 className="fw-bold" > Total Cost: <span>$</span> {matchingPackag.price}</h5>
   </Col>
     ) : (
       <div className="my-5 py-1">
         <h1 className="my-5 p-5 text-center">NO Packages Found</h1>
       </div>
     )}
   </div>
   <Col xs={6} md={6}>
     <h2 className="pt-3">Plaese Booking Now</h2>
   <form className="orders-form" onSubmit={handleSubmit(onSubmit)}>

<input defaultValue={user.displayName} {...register("name")} />

<input defaultValue={user.email} {...register("email", { required: true })} />
{errors.email && <span className="error">This field is required</span>}
<input placeholder="Address" defaultValue="" {...register("address")} />
<input placeholder="City" defaultValue="" {...register("city")} />
<input placeholder="packageName" defaultValue="" {...register("packageName")} />
<input placeholder="phone number" defaultValue="" {...register("phone")} />
<input placeholder="price" defaultValue="" {...register("price")} />
<input type="submit" />
</form>
            </Col>
          </Row>
          </div>
    
        </div>
    );
};

export default PackageDetails;