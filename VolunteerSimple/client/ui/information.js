import { Opportunity }  from '../../lib/opportunity.js'
import { Clients }  from '../../lib/client.js'
import { Posters }  from '../../lib/poster.js'

Meteor.subscribe("Opportunity");
Meteor.subscribe("Clients");
Meteor.subscribe("Posters");

Template.information.helpers({
  data: function(){
    var data = Opportunity.findOne({_id: FlowRouter.getParam("_id")});
    var clients = Clients.find({account: {$in: data.accepts}}).fetch();
    var poster = Posters.findOne({account: data.owner});
    data.accepts = clients;
    data.org = poster.org;
    data.phone = poster.phone;
    data.email = poster.email;
    data.sUps = data.accepts.length;
    return data;
  },
  status: function(){
    return stat();
  }
});

Template.information.events({
  'click .sUp': function(){
    if(stat()){
      Meteor.call("modSignUp", Meteor.user()._id, FlowRouter.getParam("_id"), "remove");
    }else{
      Meteor.call("modSignUp", Meteor.user()._id, FlowRouter.getParam("_id"), "add");
    }
  },
    'click .remove': function(event){
      Meteor.call("removeOpp", event.target.id);
      routeHome();
    },
    'click .edit': function(event){
      FlowRouter.go("/details/" + event.target.id);
    }
});


function stat(){
  var returns = Opportunity.findOne({_id: FlowRouter.getParam("_id")});
  var acceptors = [];
  for(var i = 0; i < returns.accepts.length; i++){
    acceptors.push(returns.accepts[i]);
  }
  if(acceptors.includes(Meteor.user()._id)){
    return true;
  }else{
    return false;
  }
}

function routeHome(){
  if(Roles.userIsInRole(Meteor.user()._id, ["poster"])){
    FlowRouter.go("/home");
  }else if(Roles.userIsInRole(Meteor.user()._id, ["client"])){
    FlowRouter.go("/");
  }
}
