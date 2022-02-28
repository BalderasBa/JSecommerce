// Variables
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let getProduct = products.find(
  (item) => item.id === JSON.parse(localStorage.getItem("editProduct"))
);

const productName = document.querySelector("#product-name");
const productDesc = document.querySelector("#product-desc");
const productSize = document.querySelector("#product-size");
const updateForm = document.querySelector("#update-form");
const uploadedImage = document.querySelector("#upload-image");
let productSizeValue;
let productImage;

// show item data
productName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSize.value = getProduct.size;
productImage = getProduct.imageUrl;
// Events
productSize.addEventListener("change", getProductSizeValue);
updateForm.addEventListener("submit", updateProductFunc);
uploadedImage.addEventListener("change", uploadImage);

// Functions
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}

function updateProductFunc(e) {
  e.preventDefault();
  getProduct.title = productName.value;
  getProduct.desc = productDesc.value;
  getProduct.size = productSizeValue;
  getProduct.imageUrl = productImage;

  localStorage.setItem("products", JSON.stringify(products));
  setTimeout(() => (window.location = "index.html"), 500);
}

function uploadImage() {
  let file = this.files[0];
  const types = ["image/png", "image/jpg"];
  if (types.indexOf(file.type) == -1) {
    alert("type not supported");
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert("max size 2 Mo");
    return;
  }
  getImageBase64(file);
  // productImage = URL.createObjectURL(file);
}

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
