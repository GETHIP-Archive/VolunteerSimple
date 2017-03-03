import { Opportunity }  from '../../lib/opportunity.js'
import { Clients }  from '../../lib/client.js'


Meteor.subscribe("Opportunity");
Meteor.subscribe("Clients");


Template.dashboard.helpers({
    post: function() {
      console.log(Opportunity.find().fetch);

        var result = Opportunity.find().fetch();
        var saved = Clients.findOne({account: Meteor.user()._id}).saved;
        console.log(saved);
        console.log(result);
        for(var i = 0; i < result.length; i++){
          console.log(saved.includes(result[i]._id));
        if(saved.includes(result[i]._id)){
          result[i].stat = false;
        }else{
          result[i].stat = true;
          }
        }
        console.log(result);
        return result;
    }
});
