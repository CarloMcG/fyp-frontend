import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import "./theme.scss";

import About from "./About";
import Login from "./Login";
import BpDashboard from "./BillPayDashboard";
import AdminDashboard from "./AdminDashboard";
import PpCalls from "./PpCalls";
import BpCalls from "./BpCalls";
import PayBill from "./PayBill";
import TopUp from "./TopUp";
import Plans from "./Plans";
import NewPlan from "./NewPlan";
import AddToPlan from "./AddToPlan";
import PpDashboard from "./PrePayDashboard";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const App = () => {
  useEffect(() => {
    document.title = "Telecoms Corp";
  }, []);
  return (
    <div className="App">
      <Route exact path="/" component={About} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/BillPayDashboard" component={BpDashboard} />
      <Route exact path="/AdminDashboard" component={AdminDashboard} />
      <Route exact path="/PpCalls" component={PpCalls} />
      <Route exact path="/BpCalls" component={BpCalls} />
      <Route exact path="/PayBill" component={PayBill} />
      <Route exact path="/TopUp" component={TopUp} />
      <Route exact path="/Plans" component={Plans} />
      <Route exact path="/NewPlan" component={NewPlan} />
      <Route exact path="/AddToPlan" component={AddToPlan} />
      <Route exact path="/PrePayDashBoard" component={PpDashboard} />
    </div>
  );
};
export default App;
