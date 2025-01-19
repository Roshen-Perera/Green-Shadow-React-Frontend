import {configureStore} from "@reduxjs/toolkit";
import FieldSlice from "@/reducers/FieldSlice.ts";

export const store = configureStore({
    reducer: {
        field: FieldSlice,
    }
});