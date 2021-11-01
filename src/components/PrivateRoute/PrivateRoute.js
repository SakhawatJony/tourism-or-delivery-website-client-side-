import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({ children, ...rest }) => {

const {user,loading} = useAuth()
    if (loading) {
        return (
          <div className="text-center my-5 py-5">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        );
      }
    return (
        <Route
        {...rest}
        render={({location}) => user.email ? children : <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        
        ></Redirect>



        }

        
        >
            
        </Route>
    );
};

export default PrivateRoute;