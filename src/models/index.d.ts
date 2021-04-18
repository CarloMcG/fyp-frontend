import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly Name: string;
  readonly PhoneNum: number;
  readonly AccountType: string;
  readonly Plan: string;
  readonly UserModelPlanModels?: Plan;
  readonly CallModels?: (Call | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Plan {
  readonly id: string;
  readonly planType: string;
  readonly mobileMinutes: number;
  readonly mobileRate: number;
  readonly landlineMinutes: number;
  readonly landlineRate: number;
  readonly internationalMinutes: number;
  readonly internationalRate: number;
  readonly premiumMinutes: number;
  readonly premiumRate: number;
  readonly costPerMonth: number;
  constructor(init: ModelInit<Plan>);
  static copyOf(source: Plan, mutator: (draft: MutableModel<Plan>) => MutableModel<Plan> | void): Plan;
}

export declare class Call {
  readonly id: string;
  readonly NumCalling: number;
  readonly NumCalled: number;
  readonly StartTime: string;
  readonly EndTime: string;
  readonly CallType: string;
  readonly Cost: number;
  readonly usermodelID?: string;
  constructor(init: ModelInit<Call>);
  static copyOf(source: Call, mutator: (draft: MutableModel<Call>) => MutableModel<Call> | void): Call;
}