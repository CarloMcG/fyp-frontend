import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Bill {
  readonly id: string;
  readonly StartDate?: string;
  readonly EndDate?: string;
  readonly Amount?: number;
  readonly Calls?: (Call | null)[];
  constructor(init: ModelInit<Bill>);
  static copyOf(source: Bill, mutator: (draft: MutableModel<Bill>) => MutableModel<Bill> | void): Bill;
}

export declare class Call {
  readonly id: string;
  readonly NumCalling?: string;
  readonly NumCalled?: string;
  readonly StartTime?: string;
  readonly EndTime?: string;
  readonly CallType?: string;
  readonly Cost?: number;
  readonly startTimeStamp?: number;
  readonly endTimeStamp?: number;
  readonly billID?: string;
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
  readonly Users?: (string | null)[];
  constructor(init: ModelInit<Plan>);
  static copyOf(source: Plan, mutator: (draft: MutableModel<Plan>) => MutableModel<Plan> | void): Plan;
}