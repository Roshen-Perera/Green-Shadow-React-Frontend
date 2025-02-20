import {configureStore} from "@reduxjs/toolkit";
import FieldSlice from "@/reducers/FieldSlice.ts";
import CropSlice from "@/reducers/CropSlice.ts";

export const store = configureStore({
    reducer: {
        field: FieldSlice,
        crop: CropSlice,
    }
});

export type AppDispatch = typeof store.dispatch;