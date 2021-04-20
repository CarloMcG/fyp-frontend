import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly Name?: string;
  readonly PhoneNum?: string;
  readonly AccountType?: string;
  readonly Plan?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Call {
  readonly id: string;
  readonly NumCalling?: string;
  readonly NumCalled?: string;
  readonly StartTime?: string;
  readonly EndTime?: string;
  readonly CallType?: string;
  readonly Cost?: number;
  constructor(init: ModelInit<Call>);
  static copyOf(source: Call, mutator: (draft: MutableModel<Call>) => MutableModel<Call> | void): Call;
}

export declare class Plan {
  readonly id: string;
  readonly planType?: string;
  readonly mobileMinutes?: number;
  readonly mobileRate?: number;
  readonly landlineMinutes?: number;
  readonly landlineRate?: number;
  readonly internationalMinutes?: number;
  readonly internationalRate?: number;
  readonly premiumMinutes?: number;
  readonly premiumRate?: number;
  readonly costPerMonth?: number;
  constructor(init: ModelInit<Plan>);
  static copyOf(source: Plan, mutator: (draft: MutableModel<Plan>) => MutableModel<Plan> | void): Plan;
}