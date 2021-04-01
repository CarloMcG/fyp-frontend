// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PlanModel } = initSchema(schema);

export {
  PlanModel
};