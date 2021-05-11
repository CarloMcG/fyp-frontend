import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { updatePlan } from "./graphql/mutations";
import { listPlans } from "./graphql/queries";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import awsExports from "./aws-exports";
import AdminNav from "./AdminNav";

Amplify.configure(awsExports);

const initialState = {
  id: "",
  Users: "",
};

const AddToPlan = () => {
  const [formState, setFormState] = useState(initialState);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchPlans() {
    try {
      const planData = await API.graphql(graphqlOperation(listPlans));
      const plans = planData.data.listPlans.items;
    } catch (error) {
      console.log("error fetching plans");
    }
  }
  async function addUser() {
    try {
      if (!formState.Users || !formState.id) return;
      const plan = { ...formState };
      setPlans([...plans, plan]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(updatePlan, { input: plan }));
      console.log("User Added Successfully");
    } catch (error) {
      console.log("Error adding user to plan", error);
    }
  }
  return (
    <Container fluid>
      <AdminNav />
      <div class="cForm">
        <Form>
          <input
            type="text"
            onChange={(event) => setInput("Users", event.target.value)}
            value={formState.Users}
            placeholder="User ID"
            class="form-control form-fixer"
          ></input>

          <input
            type="text"
            onChange={(event) => setInput("id", event.target.value)}
            value={formState.id}
            placeholder="Plan ID"
            class="form-control form-fixer"
          ></input>

          <button onClick={addUser} class="btn btn-primary btn-lg active">
            Add User To Plan
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default AddToPlan;
