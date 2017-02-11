export const Posters = new Mongo.Collection('Posters');

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
    }
});


Posters.attachSchema(posterSchema);
