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
    },
    org: {
      type: String,
      label: "org",
    },
    phone: {
      type: String,
      label: "phone"
    },
    email:{
      type: String,
      label: "email"
    }
});


Posters.attachSchema(posterSchema);
