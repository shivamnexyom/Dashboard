// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "../containers/Orders/store/reducer";
import inventoryReducer from "../containers/Inventory/store/reducer";
import salesSlice from "../containers/Analytics/store/reducer";
import customerReducer from "../containers/Dashboard/store/reducer";

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    inventory: inventoryReducer,
    sales: salesSlice,
    customers: customerReducer,
  },
});

export default store;
