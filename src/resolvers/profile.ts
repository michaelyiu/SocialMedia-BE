import { combineResolvers } from "graphql-resolvers";
import { isAuthenticated } from "./authorization.js";
// import { isAuthenticated, hasProfile } from "./authorization";

import { GraphQLError } from "graphql";

import { validateProfileInput } from './../validation/profile.js'

export default {
  Query: {
    profiles:  async (parent, args, { me, models }, info) => {
      return models.Profile.find({}).sort({ date: -1 });
    },
    profile: combineResolvers(
      isAuthenticated,
      async (parent, args, { me, models }, info) => {
        return await models.Profile.findOne({ user: me.id });
      }
    ),
    profileByHandle: async (parent, args, { models }, info) => {
      return models.Profile.findOne({ handle: args.handle }).populate('user', ['name', 'avatar']).then(profile => {
        if (!profile) {
          throw new Error("There is no profile for this user");
        }
        return profile;
      })
        .catch(err => {
          throw new Error("")
        });
    }
  },
  Mutation: {
    updateProfile: combineResolvers(
      isAuthenticated,
        async (parent, args, { me, models }, info) => {
        const { errors, isValid } = validateProfileInput(args);

        if (!isValid) {
          throw new GraphQLError("Some required fields should not be empty!", { 
            extensions: {
              code: 'VALIDATION_FAILED',
              errors 
            }
          });
        }


        //Get fields
        const profileFields: { user?: string, handle?: string, company?: string, website?: string, location?: string, bio?: string, status?: string, githubUsername?: string, skills?: string[] } = {};

        profileFields.user = me.id;
        if (args.handle) profileFields.handle = args.handle;
        if (args.company || args.company === "")
          profileFields.company = args.company;
        if (args.website || args.website === "")
          profileFields.website = args.website;
        if (args.location || args.location === "")
          profileFields.location = args.location;
        if (args.bio || args.bio === "") profileFields.bio = args.bio;
        if (args.status || args.status === "")
          profileFields.status = args.status;
        if (args.githubUsername || args.githubUsername === "")
          profileFields.githubUsername = args.githubUsername;
        if (typeof args.skills !== "undefined") {
          profileFields.skills = args.skills.split(",");
        }
        const updatedProfile = await models.Profile.findOne({ user: me.id })
          .then(async profile => {
            if (profile) {
              return await models.Profile.findOneAndUpdate(
                { user: me.id },
                { $set: profileFields },
                { new: true }
              ).then(profile);
            } else {
              //Create
              //Check if handle exists
              return await models.Profile.findOne({ handle: profileFields.handle }).then(async profile => {
                if (profile) {
                  errors.handle = "ERROR~~";
                  throw new GraphQLError("Handle already exists")
                }
                //save profile
                return await models.Profile(profileFields).save().then(profile)
              })
            }
          })
        return updatedProfile;
      }
    ),
    deleteProfile: combineResolvers(
      isAuthenticated,
      async (parent, args, { me, models }, info) => {
        models.Profile.findOneAndRemove({ user: me.id }).then(() => {
          models.User.findOneAndRemove({ _id: me.id }).then(() => true)
        }).catch(err => {
          throw new Error("No profile found");
        })
        return true;
      }
    )
  },
  Profile: {
    user: async (profile, args, { models }) => {
      return await models.User.findOne({ _id: profile.user })
    }
  }
};