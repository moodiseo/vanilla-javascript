const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add("hidden");
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
  loginForm.classList.remove("hidden");
} else {
  paintGreeting(savedUsername);
}
