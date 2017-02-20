import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './topNav.html';
import '../../lib/routes.js'

Template.topNav.events ({
  'click .dashboard': function() {
    FlowRouter.go('/');
  },
  'click .saved': function(){
    FlowRouter.go('/schedule');
  },
  'click .messages': function(){
    FlowRouter.go('/messages');
  },
  'click .logout': function(){
    Meteor.logout();
    FlowRouter.go("/login");
  },
  'click .signup': function(){
    FlowRouter.go("/signup");
  }
})
