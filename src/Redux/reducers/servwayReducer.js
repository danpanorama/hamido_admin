import * as actionTypes from "../contents/servwayContent";

const initialState = {
  servwayList: [],
  single_ServWay: {},

};

const servway = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.ADD_SERVWAY:
      const add = {
        ...state,
      };
      add.servwayList = [...add.servwayList,action.data]
      return add;

  
      case actionTypes.SET_SERVWAY:
        const set = {
          ...state,
        };
      set.servwayList = action.data;
  
        return set;




        case actionTypes.REMOVE_SERVWAY:
            const remove = {
              ...state,
            };
            let arr = remove.servwayList.filter((e)=>{
                return e.serid != action.data
            })

            remove.servwayList = arr
      
            return remove;
    






    default:
      return state

  }
}

export default servway