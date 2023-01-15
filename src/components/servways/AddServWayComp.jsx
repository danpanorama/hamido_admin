import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {useFormik} from "formik"
import { useLocation } from "react-router-dom";
import { MSG } from "../../Redux/contents/errContent";
import AddSaladForm from "../forms/salads/AddSaladForm";
import { addSalads } from "../../Redux/Actions/saladsActions";
import AddServwayForm from "../forms/servway/AddServwayForm";
import { addServway } from "../../Redux/Actions/servwayAction";




function AddServWayComp() {
    const dispatch = useDispatch();
    // const admin = useSelector((state) => state.admin);
    // const productSource = useSelector((state) => state.productSource);
    let location = useLocation();
   
                
        const addServWay = useFormik({
            initialValues:{
            img: '',
            name:'',
            price:0,
            active:0,
          
        },onSubmit:async values  => {
            try{
          dispatch(addServway(values))
                
            }catch(e){
            dispatch({type:MSG,data:{msg:'somthing Wrong' + e,type:'bad'}})
            }
        }});

   

 

    return (
      <div className="">
   
   
       <AddServwayForm addServWay={addServWay}  />
   
  
  
      </div>
    );
  }
  
  export default AddServWayComp;
  