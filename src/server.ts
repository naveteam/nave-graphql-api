import koa, { Request, Response } from 'koa'
import route from 'koa-router'
import logger from 'koa-logger'
import json from 'koa-json'
import bodyparser from 'koa-bodyparser'
import cors from 'kcors'
import dotenv from 'dotenv-safe'
import { GraphQLError } from 'graphql'
import koaPlayground from 'graphql-playground-middleware-koa'
import multer from 'koa-multer'
const graphqlHTTP = require('koa-graphql')

import schema from './schema'
import { getUser } from './auth'

// init router and koa
const app = new koa()
const router = new route()
//init doenv
dotenv.load()

// middlewares
app.use(logger())
app.use(cors())
app.use(json())
app.use(bodyparser())
app.use(router.routes())
app.use(router.allowedMethods())

const graphqlSettingsPerReq = async (req: Request, ctx: Response) => {
  const { user } = await getUser(req.header.authorization)

  // const dataloaders = Object.keys(loaders).reduce(
  //   (acc, loaderKey) => ({
  //     ...acc,
  //     [loaderKey]: loaders[loaderKey].getLoader(),
  //   }),
  //   {},
  // );

  return {
    graphiql: process.env.NODE_ENV !== 'production',
    schema,
    rootValue: {
      request: ctx.req,
    },
    context: {
      user,
      req,
      // dataloaders,
    },
    formatError: (error: GraphQLError) => {
      console.log(error.message)
      console.log(error.locations)
      console.log(error.stack)

      return {
        message: error.message,
        locations: error.locations,
        stack: error.stack,
      }
    },
  }
}

const graphqlServer = graphqlHTTP(graphqlSettingsPerReq)

const storage = multer.memoryStorage()
const limits = {
  // Increasing max upload size to 30 mb, since busboy default is only 1 mb
  fieldSize: 30 * 1024 * 1024,
}

router.all('/graphql', multer({ storage, limits }).any(), graphqlServer)
router.all(
  '/graphiql',
  koaPlayground({
    endpoint: '/graphql',
    subscriptionEndpoint: `ws://localhost:${process.env.GRAPHQL_PORT}/subscriptions`,
  })
)

export default app
