import {useDispatch,useSelector} from "react-redux";
import { useEffect, useState } from "react";




function NewOrders(props) {
    const orders = useSelector((state) => state.orders);
    return (
      <div className="">
  
     {orders.info_orders.length > 0 ?   
        
     <div className="flexcol end w100 orderinfo">
      <h1>פירוט הזמנה נוככית</h1>
      <br />
    
    <div className=" w100">
    {orders.info_orders.map((e)=>{
          
          if(e.orderid == props.id){
            return(
              <div className="flexcol end"> 
                  
                   <h1>{e.servway} {e.product} </h1>
                   <p>{e.salads}</p>
                
              </div>
          )
          }
          
         
        })}
<br /><br />
       <table className="drtl">
        <tbody>
        <tr>
            <td>{
              (props.orderInfoState.activeorder == 0 )?
              ('מחכים לאישור של המסעדה')
            :(props.orderInfoState.activeorder == 1 )?
            ('  הזמנה בהכנה ')
            :(props.orderInfoState.activeorder == 2 )?
            ('  הזמנה מוכנה מחכה לאיסוף ')
            :''
            }</td>
          <td>מצב  :</td>
          
          </tr>

        <tr>
            <td>{props.orderInfoState.price}</td>
          <td>מחיר :</td>
          
          </tr>
          <tr>
            <td>{props.orderInfoState.username}</td>
          <td>שם :</td>
          
          </tr>
          <tr>
            <td>{props.orderInfoState.phone}</td>
          <td>טלפון :</td>
          
          </tr>
        </tbody>
       </table>
    </div>

     </div>
     
     : 
     
     'no'}
   
    
  
      </div>
    );
  }
  
  export default NewOrders;
  