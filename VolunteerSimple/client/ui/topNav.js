import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Clients }  from '../../lib/client.js'
import { Posters }  from '../../lib/poster.js'


  Meteor.subscribe("Clients");
  Meteor.subscribe("Posters");

import './topNav.html';
import '../../lib/routes.js'

Template.topNav.events ({
  'click .dashboard': function() {
    FlowRouter.go('/');
  },
  'click .clipboard': function(){
    FlowRouter.go('/clipboard');
  },
  'click .manage': function(){
    FlowRouter.go('/manage');
  },
  'click .logout': function(){
    Meteor.logout();
    FlowRouter.go("/login");
  },
  'click .signup': function(){
    FlowRouter.go("/signup");
  },
  'click .login': function(){
    FlowRouter.go("/login");
  },
  'click .profile': function(){
    FlowRouter.go("/profile");
  },
  'click .newP': function(){
    FlowRouter.go("/new");
  }
})

Template.topNav.helpers({
  db: function(){
    if(FlowRouter.getRouteName() == "sHome"){
      console.log("it go");
      return "active";
    }
      return "";
  },
  cb: function(){
    if(FlowRouter.getRouteName() == "clipboard"){
      console.log("it go");
      return "active";
    }
      return "";
    },
  pf: function(){
    if(FlowRouter.getRouteName() == "profile"){
      console.log("it go");
      return "active";
    }
      return "";
    },
  mp: function(){
    if(FlowRouter.getRouteName() == "manage"){
      console.log("it go");
      return "active";
    }
      return "";
  },
  np: function(){
    if(FlowRouter.getRouteName() == "new"){
      console.log("it go");
      return "active";
    }
      return "";
  },
  name: function(){
    console.log(Roles.userIsInRole(Meteor.user()._id, ["client"]));
    if(Roles.userIsInRole(Meteor.user()._id, ["client"])){
    return Clients.findOne({"account": Meteor.user()._id}).firstName;
  }else if(Roles.userIsInRole(Meteor.user()._id, ["poster"])){
    return Posters.findOne({"account": Meteor.user()._id}).firstName;
  }
  }
});
