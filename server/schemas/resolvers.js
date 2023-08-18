const User = require('../models/Profiles');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // finds user based on their id
        me: async (parent, args, context) => {
            if (context.user) {
                const foundUser = await User.findOne({ _id: context.user._id });
                return foundUser;
            }
            throw new Error('Not authenticated. Please log in.');
        },
    },
    Mutation: {
        // finds user by email and then checks if password is correct
        // if password is correct it creates a token for the logged-in user
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new Error("Can't find this user");
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new Error('Wrong password!');
            }
      
            const token = signToken(user);
      
            console.log("Logged in user:", user);
      
            return { token, user };
          },
        // reates a user with username, email, password and assigns a token to that user
        addProfile: async (parent, { username, email, password }) => {
            try {
              console.log("Username3:", username);
              const existingUser = await User.findOne({ username });
              console.log("Existing user:", existingUser)
              if (existingUser) {
                throw new Error('Username already exists!');
              }
              console.log("Username4:", username);
              const user = await User.create({ username, name: username, email, password }).catch(result => {
                console.log(result)

              });

              console.log("Created user1:", user)
              if (!user) {
                throw new Error('Something is wrong!');
              }
              
              const token = signToken(user);
            
              
              return { token, user };
            } catch (error) {
              // Handle the duplicate key error code from MongoDB
              if (error.code === 11000) {
                throw new Error('Duplicate key error. Please check the data and try again.');
              }
              // Re-throw the error if it's not the duplicate key error
              throw error;
            }
          },
        // Updates the user's previous score
        updatePreviousScore: async (parent, { email, previousScore }, context) => {
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    { email: email },
                    { previousScore },
                    { new: true }
                );
        
                console.log("Updated user:", user);
        
                return user;
            }
            throw new Error('Not authenticated. Please log in.');
        },
    }
};

module.exports = resolvers;