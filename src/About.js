import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import background from "./background.png";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function About() {
  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
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

          <div
            style={{
              justifyContent: "center",
              textAlign: "center",
              verticalAlign: "middle",
              display: "flex",
            }}
            class=" row align-items-center"
          >
            <div class=" col-lg-6">
              <div class="card  mb-3">
                <div class="card-body">
                  <h4 class="card-title">Welcome!</h4>
                  <p class="card-text">
                    This project was created as a Final Year Project while
                    pursuing my degree in Computer Science & Informaion
                    Technology at NUI Galway This site was built using React,
                    and is hosted using AWS. GraphQL APIs were also implemented
                    to carry out database operations.
                  </p>
                  <p class="card-text">
                    The purpose of this site is to allow a sample VoIP comapny
                    to rate and charge calls using the same practices used by
                    traditional telecommunications companies.
                  </p>
                  <p class="card-text">
                    Administrators can log in below to create and view billing
                    plans, and add specific users to billing plans. Billpay and
                    Prepay customers can log in to view thier call data and to
                    pay thier bills.
                  </p>
                  <p class="card-text">
                    Call costs are calculated by multiplying the duration of
                    each individual call with its corresponding rate, dependent
                    on the type of call (i.e. Mobile, Landline, International or
                    Premium calls). This rate is different for each user,
                    depending on their plan.
                  </p>
                  <p class="card-text">
                    Feel free to take a look around, using the credentials
                    provided on the login page.
                  </p>
                  <a class="btn btn-primary btn-lg active" href="/Login">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
