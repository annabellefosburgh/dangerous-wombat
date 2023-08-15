const typeDefs =`
  # Profile type representing a user profile
  type Profile {
    _id: ID
    username: String
    email: String
    password: String
  }

  # Response type for the login mutation
  type Auth {
    token: String
    user: Profile
  }

  # Queries allow fetching data
  type Query {
    me: Profile
  }

  # Mutations allow creating, updating, and deleting data
  type Mutation {
    login(email: String!, password: String!): Auth
    addProfile(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;