import React from "react";
import background from "./background.png";
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
}

export default login;
