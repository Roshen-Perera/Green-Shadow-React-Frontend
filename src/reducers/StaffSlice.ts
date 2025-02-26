
import Staffs from "@/model/Staffs";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState: Staffs[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const addStaff = createAsyncThunk(
  "Staff/addStaff",
  async (Staff: Staffs) => {
    const token = localStorage.getItem("jwt_token");
    try {
      const response = await api.post("/staff/add", Staff, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      });
      alert("Staff Added Successfully");
      return response.data.message;
    } catch (error) {
      alert("Failed to add Staff");
      console.log("error", error);
    }
  }
);

export const deleteStaff = createAsyncThunk(
  "Staff/deleteStaff",
  async (StaffId: string) => {
    const token = localStorage.getItem("jwt_token");
    try {
      const response = await api.delete(`/staff/delete/${StaffId}`,{
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
      },
      });
      return response.data;
    } catch (error) {
      return console.log("error", error);
    }
  }
);

export const updateStaff = createAsyncThunk(
  "Staff/updateStaff",
  async (Staff: Staffs) => {
    const token = localStorage.getItem("jwt_token");
    try {
      const response = await api.put(`/staff/update/${Staff.staffId}`, Staff, {
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

export const getStaff = createAsyncThunk("Staff/getStaff", async () => {
  const token = localStorage.getItem("jwt_token");
  try {
    const response = await api.get("/staff/get", {
      headers:{
        Authorization: token ? `Bearer ${token}` : "",
      }
    });
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
});

const StaffSlice = createSlice({
  name: "Staff",
  initialState,
  reducers: {
    saveStaffs: (state, action: PayloadAction<Staffs>) => {
      state.push(action.payload);
    },
    deleteStaff(state, action: PayloadAction<string>) {
      state = state.filter((Staff) => Staff.staffId !== action.payload);
    },
    updateStaffs: (state, action: PayloadAction<Staffs>) => {
      const index = state.findIndex(
        (Staff) => Staff.staffId === action.payload.staffId
      );
      if (index > -1) {
        state[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {

    // Add Staff
    builder
      .addCase(addStaff.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(addStaff.rejected, (state, action) => {
        console.log("Failed to add Staff", action.payload);
      })
      .addCase(addStaff.pending, (state, action) => {
        console.log("Adding Staff", action.payload);
      });

      // Delete Staff
    builder
      .addCase(deleteStaff.fulfilled, (state, action) => {
        state = state.filter((Staff) => Staff.StaffId !== action.payload);
      })
      .addCase(deleteStaff.rejected, (state, action) => {
        console.log("Failed to delete Staff", action.payload);
      })
      .addCase(deleteStaff.pending, (state, action) => {
        console.log("Deleting Staff", action.payload);
      });

      // Update Staff
    builder
      .addCase(updateStaff.fulfilled, (state, action) => {
        state.map((staff) => {
          if (staff.staffId === action.payload.staffId) {
            staff.firstName = action.payload.firstName;
            staff.lastName = action.payload.lastName;
            staff.designation = action.payload.designation
            staff.gender = action.payload.gender
            staff.joinedDate = action.payload.joinedDate
            staff.dob = action.payload.dob
            staff.addressLine1 = action.payload.addressLine1
            staff.addressLine2 = action.payload.addressLine2
            staff.addressLine3 = action.payload.addressLine3
            staff.addressLine4 = action.payload.addressLine4
            staff.addressLine5 = action.payload.addressLine5
            staff.contactNo = action.payload.contactNo
            staff.email = action.payload.email
            staff.role = action.payload.role
            staff.staffFieldId = action.payload.staffFieldId
          }
        });
      })
      .addCase(updateStaff.rejected, (state, action) => {
        console.log("Failed to update Staff", action.payload);
      })
      .addCase(updateStaff.pending, (state, action) => {
        console.log("Updating Staff", action.payload);
      });

      // Get Staff
    builder
      .addCase(getStaff.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getStaff.rejected, (state, action) => {
        console.log("Failed to get Staff", action.payload);
      })
      .addCase(getStaff.pending, (state, action) => {
        console.log("Getting Staff", action.payload);
      });
  },
});

export default StaffSlice.reducer;
