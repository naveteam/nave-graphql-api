import 'reflect-metadata'
import { createConnection } from 'typeorm'

export default async () => {
  try {
    const connection = await createConnection()
    return connection
  } catch (error) {
    console.log(error)
  }
}
