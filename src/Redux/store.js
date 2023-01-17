import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import extraReducer from './reducers/extraReducer'
import ErrorReducer from './reducers/errReducer'
import SaladsReducer from './reducers/saladsReducer'
import servwayReducer from './reducers/servwayReducer'
import productReducer from './reducers/productReducer'


const reducer = combineReducers({
    err:ErrorReducer,
    extras:extraReducer,
    salads:SaladsReducer,
    servway:servwayReducer,
    products:productReducer
   
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store