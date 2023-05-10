import {
    MSG
  } from '../contents/errContent';
import {
  NEWORDERS,
    USERSORDERS,REMOVEORDER,ACCEPTORDER,ORDERISREADY
  } from '../contents/ordersContent'
import axiosConfig from "../../config/AxiosConfig";
  

  export const getAllOrdersAction = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .get("/order/allneworders")
        .then((res) => {
          if (res.data.err) {  
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: USERSORDERS,
              data:res.data.orders
            });
         
          }
        }) 
        .catch((err) => {
             dispatch({
                type: MSG,
                data: {type:'bad',msg:err.message}
              })
        })
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }

  
  export const getNoneActiveOrders = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .get("/order/nonactive")
        .then((res) => {
          if (res.data.err) {  
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: NEWORDERS,
              data:res.data.orders
            });
         
          }
        }) 
        .catch((err) => {
             dispatch({
                type: MSG,
                data: {type:'bad',msg:err.message}
              })
        })
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }

  
  export const deniedOrderAction = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/order/deniedorder",{id:data})
        .then((res) => { 
          if (res.data.err) {  
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: REMOVEORDER,
              data:data
            });
         
          }
        }) 
        .catch((err) => {
             dispatch({
                type: MSG,
                data: {type:'bad',msg:err.message}
              })
        })
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }

  export const acceptOrderAction = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/order/acceptorder",{id:data})
        .then((res) => { 
          if (res.data.err) {  
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: ACCEPTORDER,
              data:data
            });
         
          }
        }) 
        .catch((err) => {
             dispatch({
                type: MSG,
                data: {type:'bad',msg:err.message}
              })
        })
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }





  
  export const theOrderIsReadyAction = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/order/orderready",{id:data})
        .then((res) => { 
          if (res.data.err) {  
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: ORDERISREADY,
              data:data
            });
         
          }
        }) 
        .catch((err) => {
             dispatch({
                type: MSG,
                data: {type:'bad',msg:err.message}
              })
        })
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }
  export const userTakeTheOrderAction = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/order/usertake",{id:data})
        .then((res) => { 
          if (res.data.err) {  
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: REMOVEORDER,
              data:data
            });
         
          }
        }) 
        .catch((err) => {
             dispatch({
                type: MSG,
                data: {type:'bad',msg:err.message}
              })
        })
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }