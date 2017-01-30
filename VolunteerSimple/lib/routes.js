import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "dashboard"});
  }
});

FlowRouter.route('/schedule', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "schedule"});
  }
});

FlowRouter.route('/profile', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "profile"});
  }
});

FlowRouter.route('/details/:_id', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "details"});
  }
});

FlowRouter.route('/completed', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "completed"});
  }
});
