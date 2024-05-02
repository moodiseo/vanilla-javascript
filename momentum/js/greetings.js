const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
console.log(loginInput);
console.log(loginButton);

function onLoginBtnClick() {
  console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);
