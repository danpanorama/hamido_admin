import '../App.css';
import AddSaladComp from '../components/salads/AddSalad';
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import AddProducts from '../components/products/AddProducts';
import { removeProduct, setProduct } from '../Redux/Actions/products';
import ProductTable from '../components/tables/ProductTable';




function ProductScreen() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(()=>{
    getDataFromServer()
  },[])

  function getDataFromServer(){
    dispatch(setProduct())
  }
  function removeItem(e){
    dispatch(removeProduct(e.pid))
  }
  return (
    <div className="flexcol center">
      <h1>מוצרים</h1>
      <AddProducts/>

      <div className="pageWidth">
        <ProductTable deleteItem={removeItem} list={products.productList} />
       
      </div>

      
    </div>
  );
}

export default ProductScreen;
