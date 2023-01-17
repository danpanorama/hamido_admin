import {
    CLEAR,
    MSG
  } from '../contents/errContent'
  import {
    ADD_SALAD,REMOVE_SALAD,SET_SALAD
  } from '../contents/saladsContent'
  
  import axiosConfig from "../../config/AxiosConfig";
  


  export const setSalads = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/salads")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: SET_SALAD,
              data:res.data.all
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
        });
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }

  


  export const addSalads = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/salads/inseretsalads",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: ADD_SALAD,
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
        });
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }

  
 
  export const removeSalad = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/salads/remove",{id:data})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: REMOVE_SALAD,
              data:data
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
        });
    } catch (e) {
        dispatch({
            type: MSG,
            data: {type:'bad',msg:e.message}
          })
    }
  }




  