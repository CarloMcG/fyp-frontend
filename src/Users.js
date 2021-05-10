import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Amplify from "aws-amplify";

import AdminNav from "./AdminNav";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const Users = () => {
  /*
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
  */
  return (
    <Container fluid>
      <AdminNav />

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
            </table>
          </Row>
        </div>
      </Col>
    </Container>
  );
};

export default Users;
