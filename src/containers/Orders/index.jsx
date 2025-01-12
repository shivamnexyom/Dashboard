import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders, selectOrders } from "./store/reducer";
import LayoutContent from "../../components/LayoutContent";
import { SITE_TEXT } from "../../utils/constants";
import CustomTable from "../../components/common/Table";

export default function Orders() {
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
    <LayoutContent title={SITE_TEXT.Orders}>
      <CustomTable
        data={orders}
        columns={columns}
        searchable={true}
        searchFields={["Orders", "customerName"]}
      />
    </LayoutContent>
  );
}
