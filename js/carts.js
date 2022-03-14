const productDom = document.querySelector(".products");
const noProductDom = document.querySelector(".no-products");

function drowCartProductsUI(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productInCart")).length === 0) {
    noProductDom.innerHTML = "THere is no item in your cart";
  }
  let products =
    JSON.parse(localStorage.getItem("productInCart")) || allProducts;

  let ProductUI = products.map((item) => {
    return `
      <div class="product-item">
      <img
        src="${item.imageUrl}"
        alt="Philips headphone"
      />
      
      <div class="desc">
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <span>Size: ${item.size}</span></br> 
        <span>Quantity: ${item.qty}</span>
      </div>
      <div class="actions">
        <button class="add-to-cart" id="add-cart" onclick="removeFromCart(${item.id})">Remove from Cart</button>
        <i class="favorite far fa-heart"></i>
      </div>
    </div>`;
  });
  productDom.innerHTML = ProductUI.join("");
}

drowCartProductsUI();

function removeFromCart(id) {
  let productsInCart = localStorage.getItem("productInCart");
  if (productsInCart) {
    let items = JSON.parse(productsInCart);
    let filtredItem = items.filter((item) => item.id !== id);
    localStorage.setItem("productInCart", JSON.stringify(filtredItem));
    drowCartProductsUI(filtredItem);
  }
}
