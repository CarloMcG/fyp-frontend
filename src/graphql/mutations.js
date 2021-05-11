/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBill = /* GraphQL */ `
  mutation CreateBill(
    $input: CreateBillInput!
    $condition: ModelBillConditionInput
  ) {
    createBill(input: $input, condition: $condition) {
      id
      StartDate
      EndDate
      Amount
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      BillCalls {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateBill = /* GraphQL */ `
  mutation UpdateBill(
    $input: UpdateBillInput!
    $condition: ModelBillConditionInput
  ) {
    updateBill(input: $input, condition: $condition) {
      id
      StartDate
      EndDate
      Amount
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      BillCalls {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteBill = /* GraphQL */ `
  mutation DeleteBill(
    $input: DeleteBillInput!
    $condition: ModelBillConditionInput
  ) {
    deleteBill(input: $input, condition: $condition) {
      id
      StartDate
      EndDate
      Amount
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      BillCalls {
        nextToken
        startedAt
      }
    }
  }
`;
export const createCall = /* GraphQL */ `
  mutation CreateCall(
    $input: CreateCallInput!
    $condition: ModelCallConditionInput
  ) {
    createCall(input: $input, condition: $condition) {
      id
      NumCalling
      NumCalled
      StartTime
      EndTime
      CallType
      Cost
      billID
      startTimeStamp
      endTimeStamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCall = /* GraphQL */ `
  mutation UpdateCall(
    $input: UpdateCallInput!
    $condition: ModelCallConditionInput
  ) {
    updateCall(input: $input, condition: $condition) {
      id
      NumCalling
      NumCalled
      StartTime
      EndTime
      CallType
      Cost
      billID
      startTimeStamp
      endTimeStamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCall = /* GraphQL */ `
  mutation DeleteCall(
    $input: DeleteCallInput!
    $condition: ModelCallConditionInput
  ) {
    deleteCall(input: $input, condition: $condition) {
      id
      NumCalling
      NumCalled
      StartTime
      EndTime
      CallType
      Cost
      billID
      startTimeStamp
      endTimeStamp
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
      id
      planType
      mobileMinutes
      mobileRate
      landlineMinutes
      landlineRate
      internationalMinutes
      internationalRate
      premiumMinutes
      premiumRate
      costPerMonth
      Users
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
      id
      planType
      mobileMinutes
      mobileRate
      landlineMinutes
      landlineRate
      internationalMinutes
      internationalRate
      premiumMinutes
      premiumRate
      costPerMonth
      Users
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
      id
      planType
      mobileMinutes
      mobileRate
      landlineMinutes
      landlineRate
      internationalMinutes
      internationalRate
      premiumMinutes
      premiumRate
      costPerMonth
      Users
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
