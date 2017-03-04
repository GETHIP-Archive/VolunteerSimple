import { Opportunity }  from '../../lib/opportunity.js'
import { Clients }  from '../../lib/client.js'

Meteor.subscribe("Opportunity");
Meteor.subscribe("Clients");

Template.saved.helpers({
  data: function(){
    var list = Clients.findOne({account: Meteor.user()._id}).saved;
    return Opportunity.find({_id: {$in: list}});
  }

});
