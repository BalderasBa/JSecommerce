const productDom = document.querySelector(".products");
const noProductDom = document.querySelector(".no-products");

function drowFavoriteProductsUI(allProducts = []) {
  if (JSON.parse(localStorage.getItem("productsFavorite")).length === 0) {
    noProductDom.innerHTML = "THere is no item in your cart";
  }
  let products =
    JSON.parse(localStorage.getItem("productsFavorite")) || allProducts;

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
        <button class="add-to-cart" id="add-cart" onclick="removeFromFav(${item.id})">Remove from Favorites</button>
        <!--<i class="favorite far fa-heart"></i>-->
         <i class="favorite fas fa-heart" style="color:red"></i> 
      </div>
    </div>`;
  });
  productDom.innerHTML = ProductUI.join("");
}

drowFavoriteProductsUI();

function removeFromFav(id) {
  let productsInFav = localStorage.getItem("productsFavorite");
  if (productsInFav) {
    let items = JSON.parse(productsInFav);
    let filtredItem = items.filter((item) => item.id !== id);
    localStorage.setItem("productsFavorite", JSON.stringify(filtredItem));
    drowFavoriteProductsUI(filtredItem);
  }
}
