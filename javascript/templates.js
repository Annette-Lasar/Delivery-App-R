function generateMenuTitlesHTML(category) {
  return /*html*/ `
  <div class="title-wrapper">
    <img class="title-img" src="${category.imgPath}" alt=""> 
    <h2>
      ${category.name}
    </h2>
  </div>
    `;
}

function generatMenuListHTML(j, dish) {
  return /*html*/ `
  <article class="dishes">
    <div class="dish-img-wrapper">
      <img src="${dish.imgPath}" alt="">
    </div>
    <div class="dish-information">
      <h3 class="dish-title">${dish.name}</h3>
      <p class="dish-price">${dish.price.toFixed(2).replace(".", ",")}€</p>
      <p class="dish-description">${dish.description}</p>
      <button id="add_to_cart_btn_${dish.id}" class="add-to-cart-btn" onclick="addToCart(${j})">Add to basket</button>
    </div>
  </article>
  `;
}

function generateButtonContentHTML(dish) {
  return /* html */ `
   <span>Added ${dish.amount}</span>
  `;
}

function generateCartContentHTML(i, item) {
  return /* html */ `  
  <article class="cart-item">
    <div class="cart-item-title-wrapper">
      <p class="cart-item-text">${item.amount} <span>x</span></p>
      <p class="cart-item-text">${item.name}</p>
    </div>
      <div class="button-wrapper">
       <button class="delete-dishes" onclick="deleteDishes(${i})">
        <img src="../assets/img/icons/delete_icon.png" alt="">
       </button>
       <button class="cart-item-text decrease-dishes" onclick="decreaseAmount(${i})">-1</button>
       <button class="cart-item-text increase-dishes" onclick="increaseAmount(${i})">1+</button>
      </div>
       <p class="cart-item-text item-price">${item.price.toFixed(2).replace(".", ",")} €</p>
  </article>
    `;
}

function generatePriceContentHTML() {
  return /* html */ `
      <article class="price-box">
          <p class="price-line"><span>Subtotal</span><span id="subtotal_box"></span></p>
          <p class="price-line"><span>Delivery fee</span><span>${deliveryFee.toFixed(2).replace(".", ",")}€</span></p>
          <div class="separator"></div>
          <p class="price-line"><span>Total</span><span id="total_box"></span></p>
          <button id="buy_now_btn" class="buy-now-btn" onclick="orderFood()"></button>
        </article>
  `;
}

function generateEmptyBasketHTML() {
  return /* html */ `
  <div class="cart-content-wrapper">
    <p>Nothing here yet.</p>
    <p>Go ahead and choose something delicious!</p>
    <img class="cart-icon" src="../assets/img/icons/cartIcon.svg" alt="">
  </div>
  `;
}
