import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch('https://ghoulish-werewolf-82380.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data =>setOrders(data))
    },[])
    const {user} = useAuth();

    const myOrders = orders.filter(order => order.email === user.email )
    return (
        <div>
            
            <Table striped bordered hover size="sm">   
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Package Name</th>
                        <th>Total Price</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Status</th>
                      </tr>
                    </thead>
      {   
     myOrders.map(order=><tbody order={order}>
         
<tr>
      <td className="fw-bold">*</td>
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order.name}</td>
      <td>{order.price}</td>
      <td>{order.address}</td>
      <td>{order.city}</td>

    </tr>
      </tbody>
     )
    

                  
               
    }
            </Table>)
        </div>
    );
};

export default MyOrders;