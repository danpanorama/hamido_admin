import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {useFormik} from "formik"
import { useLocation } from "react-router-dom";
import { MSG } from "../../Redux/contents/errContent";
import { addProductNow } from "../../Redux/Actions/products";
import ProductsForm from "../forms/products/ProductsForm";




function AddProducts() {
    const dispatch = useDispatch();
    // const admin = useSelector((state) => state.admin);
    // const productSource = useSelector((state) => state.productSource);
    let location = useLocation();
   
                
        const addProducts = useFormik({
            initialValues:{
            pimg: '',
            pname:'',
            pprice:0,
            pactive:0,
          
        },onSubmit:async values  => {
            try{
          dispatch(addProductNow(values))
                
            }catch(e){
            dispatch({type:MSG,data:{msg:'somthing Wrong' + e,type:'bad'}})
            }
        }});

   

 

    return (
      <div className="">
   
   
       <ProductsForm addProducts={addProducts}  />
   
  
  
      </div>
    );
  }
  
  export default AddProducts;
  