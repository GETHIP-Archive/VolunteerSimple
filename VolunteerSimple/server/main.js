import { Meteor } from 'meteor/meteor';
import { Posters } from '../lib/poster.js';
import { Clients } from '../lib/client.js';
import { Opportunity } from '../lib/opportunity.js';
import { Template } from 'meteor/templating';
//import { Session } from 'meteor/session'



Meteor.startup(() => {


});

Meteor.publish("Posters", function(){
  return Posters.find({account: Meteor.user()._id});
});

Meteor.publish("Clients", function(){
  return Clients.find({account: Meteor.user()._id});
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
    if(Meteor.user._id == uId){
      if(mode == "add"){
        Opportunity.update({_id: oId}, {$push: {accepts: uId}});
    }else if(mode == "remove"){
        Opportunity.update({_id: oId}, {$pull: {accepts: uId}});
      }
    }
  },
  'createOpp' : function(oppo){
    //Add security for if in role
    Opportunity.insert(oppo);
  },
  'editOpp': function(oId, oTitle, oDesc, oDate){
    if(Meteor.user._id == Opportunity.find({_id: oId}).owner){
      Opportunity.update({_id: oId}, {$set: {title: oTitle, description: oDesc, eventDate: oDate}});
    }
  },
  'removeOpp': function(oId){
    if(Meteor.user._id == Opportunity.find({_id: oId}).owner){
      Opportunity.remove({_id: oId});
    }
  },
  'updateClient' : function(aId, fName, lName){
    if(Meteor.user._id == aId){
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
      })
    }else if(role == "poster"){
      Roles.addUsersToRoles(uId, role);
      //Insert poster into DB
    }
  },
  'modSave': function(aId, oId, mode){
    if(Meteor.user._id == aId){
      if(mode == "add"){
        Clients.update({account: aId}, {$push: {saved: oId}});
    }else if(mode == "remove"){
        Clients.update({account: aId}, {$pull: {saved: oId}});
      }
    }
},
});
