// Get Data from localStorage
const userName = localStorage.getItem("username");
const userEmail = localStorage.getItem("email");

// Variables
// const userImage = document.querySelector("#change-avatar");
const userNInput = document.querySelector("#change-name");
const userEInput = document.querySelector("#change-email");
// const userP0Input = document.querySelector("#change-password0");
// const userP1Input = document.querySelector("#change-password1");
// const userP2Input = document.querySelector("#change-password2");
const editForm = document.querySelector("#edit-profile-form");

// Setting values
// userImage.value = userName;
// ... password if 0 === localstorage && 1 === 2
userNInput.value = userName;
userEInput.value = userEmail;

// Events
editForm.addEventListener("submit", editProfileData);

function editProfileData(e) {
  e.preventDefault();
  //   localStorage.setItem("userImageUrl", );
  localStorage.setItem("username", userNInput.value);
  localStorage.setItem("email", userEInput.value);
  //   localStorage.setItem("password", );
  setTimeout(() => (window.location = "profile.html"), 500);
}

// COntinue like edit product
function getImageBase64(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    productImage = reader.result;
  };
  reader.onerror = function () {
    alert("error in File Reader");
  };
}
