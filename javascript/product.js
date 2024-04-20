import { drawProduct } from "./drawProduct.js";
import { params } from "./variables.js";

drawProduct();

const searchBtn = document.querySelector(".SearchBtn");
const inputBtn = document.querySelector(".SearchInput");

searchBtn.addEventListener("click", () => {
  params.q = inputBtn.value;
  drawProduct();
});
