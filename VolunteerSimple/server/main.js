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
  Clients.insert({
    firstName: "",
    lastName: "",
    account: user._id,
    saved: []
  })
  console.log("Added User " + user._id);
  return user;
});

Meteor.methods({
  'createUsers' : function(){

  },
  'createOpp' : function(oppo){
    Opportunity.insert(oppo);
  }
});
