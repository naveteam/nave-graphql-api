import { GraphQLObjectType } from "graphql";

import Mutations from "../modules/main/mutation";

export default new GraphQLObjectType({
  name: "MutationType",
  fields: () => ({
    ...Mutations,
  }),
});
