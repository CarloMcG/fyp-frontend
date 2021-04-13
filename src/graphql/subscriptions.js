/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCall = /* GraphQL */ `
  subscription OnCreateCall {
    onCreateCall {
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
export const onUpdateCall = /* GraphQL */ `
  subscription OnUpdateCall {
    onUpdateCall {
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
export const onDeleteCall = /* GraphQL */ `
  subscription OnDeleteCall {
    onDeleteCall {
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
