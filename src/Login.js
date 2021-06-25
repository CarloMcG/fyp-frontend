import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import background from "./background.png";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
} from "@aws-amplify/ui-react";

import Auth from "@aws-amplify/auth";
import { Hub } from "aws-amplify";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const group = useState();

  useEffect(() => {
    setAuthListener();
  }, []);

  async function setAuthListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          {
            getGroup();
          }
          break;
        case "signUp":
          console.log("user signed up");
          break;
        case "signOut":
          console.log("user signed out");
          break;
        case "signIn_failure":
          console.log("user sign in failed");
          break;
        case "tokenRefresh":
          console.log("token refresh succeeded");
          break;
        case "tokenRefresh_failure":
          console.log("token refresh failed");
          break;
        case "configured":
          console.log("the Auth module is configured");
          break;
        default:
          break;
      }
    });
  }

  async function getGroup() {
    const user = await Auth.currentAuthenticatedUser();
    const group = user.signInUserSession.accessToken.payload["cognito:groups"];
    console.log(group);
    if (group == "admin") {
      history.push("/AdminDashboard");
    } else if (group == "billpay") {
      history.push("/BillpayDashboard");
    } else if (group == "prepay") {
      history.push("/PrePayDashboard");
    } else {
      console.log("error");
    }
  }

  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Row className="">
        <Col class="row justify-content-center">
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            TelecomsCorp
          </h1>
          <div class="float-left">
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Title>Welcome!</Card.Title>
                <Card.Text>
                  This project was created as a Final Year Project while
                  pursuing my degree in Computer Science & Informaion Technology
                  at NUI Galway This site was built using React, and is hosted
                  using AWS. GraphQL APIs were also implemented to carry out
                  database operations.{" "}
                </Card.Text>
                <Card.Text>
                  The purpose of this site is to allow a sample VoIP comapny to
                  rate and charge calls using the same practices used by
                  traditional telecommunications companies.
                </Card.Text>
                <Card.Text>
                  Administrators can log in below to create and view billing
                  plans, and add specific users to billing plans. Billpay and
                  Prepay customers can log in to view thier call data and to pay
                  thier bills.
                </Card.Text>
                <Card.Text>
                  Feel free to take a look around, using the credentials
                  provided.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="float-right">
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Text>
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Account Type</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td colSpan="1">Administrator</td>
                        <td colSpan="1">admin</td>
                        <td colSpan="1">password</td>
                      </tr>
                      <tr>
                        <td colSpan="1">Billpay</td>
                        <td colSpan="1">billpayuser</td>
                        <td colSpan="1">billpayuser</td>
                      </tr>
                      <tr>
                        <td colSpan="1">Prepay</td>
                        <td colSpan="1">prepayuser</td>
                        <td colSpan="1">prepayuser</td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AmplifyAuthenticator usernameAlias="username">
              <AmplifySignUp
                slot="sign-up"
                usernameAlias="username"
                formFields={[
                  {
                    type: "username",
                    label: "Custom username Label",
                    placeholder: "custom username placeholder",
                    required: true,
                  },
                  {
                    type: "password",
                    label: "Custom Password Label",
                    placeholder: "custom password placeholder",
                    required: true,
                  },
                  {
                    type: "phone_number",
                    label: "Custom Phone Label",
                    placeholder: "custom Phone placeholder",
                    required: false,
                  },
                ]}
              />
              <AmplifySignIn slot="sign-in" usernameAlias="username" />
            </AmplifyAuthenticator>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
