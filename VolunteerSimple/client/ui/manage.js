import { Opportunity }  from '../../lib/opportunity.js'
import { Clients }  from '../../lib/client.js'


Meteor.subscribe("Opportunity");
Meteor.subscribe("Clients");

Template.manage.helpers({
  data: function(){
    return Opportunity.find({owner: Meteor.user()._id});
  }
});


Template.manage.events({
  'click .details': function(event){
    FlowRouter.go('/information/' + event.target.id);
  },
  'click .edit': function(event){
    FlowRouter.go('/details/' + event.target.id);
  },
  'click .remove': function(event){
    Meteor.call("removeOpp", event.target.id);
  },
  'click .add': function(event){
    FlowRouter.go("/new");
  }
});
