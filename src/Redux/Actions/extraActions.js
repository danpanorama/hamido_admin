import {
    MSG
  } from '../contents/errContent'

  import {
    ADD_EXTRA, REMOVE_EXTRA, SET_EXTRA
  } from '../contents/extraContent'
  
  import axiosConfig from "../../config/AxiosConfig";
  


  export const setExtras = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/extras")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: SET_EXTRA,
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

  


  export const addExtraNow = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/extras/inseretextra",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: ADD_EXTRA,
              data:res.data.data
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

  
 
  export const removeExtra = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/extras/remove",{id:data})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: REMOVE_EXTRA,
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




  