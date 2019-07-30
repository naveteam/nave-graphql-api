import { GraphQLString, GraphQLNonNull } from 'graphql'
import { mutationWithClientMutationId } from 'graphql-relay'
import { getRepository } from 'typeorm'

import { User } from '../../../entity/User'

export default mutationWithClientMutationId({
  name: 'createUserMutation',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ name, email, password }) => {
    const user = await getRepository(User).findOne({ email })
    // msg's
    const createUserSuccess = 'User created successfully'
    const userExist = 'User exist'

    if (!user) {
      const user = await getRepository(User).create({
        username: name,
        email,
        password,
      })

      await user.save()
      return {
        msg: createUserSuccess,
      }
    }
    return {
      msg: userExist,
    }
  },
  outputFields: {
    msg: {
      type: GraphQLString,
      resolve: ({ msg }) => msg,
    },
    userExist: {
      type: GraphQLString,
      resolve: ({ userExist }) => userExist,
    },
  },
})
