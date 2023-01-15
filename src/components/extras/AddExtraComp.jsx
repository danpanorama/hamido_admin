import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {useFormik} from "formik"
import { useLocation } from "react-router-dom";
import ExtraForm from "../forms/extras/ExtraForm";
import { addExtraNow } from "../../Redux/Actions/extraActions";
import { MSG } from "../../Redux/contents/errContent";




function AddExtraComp() {
    const dispatch = useDispatch();
    // const admin = useSelector((state) => state.admin);
    // const productSource = useSelector((state) => state.productSource);
    let location = useLocation();
   
                
        const addExtra = useFormik({
            initialValues:{
            img: '',
            name:'',
            price:0,
            active:0,
          
        },onSubmit:async values  => {
            try{
          dispatch(addExtraNow(values))
                
            }catch(e){
            dispatch({type:MSG,data:{msg:'somthing Wrong' + e,type:'bad'}})
            }
        }});

   

 

    return (
      <div className="">
   
   
       <ExtraForm addExtra={addExtra}  />
   
  
  
      </div>
    );
  }
  
  export default AddExtraComp;
  