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
            alt="${item.title}"
          />
          <div class="desc">
            <a onclick="saveItemData(${item.id})">${item.title}</a>
            <p>${item.desc}</p>
            <span>Size: ${item.size}</span></br>
            
              <button onclick="editProduct(${
                item.id
              })" class="edit-product">Edit</button>
              <button class="delete-product" onclick="deleteProduct(${
                item.id
              })">Delete</button>
          </div>
        </div>`;
    });
    productDom.innerHTML = ProductUI.join("");
  } else {
    noProductDom.innerHTML = "No Created Products";
  }
})(JSON.parse(localStorage.getItem("myViews")) || productsDB);

