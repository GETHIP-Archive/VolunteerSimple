import { Opportunity }  from '../../lib/opportunity.js'
import { Clients }  from '../../lib/client.js'


Meteor.subscribe("Opportunity");
Meteor.subscribe("Clients");

Template.manage.helpers({
  data: function(){
     console.log(Opportunity.find({owner: Meteor.user()._id}).fetch());
    return Opportunity.find({owner: Meteor.user()._id});
  }
});


Template.manage.events({
  'click .details': function(event){
    console.log(event.target.id);
    FlowRouter.go('/information/' + event.target.id);
  },
  'click .edit': function(event){
    FlowRouter.go('/details/' + event.target.id);
  }
});
