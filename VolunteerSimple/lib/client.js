export const Clients = new Mongo.Collection('Clients');

clientSchema = new SimpleSchema({
    firstName: {
        type: String,
        label: "firstName",
        optional: true
    },
    lastName: {
        type: String,
        label: "lastName",
        optional: true
    },
    account: {
        type: String,
        label: "accountId",
        optional: true
    },
    saved: {
      type: [String],
      label: "saved",
      optional: true
    },
    email: {
      type: String,
      label: "email"
    },
    phone: {
      type: String,
      label: "phone"
    }
});


Clients.attachSchema(clientSchema);
