import { Opportunity }  from '../../lib/opportunity.js'
import { Clients }  from '../../lib/client.js'
import { Posters }  from '../../lib/poster.js'

Meteor.subscribe("Opportunity");
Meteor.subscribe("Clients");
Meteor.subscribe("Posters");


Template.profile.helpers({
  data: function(){
    if(Roles.userIsInRole(Meteor.user()._id, ["client"])){
    return Clients.findOne({account: Meteor.user()._id});
  }else if(Roles.userIsInRole(Meteor.user()._id, ["poster"])){
    return Posters.findOne({account: Meteor.user()._id});
  }
  }
});


Template.profile.events({
  'submit .subm': function(event){
    if(Roles.userIsInRole(Meteor.user()._id, ["client"])){
    var update = {
      firstName: event.target.fName.value,
      lastName: event.target.lName.value,
      phone: event.target.phone.value,
      email: event.target.email.value
    }
    Meteor.call("updateProfile", Meteor.user()._id, update, "client");
    routeHome();
}else if(Roles.userIsInRole(Meteor.user()._id, ["poster"])){
  var update = {
    firstName: event.target.fName.value,
    lastName: event.target.lName.value,
    phone: event.target.phone.value,
    email: event.target.email.value,
    org: event.target.org.value
  }
    Meteor.call("updateProfile", Meteor.user()._id, update, "poster");
  routeHome();
}
  }
});

function routeHome(){
  if(Roles.userIsInRole(Meteor.user()._id, ["poster"])){
    FlowRouter.go("/home");
  }else if(Roles.userIsInRole(Meteor.user()._id, ["client"])){
    FlowRouter.go("/");
  }
}
