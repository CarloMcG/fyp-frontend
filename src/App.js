import React from "react";
import { Route, Link } from "react-router-dom";

import NavBar from "./NavBar";

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
      <NavBar />
      <Route exact path="/" component={Login} />
      <Route exact path="/Admin" component={AdminLogin} />
      <Route exact path="/CustomerDashboard" component={CustomerDashboard} />
      <Route exact path="/AdminDashboard" component={AdminDashboard} />
      <Route exact path="/Bills" component={Bills} />
      <Route exact path="/PayBill" component={PayBill} />
      <Route exact path="/Transactoins" component={Transactions} />
      <Route exact path="/TopUp" component={TopUp} />
      <Route exact path="/Plans" component={Plans} />
      <Route exact path="/NewPlan" component={NewPlan} />
    </div>
  );
}
export default App;
