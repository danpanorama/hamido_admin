import { useEffect } from "react";
import "../App.css";
import "../css/orders.css";
import "../css/home.css";

import { acceptOrderAction, deniedOrderAction, getAllOrdersAction, theOrderIsReadyAction, userTakeTheOrderAction } from "../Redux/Actions/ordersAction";
import NewOrders from "../components/orderstable/NewOrders";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const [orderState, setOrderState] = useState(0);
  const [orderInfoState, setorderInfoState] = useState({});

  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch()

  function acceptOrder(e){
    dispatch(acceptOrderAction(e))
  }

  function denideOrder(e){
    dispatch(deniedOrderAction(e))
  }
  function getOrderState(e) {
    setOrderState(e.orderid); 
    setorderInfoState(e)
  }
  function theOrderIsReady(e){
    dispatch(theOrderIsReadyAction(e))
    

  }

  function  theUserTakeTheOrder(e){
    setorderInfoState({})
    dispatch(userTakeTheOrderAction(e))
    
  }
  return (
    <div className="home flexcol center">
      <div className="ordersWindow">
        <div className="leftSideOrders">
        <NewOrders orderInfoState={orderInfoState} id={orderState} />
        </div>

        {orders.all_orders.length > 0 ? (
          <div className="">
            {orders.all_orders.map((e) => { 
              return (
                <div className={orderState == e.orderid ? 'border margin_botoom': 'margin_botoom'} >
                <div  onClick={()=>{getOrderState(e)}} className={
                  (e.activeorder == 0 )?
                  ('bcpurple orderbox')
                  :(e.activeorder == 1)?
                  ('bcyellow orderbox')
                  :(e.activeorder == 2)?
                  ('bcgreen orderbox')

                :''
                  }>
                  <h1>
                    {e.username} #{e.orderid}
                  </h1>{" "}
                  {e.price}
                  <div className="">
                    {e.activeorder == 1 ?
                   ( <button onClick={()=>{theOrderIsReady(e.orderid)}} >  מוכן לאיסוף</button>)
                    
                : (e.activeorder == 0 )?
              (<div className="flexrow">
              <button onClick={()=>{
              acceptOrder(e.orderid)
            }} >קבל</button>
            <button onClick={()=>{
              denideOrder(e.orderid)
            }}>בטל</button>

          </div>)
          : (e.activeorder == 2 )?
          <div className="">
            <button onClick={()=>{theUserTakeTheOrder(e.orderid)}} >הלקוח אסף</button>
          </div>

          :""
                    }
                  </div>
                 
                </div>
                </div>
              );
            })}
          </div>
       ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
