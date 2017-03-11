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
    routeHome();
  },
  'click .clipboard': function(){
    FlowRouter.go('/schedule');
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
    if(FlowRouter.getRouteName() == "sHome" || FlowRouter.getRouteName() == "home"){
      return "active";
    }
      return "";
  },
  cb: function(){
    if(FlowRouter.getRouteName() == "clipboard"){
      return "active";
    }
      return "";
    },
  pf: function(){
    if(FlowRouter.getRouteName() == "profile"){
      return "active";
    }
      return "";
    },
  mp: function(){
    if(FlowRouter.getRouteName() == "manage"){
      return "active";
    }
      return "";
  },
  np: function(){
    if(FlowRouter.getRouteName() == "new"){
      return "active";
    }
      return "";
  },
  name: function(){
    if(Roles.userIsInRole(Meteor.user()._id, ["client"])){
    return Clients.findOne({"account": Meteor.user()._id}).firstName;
  }else if(Roles.userIsInRole(Meteor.user()._id, ["poster"])){
    return Posters.findOne({"account": Meteor.user()._id}).firstName;
  }
  }
});

function routeHome(){
  if(Roles.userIsInRole(Meteor.user()._id, ["poster"])){
    FlowRouter.go("/home");
  }else if(Roles.userIsInRole(Meteor.user()._id, ["client"])){
    FlowRouter.go("/");
  }
}
