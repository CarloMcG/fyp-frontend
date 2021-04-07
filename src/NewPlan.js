import React from "react";
import Container from "react-bootstrap/Container";

import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AmplifySignOut } from "@aws-amplify/ui-react";
function newplan() {
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
              <a class="nav-link" href="/Users">
                Users<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/Plans">
                Plans<span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
        <div class=" float-right">
          <AmplifySignOut />
        </div>
      </nav>

      <Col class="row justify-content-center">
        <div class="jumbotron vertical-center row justify-content-center">
          <Form class="form-inline text-center">
            <div class="form-inline form-group">
              <label class="fLabel">Plan ID</label>
              <input
                type="text"
                id="pID"
                class="form-control form-fixer m-1"
              ></input>
            </div>
            <div class="form-inline">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                BillPay
              </label>

              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                PrePay
              </label>
            </div>
            <div class="form-inline">
              <label class="fLabel">Mobile Minutes</label>
              <input
                type="number"
                id="mm"
                class="form-control form-fixer m-1 p-1"
              ></input>
            </div>{" "}
            <div class="form-inline">
              <label class="fLabel">Mobile Rate</label>
              <input
                type="number"
                id="mr"
                class="form-control form-fixer m-1 p-1"
              ></input>
            </div>{" "}
            <div class="form-inline">
              <label class="fLabel">Landline Minutes</label>
              <input
                type="number"
                id="lm"
                class="form-control form-fixer m-1 p-1"
              ></input>
            </div>{" "}
            <div class="form-inline">
              <label class="fLabel">Landline Rate</label>
              <input
                type="number"
                id="lr"
                class="form-control form-fixer m-1 p-1"
              ></input>
            </div>{" "}
            <div class="form-inline">
              <label class="fLabel">International Minutes</label>
              <input
                type="number"
                id="im"
                class="form-control form-fixer m-1 p-1"
              ></input>
            </div>{" "}
            <div class="form-inline">
              <label class="fLabel">International Rate</label>
              <input
                type="number"
                id="ir"
                class="form-control form-fixer m-1 p-1"
              ></input>
            </div>{" "}
            <div class="form-inline">
              <label class="fLabel">Premium Minutes</label>
              <input
                type="number"
                id="pm"
                class="form-control form-fixer m-1 p-1"
              ></input>
            </div>
            <div class="form-inline">
              <label class="fLabel">Premium Rate</label>
              <input
                type="number"
                id="pRate"
                class="form-control form-fixer m-1 p-1"
              ></input>
            </div>
            <h6 class="fLabel">Cost Per Month: €</h6>
            <div class="row justify-content-center">
              <div class="btn-group float-right">
                <a
                  href="/plans"
                  class="btn btn-primary btn-lg active"
                  role="button"
                  aria-pressed="true"
                >
                  Save Plan
                </a>
              </div>
            </div>
          </Form>
        </div>
      </Col>
    </Container>
  );
}

export default newplan;
