//import { ReactiveDict } from 'meteor/reactive-dict';
//import { Template } from 'meteor/templating';

Template.newS.events({
    'submit .newProf': function(event) {
        event.preventDefault();
        var emailVar = event.target.email.value;
        var passwordVar = event.target.password.value;
        var cpassword = event.target.cpassword.calue;
        var fName = event.target.fName.value;
        var lName = event.target.lName.value;
        if(true){
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        }, function(error) {
         if(error){
             console.log(error.reason)
            // Template.instance().state.set('errorm', error.reason);
           }else{
            // Template.instance().state.set('errorm', "");
          Meteor.call("postSignup", Meteor.user()._id, "client", fName, lName);
            FlowRouter.go("/");
          }
        });

      }
    }
});

// Template.newS.helpers({
//   'eMessage': function(){
//     return Template.instance().state.get('errorm');
//   }
// });

//For Reg. Errors
// Template.newS.onCreated(function bodyOnCreated() {
//   this.state = new ReactiveDict();
//   Template.instance().state.set('errorm', "");
// });
