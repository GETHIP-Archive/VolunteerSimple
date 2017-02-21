Template.newL.events({
    'submit .login': function(event) {
        event.preventDefault();
        var emailVar = event.target.username.value;
        var passwordVar = event.target.password.value;
        console.log("atklsd");
      Meteor.loginWithPassword(emailVar, passwordVar, function(error){
          if(error){

          }else{
            FlowRouter.go("/");
          }
      });


    }
});
