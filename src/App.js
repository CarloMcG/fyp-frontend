import React from "react";
import { Route } from "react-router-dom";
import "./theme.scss";

import Login from "./Login";
import AdminLogin from "./AdminLogin";
import CustomerDashboard from "./CustomerDashboard";
import AdminDashboard from "./AdminDashboard";
import Bills from "./Bills";
import BpCalls from "./BpCalls";
import PpCalls from "./PpCalls";
import PayBill from "./PayBill";
import Transactions from "./Transactions";
import TopUp from "./TopUp";
import Plans from "./Plans";
import NewPlan from "./NewPlan";
import AddToPlan from "./AddToPlan";
import PrePayDashboard from "./PrePayDashboard";
import Users from "./Users";

import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/Admin" component={AdminLogin} />
      <Route exact path="/CustomerDashboard" component={CustomerDashboard} />
      <Route exact path="/AdminDashboard" component={AdminDashboard} />
      <Route exact path="/Bills" component={Bills} />
      <Route exact path="/BpCalls" component={BpCalls} />
      <Route exact path="/PpCalls" component={PpCalls} />
      <Route exact path="/PayBill" component={PayBill} />
      <Route exact path="/Transactions" component={Transactions} />
      <Route exact path="/TopUp" component={TopUp} />
      <Route exact path="/Plans" component={Plans} />
      <Route exact path="/NewPlan" component={NewPlan} />
      <Route exact path="/AddToPlan" component={AddToPlan} />
      <Route exact path="/PrePayDashBoard" component={PrePayDashboard} />
      <Route exact path="/Users" component={Users} />
    </div>
  );
}
export default App;
