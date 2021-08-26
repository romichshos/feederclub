const {GraphQLObjectType, GraphQLID, GraphQLString} = require("graphql");
const GraphQLDate = require("graphql-date");

const RowType = module.exports = new GraphQLObjectType({
        name: 'Row',
        fields: () => ({
            id: {type: GraphQLID},
            created: {type: GraphQLDate},
            login: {
                type: new GraphQLObjectType({
                    name: 'Login',
                    fields: () => ({
                        username: {type: GraphQLString},
                        email: {type: GraphQLString},
                    })
                })
            }
        })
    })
;
