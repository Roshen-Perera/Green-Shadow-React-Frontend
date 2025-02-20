import { Crops } from "@/model/Crops";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : Crops[] = [];
const CropSlice = createSlice({
    name: 'crop',
    initialState: initialState,
    reducers: {
        saveCrops: (state, action: PayloadAction<Crops>) => {
            state.push(action.payload);
        },
        deleteCrop(state, action: PayloadAction<string>) {
            state = state.filter(crop => crop.cropId !== action.payload);
        },
        updateCrops: (state, action: PayloadAction<Crops>) => {
            const index = state.findIndex((crop) => crop.cropId === action.payload.cropId);
            if (index > -1) {
                state[index] = action.payload;
            }
        }
    }
})

export const { saveCrops, deleteCrop, updateCrops } = CropSlice.actions;
export default CropSlice.reducer;
