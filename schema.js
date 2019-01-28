export default `
    type User {
        username: String!
        id: String!
        createdAt: String!
        updatedAt: String!
    }

    type Query {
        getUser(username: String!): User
    }

    type Mutation {
        createUser(username: String!): User
        updateUser(username: String!): [Int!]!
        deleteUser(username: String!): Int!
    }
`;