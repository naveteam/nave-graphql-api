const ENV = process.env

// Database Settings
const dBdevelopment = {
  database: ENV.DATABASE,
  username: ENV.DATABASEUSER,
  password: ENV.DATABASEPASSWORD,
}
const dBproduction = {
  database: ENV.DATABASE,
  username: ENV.DATABASEUSER,
  password: ENV.DATABASEPASSWORD,
}

// Export DB Settings
export const databaseConfig =
  ENV.NODE_ENV === 'production' ? dBproduction : dBdevelopment

// Export GraphQL Server settings
export const graphqlPort = ENV.PORT || 5000
export const jwtSecret = ENV.JWT_SECRET || 'secret_key'
