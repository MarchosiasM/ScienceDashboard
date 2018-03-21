window.onload = function() {
    userdata();
  };

  function userdata(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      console.log(displayName)
      var email = user.email;
      console.log(email)
      var emailVerified = user.emailVerified;
      console.log(emailVerified)
      var photoURL = user.photoURL;
      console.log(photoURL)
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      console.log(uid)
      var providerData = user.providerData;
      console.log(providerData)
      $('#username').html = "Welcome! "+ displayName;
      $('#useremail').html = email;
      $('#userphoto').html = "<img src="+photoURL+" class='rounded-circle'>"
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
}