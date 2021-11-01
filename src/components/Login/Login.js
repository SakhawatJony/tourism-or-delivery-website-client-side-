
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { error,setError,handleGoogleSignIn} = useAuth();
    const history = useHistory();

  const location = useLocation();
  const redirect = location?.state?.from || "/home";
    return (
        <div>
         <div className="text-center mt-3">
           <span>{error}</span>
         <h2>Please Login</h2>
           <Button className="btn btn-success  mt-2 " onClick={()=>
      handleGoogleSignIn()
      .then(result => {
        const user = result.user;
        console.log(user);
        history.push(redirect);
        setError('');
      })
      .catch(error => {
        setError(error.message);
      }) 
          }
           variant="secondary" size="sm">
      GoogleSingIn
    </Button>
    
         </div>
        </div>
    );
};

export default Login;