import {configureStore} from "@reduxjs/toolkit";
import FieldSlice from "@/reducers/FieldSlice.ts";
import CropSlice from "@/reducers/CropSlice.ts";
import StaffSlice from "@/reducers/StaffSlice";

export const store = configureStore({
    reducer: {
        field: FieldSlice,
        crop: CropSlice,
        staff: StaffSlice
    }
});

export type AppDispatch = typeof store.dispatch;