import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSales } from "./store/reducer";
import { useSelector } from "react-redux";
import { fetchOrders } from "../Orders/store/reducer";
import { fetchInventory } from "../Inventory/store/reducer";
import LayoutContent from "../../components/LayoutContent";
import { SITE_TEXT } from "../../utils/constants";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/common/Card";
import SalesChart from "../../components/common/SalesChart";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Analytics() {
  const dispatch = useDispatch();

  // Accessing the state from Redux
  const salesData = useSelector((state) => state.sales.data);
  const orders = useSelector((state) => state.orders.data);
  const customers = useSelector((state) => state.inventory.data);

  // Fetching the data on mount
  useEffect(() => {
    dispatch(fetchSales());
    dispatch(fetchOrders());
    dispatch(fetchInventory());
  }, [dispatch]);

  // Calculate product performance
  const productPerformance = orders.reduce((acc, order) => {
    if (!acc[order.id]) {
      acc[order.id] = { totalSales: 0, orderCount: 0 };
    }
    acc[order.id].totalSales += order.total;
    acc[order.id].orderCount += order.count;
    return acc;
  }, {});

  const productPerformanceData = {
    labels: Object.keys(productPerformance),
    datasets: [
      {
        label: "Total Sales",
        data: Object.values(productPerformance).map((p) => p.totalSales),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Order Count",
        data: Object.values(productPerformance).map((p) => p.orderCount),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  return (
    <LayoutContent title={SITE_TEXT.Analytics}>
      <Card>
        <CardHeader>
          <CardTitle>Sales Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <SalesChart data={salesData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Product Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar data={productPerformanceData} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Customer Demographics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Customers: {customers.length}</p>
          <p>
            Average Total Spent: $
            {(
              customers.reduce(
                (sum, customer) => sum + customer.totalSpent,
                0
              ) / customers.length
            ).toFixed(2)}
          </p>
          <p>
            Average Orders per Customer:{" "}
            {(
              customers.reduce(
                (sum, customer) => sum + customer.totalOrders,
                0
              ) / customers.length
            ).toFixed(2)}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Revenue Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Total Revenue: $
            {salesData.reduce((sum, sale) => sum + sale.amount, 0).toFixed(2)}
          </p>
          <p>
            Average Order Value: $
            {(
              orders.reduce((sum, order) => sum + order.total, 0) /
              orders.length
            ).toFixed(2)}
          </p>
        </CardContent>
      </Card>
    </LayoutContent>
  );
}
