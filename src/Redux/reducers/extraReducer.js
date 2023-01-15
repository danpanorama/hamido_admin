import * as actionTypes from "../contents/extraContent";

const initialState = {
  extrasList: [],
  single_Extra: {},

};

const extra = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.ADD_EXTRA:
      const add = {
        ...state,
      };
      add.extrasList = [...add.extrasList,action.data]
      return add;

  
      case actionTypes.SET_EXTRA:
        const set = {
          ...state,
        };
      set.extrasList = action.data;
  
        return set;




        case actionTypes.REMOVE_EXTRA:
            const remove = {
              ...state,
            };
            let arr = remove.extrasList.filter((e)=>{
                return e.eid != action.data
            })

            remove.extrasList = arr
      
            return remove;
    






    default:
      return state

  }
}

export default extra