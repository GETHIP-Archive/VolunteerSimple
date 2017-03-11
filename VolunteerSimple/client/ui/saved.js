import { Opportunity }  from '../../lib/opportunity.js'
import { Clients }  from '../../lib/client.js'
import { Posters }  from '../../lib/poster.js'

Meteor.subscribe("Opportunity");
Meteor.subscribe("Clients");
Meteor.subscribe("Posters");

Template.saved.helpers({
  data: function(){
    var list = Clients.findOne({account: Meteor.user()._id}).saved;
    var result = Opportunity.find({_id: {$in: list}}).fetch();


      for(var i = 0; i < result.length; i++){
        var poster = Posters.findOne({account: result[i].owner});
        result[i].org = poster.org;
      }


    return result;
  },
  list: function(){
    return Opportunity.find({accepts: Meteor.user()._id});
  }
});


Template.saved.events({
  'click .deta': function(event){
      FlowRouter.go("/information/" + event.target.id);
  },
  'click .del': function(event){
    Meteor.call("modSignUp", Meteor.user()._id, event.target.id, "remove");
  }
});
