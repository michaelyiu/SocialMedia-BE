const { ForbiddenError } = require("apollo-server-express");
const { skip } = require("graphql-resolvers");

// method to check if logged in
const isAuthenticated = (parent, args, { me }) =>
  me ? skip : new ForbiddenError("Not authenticated as user");

module.exports = { isAuthenticated };