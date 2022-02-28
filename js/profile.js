// Get Data from localStorage
const userName = localStorage.getItem("username");
const userEmail = localStorage.getItem("email");

// Variables
const userN = document.querySelector("#user-name");
const userE = document.querySelector("#user-email");

let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = products.filter((product) => product.ismine === true);
const productsLength = document.querySelector("#products-length span");

userN.innerHTML = userName;
userE.innerHTML = userEmail;
productsLength.innerHTML = myProducts.length != 0 ? myProducts.length : "no";
