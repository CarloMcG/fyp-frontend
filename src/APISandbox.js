import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { createPlan } from "./graphql/mutations";
import { listPlans } from "./graphql/queries";
import Form from "react-bootstrap/Form";

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

const Api = () => {
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
    <div>
      <h2>Plans</h2>
      <Form class="form-inline form-group">
        <label class="fLabel">Plan ID</label>
        <input
          type="text"
          class="form-control form-fixer m-1"
          onChange={(event) => setInput("id", event.target.value)}
          value={formState.id}
          placeholder="Plan ID"
        ></input>

        <label class="fLabel">Plan Type</label>
        <select
          class="form-control form-fixer m-1 p-1"
          onChange={(event) => setInput("planType", event.target.value)}
          value={formState.planType}
          placeholder="Plan Type"
        >
          <option value="Billpay">Billpay</option>
          <option value="Prepay">Prepay</option>
        </select>

        <label class="fLabel">Mobile Minutes</label>
        <input
          type="number"
          onChange={(event) => setInput("mobileMinutes", event.target.value)}
          value={formState.mobileMinutes}
          placeholder="Mobile Minuts"
          class="form-control form-fixer m-1 p-1"
        ></input>

        <label class="fLabel">Mobile Rate</label>
        <input
          type="number"
          onChange={(event) => setInput("mobileRate", event.target.value)}
          value={formState.mobileRate}
          placeholder="Mobile Rate"
          class="form-control form-fixer m-1 p-1"
        ></input>

        <label class="fLabel">Landline Minutes</label>
        <input
          type="number"
          onChange={(event) => setInput("landlineMinutes", event.target.value)}
          value={formState.landlineMinutes}
          placeholder="Landline Minutes"
          class="form-control form-fixer m-1 p-1"
        ></input>

        <label class="fLabel">Landline Rate</label>
        <input
          type="number"
          onChange={(event) => setInput("landlineRate", event.target.value)}
          value={formState.landlineRate}
          placeholder="Landline Rate"
          class="form-control form-fixer m-1 p-1"
        ></input>

        <label class="fLabel">International Minutes</label>
        <input
          type="number"
          onChange={(event) =>
            setInput("internationalMinutes", event.target.value)
          }
          value={formState.internationalMinutes}
          placeholder="International Minutes"
          class="form-control form-fixer m-1 p-1"
        ></input>

        <label class="fLabel">International Rate</label>
        <input
          type="number"
          onChange={(event) =>
            setInput("internationalRate", event.target.value)
          }
          value={formState.internationalRate}
          placeholder="International Rate"
          class="form-control form-fixer m-1 p-1"
        ></input>

        <label class="fLabel">Premium Minutes</label>
        <input
          type="number"
          onChange={(event) => setInput("premiumMinutes", event.target.value)}
          value={formState.premiumMinutes}
          placeholder="Premium Minutes"
          class="form-control form-fixer m-1 p-1"
        ></input>

        <label class="fLabel">Premium Rate</label>
        <input
          type="number"
          onChange={(event) => setInput("premiumRate", event.target.value)}
          value={formState.premiumRate}
          placeholder="Premium Rate"
          class="form-control form-fixer m-1 p-1"
        ></input>

        <label class="fLabel">Cost Per Month</label>
        <input
          type="number"
          onChange={(event) => setInput("costPerMonth", event.target.value)}
          value={formState.costPerMonth}
          placeholder="Cost Per Month"
          class="form-control form-fixer m-1 p-1"
        ></input>

        <button onClick={addPlan}>Save Plan</button>
      </Form>
      {plans.map((plan, index) => (
        <div key={plan.id ? plan.id : index}>
          <p>{plan.id}</p>
          <p>{plan.planType}</p>
          <p>{plan.mobileMinutes}</p>
          <p>{plan.mobileRate}</p>
          <p>{plan.landlineMinutes}</p>
          <p>{plan.landlineRate}</p>
          <p>{plan.internationalMinutes}</p>
          <p>{plan.internationalRate}</p>
          <p>{plan.premiumMinutes}</p>
          <p>{plan.premiumRate}</p>
          <p>{plan.costPerMonth}</p>
        </div>
      ))}
    </div>
  );
};

export default Api;
