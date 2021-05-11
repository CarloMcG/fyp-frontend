/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBill = /* GraphQL */ `
  query GetBill($id: ID!) {
    getBill(id: $id) {
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
export const listBills = /* GraphQL */ `
  query ListBills(
    $filter: ModelBillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        StartDate
        EndDate
        Amount
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBills = /* GraphQL */ `
  query SyncBills(
    $filter: ModelBillFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBills(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        StartDate
        EndDate
        Amount
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCall = /* GraphQL */ `
  query GetCall($id: ID!) {
    getCall(id: $id) {
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
export const listCalls = /* GraphQL */ `
  query ListCalls(
    $filter: ModelCallFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCalls = /* GraphQL */ `
  query SyncCalls(
    $filter: ModelCallFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCalls(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
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
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
    }
  }
`;
export const syncPlans = /* GraphQL */ `
  query SyncPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlans(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
