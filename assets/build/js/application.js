;(function() {
  var myRef = new Firebase("https://blazing-fire-7286.firebaseio.com/"),
  auth = new FirebaseSimpleLogin(myRef, function(error, user) {
    if (error) {
      // an error occurred while attempting login
      console.log(error);
    } else if (user) {
      // user authenticated with Firebase
      window.location.href = "dashboard.html";
    } else {
      // user is logged out
      console.log("User is not logged in.");
    }
  });

  function login() {
    auth.login('password', {
      email: logInEmail.value,
      password: logInPassword.value
    });
  }

  if (window.location.href = "index.html") {
    document.getElementById("log-in-button").addEventListener('click', function(event) {
      login();
      console.log(logInEmail.value);
      console.log(logInPassword.value);
      window.location.href = "dashboard.html";
    });
  }
})();