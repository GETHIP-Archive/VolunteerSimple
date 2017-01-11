export const Posts = new Mongo.Collection('Posts');

oppro = new SimpleSchema({
    title: {
        type: String,
        label: "title"
    },
    description: {
      type: String,
      label: "description",
    },
    createdAt: {
      type: Date,
      label: "createdAt"
    }
});



posterSchema = new SimpleSchema({
    firstName: {
        type: String,
        label: "firstName"
    },
    lastName: {
        type: String,
        label: "lastName"
    },
    account: {
        type: String,
        label: "accountId"
    },
    oppro: {
      type: [oppro]
    }
});


Posts.attachSchema(posterSchema);
