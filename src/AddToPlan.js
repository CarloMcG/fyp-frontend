import React from "react";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import AdminNav from "./AdminNav";
function AddToPlan() {
  return (
    <Container fluid>
      <AdminNav />
      <Col class="row justify-content-center">
        <div class="jumbotron vertical-center row justify-content-center">
          <Form class="form-inline text-center">
            <div class="form-inline form-group">
              <label class="fLabel">User</label>
              <input
                type="text"
                id="uID"
                placeholder="User ID"
                class="form-control form-fixer m-1"
              ></input>
            </div>
            <div class="form-inline form-group">
              <label class="fLabel">Plan</label>
              <input
                type="text"
                id="uID"
                placeholder="Plan ID"
                class="form-control form-fixer m-1"
              ></input>
            </div>

            <div class="row justify-content-center">
              <div class="btn-group float-right">
                <a
                  href="/plans"
                  class="btn btn-primary btn-lg active"
                  role="button"
                  aria-pressed="true"
                >
                  Save Changes
                </a>
              </div>
            </div>
          </Form>
        </div>
      </Col>
    </Container>
  );
}

export default AddToPlan;
