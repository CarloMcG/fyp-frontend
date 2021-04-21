// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bill, Call, Plan } = initSchema(schema);

export {
  Bill,
  Call,
  Plan
};