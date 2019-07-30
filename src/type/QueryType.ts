import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
} from 'graphql'
import UserType from '../modules/user/UserType'
import UserLoader from '../modules/user/UserLoader'

export default new GraphQLObjectType({
  name: 'QueryType',
  description: 'Get users[] and user',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: UserLoader.loadUser,
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
      resolve: UserLoader.loadUsers,
    },
  }),
})
