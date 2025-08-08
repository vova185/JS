document.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("add-btn")) {
    const cartCountElement = document.getElementById("cart-count");
    const currentCount = parseInt(cartCountElement.textContent);
    cartCountElement.textContent = currentCount + 1;
  }
});
const listProd = document.getElementById("product-list");
let i = 4;
const addProduct = () => {     
      const html = `
              <div class='product'>
                <h3>Товар ${i}</h3>
                <button class="add-btn">Добавить в корзину</button>
              </div>`;       
      listProd.innerHTML += html;
      i++;
}
