Template.newL.events({
    'submit .login': function(event) {
        event.preventDefault();
        var emailVar = event.target.username.value;
        var passwordVar = event.target.password.value;
      Meteor.loginWithPassword(emailVar, passwordVar, function(error){
          if(error){

          }else{
            routeHome();
          }
      });


    }
});

function routeHome(){
  if(Roles.userIsInRole(Meteor.user()._id, ["poster"])){
    FlowRouter.go("/home");
  }else if(Roles.userIsInRole(Meteor.user()._id, ["client"])){
    FlowRouter.go("/");
  }
}
