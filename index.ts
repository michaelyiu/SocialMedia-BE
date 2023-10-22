import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./src/resolvers/index.js"
import { readFileSync } from "fs"
import mongoose from "mongoose"
import config from "./src/config/keys.js"
import models from "./src/models/index.js"

// const config = require("../src/config/keys.js")
const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" })

const db = config.MONGO_URI;

mongoose
  .connect(db)
  // .connect(db, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const server = new ApolloServer({
  typeDefs,
  resolvers,

})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    return {
      models,
      // me: user,
      secret: config.SECRET
    };
  }
})

console.log(`🚀 Server ready at ${url}`)

