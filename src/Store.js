import { configureStore } from "@reduxjs/toolkit";
import reducers from "./State/Reducers"

const store = configureStore({
    reducer: reducers
})

export default store