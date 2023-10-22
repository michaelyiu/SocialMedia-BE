import { QueryResolvers } from "../__generated__/resolvers-types"

const queries: QueryResolvers = {
  users: async(_, __, {}, info) => {
    return []
  }
}


export default queries