import '../App.css';
import AddMenuItem from '../components/menu/AddMenuItem';
import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { removeMenuItem, setMenuItems } from '../Redux/Actions/menuActions';
import MenuTable from '../components/tables/MenuTable';
function MenuScreen() {


  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  useEffect(()=>{
    getDataFromServer()
  },[])

  function getDataFromServer(){
    dispatch(setMenuItems())
  }
  function removeItem(e){
    dispatch(removeMenuItem(e.mid))
  }


  return (
    <div className="flexcol center">
<AddMenuItem/>

<div className="pageWidth">
  <MenuTable deleteItem={removeItem} list={menu.menuList}/>
</div>


    </div>
  );
}

export default MenuScreen;
