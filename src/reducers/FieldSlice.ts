import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Fields } from "@/model/Fields";

export const initialState: Fields[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000",
})

export const addField = createAsyncThunk(
    'Field/addField',
    
    async (Field: FormData) => { // What happens here? Here we are sending a FormData object to the server. FormData is a built-in object in JavaScript that allows you to send data to the server in the form of key-value pairs. It is used to send files to the server. In this case, we are sending the fieldId, fieldName, fieldLocation, fieldExtent, fieldImage1, and fieldImage2 to the server. The server will then process this data and return a response. The response will be stored in the action.payload variable. The action.payload variable will then be used to update the state in the reducer.
      const token = localStorage.getItem('jwt_token');
      try {
            const response = await api.post('/field/add', Field, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                  Authorization: token ? `Bearer ${token}` : "",
                }
            })
            alert('Field Added Successfully');
            return response.data.message;
        } catch (error) {
            alert('Failed to add Field');
            console.log('error' ,error); 
        }
    }
)

export const updateField = createAsyncThunk(
    'Field/updateField',
    async (Field: FormData) => {
        const token = localStorage.getItem('jwt_token');
        try {
            const fieldId = Field.get('fieldId') as string;
            const response = await api.put(`field/update/${fieldId}`, Field, {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: token ? `Bearer ${token}` : "",
              }
            });
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

export const deleteField = createAsyncThunk(
    'Field/deleteField',
    async (fieldId: string) => {
      const token = localStorage.getItem('jwt_token');
        try {
            const response = await api.delete(`field/delete/${fieldId}`,{
              headers: {
                Authorization: token ? `Bearer ${token}` : "",
              },
            });
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

export const getField = createAsyncThunk(
    'Field/getField',
    async () => {
      const token = localStorage.getItem('jwt_token');
        try {
            const response = await api.get(`/field/get`,{
              headers: {
                Authorization: token ? `Bearer ${token}` : "",
              },
            });
            console.log('response', response.data);
            
            return response.data;
        } catch (error) {
            return console.log('error', error);
        }
    }
);

const FieldSlice = createSlice({
  name: "Field",
  initialState,
  reducers: {
    saveFields: (state, action: PayloadAction<Fields>) => {
      state.push(action.payload);
    },
    deleteField(state, action: PayloadAction<string>) {
      state = state.filter(field => field.fieldId !== action.payload);
    },
    updateFields: (state, action: PayloadAction<Fields>) => {
      const index = state.findIndex((field) => field.fieldId === action.payload.fieldId);
      if (index > -1) {
        state[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addField.fulfilled, (state, action) => { // What happens here? Here we are handling the fulfilled state of the addField async thunk. If the addField async thunk is successful, we log a success message to the console. This is useful for debugging and error handling. The action.payload variable contains the response data returned by the server. This response data can be used to update the state in the reducer. In this case, we are adding the new Field to the state array.
        state.push(action.payload);
      })
      .addCase(addField.rejected, (state, action) => { // What happens here? Here we are handling the rejected state of the addField async thunk. If the addField async thunk fails, we log an error message to the console. This is useful for debugging and error handling. The action.payload variable contains the error message returned by the server. This error message can be used to provide feedback to the user or to log the error for further investigation.
        console.log("Failed to add Field : ", action.payload);
      })
      .addCase(addField.pending, (state, action) => { // What happens here? Here we are handling the pending state of the addField async thunk. If the addField async thunk is still in progress, we log a pending message to the console. This is useful for debugging and error handling. The action.payload variable contains the pending status of the async thunk. This status can be used to show a loading indicator to the user or to log the progress of the async thunk.
        console.log("Pending Field : ", action.payload);
      });
    builder
      .addCase(updateField.fulfilled, (state, action) => {
        state.map((Field) => {
          if (Field.fieldId === action.payload.fieldId) {
            Field.fieldName = action.payload.fieldName;
            Field.fieldExtent = action.payload.fieldExtent;
            Field.fieldLocation = action.payload.fieldLocation;
            Field.fieldImage1 = action.payload.fieldImage1;
            Field.fieldImage2 = action.payload.fieldImage2;
          }
        });
      })
      .addCase(updateField.rejected, (state, action) => {
        console.log("Failed to update Field : ", action.payload);
      })
      .addCase(updateField.pending, (state, action) => {
        console.log("Pending updating Field : ", action.payload);
      });
    builder
      .addCase(deleteField.fulfilled, (state, action) => {
        return state.filter((Field) => Field.fieldId !== action.payload);
      })
      .addCase(deleteField.rejected, (state, action) => {
        console.log("Failed to delete Field : ", action.payload);
      })
      .addCase(deleteField.pending, (state, action) => {
        console.log("Pending deleting Field : ", action.payload);
      });
    builder
      .addCase(getField.fulfilled, (state, action) => {
        return action.payload; // Directly replace state with fetched data
      })
      .addCase(getField.rejected, (state, action) => {
        console.log("Failed to get Field : ", action.payload);
      })
      .addCase(getField.pending, (state, action) => {
        console.log("Pending getting Field : ", action.payload);
      });
  },
});

export default FieldSlice.reducer;