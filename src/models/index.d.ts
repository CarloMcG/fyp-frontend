import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class PlanModel {
  readonly id: string;
  readonly type?: boolean;
  readonly MobileMinutes?: number;
  readonly MobileRate?: number;
  readonly LandlineMinutes?: number;
  readonly LandlineRate?: number;
  readonly IntMinutes?: number;
  readonly IntRate?: number;
  readonly PremMinutes?: number;
  readonly PremRate?: number;
  readonly CostPerMonth?: number;
  constructor(init: ModelInit<PlanModel>);
  static copyOf(source: PlanModel, mutator: (draft: MutableModel<PlanModel>) => MutableModel<PlanModel> | void): PlanModel;
}