import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

/*
//save button mouseover- i am no expert, so idk how to make this work, an idea though
$(document).ready(function () {
  $(document).on('mouseenter', '.divbutton', function () {
      $(this).find(":button").show();
  }).on('mouseleave', '.divbutton', function () {
      $(this).find(":button").hide();
  });
});
*/
