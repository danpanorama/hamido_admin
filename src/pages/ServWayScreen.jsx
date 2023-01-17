import '../App.css';
import AddServWayComp from '../components/servways/AddServWayComp';
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import ServingTable from '../components/tables/ServingTable';
import { removeServway, setServWay } from '../Redux/Actions/servwayAction';
function ServWayScreen() {
  const dispatch = useDispatch();
  const servway = useSelector((state) => state.servway);

  useEffect(()=>{
    getDataFromServer()
  },[])

  function getDataFromServer(){
    dispatch(setServWay())
  }
  function removeItem(e){
    dispatch(removeServway(e.serid))
  }
  return (
    <div className="flexcol center">
      <h1>ServWayScreen</h1>
      <AddServWayComp/>

      <div className="pageWidth">
        <ServingTable deleteItem={removeItem} list={servway.servwayList}/>
      </div>
    </div>
  );
}

export default ServWayScreen;
