import jwt from 'jsonwebtoken'
import { getRepository } from 'typeorm'

import { User } from './entity/User'
import { jwtSecret } from './config'

export async function getUser(token: string) {
  if (!token) return { user: null }

  try {
    const decodedToken: any = jwt.verify(token, jwtSecret)

    const user = await getRepository(User).findOne({
      id: decodedToken.id,
    })

    return {
      user,
    }
  } catch (err) {
    return { user: null }
  }
}

type UserType = {
  id: number
}

export function generateToken(user: UserType) {
  return jwt.sign({ id: user.id }, jwtSecret)
}
