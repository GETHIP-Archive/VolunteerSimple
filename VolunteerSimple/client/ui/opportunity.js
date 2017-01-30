Template.opportunity.helpers({
    stream: function() {
        return Opprounity.find({_id: "yes"});
    }
});
