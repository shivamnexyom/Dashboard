import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/common/Card";
import CustomTable from "../../../components/common/Table";
import {
  fetchOrders,
  selectOrders,
} from "../../../containers/Orders/store/reducer";

export default function RecentOrders() {
  const dispatch = useDispatch();
  const { data: orders } = useSelector(selectOrders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "Order ID", flex: 0.6 },
    { field: "customerName", headerName: "Customer", flex: 0.6 },
    { field: "orderDate", headerName: "Order Date", flex: 0.6 },
    { field: "total", headerName: "Total", flex: 0.6 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.6,
      renderCell: (params) => (
        <div>
          <span>{params.row.status}</span>
        </div>
      ),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <CustomTable
          data={orders}
          columns={columns}
          // searchable={true}
          // searchFields={["Orders", "customerName"]}
        />
      </CardContent>
    </Card>
  );
}
