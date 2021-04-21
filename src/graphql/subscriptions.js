/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBill = /* GraphQL */ `
  subscription OnCreateBill($owner: String) {
    onCreateBill(owner: $owner) {
      id
      StartDate
      EndDate
      Amount
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      BillCalls {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateBill = /* GraphQL */ `
  subscription OnUpdateBill($owner: String) {
    onUpdateBill(owner: $owner) {
      id
      StartDate
      EndDate
      Amount
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      BillCalls {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteBill = /* GraphQL */ `
  subscription OnDeleteBill($owner: String) {
    onDeleteBill(owner: $owner) {
      id
      StartDate
      EndDate
      Amount
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      BillCalls {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateCall = /* GraphQL */ `
  subscription OnCreateCall($owner: String) {
    onCreateCall(owner: $owner) {
      id
      NumCalling
      NumCalled
      StartTime
      EndTime
      CallType
      Cost
      billID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCall = /* GraphQL */ `
  subscription OnUpdateCall($owner: String) {
    onUpdateCall(owner: $owner) {
      id
      NumCalling
      NumCalled
      StartTime
      EndTime
      CallType
      Cost
      billID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCall = /* GraphQL */ `
  subscription OnDeleteCall($owner: String) {
    onDeleteCall(owner: $owner) {
      id
      NumCalling
      NumCalled
      StartTime
      EndTime
      CallType
      Cost
      billID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan {
    onCreatePlan {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan {
    onUpdatePlan {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan {
    onDeletePlan {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
