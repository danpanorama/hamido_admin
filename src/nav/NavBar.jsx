import { NavLink } from "react-router-dom";
import { useState } from "react";
import './nav.css'
import '../App.css'
import {useSelector,useDispatch} from "react-redux";


function Navbar(props) {
  const admin =  useSelector((state)=>state.admin);

  return (
    <div className=" ">
<NavLink to={{pathname:'/'}} >בית</NavLink>
<NavLink to={{pathname:'/salads'}} >סלטים</NavLink>
<NavLink to={{pathname:'/extra'}} >אקסטרות</NavLink>
<NavLink to={{pathname:'/serv'}} >דרכי הגשה</NavLink>
<NavLink to={{pathname:'/menu'}} >מנות</NavLink>



    </div>
  );
}

export default Navbar;
