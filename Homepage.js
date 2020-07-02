function editable(elt) {
  elt.readOnly = false;
}

function logout() {
  localStorage.removeItem("email");
  window.location = "Login.html";
}
function updateValue() {
  var firstName = document.getElementById("FName").value;
  var secondName = document.getElementById("SName").value;
  var city = document.getElementById("City").value;
  var country = document.getElementById("Country").value;
  var password = document.getElementById("Password").value;
  var age = document.getElementById("Age").value;
  var dob = document.getElementById("Dob").value;
  var contact = document.getElementById("ContactNo").value;
  var email = document.getElementById("Email").value;

  phoneNo = /^\d{10}$/;
  regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regex.exec(password) == null) {
    document.getElementById("invalid").innerHTML =
      "Password must contain atleast a uppercase,a lowercase,a number ,a special character and min length of 8 characters.";
    setTimeout(function () {
      document.getElementById("invalid").innerHTML = "";
    }, 3000);
  } else if (!contact.match(phoneNo)) {
    document.getElementById("invalidNo").innerHTML =
      "Please enter valid phone number.";
    setTimeout(function () {
      document.getElementById("invalidNo").innerHTML = "";
    }, 3000);
  } else {
    $.ajax({
      method: "POST",
      url: "update.php",
      data: {
        firstName: firstName,
        secondName: secondName,
        city: city,
        country: country,
        password: password,
        age: age,
        email: email,
        dob: dob,
        contact: contact,
      },
      success: function (result) {
        document.getElementById("final").innerHTML = "Success! You've Updated.";
        setTimeout(function () {
          document.getElementById("final").innerHTML = "";
        }, 3000);
      },
    });
    // }
  }
}

$(document).ready(function () {
  var email = localStorage.getItem("email");
  if (!localStorage.getItem("email")) {
    window.location = "Login.html";
  }

  $.ajax({
    method: "POST",
    url: "homepage.php",
    data: { email: email },
    success: function (result) {
      var res = $.parseJSON(result);
      document.getElementById("username").innerHTML = res.result[0];
      document.getElementById("FName").value = res.result[1];
      document.getElementById("SName").value = res.result[2];
      document.getElementById("City").value = res.result[3];
      document.getElementById("Country").value = res.result[4];
      document.getElementById("Password").value = res.result[5];
      document.getElementById("Email").value = res.result[6];
      document.getElementById("Age").value = res.result[7];
      document.getElementById("Dob").value = res.result[8];
      document.getElementById("ContactNo").value = res.result[9];
    },
  });
});
