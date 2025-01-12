import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInventoryData } from "./apiService";

export const fetchInventory = createAsyncThunk(
  "inventory/fetchInventory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchInventoryData();
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : "Error occurred"
      );
    }
  }
);

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInventory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInventory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchInventory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error
          ? action.error.message
          : "Something went wrong";
      });
  },
});

export default inventorySlice.reducer;
