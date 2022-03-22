var express = require("express");
//var express_graphql = require("express-graphql");
var {buildSchema} = require('graphql');
const { graphqlHTTP } = require('express-graphql');





//GraphQL Schema:

var schema = buildSchema(`
    type Query{
        message: String
    }

`);

// Root resolver:
var root ={
    message: ()=>"hello World"
};

// create an express server and a GraphQL endpoint:


var app = express();
app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}));
app.listen(4000,()=>console.log("Express GraphQL server now running on port 4000"));