import { API } from "./variables.js";
import { fetchApi } from "./fetchApi.js";

export const drawProduct = () => {
  let api;
  if (params.q === "") {
    api = `${API}`;
  } else {
    api = `${API}/search?q=${params.q}`;
  }
  console.log(api);
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const listProducts = document.querySelector(".mainProduct");
      const html = data.products
        .map(
          (product) => `
            <div class="mainProduct__Item">
              <figure class="mainProduct__ImgGR">
                <img class="mainProduct__Img" src="${product.thumbnail}" alt="${product.brand}" />
              </figure>
              <div class="mainProduct__Item--From">
                <h3 class="mainProduct__Item--title">${product.title}</h3>
                <p class="mainProduct__Item--desc">${product.description}</p>
                <span class="mainProduct__Item--stock">Stock : ${product.stock}</span>
              </div>
            </div>
          `
        )
        .join("");
      listProducts.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
};
