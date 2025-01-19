import { Fields } from "@/model/Fields";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    value: [] as Fields[],
}
const FieldSlice = createSlice({
    name: 'field',
    initialState: initialState,
    reducers: {
        saveFields: (state, action: PayloadAction<Fields>) => {
            state.value.push(action.payload);
        },
        deleteField(state, action: PayloadAction<string>) {
            state.value = state.value.filter(field => field.fieldId !== action.payload);
        },
        updateFields: (state, action: PayloadAction<Fields>) => {
            const index = state.value.findIndex((field) => field.fieldId === action.payload.fieldId);
            if (index > -1) {
                state.value[index] = action.payload;
            }
        }
    }
})

export const { saveFields, deleteField, updateFields } = FieldSlice.actions;
export default FieldSlice.reducer;
