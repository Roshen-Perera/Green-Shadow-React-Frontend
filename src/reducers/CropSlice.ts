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
    const token = localStorage.getItem("jwt_token");
    try {
      const response = await api.post("/crop/add", Crop, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token ? `Bearer ${token}` : "",

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

export const deleteCrop = createAsyncThunk(
  "Crop/deleteCrop",
  async (cropId: string) => {
    const token = localStorage.getItem("jwt_token");
    try {
      const response = await api.delete(`/crop/delete/${cropId}`,{
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
      },
    });
      alert("Crop Deleted Successfully");
      return response.data;
    } catch (error) {
      return console.log("error", error);
    }
  }
);

export const updateCrop = createAsyncThunk(
  "Crop/updateCrop",
  async (Crop: FormData) => {
    const token = localStorage.getItem("jwt_token");
    try {
      const cropId = Crop.get("cropId") as string;
      const response = await api.put(`/crop/update/${cropId}`, Crop, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      return response.data;
    } catch (error) {
      return console.log("error", error);
    }
  }
);

export const getCrop = createAsyncThunk("Crop/getCrop", async () => {
  const token = localStorage.getItem("jwt_token");
  try {
    const response = await api.get("/crop/get",{
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
});

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

    // Add crop
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

      // Delete crop
    builder
      .addCase(deleteCrop.fulfilled, (state, action) => {
        state = state.filter((crop) => crop.cropId !== action.payload);
      })
      .addCase(deleteCrop.rejected, (state, action) => {
        console.log("Failed to delete crop", action.payload);
      })
      .addCase(deleteCrop.pending, (state, action) => {
        console.log("Deleting crop", action.payload);
      });

      // Update crop
    builder
      .addCase(updateCrop.fulfilled, (state, action) => {
        state.map((Crop) => {
          if (Crop.cropId === action.payload.cropId) {
            Crop.cropName = action.payload.cropName;
            Crop.cropScientificName = action.payload.cropScientificName;
            Crop.cropCategory = action.payload.cropCategory;
            Crop.cropSeason = action.payload.cropSeason;
            Crop.cropFieldId = action.payload.cropFieldId;
            Crop.cropImage1 = action.payload.cropImage1;
          }
        });
      })
      .addCase(updateCrop.rejected, (state, action) => {
        console.log("Failed to update crop", action.payload);
      })
      .addCase(updateCrop.pending, (state, action) => {
        console.log("Updating crop", action.payload);
      });

      // Get crop
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
