import { combineReducers } from "redux";
import product_reducer from "./product.reducer";
import number_reducer from "./number.reducer"



const  reducers = combineReducers({
    product : product_reducer,
    number : number_reducer
})

export default reducers