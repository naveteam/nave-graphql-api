import { GraphQLString, GraphQLNonNull } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'

import { User } from '../../../entity/User'
import { generateToken } from '../../../auth'

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
    const user = await User.findOne({ email, password })

    const defaultErrorMessage = 'Invalid login or password'
    if (!user) {
      return {
        error: defaultErrorMessage,
      }
    }

    return {
      token: generateToken(user),
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
