import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">Login</Link>
      </li>
      <li>
        <Link to="/Admin">Admin Login</Link>
      </li>
      <li>
        <Link to="/CustomerDashboard">Customer Dashboard</Link>
      </li>
      <li>
        <Link to="/AdminDashboard">Admin Dashboard</Link>
      </li>
      <li>
        <Link to="/Bills">Bills</Link>
      </li>
      <li>
        <Link to="/PayBill">Pay BIll</Link>
      </li>
      <li>
        <Link to="/Transactoins">Transactions</Link>
      </li>
      <li>
        <Link to="/TopUp">TopUp</Link>
      </li>
      <li>
        <Link to="/Plans">Plans</Link>
      </li>
      <li>
        <Link to="/NewPlan">New Plan</Link>
      </li>
    </ul>
  );
}

export default NavBar;
