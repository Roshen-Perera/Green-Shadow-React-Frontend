import { Fields } from "@/model/Fields";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    value: [] as Fields[],
}
const FieldSlice = createSlice({
    name: 'customer',
    initialState: initialState,
    reducers: {
        saveFields: (state, action: PayloadAction<Fields>) => {
            state.value.push(action.payload);
        },
        deleteField(state, action: PayloadAction<string>) {
            state.value = state.value.filter(field => field.fieldId !== action.payload);
        },
    }
})

export const { saveFields, deleteField } = FieldSlice.actions;
export default FieldSlice.reducer;
