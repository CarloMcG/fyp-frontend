/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBill = /* GraphQL */ `
  subscription OnCreateBill {
    onCreateBill {
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
export const onUpdateBill = /* GraphQL */ `
  subscription OnUpdateBill {
    onUpdateBill {
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
export const onDeleteBill = /* GraphQL */ `
  subscription OnDeleteBill {
    onDeleteBill {
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
      Users
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
      Users
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
      Users
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
