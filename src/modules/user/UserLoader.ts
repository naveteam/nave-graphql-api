import UserType from './UserType'

// const loadUsers = (parentValue, args, ctx) => {
const loadUsers = () => {
  return [{ firstName: 'joao', lastName: 'pedro' }]
}

const loadUser = () => {
  return { firstName: 'joao', lastName: 'pedro' }
}

export default { loadUsers, loadUser }
