import { Resolvers } from "../__generated__/resolvers-types"
import user from "./user.js"
import profile from "./profile.js"
import experience from "./experience.js"
import education from "./education.js"

const resolvers: Resolvers = [ user, profile, experience, education ]

export default resolvers