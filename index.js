const express = require('express')
const { graphqlHTTP } = require('express-graphql') // requiring express-graphql, gives a nice user interface
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql')
const app = express()
const PORT = process.env.PORT || 5000

//defining schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World',
      },
    }),
  }),
})
//middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
)
//listening to the server
app.listen(PORT, () => console.log(`-------server is up and running-------`))
