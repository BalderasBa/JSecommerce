const links = document.querySelector("#links");
const userInfo = document.querySelector("#user-info");
const userDom = document.querySelector("#user");

const logout = document.querySelector("#logout");

let username = localStorage.getItem("username");

if (username) {
  links.remove();
  userInfo.style.display = "flex";
  userDom.innerHTML = username;
}

logout.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "./src/register.html";
  }, 1500);
});
