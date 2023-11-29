const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello! ${username}`;
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreeting(username) {
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello! ${username}`;
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
  loginForm.classList.remove("hidden");
} else {
  paintGreeting(savedUsername);
}
