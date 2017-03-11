import { Opportunity }  from '../../lib/opportunity.js'
import { Clients }  from '../../lib/client.js'
import { Posters }  from '../../lib/poster.js'

Meteor.subscribe("Opportunity");
Meteor.subscribe("Clients");
Meteor.subscribe("Posters");


Template.dashboard.helpers({
    post: function() {
      console.log("crap");
        var result = Opportunity.find().fetch();
        var saved = Clients.findOne({account: Meteor.user()._id}).saved;
        for(var i = 0; i < result.length; i++){
        if(saved.includes(result[i]._id)){
          result[i].stat = false;
          console.log("faksel");
        }else{
          result[i].stat = true;
          }
            var poster = Posters.findOne({account: result[i].owner});
            result[i].org = poster.org;

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
