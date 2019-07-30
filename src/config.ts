import dotenv from 'dotenv-safe'
dotenv.load()

const ENV = process.env

// Database Settings
const dBdevelopment = {
  database: ENV.DATABASE,
  username: ENV.DATABASE_USER,
  password: ENV.DATABASE_PASSWORD,
}
const dBproduction = {
  database: ENV.DATABASE,
  username: ENV.DATABASE_USER,
  password: ENV.DATABASE_PASSWORD,
}

// Export DB Settings
export const databaseConfig =
  ENV.NODE_ENV === 'production' ? dBproduction : dBdevelopment

// Export GraphQL Server settings
export const graphqlPort = ENV.GRAPHQL_PORT || 5000
export const jwtSecret = ENV.JWT_SECRET || 'secret_key'
