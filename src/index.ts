import 'reflect-metadata'
import express from 'express'
import { createConnection  } from 'typeorm'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { AppResolver } from './graphql/resolvers/app.resolver'

const main = async() => {
    await createConnection()
    const schema = await buildSchema({
       resolvers: [AppResolver]
    })
    const apolloServer = new ApolloServer({ schema })
    const app = express()
    apolloServer.applyMiddleware({ app })

    await app.listen(
        4000,
        () => console.log(`Server started on http://localhost:4000${apolloServer.graphqlPath}`)
    )

}
main()