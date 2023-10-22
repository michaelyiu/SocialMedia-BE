import  bcrypt from "bcryptjs"
import  gravatar from "gravatar"
import { createToken } from "../connectors/jwt.js";
import { MutationResolvers } from "../__generated__/resolvers-types"
import { validateRegisterInput } from "../validation/register.js";
import { validateLoginInput } from "../validation/login.js";
import { GraphQLError } from "graphql";
const mutations: MutationResolvers = {
  signup: async(_, args, {models}, info) => {
    const { errors, isValid } = validateRegisterInput(args.input);

    if (!isValid) {
      // throw new Error("Login failed!");
      throw new GraphQLError("Validation Failed!", { 
        extensions: {
          code: 'VALIDATION_FAILED',
          errors 
        }
      });
    }
    const { input: { email, password, name } } = args;
    const hashedPassword = await bcrypt.hash(password, 10);

    const checkIfExists = await models.User.findOne({ email }).then();

    if (checkIfExists) {
      errors.email = "User with that email already exists"
      throw new GraphQLError("Sign up failed!", { 
        extensions: {
          code: 'USER_ALREADY_EXISTS',
          errors 
        }
      });
      // throw new Error("Sign up failed!", { errors });
    }
    else {

      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
      const newUser = models.User.create({
        // id,
        email,
        password: hashedPassword,
        avatar,
        name
      });
      return newUser;
    }
  },

  login: async (parent, args, { models, secret, me }, info) => {
    const { errors, isValid } = validateLoginInput(args.input);
    if (!isValid) {
      throw new GraphQLError("Login failed!", { 
        extensions: {
          code: 'VALIDATION_FAILED',
          errors 
        }
      });
      
    }

    const { input: { email, password } } = args;
    const user = await models.User.findOne({ email }).then(async user => {
      if (!user) {
        errors.email = "User not found";
        throw new GraphQLError("Login failed!", { 
          extensions: {
            code: 'USER_NOT_FOUND',
            errors 
          }
        });
      }

      const passwordIsValid = await bcrypt.compare(password, user.password);

      if (!passwordIsValid) {
        throw new GraphQLError("Invalid login/password!", { 
          extensions: {
            code: 'BAD_USER_INPUT',
            errors 
          }
        });
      }

      return user;
    });
    const token = await createToken(user, secret);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    }
  }
}


export default mutations




      