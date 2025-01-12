// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Orders from "./containers/Orders";
import Inventory from "./containers/Inventory";
import Analytics from "./containers/Analytics";
import Settings from "./containers/Settings";
import c from "classnames";

function App() {
  return (
    <div className={c("mainContentWrapper")}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} exact />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
