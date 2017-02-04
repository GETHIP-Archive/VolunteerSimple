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
  name: "saved",
  action: function() {
    BlazeLayout.render("content", {content: "schedule"});
  }
});

FlowRouter.route('/messages', {
  name: "messages",
  action: function() {
    BlazeLayout.render("content", {content: "schedule"});
  }
});

FlowRouter.route('/profile', {
  name: "profile",
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

FlowRouter.route('/signup', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "signup"});
  }
});
