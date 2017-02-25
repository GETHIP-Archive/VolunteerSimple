import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "dashboard"});
  }
});

FlowRouter.route('/login', {
  name: "login",
  action: function() {
    BlazeLayout.render("content", {content: "login"});
  }
});

FlowRouter.route('/schedule', {
  name: "saved",
  action: function() {
    BlazeLayout.render("content", {content: "saved"});
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
  name: "details",
  action: function() {
    BlazeLayout.render("content", {content: "details"});
  }
});
FlowRouter.route('/details', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "details"});
  }
});

FlowRouter.route('/completed', {
  name: "completed",
  action: function() {
    BlazeLayout.render("content", {content: "completed"});
  }
});

FlowRouter.route('/signup', {
  name: "signup",
  action: function() {
    BlazeLayout.render("content", {content: "signup"});
  }
});

FlowRouter.route('/create', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "create"});


  }
});
