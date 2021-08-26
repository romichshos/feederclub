const {GraphQLObjectType, GraphQLList} = require("graphql");
const RowType = require("./types");
const User = require("../../config/database/models");

const queryUser = module.exports = {query: new GraphQLObjectType({
    name: "query",
    fields: {
        users: {
            type: new GraphQLList(RowType),
            resolve: (root, args, context, info) => {
                return User.find({}, (err) => {
                    (err) ? console.log(err) : '';
                }).exec();
            }
        }
    }
})}