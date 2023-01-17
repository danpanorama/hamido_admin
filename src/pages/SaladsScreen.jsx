import '../App.css';
import AddSaladComp from '../components/salads/AddSalad';
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { removeSalad, setSalads } from '../Redux/Actions/saladsActions';
import SaladsTable from '../components/tables/SaladsTable';
function SaladsScreen() {
  const dispatch = useDispatch();
  const salads = useSelector((state) => state.salads);

  useEffect(()=>{
    getDataFromServer()
  },[])

  function getDataFromServer(){
    dispatch(setSalads())
  }
  function removeItem(e){
    dispatch(removeSalad(e.sid))
  }
  return (
    <div className="flexcol center">
      <h1>SaladsScreen</h1>
      <AddSaladComp/>

      <div className="pageWidth">
        <SaladsTable deleteItem={removeItem} list={salads.saladsList}/>
      </div>

      
    </div>
  );
}

export default SaladsScreen;
