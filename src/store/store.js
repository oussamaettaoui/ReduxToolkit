import { configureStore } from "@reduxjs/toolkit";
import TheSlice from "../reducer/Reducer";

const store=configureStore({
    reducer:{TheSlice}
})
export default store;