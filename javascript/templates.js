function generateMenuTitlesHTML(category) {
  return /*html*/ `<h2>${category}</h2>`;
}

function generatMenuListHTML(j, dish) {
  return /*html*/ `
  <article class="dishes">
    <div class="dish-img-wrapper">
      <img src="${dish.imgPath}" alt="" width="200">
    </div>
    <div class="dish-information">
      <h3 class="dish-title">${dish.name}</h3>
      <p class="dish-price">${dish.price.toFixed(2).replace(".", ",")} €</p>
      <p class="dish-description">${dish.description}</p>
      <button class="add-to-cart-btn" onclick="addToCart(${j})">Add to basket</button>
    </div>
    
  </article>
  `;
}

// function generateShoppingCartHTML(i, item) {
//   return /* html */ `
// <article class="cart-item">
//   <div>
//      <p>${item.amount} <span>x</span></p>
//      <p>${item.name}</p>
//  </div>

//  <div>
//       <button onclick="deleteDishes(${i})">x</button>
//       <button onclick="decreaseAmount(${i})">-1</button>
//       <button onclick="increaseAmount(${i})">1+</button>
//       <p>${item.price.toFixed(2).replace(".", ",")} €</p>
//  </div>
// </article>
//  <article class="price-box">
//     <p class="price-line"><span>Subtotal</span><span>36,70€</span></p>
//     <p class="price-line"><span>Delivery fee</span><span>${deliveryFee}</span></p>
//     <div class="separator"></div>
//     <p class="price-line"><span>Total</span><span>41,96€</span></p>
// </article>
// <button class="order-button" ><span>Buy now</span><span id="order_button_price">41,69€</span></button>

//     `;
// }

function generateShoppingCartHTML(i, item) {
  return /* html */ `
  <div id="dishes" class="dishes-wrapper">

  </div>
  <div class>

  </div>
<

    `;
}

function generateEmptyBasketHTML() {
  return /* html */ `
    <p>Nothing here yet.</p>
    <p>Go ahead and choose something delicious!</p>
    <img class="cart-icon" src="../assets/img/icons/cartIcon.svg" alt="">
  `;
}
