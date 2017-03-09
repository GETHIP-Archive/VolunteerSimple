Template.newS.events({
  'submit .newProf': function(event) {
    event.preventDefault();
    var emailVar = event.target.email.value;
    var passwordVar = event.target.password.value;
    var cpassword = event.target.cpassword.calue;
    var fName = event.target.fName.value;
    var lName = event.target.lName.value;
    var phone = event.target.phone.value;
    var role = "";
    for (var i in event.target.options) {
      if (event.target.options[i].checked) {
        role = event.target.options[i].id;
      }
    }
    Accounts.createUser({
      email: emailVar,
      password: passwordVar
    }, function(error) {
      if(error){
      }else{
        Meteor.call("postSignup", Meteor.user()._id, role, fName, lName, emailVar, phone);
        if(role == "client"){
        FlowRouter.go("/");
      }else if(role == "poster"){
        FlowRouter.go("/manage");
      }
      }
    });
  }
});
