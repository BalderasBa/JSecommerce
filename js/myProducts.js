const productDom = document.querySelector(".products");
const noProductDom = document.querySelector(".no-products");

(drowProductsUI = function (products = []) {
  let myProducts = products.filter((product) => product.ismine === true);
  if (myProducts.length != 0) {
    let ProductUI = myProducts.map((item) => {
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
            
              <button onclick="editProduct(${
                item.id
              })" class="edit-product">Edit</button>
              <button class="edit-product" onclick="deleteProduct(${
                item.id
              })">Delete</button>
          </div>
        </div>`;
    });
    productDom.innerHTML = ProductUI.join("");
  } else {
    noProductDom.innerHTML = "No Created Products";
  }
})(JSON.parse(localStorage.getItem("products")) || productsDB);

// Editing Product
function editProduct(id) {
  localStorage.setItem("editProduct", id);
  window.location = "editProduct.html";
}

// Deleting Product
function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || productsDB;
  let myProducts = products.filter((product) => product.ismine === true);
  let filtered = myProducts.filter((i) => i.id !== id);
  drowProductsUI(filtered);

  products = products.filter((i) => i.id !== id);
  localStorage.setItem("products", JSON.stringify(products));
}
