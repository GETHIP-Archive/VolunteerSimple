import { Meteor } from 'meteor/meteor';
import { Posters } from '../collections/poster.js';
import { Clients } from '../collections/clients.js';


Meteor.startup(() => {
  Meteor.publish("Posters", function(){
   return Posts.find();
 });

 Meteor.publish("Clients", function(){
  return Clients.find();
  });
});

Meteor.methods({
  'testMethod' : function(){

  }
});
