import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createPlan } from "./graphql/mutations";
import { listPlans } from "./graphql/queries";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
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
  const [formState, setFromState] = useState(initialState);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  function setInput(key, value) {
    setFromState({ ...formState, [key]: value });
  }

  async function fetchPlans() {
    try {
      const planData = await API.graphql(graphqlOperation(listPlans));
      const plans = planData.data.listPlans.items;
      setPlans(plans);
    } catch (error) {
      console.log("error fetching plans");
    }
  }

  async function addPlan() {
    try {
      if (!formState.id || !formState.planType) return;
      const plan = { ...formState };
      setPlans([...plans, plan]);
      setFromState(initialState);
      await API.graphql(graphqlOperation(createPlan, { input: plan }));
    } catch (error) {
      console.log("error creating plan:", error);
    }
  }
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
      <div class="cForm">
        <Form>
          <input
            type="text"
            onChange={(event) => setInput("id", event.target.value)}
            value={formState.id}
            placeholder="Plan ID"
            class="form-control form-fixer"
          ></input>

          <select
            class="form-control form-fixer"
            onChange={(event) => setInput("planType", event.target.value)}
            value={formState.planType}
          >
            <option value="NULL">Plan Type </option>
            <option value="Billpay">Billpay</option>
            <option value="Prepay">Prepay</option>
          </select>

          <input
            type="number"
            onChange={(event) => setInput("mobileMinutes", event.target.value)}
            value={formState.mobileMinutes}
            placeholder="Mobile Minuts"
            class="form-control form-fixer"
          ></input>

          <input
            type="number"
            onChange={(event) => setInput("mobileRate", event.target.value)}
            value={formState.mobileRate}
            placeholder="Mobile Rate"
            class="form-control form-fixer"
          ></input>

          <input
            type="number"
            onChange={(event) =>
              setInput("landlineMinutes", event.target.value)
            }
            value={formState.landlineMinutes}
            placeholder="Landline Minutes"
            class="form-control form-fixer"
          ></input>

          <input
            type="number"
            onChange={(event) => setInput("landlineRate", event.target.value)}
            value={formState.landlineRate}
            placeholder="Landline Rate"
            class="form-control form-fixer"
          ></input>

          <input
            type="number"
            onChange={(event) =>
              setInput("internationalMinutes", event.target.value)
            }
            value={formState.internationalMinutes}
            placeholder="International Minutes"
            class="form-control form-fixer"
          ></input>

          <input
            type="number"
            onChange={(event) =>
              setInput("internationalRate", event.target.value)
            }
            value={formState.internationalRate}
            placeholder="International Rate"
            class="form-control form-fixer"
          ></input>

          <input
            type="number"
            onChange={(event) => setInput("premiumMinutes", event.target.value)}
            value={formState.premiumMinutes}
            placeholder="Premium Minutes"
            class="form-control form-fixer"
          ></input>

          <input
            type="number"
            onChange={(event) => setInput("premiumRate", event.target.value)}
            value={formState.premiumRate}
            placeholder="Premium Rate"
            class="form-control form-fixer"
          ></input>

          <input
            type="number"
            onChange={(event) => setInput("costPerMonth", event.target.value)}
            value={formState.costPerMonth}
            placeholder="Cost Per Month"
            class="form-control form-fixer"
          ></input>

          <button onClick={addPlan} class="btn btn-primary btn-lg active">
            Save Plan
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default NewPlan;
