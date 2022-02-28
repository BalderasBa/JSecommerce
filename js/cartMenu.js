const cartProductMenu = document.querySelector(".cart-products");
const cartProductDiv = document.querySelector(".cart-products div");
const badgeDom = document.querySelector(".badge");

// open Cart Menu
const shoppingCart = document.querySelector(".shopping-cart");
shoppingCart.addEventListener("click", openCartMenu);

// check if there is items in Cart in Localstorage:
let addedItem = localStorage.getItem("productInCart")
  ? JSON.parse(localStorage.getItem("productInCart"))
  : [];
if (addedItem) {
  addedItem.map(
    (item) => (cartProductDiv.innerHTML += `<p>${item.title} ${item.qty}</p>`)
  );
  badgeDom.style.display = "block";
  badgeDom.innerHTML += addedItem.length;
}

// Open Cart Menu:
function openCartMenu() {
  if (cartProductDiv.innerHTML != "") {
    if (cartProductMenu.style.display === "block") {
      cartProductMenu.style.display = "none";
    } else {
      cartProductMenu.style.display = "block";
    }
  }
}
