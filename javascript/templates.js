function generateMenuTitlesHTML(category) {
  return /*html*/ `
  <div class="title-wrapper">
    <img class="title-img" src="${category.imgPath}" alt=""> 
    <h2 class="title-banner">
      ${category.name}
    </h2>
  </div>
    `;
}

function generatMenuListHTML(dish) {
  return /*html*/ `
  <article class="dishes">
    <div class="dish-img-wrapper">
      <img src="${dish.imgPath}" alt="">
    </div>
    <div class="dish-information">
      <h3 class="dish-title">${dish.name}</h3>
      <p class="dish-price">${dish.price.toFixed(2).replace(".", ",")}€</p>
      <p class="dish-description">${dish.description}</p>
      <button id="add_to_cart_btn_${dish.id}" class="add-to-cart-btn" onclick="addToCart(${dish.id})">Add to basket</button>
    </div>
  </article>
  `;
}

function generateButtonContentHTML(dish) {
  return /* html */ `
   <span>Added ${dish.amount}</span>
  `;
}

function generateCartContentHTML(item) {
  return /* html */ `  
  <article class="cart-item">
    <div class="cart-item-title-wrapper">
      <div class="cart-item-title">
        <p class="cart-item-text">${item.amount} <span>x</span></p>
        <p class="cart-item-text">${item.name}</p>
      </div>
      <span id="optional_trash_btn_${item.id}" class="optional-trash-btn"></span>
    </div>
      <div id="delete_or_minus_${item.id}" class="delete-or-minus"></div>
      <button class="cart-item-text increase-dishes" onclick="increaseAmount(${item.id})">1+</button>
      <p class="cart-item-text item-price">${item.price.toFixed(2).replace(".", ",")} €</p>
  </article>
    `;
}

function generateTrashButtonHTML(id) {
  return /* html */ `
    <button class="delete-dishes" onclick="deleteDishesOfSameKind(${id})">
      <img src="../assets/img/icons/delete_icon.png" alt="">
    </button>
  `;
}

function generateDecreaseButtonHTML(id) {
  return /* html */ `
    <button class="cart-item-text decrease-dishes" onclick="decreaseAmount(${id})">-1</button>
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
