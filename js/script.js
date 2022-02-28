// Define Product
const productDom = document.querySelector(".products");
let products = productsDB;

// Display Products
let drowProductsUI;
(drowProductsUI = function (products = []) {
  let ProductUI = products.map((item) => {
    return `
    <div class="product-item" style = "border:${
      item.ismine === true ? "2px dotted green" : ""
    }">
    <img
      src="${item.imageUrl}"
      class="product-item-img"
      alt="${item.title}"
    />
    <div class="product-item-desc">
      <a onclick="saveItemData(${item.id})">${item.title}</a>
      <p>${item.desc}</p>
      <span>Size: ${item.size}</span></br>
      ${
        item.ismine === true &&
        "<button onclick='editProduct(" +
          item.id +
          ")' class='edit-product'>Edit</button>"
      }
      ${item.ismine === true && "<button class='edit-product'>Delete</button>"}
    </div>
    <div class="product-item-actions">
      <button class="add-to-cart" id="add-cart" onclick="addedToCart(${
        item.id
      })">Add to Cart</button>
      <i class="${
        item.liked == true ? "favorite fas fa-heart" : "favorite far fa-heart"
      }" style="color: ${
      item.liked == true ? "red" : ""
    }" onclick="addedToFavorite(${item.id})"></i>
    </div>
  </div>`;
    // <i class= ${item.liked == true ?"favorite fas fa-heart":"favorite far fa-heart" }  onclick="addedToFavorite(${item.id})"></i>
  });
  productDom.innerHTML = ProductUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);

// Add clicked item to Cart:
// let addedItem = [];
function addedToCart(id) {
  //  check if user is loged in
  if (localStorage.getItem("username")) {
    let products = JSON.parse(localStorage.getItem("products")) || products;
    let product = products.find((item) => item.id === id);
    let isProductInCart = addedItem.some((i) => i.id === product.id);

    if (isProductInCart) {
      addedItem = addedItem.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addedItem.push(product);
    }
    // when readd it's will be add in badge from 0
    cartProductDiv.innerHTML = "";
    addedItem.forEach((item) => {
      cartProductDiv.innerHTML += `<p>${item.title} <span class="item-qty">${item.qty}</span></p>`;
    });

    // addedItem = [...addedItem, chosenItem];
    // getUniqArray(addedItem, "id");

    // save Data
    addedItemms = new Set(addedItem);

    // add counter of Items
    localStorage.setItem("productInCart", JSON.stringify([...addedItemms]));
    let cartProducts = document.querySelectorAll(".cart-products div p");
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProducts.length;
  } else {
    window.location = "login.html";
  }
}
function getUniqArray(arr, id) {
  let uniq = new Set(arr.map((item) => item[id]));
}

function saveItemData(id) {
  localStorage.setItem("productId", id);
  window.location = "cartDetails.html";
  // addedToViews(id);
}

// Search
const input = document.getElementById("search");
input.addEventListener("keyup", function (e) {
  search(e.target.value, JSON.parse(localStorage.getItem("products")));
  // if (e.keyCode === 13) {
  // }
  if (e.target.value.trim() === "") {
    drowProductsUI(JSON.parse(localStorage.getItem("products")));
  }
});
function search(title, myArray) {
  let arr = myArray.filter(
    (product) => product.title.toLowerCase().indexOf(title.toLowerCase()) != -1
  );
  // let arr = myArray.filter((product) => product.desc.indexOf(title) != -1); // add it in data.js
  drowProductsUI(arr);
}

// check if there is Favorite items in Localstorage:
let favoriteItems = localStorage.getItem("productsFavorite")
  ? JSON.parse(localStorage.getItem("productsFavorite"))
  : [];
// Add to Favorite:
function addedToFavorite(id) {
  //  check if user is loged in
  if (localStorage.getItem("username")) {
    let chosenItem = products.find((item) => item.id === id);
    chosenItem.liked = true;
    favoriteItems = [...favoriteItems, chosenItem];

    getUniqArray(favoriteItems, "id");
    addedInFav = new Set(favoriteItems);
    localStorage.setItem("productsFavorite", JSON.stringify([...addedInFav]));

    products.map((item) => {
      if (item.id === chosenItem.id) {
        item.liked = true;
      }
      // else {
      //   item.liked = false;
      // }
    });
    localStorage.setItem("productsFavorite", JSON.stringify([...addedInFav]));
    drowProductsUI(products);
  } else {
    window.location = "login.html";
  }
}

// Filter Products by Size:
const sizeFilter = document.querySelector("#size-filter");
sizeFilter.addEventListener("change", getFilterdProducts);

function getFilterdProducts(e) {
  let val = e.target.value;
  let products = JSON.parse(localStorage.getItem("products")) || products;
  if (val === "all") {
    drowProductsUI(products);
  } else {
    products = products.filter((i) => i.size === val);
    drowProductsUI(products);
  }
}

// Editing Product
function editProduct(id) {
  localStorage.setItem("editProduct", id);
  window.location = "editProduct.html";
}

/*
// Add to MyViews:
function addedToViews(id) {
  //  check if user is loged in
  if (localStorage.getItem("username")) {
    let chosenItem = products.find((item) => item.id === id);
    chosenItem.liked = true;
    favoriteItems = [...favoriteItems, chosenItem];

    getUniqArray(favoriteItems, "id");
    addedInFav = new Set(favoriteItems);
    localStorage.setItem("myViews", JSON.stringify([...addedInFav]));

    products.map((item) => {
      if (item.id === chosenItem.id) {
        item.liked = true;
      }
      // else {
      //   item.liked = false;
      // }
    });
    localStorage.setItem("myViews", JSON.stringify([...addedInFav]));
    drowProductsUI(products);
  } else {
    window.location = "login.html";
  }
}

*/