// Register User
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const registerBtn = document.querySelector("#sign-up");

registerBtn.addEventListener("click", register);

function register(e) {
  e.preventDefault();
  if (username.value === "" || email.value === "" || password.value === "") {
    alert("please enter your infos");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);

    setTimeout(() => {
      window.location = "login.html";
    }, 1500);
  }
}
