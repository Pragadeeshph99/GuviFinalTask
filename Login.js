$(document).ready(function () {
  if (localStorage.getItem("email")) {
    window.location = "Homepage.html";
  } else {
    $("#submit").click(function (e) {
      e.preventDefault();
      var user = $("#user").val();

      var pass = $("#pass").val();

      $.ajax({
        method: "POST",
        url: "login.php",
        data: {
          user: user,
          pass: pass,
        },
        success: function (result) {
          if (result == "success") {
            localStorage.setItem("email", user);
            window.location = "Homepage.html";
          } else {
            alert(result);
          }
        },
      });
    });
  }
});
