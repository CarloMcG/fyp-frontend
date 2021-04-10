// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserModel, PlanModel, CallModel } = initSchema(schema);

export {
  UserModel,
  PlanModel,
  CallModel
};