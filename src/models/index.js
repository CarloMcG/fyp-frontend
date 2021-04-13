// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Plan, Call } = initSchema(schema);

export {
  User,
  Plan,
  Call
};