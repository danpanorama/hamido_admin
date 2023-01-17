import {
    MSG
  } from '../contents/errContent'

  import {
    ADD_PRODUCTS, REMOVE_PRODUCTS, SET_PRODUCTS
  } from '../contents/productsContent'
  
  import axiosConfig from "../../config/AxiosConfig";
  


  export const setProduct = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/products")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: SET_PRODUCTS,
              data:res.data.all
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

  


  export const addProductNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/products/inseretitem",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: ADD_PRODUCTS,
              data:res.data.data
            });
            dispatch({
              type: MSG,
              data: res.data.msg
            })
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

  
 
  export const removeProduct = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/products/remove",{id:data})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: REMOVE_PRODUCTS,
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




  