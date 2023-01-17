import '../App.css';
import AddExtraComp from '../components/extras/AddExtraComp';
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { removeExtra, setExtras } from '../Redux/Actions/extraActions';
import TableExtra from '../components/tables/TableExtra';

function ExtraScreen() {
  const dispatch = useDispatch();
  const extra = useSelector((state) => state.extras);

  useEffect(()=>{
    getDataFromServer()
  },[])

  function getDataFromServer(){
    dispatch(setExtras())
  }

  function removeItem(e){
    dispatch(removeExtra(e.eid))
  }

  return (
    <div className="flexcol center">
      <h1>add Extra</h1>
    <AddExtraComp/>

    <div className="pageWidth">
    <TableExtra deleteItem={removeItem} list={extra.extrasList}/>
    </div>
    </div>
  );
}

export default ExtraScreen;
