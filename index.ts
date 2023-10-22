import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./src/resolvers/index.js"
import { readFileSync } from "fs"
import mongoose from "mongoose"
import config from "./src/config/keys"
import models from "./src/models/index.js"
import jwt from "jsonwebtoken"
import { GraphQLError } from "graphql";

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

//validate jwt then set me in graphql server context
const getMe = async (token) => {
	if (token) {
		try {
			const user = await jwt.verify(token, config.SECRET, {
				algorithm: ["HS256"]
			})
			return user;
		} catch (e) {
			console.log(e)
			return new GraphQLError("Your Session expired. Sign in again.");
		}
	}
};

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => {
    const user = await getMe(req.headers.authorization);
    return {
      models,
      me: user,
      secret: config.SECRET
    };
  }
})

console.log(`🚀 Server ready at ${url}`)

