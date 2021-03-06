import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'
import { globalIdField } from 'graphql-relay'

export default new GraphQLObjectType({
  name: 'Users',
  fields: () => ({
    id: globalIdField('Users'),
    _id: {
      type: GraphQLID,
    },
    username: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  }),
})
