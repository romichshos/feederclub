const {GraphQLSchema, GraphQLObjectType, GraphQLList} = require("graphql");
const queryUser = require("./queries");

const schema = module.exports = new GraphQLSchema(queryUser)