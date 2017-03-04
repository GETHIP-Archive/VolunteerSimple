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
  name: "clipboard",
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


FlowRouter.route('/new', {
  name: "new",
  action: function() {
    BlazeLayout.render("content", {content: "details"});
  }
});

FlowRouter.route('/information/:_id', {
  name: "information",
  action: function() {
    BlazeLayout.render("content", {content: "information"});
  }
});

FlowRouter.route('/manage', {
  name: "signup",
  action: function() {
    BlazeLayout.render("content", {content: "manage"});
  }
});

FlowRouter.route('/create', {
  name: "sHome",
  action: function() {
    BlazeLayout.render("content", {content: "create"});
  }
});
