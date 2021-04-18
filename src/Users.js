import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "./graphql/queries";
import { AmplifySignOut } from "@aws-amplify/ui-react";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers));
      const users = userData.data.listUsers.items;
      setUsers(users);
    } catch (errror) {
      console.log("Error fetching users");
    }
  }
  return (
    <Container fluid>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/CustomerDashboard">
          TelecomsCorp
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/AdminDashboard">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/Users">
                Users<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/Plans">
                Plans<span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
        <div class=" float-right">
          <AmplifySignOut />
        </div>
      </nav>

      <Col>
        <div class="jumbotron justify-content-center">
          <Row>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">User ID</th>
                  <th scope="col">Username</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Account Type</th>
                  <th scope="col">Plan ID</th>
                </tr>
              </thead>
              {users.map((user, index) => (
                <tbody>
                  <tr key={user.id ? user.id : index}>
                    <td colSpan="1">{user.id}</td>
                    <td colSpan="1">{user.Name}</td>
                    <td colSpan="1">{user.PhoneNum}</td>
                    <td colSpan="1">{user.AccountType}</td>
                    <td colSpan="1">{user.Plan}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </Row>
        </div>
      </Col>
    </Container>
  );
};

export default Users;
