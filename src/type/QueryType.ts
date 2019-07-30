import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} from "graphql";
import UserType from "../modules/main/UserType";

export default new GraphQLObjectType({
  name: "QueryType",
  description: "Get users[] and user",
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (parentValue, args, ctx) => {
        return { firstName: "joao", lastName: "pedro" };
      },
    },
    users: {
      type: new GraphQLList(UserType),
      args: {
        skip: {
          type: GraphQLInt,
        },
        limit: {
          type: GraphQLInt,
        },
      },
      resolve: (parentValue, args, ctx) => {
        return [{ firstName: "joao", lastName: "pedro" }];
      },
    },
  }),
});
