import { Opportunity }  from '../../lib/opportunity.js'

Meteor.subscribe("Opportunity");

Template.information.helpers({
  data: function(){
    console.log(Opportunity.findOne({_id: FlowRouter.getParam("_id")}));
    return Opportunity.findOne({_id: FlowRouter.getParam("_id")});
  }
});
