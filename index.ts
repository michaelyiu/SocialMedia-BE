// import { ApolloServer } from "@apollo/server";
import { ApolloServer } from "apollo-server-express"
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core"
import http from "http"
import express from "express"
import cors from "cors"
// import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./src/resolvers/index.js"
import { readFileSync } from "fs"
import mongoose from "mongoose"
import config from "./src/config/keys.js"
import models from "./src/models/index.js"
import jwt from "jsonwebtoken"
import { GraphQLError } from "graphql";
import path from "path"

const app = express()
const corsOptions = {
  origin: "*",
  credentials: true
}

app.use(express.json())

const httpServer = http.createServer(app)

const configDirectory = path.resolve(process.cwd(), "src")


const typeDefs = readFileSync(path.join(configDirectory, "schema.graphql"), { encoding: "utf-8" })

const db = config.MONGODB_URI;

mongoose.connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

  
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
  
  const startApolloServer = async(app, httpServer) => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
      context: async ({ req, res }) => {
        const user = await getMe(req.headers.authorization);
        // @ts-ignore
        res.header('Access-Control-Allow-Credentials', true)
        res.header('Access-Control-Allow-Origin', '*')

        res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
        res.header(
          'Access-Control-Allow-Headers',
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        )
        if (req.method === 'OPTIONS') {
          res.status(200).end()
          return
        }
        return {
          models,
          me: user,
          secret: config.SECRET
        };
      },
      introspection: true
    })
    await server.start()
    server.applyMiddleware({ app, cors: corsOptions })
    
  }


// console.log(`🚀 Server ready at ${url}`)

startApolloServer(app, httpServer)
app.listen(3000, () => console.info("Server started"));
export default httpServer
