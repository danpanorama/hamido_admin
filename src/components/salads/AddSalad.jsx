import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {useFormik} from "formik"
import { useLocation } from "react-router-dom";
import { MSG } from "../../Redux/contents/errContent";
import AddSaladForm from "../forms/salads/AddSaladForm";
import { addSalads } from "../../Redux/Actions/saladsActions";




function AddSaladComp() {
    const dispatch = useDispatch();
    // const admin = useSelector((state) => state.admin);
    // const productSource = useSelector((state) => state.productSource);
    let location = useLocation();
   
                
        const addSalad = useFormik({
            initialValues:{
            simg: '',
            sname:'',
            sprice:0,
            sactive:0,
          
        },onSubmit:async values  => {
            try{
          dispatch(addSalads(values))
                
            }catch(e){
            dispatch({type:MSG,data:{msg:'somthing Wrong' + e,type:'bad'}})
            }
        }});

   

 

    return (
      <div className="">
   
   
       <AddSaladForm addSalad={addSalad}  />
   
  
  
      </div>
    );
  }
  
  export default AddSaladComp;
  