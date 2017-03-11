import { Opportunity }  from '../../lib/opportunity.js'
import { Clients }  from '../../lib/client.js'


Meteor.subscribe("Opportunity");
Meteor.subscribe("Clients");

Template.manage.helpers({
  data: function(){
    data = Opportunity.find({owner: Meteor.user()._id}).fetch();
    for(var i = 0; i < data.length; i++){
      data[i].filled = data[i].accepts.length-1;
    }
    return data;
  },
  counts: function(){
    var count;
    var accepts;
    if(getCount() < 10){
        count = "0" + getCount.toString();
    }else{
      count = getCount().toString();
    }

    if(getSup() < 10){
      accepts = "0" + getSup().toString();
    }else{
      accepts = getSup();
    }

    return {total: count, accepts: accepts};
  }
});


Template.manage.events({
  'click .details': function(event){
    FlowRouter.go('/information/' + event.target.id);
  },
  'click .edit': function(event){
    FlowRouter.go('/details/' + event.target.id);
  },
  'click .remove': function(event){
    Meteor.call("removeOpp", event.target.id);
  },
  'click .add': function(event){
    FlowRouter.go("/new");
  }
});

function getCount(){
  var total = 0;
  var data = Opportunity.find({owner: Meteor.user()._id}).fetch();
  for(var i = 0; i < data.length; i++){
    console.log(data[i]);
    total = total + parseInt(data[i].slots);
  }
  return total;
}

function getSup(){
  var total = 0;
  var data = Opportunity.find({owner: Meteor.user()._id}).fetch();
  for(var i = 0; i < data.length; i++){
    console.log(data[i]);
    total = total + parseInt(data[i].accepts.length);
  }
  return (total - data.length);
}
