$(document).ready(function () {
  //if user logged in direct it to home page on opening an new tabs
  if (localStorage.getItem("email")) {
    window.location = "Homepage.html";
  } else {
    $("#submit").click(function (e) {
      e.preventDefault();
      var firstName = $("#firstName").val();
      var secondName = $("#secondName").val();
      var email = $("#email").val();
      var city = $("#city").val();
      var country = $("#country").val();
      var password = $("#password").val();

      if (
        firstName.length === 0 ||
        secondName.length === 0 ||
        email.length === 0 ||
        city.length === 0 ||
        country.length === 0 ||
        password.length === 0
      ) {
        document.querySelector("span").innerHTML =
          "Please fill out all the required fields!";
        setTimeout(function () {
          document.querySelector("span").innerHTML = "";
        }, 3000);
      } else {
        regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (regex.exec(password) == null) {
          document.getElementById("invalid").innerHTML =
            "Password must contain atleast a uppercase,a lowercase,a number ,a special character and min length of 8 characters.";
          setTimeout(function () {
            document.getElementById("invalid").innerHTML = "";
          }, 3000);
        } else {
          $.ajax({
            method: "POST",
            url: "signup.php",
            data: {
              firstName: firstName,
              secondName: secondName,
              city: city,
              country: country,
              password: password,
              email: email,
            },
            success: function (result) {
              document.sign.reset();
              document.getElementById("final").innerHTML =
                "Success! You've registered.";
              setTimeout(function () {
                document.getElementById("final").innerHTML = "";
                window.location = "Login.html";
              }, 2000);

              // ;
            },
          });
        }
      }
    });
  }
});
