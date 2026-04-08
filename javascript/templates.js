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
      <p class="dish-price">${dish.price.toFixed(2).replace('.', ',')} €</p>
      <p class="dish-description">${dish.description}</p>
      <button class="add-to-cart-btn" onclick="addToCart(${j})">Add to basket</button>
    </div>
    
  </article>
  `;
}

function generateCartContentHTML(i, item) {
  return /* html */ `
     <article>
      <div>${item.amount}</div>
      <div>${item.name}</div>
      <div>${item.price}</div>
     </article>
  `;
}
