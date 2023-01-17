import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

import PrivateRoute from "../routes/PrivateRout";
import AdminHardPermissions from "../routes/AdminHardPermissions";


import { useDispatch, useSelector } from "react-redux";
import ExtraScreen from "../pages/ExtraScreen";
import Home from "../pages/Home";
import SaladsScreen from "../pages/SaladsScreen";
import ServWayScreen from "../pages/ServWayScreen";

import MenuScreen from "../pages/MenuScreen";
import ProductScreen from "../pages/ProductScreen";



function NavRoute() {
  const dispatch = useDispatch();

  return (
    <div className=" ">
      <NavBar/>
      
<div className="">
<Routes>
<Route path="/" element={<Home/>} exact/>
<Route path="/extra" element={<ExtraScreen/>} exact/>
<Route path="/salads" element={<SaladsScreen/>} exact/>
<Route path="/serv" element={<ServWayScreen/>} exact/>
<Route path="/menu" element={<MenuScreen/>} exact/>

<Route path="/products" element={<ProductScreen/>} exact/>


{/* <Route path="/productlist" element={ <PrivateRoute />} exact> 
<Route path="/productlist" element={<ProductStore/>} exact/>
</Route> */}
{/* 
<Route path="/usersscreen" element={ <AdminHardPermissions />} exact> 
<Route path="/usersscreen" element={<UsersScreen/>} exact/>
</Route> */}

</Routes>
</div>
   
    </div>
  
  );
}

export default NavRoute;
