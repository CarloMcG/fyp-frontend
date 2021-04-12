/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserModel = /* GraphQL */ `
  subscription OnCreateUserModel {
    onCreateUserModel {
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
export const onUpdateUserModel = /* GraphQL */ `
  subscription OnUpdateUserModel {
    onUpdateUserModel {
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
export const onDeleteUserModel = /* GraphQL */ `
  subscription OnDeleteUserModel {
    onDeleteUserModel {
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
export const onCreateCallModel = /* GraphQL */ `
  subscription OnCreateCallModel {
    onCreateCallModel {
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
export const onUpdateCallModel = /* GraphQL */ `
  subscription OnUpdateCallModel {
    onUpdateCallModel {
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
export const onDeleteCallModel = /* GraphQL */ `
  subscription OnDeleteCallModel {
    onDeleteCallModel {
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
export const onCreatePlanModel = /* GraphQL */ `
  subscription OnCreatePlanModel {
    onCreatePlanModel {
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
export const onUpdatePlanModel = /* GraphQL */ `
  subscription OnUpdatePlanModel {
    onUpdatePlanModel {
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
export const onDeletePlanModel = /* GraphQL */ `
  subscription OnDeletePlanModel {
    onDeletePlanModel {
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
