export default {
    Query: {
        getUser: (parent, { username }, { models }) => 
            models.User.findOne({
                where: {
                    username
                }
            }),
    },

    Mutation: {
        createUser: (parent, args, { models }) => models.User.create(args),
        updateUser: (parent, args, { models }) => models.User.update(args),
        deleteUser: (parent, args, { models }) => models.User.destroy(args)
    }
};