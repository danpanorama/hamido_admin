import * as actionTypes from "../contents/ordersContent";

const initialState = {
  all_orders: [],
  info_orders: [],

};

const orders = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.USERSORDERS:
      const getOrder = {
        ...state,
      };
     
            getOrder.all_orders =  action.data
      
      
      return getOrder;


      case actionTypes.NEWORDERS:
      const getnewOrder = {
        ...state,
      };
     
      getnewOrder.info_orders =  action.data
      
      
      return getnewOrder;


      
      case actionTypes.REMOVEORDER:
      const remove = {
        ...state,
      };
      let arr1 = remove.info_orders.filter((e)=>{
          return e.orderid != action.data
      })
      remove.info_orders = arr1
      let arr2 = remove.all_orders.filter((e)=>{
        return e.orderid != action.data
    })
    remove.all_orders = arr2
      
      return remove;

      


      
      case actionTypes.ORDERISREADY:
        const orderIsReady = {
          ...state,
        };
        orderIsReady.info_orders.map((e)=>{
            if(e.orderid == action.data){
            return  e.activeorder = 2 
            }
        })
        orderIsReady.all_orders.map((e)=>{
          if(e.orderid == action.data){
          return  e.activeorder = 2 
          }
      })
      
        
        return orderIsReady;


      case actionTypes.ACCEPTORDER:
        const accept = {
          ...state,
        };
         accept.info_orders.map((e)=>{
            if(e.orderid == action.data){
            return  e.activeorder = 1 
            }
        })
        accept.all_orders.map((e)=>{
          if(e.orderid == action.data){
          return  e.activeorder = 1 
          }
      })
      
        
        return accept;

    default:
      return state

  }
}

export default orders