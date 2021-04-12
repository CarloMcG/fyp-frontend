/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserModel = /* GraphQL */ `
  mutation CreateUserModel(
    $input: CreateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    createUserModel(input: $input, condition: $condition) {
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
export const updateUserModel = /* GraphQL */ `
  mutation UpdateUserModel(
    $input: UpdateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    updateUserModel(input: $input, condition: $condition) {
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
export const deleteUserModel = /* GraphQL */ `
  mutation DeleteUserModel(
    $input: DeleteUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    deleteUserModel(input: $input, condition: $condition) {
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
export const createCallModel = /* GraphQL */ `
  mutation CreateCallModel(
    $input: CreateCallModelInput!
    $condition: ModelCallModelConditionInput
  ) {
    createCallModel(input: $input, condition: $condition) {
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
export const updateCallModel = /* GraphQL */ `
  mutation UpdateCallModel(
    $input: UpdateCallModelInput!
    $condition: ModelCallModelConditionInput
  ) {
    updateCallModel(input: $input, condition: $condition) {
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
export const deleteCallModel = /* GraphQL */ `
  mutation DeleteCallModel(
    $input: DeleteCallModelInput!
    $condition: ModelCallModelConditionInput
  ) {
    deleteCallModel(input: $input, condition: $condition) {
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
export const createPlanModel = /* GraphQL */ `
  mutation CreatePlanModel(
    $input: CreatePlanModelInput!
    $condition: ModelPlanModelConditionInput
  ) {
    createPlanModel(input: $input, condition: $condition) {
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
export const updatePlanModel = /* GraphQL */ `
  mutation UpdatePlanModel(
    $input: UpdatePlanModelInput!
    $condition: ModelPlanModelConditionInput
  ) {
    updatePlanModel(input: $input, condition: $condition) {
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
export const deletePlanModel = /* GraphQL */ `
  mutation DeletePlanModel(
    $input: DeletePlanModelInput!
    $condition: ModelPlanModelConditionInput
  ) {
    deletePlanModel(input: $input, condition: $condition) {
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
