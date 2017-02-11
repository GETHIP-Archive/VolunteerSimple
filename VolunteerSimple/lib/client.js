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
    saved: {
      type: [String],
      label: "saved"
    },

});


Clients.attachSchema(clientSchema);
