// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Call, Plan } = initSchema(schema);

export {
  User,
  Call,
  Plan
};