import { Opportunity }  from '../../lib/opportunity.js'

Meteor.subscribe("Opportunity");

Template.dashboard.helpers({
    post: function() {
      console.log(Opportunity.find({_id: "5EtGWqhZnfN9eDdAo"}).fetch());
        return Opportunity.find();
    }
});
