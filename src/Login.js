import React from "react";

import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
} from "@aws-amplify/ui-react";

function login() {
  return (
    <Container fluid>
      <Row className="">
        <div class="wall col-5 vh-100">
          <Col>
            <h1 class="row justify-content-center">Welcome</h1>
            <div class="jumbotron  vertical-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Col>
        </div>

        <Col class="row justify-content-center">
          <div class="jumbotron vertical-center row justify-content-center">
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
}

export default login;
