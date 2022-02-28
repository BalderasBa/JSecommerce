// Variables
const productName = document.querySelector("#product-name");
const productDesc = document.querySelector("#product-desc");
const productSize = document.querySelector("#product-size");
const createForm = document.querySelector("#create-form");
const uploadedImage = document.querySelector("#upload-image");

let productSizeValue;
let productImage;

// Events
productSize.addEventListener("change", getProductSizeValue);
createForm.addEventListener("submit", createProductFunc);
uploadedImage.addEventListener("change", uploadImage);
// Functions
function getProductSizeValue(e) {
  productSizeValue = e.target.value;
}
function createProductFunc(e) {
  e.preventDefault();
  let allProduct = JSON.parse(localStorage.getItem("products")) || productsDB;
  let nameValue = productName.value;
  let descValue = productDesc.value;
  // let descValue = "Lorem ipsum dolor sit amet.";

  if (nameValue && descValue) {
    let obj = {
      id: allProduct.length ? allProduct.length + 1 : 1,
      title: nameValue,
      desc: descValue,
      size: productSizeValue,
      imageUrl: productImage,
      qty: 1,
      ismine: true,
    };
    let newProducts = allProduct ? [...allProduct, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProducts));
    // this.reset(); //reset all the form
    productName.value = "";
    productDesc.value = "";
    productSize.value = "";
    // alert("product created successfuly");
    setTimeout(() => (window.location = "index.html"), 500);
  } else {
    alert("enter data");
  }
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
