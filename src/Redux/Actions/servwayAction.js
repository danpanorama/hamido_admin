import {
    CLEAR,
    MSG
  } from '../contents/errContent'

import axiosConfig from "../../config/AxiosConfig";
import { ADD_SERVWAY, REMOVE_SERVWAY, SET_SERVWAY } from '../contents/servwayContent';
  


  export const setServWay = () => async (dispatch) => {
    try {
      await axiosConfig
        .get("/servway")
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: SET_SERVWAY,
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

  


  export const addServway = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/sevingway/inseretservway",data)
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: ADD_SERVWAY,
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

  
 
  export const removeServway = (data) => async (dispatch) => {
    try {
      await axiosConfig
        .post("/servway/remove",{id:data})
        .then((res) => {
          if (res.data.err) {
            return dispatch({
              type: MSG,
              data: res.data.err
            })
          } else {
            dispatch({
              type: REMOVE_SERVWAY,
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




  