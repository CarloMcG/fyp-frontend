/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      Name
      PhoneNum
      AccountType
      Plan
      planmodelID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      CallModels {
        nextToken
        startedAt
      }
      UserModelPlanModels {
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
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        PhoneNum
        AccountType
        Plan
        planmodelID
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
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Name
        PhoneNum
        AccountType
        Plan
        planmodelID
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
      usermodelID
      planmodelID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        usermodelID
        planmodelID
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
        usermodelID
        planmodelID
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserModels {
        nextToken
        startedAt
      }
      CallModels {
        nextToken
        startedAt
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
