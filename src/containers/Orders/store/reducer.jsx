import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrdersData, updateOrderStatusData } from "./apiService";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await fetchOrdersData();
  return response.data;
});

export const updateOrderStatus = createAsyncThunk(
  "orders/updateOrderStatus",
  async ({ orderId, status }) => {
    const response = await updateOrderStatusData(orderId, status);
    return response.data;
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectOrders = (state) => state.orders;

export default ordersSlice.reducer;
