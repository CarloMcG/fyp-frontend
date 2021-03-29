import React from "react";

import Login from "./Login";
import AdminLogin from "./AdminLogin";
import CustomerDashboard from "./CustomerDashboard";
import AdminDashboard from "./AdminDashboard";
import Bills from "./Bills";
import PayBill from "./PayBill";
import Transactions from "./Transactions";
import TopUp from "./TopUp";
import Plans from "./Plans";
import NewPlan from "./NewPlan";

function App() {
  return (
    <div className="App">
      <Login />
      <AdminLogin />
      <CustomerDashboard />
      <AdminDashboard />
      <Bills />
      <PayBill />
      <Transactions />
      <TopUp />
      <Plans />
      <NewPlan />
    </div>
  );
}
export default App;
