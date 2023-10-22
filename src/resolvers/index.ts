import { Resolvers } from "../__generated__/resolvers-types"
import user from "./user.js"
import profile from "./profile.js"
import experience from "./experience.js"
import education from "./education.js"

import post from "./post.js"
import comment from "./comment.js"
import like from "./like.js"

const resolvers: Resolvers = [ user, profile, experience, education, post, comment, like ]

export default resolvers