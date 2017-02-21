import '../../lib/routes.js'

Template.opportunity.helpers({
    stream: function() {
        return Opprounity.find();
    }
});

Template.opportunity.events({
  'click .save': function (event){
    // Meteor.call("") **To add to save**
  },
  'click .details': function(event){
    FlowRouter.go('/details/' + event.target.id);
  }
});
