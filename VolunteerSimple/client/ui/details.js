import { Opportunity }  from '../../lib/opportunity.js'

import '../../lib/routes.js'

Meteor.subscribe("Opportunity");


var empty = {
  title: "",
  description: "",
  eventDate: "",
  hours: "",
  location: "",
  address: "",
}


Template.details.helpers({
    fill: function() {
      if(FlowRouter.getRouteName() == "new"){
        return empty;
      }else if(FlowRouter.getRouteName() == "details"){
        console.log(Opportunity.find({_id: FlowRouter.getParam("_id")}).fetch());
        return Opportunity.findOne({_id: FlowRouter.getParam("_id")});

    }
  },
  mode: function(){
    if(FlowRouter.getRouteName() == "new"){
      return true;
    }else if(FlowRouter.getRouteName() == "details"){
      return false;
  }
}
});


Template.details.events({
  'submit .action':function(event){
    event.preventDefault();
    var opp = {
      title: event.target.title.value,
      description: event.target.content.value,
      createdAt: new Date(),
      accepts: ["sdf"],
      eventDate: event.target.date.value,
      hours: event.target.hours.value,
      location: event.target.location.value,
      address: event.target.address.value,
      owner: Meteor.userId()
    }

    if(FlowRouter.getRouteName() == "new"){
    Meteor.call("createOpp", opp, function(error, id){
        checkValid(id);
    });

    }else if(FlowRouter.getRouteName() == "details"){
      Meteor.call("updateOpp", FlowRouter.getParam("_id"), opp, function(error, id){
        checkValid(id)
      });
    }
}
});

function checkValid(id){
  if(id == null){
    console.log("Error in creation");
  }else{
    FlowRouter.go("/");
  //Form when we have temp/route for details page
  //  FlowRouter.go("/opportunity/" + id)
  }
}
