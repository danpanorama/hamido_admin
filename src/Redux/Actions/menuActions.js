import {
    MSG
  } from '../contents/errContent'

  import {
    ADD_MENU_ITEM, REMOVE_MENU_ITEM, SET_MENU_ITEM
  } from '../contents/menuContent'
  
  import axiosConfig from "../../config/AxiosConfig";
  





  







  export const setProduct = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/menu")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: SET_MENU_ITEM,
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

  


  export const addMenuItemNowFFD = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/menu/insertmenu",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: ADD_MENU_ITEM,
              data:res.data.data
            });
            dispatch({
              type: MSG,
              data:res.data.msg
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

  
 
  export const removeMenuItem = (data) => async (dispatch) => {
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
              type: REMOVE_MENU_ITEM,
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




  