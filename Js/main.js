let form = document.querySelector(".right form");
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let emailField = document.getElementById("email");
let passwordField = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (firstName.value === "") {
    document.querySelector(".first-user-error").style.display = "block";
    firstName.style.border = "1px solid hsl(0, 100%, 74%)";
    document.querySelector(".span-first").style.display = "block";
  } 
  
  if (lastName.value === "") {
    document.querySelector(".last-user-error").style.display = "block";
    lastName.style.border = "1px solid hsl(0, 100%, 74%)";
    document.querySelector(".span-last").style.display = "block";
  }

  let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (emailField.value === "" || !pattern.test(emailField.value)) {
    document.querySelector(".email-error").style.display = "block";
    emailField.style.border = "1px solid hsl(0, 100%, 74%)";
    document.querySelector(".span-email").style.display = "block";
  }

   if (passwordField.value === "") {
    document.querySelector(".pass-error").style.display = "block";
    passwordField.style.border = "1px solid hsl(0, 100%, 74%)";
    document.querySelector(".span-password").style.display = "block";
  }
});
