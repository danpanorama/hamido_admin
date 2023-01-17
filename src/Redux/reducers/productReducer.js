import * as actionTypes from "../contents/productsContent";

const initialState = {
  productList: [],
  single_Product: {},

};

const product = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.ADD_PRODUCTS:
      const add = {
        ...state,
      };
      add.productList = [...add.productList,action.data]
      return add;

  
      case actionTypes.SET_PRODUCTS:
        const set = {
          ...state,
        };
      set.productList = action.data;
  
        return set;




        case actionTypes.REMOVE_PRODUCTS:
            const remove = {
              ...state,
            };
            let arr = remove.productList.filter((e)=>{
                return e.pid != action.data
            })

            remove.productList = arr
      
            return remove;
    






    default:
      return state

  }
}

export default product