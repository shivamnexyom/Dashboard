// salesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSalesData } from './apiService';

export const fetchSales = createAsyncThunk('sales/fetchSales', async () => {
  const response = await fetchSalesData();
  return response.data;
});

const salesSlice = createSlice({
  name: 'sales',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSales.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSales.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSales.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default salesSlice.reducer;
