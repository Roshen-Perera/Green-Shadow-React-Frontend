import { Crops } from "@/model/Crops";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState: Crops[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const addCrop = createAsyncThunk(
  "Crop/addCrop",
  async (Crop: FormData) => {
    try {
        const response = await api.post("/crop/add", Crop, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Crop Added Successfully");
      return response.data.message;
    } catch (error) {
      alert("Failed to add crop");
      console.log("error", error);
    }
  }
);



export const getCrop = createAsyncThunk("Crop/getCrop", 
  async () => {
    try {
      const response = await api.get("/crop/get");
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      return console.log("error", error);
    }
  }
);

const CropSlice = createSlice({
  name: "Crop",
  initialState,
  reducers: {
    saveCrops: (state, action: PayloadAction<Crops>) => {
      state.push(action.payload);
    },
    deleteCrop(state, action: PayloadAction<string>) {
      state = state.filter((crop) => crop.cropId !== action.payload);
    },
    updateCrops: (state, action: PayloadAction<Crops>) => {
      const index = state.findIndex(
        (crop) => crop.cropId === action.payload.cropId
      );
      if (index > -1) {
        state[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCrop.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(addCrop.rejected, (state, action) => {
        console.log("Failed to add crop", action.payload);
      })
      .addCase(addCrop.pending, (state, action) => {
        console.log("Adding crop", action.payload);
      });
    builder
      .addCase(getCrop.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getCrop.rejected, (state, action) => {
        console.log("Failed to get crop", action.payload);
      })
      .addCase(getCrop.pending, (state, action) => {
        console.log("Getting crop", action.payload);
      });
  },
});

export default CropSlice.reducer;
