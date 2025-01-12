import React from "react";
import LayoutContent from "../../components/LayoutContent";
import { SITE_TEXT } from "../../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSales } from "../Analytics/store/reducer";
import { fetchInventory } from "../Inventory/store/reducer";
import { fetchOrders } from "../Orders/store/reducer";
import SalesChart from "../../components/common/SalesChart";
import InventoryStatus from "./components/InventoryStatus";
import RecentOrders from "./components/RecentOrders";
import { CustomerActivity } from "./components/CustomerActivity";

export default function Dashboard() {
  const dispatch = useDispatch();
  const salesData = useSelector((state) => state.sales.data);
  const salesStatus = useSelector((state) => state.sales.status);
  const inventoryStatus = useSelector((state) => state.inventory.status);
  const ordersStatus = useSelector((state) => state.orders.status);
  const customersStatus = useSelector((state) => state.orders.className);

  useEffect(() => {
    if (salesStatus === "idle") {
      dispatch(fetchSales());
    }
    if (inventoryStatus === "idle") {
      dispatch(fetchInventory());
    }
    if (ordersStatus === "idle") {
      dispatch(fetchOrders());
    }
    if (customersStatus === "idle") {
      dispatch(fetchCustomers());
    }
  }, [dispatch, salesStatus, inventoryStatus, ordersStatus, customersStatus]);

  if (
    salesStatus === "loading" ||
    inventoryStatus === "loading" ||
    ordersStatus === "loading" ||
    customersStatus === "loading"
  ) {
    return <div>Loading...</div>;
  }

  if (
    salesStatus === "failed" ||
    inventoryStatus === "failed" ||
    ordersStatus === "failed" ||
    customersStatus === "failed"
  ) {
    return <div>Error loading dashboard data</div>;
  }

  return (
    <LayoutContent title={SITE_TEXT.Dashboard}>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}
      >
        <SalesChart data={salesData} />
        <InventoryStatus />
        <RecentOrders />
        <CustomerActivity />
      </div>
    </LayoutContent>
  );
}
