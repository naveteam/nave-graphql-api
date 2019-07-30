import { GraphQLString, GraphQLNonNull } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

export default mutationWithClientMutationId({
  name: 'loginUserMutation',
  inputFields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ email, password }) => {
    const user = { username: 'batman' }

    const defaultErrorMessage = 'Invalid login or password'
    if (!user) {
      return {
        error: defaultErrorMessage,
      }
    }

    return {
      token: 'batman',
    }
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
})
