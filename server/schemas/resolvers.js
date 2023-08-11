const users = [
    { id: 1, username: "john_doe", email: "john@example.com" },
    { id: 2, username: "jane_doe", email: "jane@example.com" },
  ];
  
  const resolvers = {
    Query: {
      users: () => users,
    },
  };
  
  module.exports = resolvers;
  