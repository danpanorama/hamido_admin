import * as actionTypes from "../contents/saladsContent";

const initialState = {
  saladsList: [],
  single_Salad: {},

};

const salads = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.ADD_SALAD:
      const add = {
        ...state,
      };
      add.saladsList = [...add.saladsList,action.data]
      return add;

  
      case actionTypes.SET_SALAD:
        const set = {
          ...state,
        };
      set.saladsList = action.data;
  
        return set;




        case actionTypes.REMOVE_SALAD:
            const remove = {
              ...state,
            };
            let arr = remove.saladsList.filter((e)=>{
                return e.sid != action.data
            })

            remove.saladsList = arr
      
            return remove;
    






    default:
      return state

  }
}

export default salads