const typeDefs = `
    # Profile type representing a user profile
    type Profile {
        name: String!
        email: String!
    }

    # Response type for the login mutation
    type Auth {
        token: String!
        user: Profile!
    }

    # Queries allow fetching data
    type Query {
        profiles: [Profile]!
        profile(name: String!): Profile
    }

    # Mutations allow creating, updating, and deleting data
    type Mutation {
        createProfile(name: String!, email: String!, password: String!): Profile!
        updateProfile(name: String!, email: String, password: String): Profile
        deleteProfile(name: String!): Profile
    }
`;

module.exports = typeDefs;