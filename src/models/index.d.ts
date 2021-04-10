import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class UserModel {
  readonly id: string;
  readonly Name: string;
  readonly PhoneNum: number;
  readonly AccountType: string;
  readonly Plan: string;
  readonly UserModelPlanModels?: PlanModel;
  readonly CallModels?: (CallModel | null)[];
  readonly planmodelID: string;
  constructor(init: ModelInit<UserModel>);
  static copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel>) => MutableModel<UserModel> | void): UserModel;
}

export declare class PlanModel {
  readonly id: string;
  readonly type: boolean;
  readonly MobileMinutes: number;
  readonly MobileRate: number;
  readonly LandlineMinutes: number;
  readonly LandlineRate: number;
  readonly IntMinutes: number;
  readonly IntRate: number;
  readonly PremMinutes: number;
  readonly PremRate: number;
  readonly CostPerMonth: number;
  readonly UserModels?: (UserModel | null)[];
  readonly CallModels?: (CallModel | null)[];
  constructor(init: ModelInit<PlanModel>);
  static copyOf(source: PlanModel, mutator: (draft: MutableModel<PlanModel>) => MutableModel<PlanModel> | void): PlanModel;
}

export declare class CallModel {
  readonly id: string;
  readonly NumCalling: number;
  readonly NumCalled: number;
  readonly StartTime: string;
  readonly EndTime: string;
  readonly CallType: string;
  readonly Cost: number;
  readonly usermodelID: string;
  readonly planmodelID: string;
  constructor(init: ModelInit<CallModel>);
  static copyOf(source: CallModel, mutator: (draft: MutableModel<CallModel>) => MutableModel<CallModel> | void): CallModel;
}