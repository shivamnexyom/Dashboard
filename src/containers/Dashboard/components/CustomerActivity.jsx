import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCustomers } from "../store/reducer";
import Avatar from "../../../components/common/Avatar";

export function CustomerActivity() {
  const dispatch = useDispatch();

  const { data: customers, status, error } = useSelector((state) => state.customers);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCustomers());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ border: "1px solid #e0e0e0", borderRadius: "8px", padding: "16px" }}>
      <div style={{ paddingBottom: "8px", borderBottom: "1px solid #e0e0e0" }}>
        <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>Customer Activity</h3>
      </div>
      <div style={{ marginTop: "16px" }}>
        {customers.slice(0, 6).map((customer) => (
          <div
            key={customer.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "12px",
              padding: "8px",
              border: "1px solid #f0f0f0",
              borderRadius: "4px",
            }}
          >
            <Avatar
              height={40}
              width={40}
              name={`${customer.name.split(" ")[0][0]}${customer.name.split(" ")[1][0]}`}
            />
            <div style={{ marginLeft: "16px" }}>
              <p style={{ margin: 0, fontSize: "14px", fontWeight: "bold" }}>{customer.name}</p>
              <p style={{ margin: 0, fontSize: "12px", color: "#888" }}>
                {customer.totalOrders} orders, ${customer.totalSpent.toFixed(2)} total spent
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
