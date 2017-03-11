import { Clients }  from '../../lib/client.js'

import '../../lib/routes.js'

Meteor.subscribe("Clients");


Template.opportunity.helpers({
    stream: function() {
        return Opprounity.find();
    },
    status: function(){

    }
});

Template.opportunity.events({
  'click .save': function (event){
    if(Clients.findOne({account: Meteor.user()._id}).saved.includes(event.target.id)){
       Meteor.call("modSave", Meteor.user()._id, event.target.id, "remove");
    }else{
      Meteor.call("modSave", Meteor.user()._id, event.target.id, "add");
    }
  },
  'click .details': function(event){
    FlowRouter.go('/information/' + event.target.id);
  }
});
