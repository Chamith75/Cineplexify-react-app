import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./User.slice";

const Store = configureStore({
    reducer:{
        users : UserSlice.reducer

    }
})

export default Store