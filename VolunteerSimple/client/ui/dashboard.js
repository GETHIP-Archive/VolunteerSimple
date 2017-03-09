import { Opportunity }  from '../../lib/opportunity.js'
import { Clients }  from '../../lib/client.js'


Meteor.subscribe("Opportunity");
Meteor.subscribe("Clients");


Template.dashboard.helpers({
    post: function() {
        var result = Opportunity.find().fetch();
        var saved = Clients.findOne({account: Meteor.user()._id}).saved;
        for(var i = 0; i < result.length; i++){
        if(saved.includes(result[i]._id)){
          result[i].stat = false;
        }else{
          result[i].stat = true;
          }
        }
        return result;
    },
    list: function(){
      return Opportunity.find({accepts: Meteor.user()._id});

    }
});

Template.dashboard.events({
  'click .deta': function(event){
      FlowRouter.go("/information/" + event.target.id);
  }
});
