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
    console.log("sdf")
    console.log(Posters.find({account: Meteor.user()._id}).fetch());
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
    console.log(update);
    Meteor.call("updateProfile", Meteor.user()._id, update, "client");
  FlowRouter.go("/");
}else if(Roles.userIsInRole(Meteor.user()._id, ["poster"])){
  var update = {
    firstName: event.target.fName.value,
    lastName: event.target.lName.value,
    phone: event.target.phone.value,
    email: event.target.email.value,
    org: event.target.org.value
  }
    console.log(update);
    Meteor.call("updateProfile", Meteor.user()._id, update, "poster");
  FlowRouter.go("/");
}
  }
});
