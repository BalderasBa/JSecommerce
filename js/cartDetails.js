let products = JSON.parse(localStorage.getItem("products"));
let productId = JSON.parse(localStorage.getItem("productId"));
// let productDetails1 = products.filter((item) => item.id === productId);
let productDetails = products.find((item) => item.id === productId);

// console.log(productDetails1[0].title, productDetails.title);

let itemDom = document.querySelector(".item-details");
itemDom.innerHTML = `
<img src="${productDetails.imageUrl}" alt="" />
<h2>${productDetails.title}</h2>
<p>${productDetails.desc}</p>
<span>Size: ${productDetails.size}</span> </br> 
<span>Quantity: ${productDetails.qty}</span> </br>
<button onclick="editProduct(${productId})">Edit {just in ismine + style}</button>`;
// quantity always 0 ???

// Editing Product
function editProduct(id) {
  localStorage.setItem("editProduct", id);
  window.location = "editProduct.html";
}