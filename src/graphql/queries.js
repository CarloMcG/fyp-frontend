/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserModel = /* GraphQL */ `
  query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
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
        type
        MobileMinutes
        MobileRate
        LandlineMinutes
        LandlineRate
        IntMinutes
        IntRate
        PremMinutes
        PremRate
        CostPerMonth
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const listUserModels = /* GraphQL */ `
  query ListUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncUserModels = /* GraphQL */ `
  query SyncUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserModels(
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
export const getCallModel = /* GraphQL */ `
  query GetCallModel($id: ID!) {
    getCallModel(id: $id) {
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
export const listCallModels = /* GraphQL */ `
  query ListCallModels(
    $filter: ModelCallModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCallModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
export const syncCallModels = /* GraphQL */ `
  query SyncCallModels(
    $filter: ModelCallModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCallModels(
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
export const listPlanModels = /* GraphQL */ `
  query ListPlanModels(
    $filter: ModelPlanModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlanModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        MobileMinutes
        MobileRate
        LandlineMinutes
        LandlineRate
        IntMinutes
        IntRate
        PremMinutes
        PremRate
        CostPerMonth
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
export const getPlanModel = /* GraphQL */ `
  query GetPlanModel($id: ID!) {
    getPlanModel(id: $id) {
      id
      type
      MobileMinutes
      MobileRate
      LandlineMinutes
      LandlineRate
      IntMinutes
      IntRate
      PremMinutes
      PremRate
      CostPerMonth
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
export const syncPlanModels = /* GraphQL */ `
  query SyncPlanModels(
    $filter: ModelPlanModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlanModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        MobileMinutes
        MobileRate
        LandlineMinutes
        LandlineRate
        IntMinutes
        IntRate
        PremMinutes
        PremRate
        CostPerMonth
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
