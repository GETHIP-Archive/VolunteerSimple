import { Meteor } from 'meteor/meteor';
import { Posters } from '../lib/poster.js';
import { Clients } from '../lib/client.js';
import { Opportunity } from '../lib/opportunity.js';


Meteor.startup(() => {
  //Meteor.call('createUsers');
});

Meteor.publish("Posters", function(){
  return Posts.find({accoint: Meteor.user()._id});
});

Meteor.publish("Clients", function(){
  return Clients.find({account: Meteor.user()._id});
});

Meteor.publish("Opportunity", function(){
  return Clients.find();
});

Accounts.onCreateUser(function (options, user) {
  //Roles.addUsersToRoles(user._id, ['asdfsdf'], 'default-group');
  console.log(user._id);
  Clients.insert({
    firstName: "",
    lastName: "",
    account: user._id,
    saved: []
  })
  return user;
});

Meteor.methods({
  'modSignUp' : function(oid, uId, mode){
    //Add Validation to prevent duplicate entries
    if(Meteor.user._id == uId){
      if(mode == "add"){
        Opportunity.update({id: oId}, {$push: {accepts: uId}});
    }else if(mode == "remove"){
      Opportunity.update({id: oId}, {$pull: {accepts: uId}});
      }
    }
  },
  'createOpp' : function(oppo){
    //Add security for if in role
    Opportunity.insert(oppo);
  },
  'updateInfo' : function(oppo){
    //@WIP
    //Clients.update({id: uId}, {$set: {firstName: fName,}})
  }
});
