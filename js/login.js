// Register User
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#sign-in");

const getuser = localStorage.getItem("username");
const getpassword = localStorage.getItem("password");

loginBtn.addEventListener("click", login);
function login(e) {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("enter your info");
  } else {
    if (
      getuser &&
      getuser.trim() === username.value.trim() &&
      getpassword &&
      getpassword === password.value
    ) {
      setTimeout(() => {
        localStorage.setItem("products", JSON.stringify(productsDB));
        window.location = "../index.html";
      }, 1500);
    } else {
      alert("username or password is wrong");
    }
  }
}
