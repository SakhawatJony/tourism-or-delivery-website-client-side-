import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Login from './components/Login/Login';
import Packages from './components/Packages/Packages';
import PackageDetails from './components/PackageDetails/PackageDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddNewService from './components/AddNewService/AddNewService';



function App() {
  return (
    <AuthProvider>
  <Router>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route  path="/home">
        <Home></Home>
      </Route>
      <Route  path="/packages">
        <Packages></Packages>
      </Route>
      <PrivateRoute  path="/packagesdetails/:packagesId">
        <PackageDetails></PackageDetails>
      </PrivateRoute>
      <Route  path="/orders">
      <MyOrders></MyOrders>
      </Route>
      <Route  path="/manageOrders">
      <ManageAllOrders></ManageAllOrders>
      </Route>
      <Route  path="/addNewPackages">
      <AddNewService></AddNewService>
      </Route>
      <Route  path="/about">
      <AboutUs></AboutUs>
      </Route>
      <Route  path="/login">
      <Login></Login>
      </Route>
      <Route  path="*">
     <NotFound></NotFound>
      </Route>

    </Switch>
    <Footer></Footer>
  </Router>
  </AuthProvider>
  );
}

export default App;
