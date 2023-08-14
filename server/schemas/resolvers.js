const Profile = require('../models/Profiles');
const bcrypt = require('bcrypt');

const resolvers = {
  // Query resolvers for fetching data
  Query: {
    // Fetch all profiles
    profiles: async () => {
      try {
        return await Profile.find({});
      } catch (error) {
        // Handle any errors that occur during the query
        throw new Error('Error fetching profiles');
      }
    },
    // Fetch a single profile by name
    profile: async (_, { name }) => {
      try {
        return await Profile.findOne({ name });
      } catch (error) {
        // Handle any errors that occur during the query
        throw new Error('Error fetching profile');
      }
    },
  },
  // Mutation resolvers for creating, updating, and deleting data
  Mutation: {
    // Create a new profile
    createProfile: async (_, { name, email, password }) => {
      try {
        return await Profile.create({ name, email, password });
      } catch (error) {
        // Handle any errors that occur during creation
        throw new Error('Error creating profile');
      }
    },
    // Update an existing profile
    updateProfile: async (_, { name, email, password }) => {
      try {
        const profile = await Profile.findOne({ name });
        // If profile is not found, throw an error
        if (!profile) throw new Error('Profile not found');
        // Update email if provided
        if (email) profile.email = email;
        // Update and hash password if provided
        if (password) {
          const saltRounds = 10;
          profile.password = await bcrypt.hash(password, saltRounds);
        }
        // Save the updated profile
        return await profile.save();
      } catch (error) {
        // Handle any errors that occur during updating
        throw new Error('Error updating profile');
      }
    },
    // Delete a profile by name
    deleteProfile: async (_, { name }) => {
      try {
        return await Profile.findOneAndDelete({ name });
      } catch (error) {
        // Handle any errors that occur during deletion
        throw new Error('Error deleting profile');
      }
    },
  },
};

module.exports = resolvers;