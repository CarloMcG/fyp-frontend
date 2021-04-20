import React, { useEffect, useState } from "react";
import background from "./background.png";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignIn,
} from "@aws-amplify/ui-react";
import API from "@aws-amplify/api";
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
