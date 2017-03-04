export const Opportunity = new Mongo.Collection('Opportunity');

opportunity = new SimpleSchema({
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
    },
    accepts: {
      type: [String],
      label: "accepts"
    },
    eventDate:{
      type: String,
      label: "eventDate"
    },
    owner: {
      type: String,
      label: "owner"
    },
    hours: {
      type: String,
      label: "hours"
    },
    location: {
      type: String,
      label: "location"
    },
    address: {
      type: String,
      label: "address"
    },
    deadline: {
      type: String,
      label: "deadline"
    },
    slots: {
      type: String,
      label: "slots"
    }
});

Opportunity.attachSchema(opportunity);
