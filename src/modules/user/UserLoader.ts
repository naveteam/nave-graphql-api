import { User } from '../../entity/User'

const loadUsers = () => {
  return User.find()
}

const loadUser = (ctx: any, args: any) => {
  return User.find({
    where: [
      {
        id: args.id,
      },
    ],
  })
}

export default { loadUsers, loadUser }
