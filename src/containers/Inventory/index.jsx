import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LayoutContent from "../../components/LayoutContent";
import { SITE_TEXT } from "../../utils/constants";
import CustomTable from "../../components/common/Table";
import { fetchInventory } from "./store/reducer";

export default function Inventory() {
  const dispatch = useDispatch();

  const { data: inventory, status } = useSelector((state) => state.inventory);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchInventory());
    }
  }, [dispatch, status]);

  const columns = [
    { field: "id", headerName: "Inventory ID", flex: 0.6 },
    { field: "name", headerName: "Product Name", flex: 0.6 },
    { field: "category", headerName: "Category", flex: 0.6 },
    { field: "stock", headerName: "Stock", flex: 0.6 },
    {
      field: "status",
      headerName: "Status",
      flex: 0.6,
      renderCell: (params) => (
        <div>
          <span>{params.row.stock > 0 ? "Available" : "Out of Stock"}</span>
        </div>
      ),
    },
  ];

  return (
    <LayoutContent title={SITE_TEXT.Inventory}>
      {status === "loading" ? (
        <p>Loading...</p>
      ) : status === "failed" ? (
        <p>Failed to load inventory. Please try again later.</p>
      ) : (
        <CustomTable
          data={inventory}
          columns={columns}
          searchable={true}
          searchFields={["name", "category"]}
        />
      )}
    </LayoutContent>
  );
}
