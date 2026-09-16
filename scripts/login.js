const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("login");
const paragraph = document.getElementById("message");

function checkCredentials(usernameText, passwordText) {
  if (usernameText.length < 6) {
    throw new Error("Username text must be at least 6 characters");
  }

  if (passwordText.length < 10) {
    throw new Error("Password text must be at least 10 characters");
  }
}

function login() {
  try {
    checkCredentials(username.value, password.value);

    paragraph.textContent = "Authenticated";
    paragraph.style.color = "green";

    username.value = "";
    password.value = "";
  } catch (error) {
    paragraph.textContent = error.message;
    paragraph.style.color = "red";
  } finally {
    console.log("Login mission completed");
  }
}
loginButton.onclick = login;
