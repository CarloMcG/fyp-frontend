import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createPlan } from "./graphql/mutations";
import { listPlans } from "./graphql/queries";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import awsExports from "./aws-exports";
import AdminNav from "./AdminNav";

Amplify.configure(awsExports);

const initialState = {
  id: "",
  planType: "",
  mobileMinutes: "",
  mobileRate: "",
  landlineMinutes: "",
  landlineRate: "",
  internationalMinutes: "",
  internationalRate: "",
  premiumMinutes: "",
  premiumRate: "",
  costPerMonth: "",
};

const NewPlan = () => {
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

  async function addPlan() {
    try {
      if (!formState.id || !formState.planType) return;
      const plan = { ...formState };
      setPlans([...plans, plan]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createPlan, { input: plan }));
    } catch (error) {
      console.log("error creating plan:", error);
    }
  }

  return (
    <Container fluid>
      <AdminNav />
      <div class="cForm">
        <Form class="form-inline text-center">
          <div class="form-inline form-group">
            <label class="fLabel">ID:</label>
            <input
              type="text"
              name="id"
              onChange={(event) => setInput("id", event.target.value)}
              value={formState.id}
              placeholder="Plan ID"
              class="form-control form-fixer"
            ></input>
          </div>
          <div class="form-inline form-group">
            <label class="fLabel">Plan:</label>
            <select
              class="form-control form-fixer"
              onChange={(event) => setInput("planType", event.target.value)}
              value={formState.planType}
            >
              <option value="NULL">Plan Type </option>
              <option value="Billpay">Billpay</option>
              <option value="Prepay">Prepay</option>
            </select>
          </div>
          <div class="form-inline form-group">
            <label class="fLabel">Mobile Minutes:</label>
            <input
              type="number"
              onChange={(event) =>
                setInput("mobileMinutes", event.target.value)
              }
              value={formState.mobileMinutes}
              placeholder="Mobile Minutes"
              class="form-control form-fixer"
            ></input>
          </div>
          <div class="form-inline form-group">
            <label class="fLabel">Mobile Rate:</label>
            <input
              type="number"
              onChange={(event) => setInput("mobileRate", event.target.value)}
              value={formState.mobileRate}
              placeholder="Mobile Rate"
              class="form-control form-fixer"
            ></input>
          </div>
          <div class="form-inline form-group">
            <label class="fLabel">Landline Minutes:</label>
            <input
              type="number"
              onChange={(event) =>
                setInput("landlineMinutes", event.target.value)
              }
              value={formState.landlineMinutes}
              placeholder="Landline Minutes"
              class="form-control form-fixer"
            ></input>
          </div>
          <div class="form-inline form-group">
            <label class="fLabel">Landline Rate:</label>
            <input
              type="number"
              onChange={(event) => setInput("landlineRate", event.target.value)}
              value={formState.landlineRate}
              placeholder="Landline Rate"
              class="form-control form-fixer"
            ></input>
          </div>
          <div class="form-inline form-group">
            <label class="fLabel">International Minutes:</label>
            <input
              type="number"
              onChange={(event) =>
                setInput("internationalMinutes", event.target.value)
              }
              value={formState.internationalMinutes}
              placeholder="International Minutes"
              class="form-control form-fixer"
            ></input>
          </div>
          <div class="form-inline form-group">
            <label class="fLabel">International Rate</label>
            <input
              type="number"
              onChange={(event) =>
                setInput("internationalRate", event.target.value)
              }
              value={formState.internationalRate}
              placeholder="International Rate"
              class="form-control form-fixer"
            ></input>
          </div>
          <div class="form-inline form-group">
            <label class="fLabel">Premium Minutes:</label>
            <input
              type="number"
              onChange={(event) =>
                setInput("premiumMinutes", event.target.value)
              }
              value={formState.premiumMinutes}
              placeholder="Premium Minutes"
              class="form-control form-fixer"
            ></input>
          </div>
          <div class="form-inline form-group">
            <label class="fLabel">Premium Rate:</label>
            <input
              type="number"
              onChange={(event) => setInput("premiumRate", event.target.value)}
              value={formState.premiumRate}
              placeholder="Premium Rate"
              class="form-control form-fixer"
            ></input>
          </div>
          <div class="form-inline form-group">
            <label class="fLabel">Cost per Month:</label>
            <input
              type="number"
              onChange={(event) => setInput("costPerMonth", event.target.value)}
              value={formState.costPerMonth}
              placeholder="Cost Per Month"
              class="form-control form-fixer"
            ></input>
          </div>

          <button onClick={addPlan} class="btn btn-primary btn-lg active">
            Save Plan
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default NewPlan;
