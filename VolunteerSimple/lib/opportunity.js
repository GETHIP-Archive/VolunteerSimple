export const Opportunity = new Mongo.Collection('Opportunity');

Opportunity = new SimpleSchema({
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
      type: String [],
      label: "accepts"
    },
    eventDate:{
      type: Date(),
      label: "eventDate"
    },
    owner: {
      type: String,
      label: "owner"
    }
});

Opprotunities.attatchSchema(Opportunity);
