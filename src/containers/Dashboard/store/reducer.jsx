import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCustomersData } from "./apiService";

export const fetchCustomers = createAsyncThunk(
  "customers/fetchCustomers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCustomersData();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch customers");
    }
  }
);

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default customersSlice.reducer;
