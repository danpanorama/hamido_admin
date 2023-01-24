import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {useFormik} from "formik"
import { useLocation } from "react-router-dom";
import { MSG } from "../../Redux/contents/errContent";
import { addProductNow, setProduct } from "../../Redux/Actions/products";
import { setServWay } from "../../Redux/Actions/servwayAction";
import MenuForm from "../forms/menu/MenuForm";
import { addMenuItemNow, addMenuItemNowFFD } from "../../Redux/Actions/menuActions";




function AddMenuItemComponentOnReact() {
    const dispatch = useDispatch();
    const extras = useSelector((state) => state.extras);
    const products = useSelector((state) => state.products);
    const servway = useSelector((state) => state.servway);

    let location = useLocation();


    useEffect(()=>{
getDataFromServer()
    },[]);


    function getDataFromServer(){
       
        dispatch(setProduct())
        dispatch(setServWay())

    }
   
                
        const addMenuItemFormik = useFormik({
            initialValues:{
            mimg: '',
            mname:'',
            sumextra:0,
            mprice:0,
            servway:'',
            mactive:0,
          
        },onSubmit:async values  => {
            try{
          dispatch(addMenuItemNowFFD(values))
                
            }catch(e){
                console.log(e)
            dispatch({type:MSG,data:{msg:'somthing Wrong' + e,type:'bad'}})
            }
        }});

   

 




    return (
      <div className=""> 
   
   
       <MenuForm addMenuItemFormik={addMenuItemFormik} products={products.productList} servway={servway.servwayList}   />
   
  
  
      </div>
    );
  }
  
  export default AddMenuItemComponentOnReact;
  