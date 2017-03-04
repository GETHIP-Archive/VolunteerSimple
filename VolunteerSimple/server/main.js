import { Meteor } from 'meteor/meteor';
import { Posters } from '../lib/poster.js';
import { Clients } from '../lib/client.js';
import { Opportunity } from '../lib/opportunity.js';
import { Template } from 'meteor/templating';
//import { Session } from 'meteor/session'



Meteor.startup(() => {
  Meteor.call("addData");
});

Meteor.publish("Posters", function(){
  return Posters.find({account: this.userId});
});

Meteor.publish("Clients", function(){
  return Clients.find({account: this.userId});
});

Meteor.publish("Opportunity", function(){
  return Opportunity.find();
});



Accounts.onCreateUser(function (options, user) {
  //Roles.addUsersToRoles(user._id, ['asdfsdf'], 'default-group');
  console.log(user._id);
  //console.log(Session.get("roger"));

  return user;
});

Meteor.methods({
  'modSignUp' : function(oId, uId, mode){
    //Add Validation to prevent duplicate entries
    if(Meteor.user()._id == uId){
      if(mode == "add"){
        Opportunity.update({_id: oId}, {$push: {accepts: uId}});
    }else if(mode == "remove"){
        Opportunity.update({_id: oId}, {$pull: {accepts: uId}});
      }
    }
  },
  'createOpp' : function(oppo){
    if(Roles.userIsInRole(Meteor.user()._id, ["poster"]) && oppo.owner == Meteor.user()._id){
      return Opportunity.insert(oppo);
    }else{
      return null;
    }
  },
  'updateOpp': function(oId, data){
    if(Meteor.user()._id == Opportunity.find({_id: oId}).owner){
      return Opportunity.update({_id: oId}, {$set: data});
    }else{
      return null;
    }
  },
  'removeOpp': function(oId){
    //Pending test and front end implementation
    if(Meteor.user()._id == Opportunity.find({_id: oId}).owner){
      return Opportunity.remove({_id: oId});
    }else{
      return null;
    }
  },
  'updateClient' : function(aId, fName, lName){
    if(Meteor.user()._id == aId){
    Clients.update({account: aId}, {$set: {firstName: fName, lastName: lName}});
    }
  },
  'postSignup': function(uId, role, fName, lName ){
    if(role == "client"){
      Roles.addUsersToRoles(uId, role);
      Clients.insert({
        firstName: fName,
        lastName: lName,
        account: uId,
        saved: ["null"]
      });
    }else if(role == "poster"){
      Roles.addUsersToRoles(uId, role);
      Posters.insert({
        firstName: fName,
        lastName: lName,
        account: uId,
      });
    }
  },
  'modSave': function(aId, oId, mode){
    if(Meteor.user()._id == aId){
      if(mode == "add"){
        Clients.update({account: aId}, {$push: {saved: oId}});
        console.log("its yes");
        console.log(Clients.findOne({account: Meteor.user()._id}));
    }else if(mode == "remove"){
        Clients.update({account: aId}, {$pull: {saved: oId}});
      }
    }
},
'addData': function(){
  for(var i = 0; i < 5; i++){
  var opp = {
    title: Math.random(),
    description: Math.random(),
    createdAt: new Date(),
    accepts: ["sdf"],
    eventDate: Math.random(),
    hours: Math.random(),
    location: Math.random(),
    address: Math.random(),
    owner: "Meteor.user()._id",
    shortDes: Math.random(),
    slots: Math.random(),
    deadline: Math.random(),
    time: Math.random()
  }
  Opportunity.insert(opp);
}
}
});
