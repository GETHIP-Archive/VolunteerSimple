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
    console.log(Clients.findOne({account: Meteor.user()._id}));
    if(Clients.findOne({account: Meteor.user()._id}).saved.includes(event.target.id)){
       Meteor.call("modSave", Meteor.user()._id, event.target.id, "remove");
       console.log("add");
    }else{
      Meteor.call("modSave", Meteor.user()._id, event.target.id, "add");
      console.log("remove");
    }
     console.log(event.target)
     console.log("sfd");
  },
  'click .details': function(event){
    FlowRouter.go('/details/' + event.target.id);
  }
});
