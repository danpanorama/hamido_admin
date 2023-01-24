import * as actionTypes from "../contents/menuContent";

const initialState = {
  menuList: [],
  single_Menu: {},

};

const menu = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.ADD_MENU_ITEM:
      const add = {
        ...state,
      };
      add.menuList = [...add.menuList,action.data]
      return add;

  
      case actionTypes.SET_MENU_ITEM:
        const set = {
          ...state,
        };
      set.menuList = action.data;
  
        return set;




        case actionTypes.REMOVE_MENU_ITEM:
            const remove = {
              ...state,
            };
            let arr = remove.menuList.filter((e)=>{
                return e.mid != action.data
            })

            remove.menuList = arr
      
            return remove;
    






    default:
      return state

  }
}

export default menu