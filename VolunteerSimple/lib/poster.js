export const Posters = new Mongo.Collection('Posters');

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


Posters.attachSchema(posterSchema);
