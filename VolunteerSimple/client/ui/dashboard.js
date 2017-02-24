import { Opportunity }  from '../../lib/opportunity.js'

Meteor.subscribe("Opportunity");

Template.dashboard.helpers({
    post: function() {
      console.log(Opportunity.find().fetch());
        return Opportunity.find();
    }
});
