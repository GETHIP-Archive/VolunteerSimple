export const Clients = new Mongo.Collection('Clients');

clientSchema = new SimpleSchema({
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
    taken: {
      type: [String],
      label: "taken"
    }
});


Clients.attachSchema(clientSchema);
