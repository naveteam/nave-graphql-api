import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import { globalIdField } from "graphql-relay";

export default new GraphQLObjectType({
  name: "Users",
  fields: () => ({
    id: globalIdField("Users"),
    _id: {
      type: GraphQLID,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
  }),
});
