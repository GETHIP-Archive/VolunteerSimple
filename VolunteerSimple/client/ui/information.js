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
    console.log(data.owner);
    var poster = Posters.findOne({account: data.owner});
    console.log(poster);
    data.accepts = clients;
    data.org = poster.org;
    data.phone = poster.phone;
    data.email = poster.email;
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
