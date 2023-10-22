import { GraphQLError } from "graphql"
import { skip } from "graphql-resolvers"

// method to check if logged in
const isAuthenticated = (parent, args, { me }) =>
  me ? skip : new GraphQLError("Not authenticated as user");

export { isAuthenticated };