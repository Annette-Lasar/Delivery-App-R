function init() {
  renderMenu();
  renderCart();
  if (shoppingCart.length > 0) {
    renderPrices();
  }
}

function renderMenu() {
  const menuOverview = document.getElementById("menu_overview");
  let html = "";

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    html += generateMenuTitlesHTML(category);
    html += `<div class="dishes-wrapper">`;

    for (let j = 0; j < dishes.length; j++) {
      const dish = dishes[j];

      if (dish.category === category.name) {
        html += generatMenuListHTML(j, dish);
      }
    }

    html += `</div>`;
  }

  menuOverview.innerHTML = html;
}

function addToCart(j) {
  const currentDish = dishes[j];
  const existingDish = findItemInShoppingCart(currentDish);

  if (existingDish) {
    existingDish.amount++;
  } else {
    const newDish = {
      id: currentDish.id,
      name: currentDish.name,
      price: currentDish.price,
      amount: 1,
    };
    shoppingCart.push(newDish);
  }

  changeAddButton(currentDish);
  calculateTotal();
  renderCart();
  renderPrices();
}

function changeAddButton(currentDish) {
  const addButton = document.getElementById(
    `add_to_cart_btn_${currentDish.id}`,
  );

  const existingDish = findItemInShoppingCart(currentDish);

  if (existingDish) {
    addButton.innerHTML = generateButtonContentHTML(existingDish);
  }
}

function renderCart() {
  const innerBasket = document.getElementById("inner_basket");
  let html = "";

  if (shoppingCart.length === 0) {
    innerBasket.innerHTML = generateEmptyBasketHTML();
    return;
  }

  for (let i = 0; i < shoppingCart.length; i++) {
    const item = shoppingCart[i];

    html += generateCartContentHTML(i, item);
  }

  html += generatePriceContentHTML();
  innerBasket.innerHTML = html;
}

function increaseAmount(i) {
  let currentItemAmount = shoppingCart[i].amount;

  currentItemAmount++;

  shoppingCart[i].amount = currentItemAmount;

  calculateTotal();
  renderCart();
  renderPrices();
}

function decreaseAmount(i) {
  let currentItemAmount = shoppingCart[i].amount;

  if (currentItemAmount > 1) {
    currentItemAmount--;
    shoppingCart[i].amount = currentItemAmount;
  } else if (currentItemAmount <= 1) {
    deleteDishes(i);
  }

  calculateTotal();
  renderCart();
  renderPrices();
}

function deleteDishes(i) {
  shoppingCart.splice(i, 1);

  calculateTotal();
  renderCart();
  renderPrices();
}

function calculateSubtotal() {
  let subtotal = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const itemPrice = shoppingCart[i].price;
    const itemAmount = shoppingCart[i].amount;

    const sum = itemPrice * itemAmount;
    subtotal += sum;
  }
  return subtotal;
}

function calculateTotal() {
  let total = 0;
  const subtotal = calculateSubtotal();
  if (shoppingCart.length > 0) {
    total = subtotal + deliveryFee;
  } else {
    total = subtotal;
  }

  return total;
}

function renderPrices() {
  const subtotalBox = document.getElementById("subtotal_box");
  const totalBox = document.getElementById("total_box");
  const buyNowBtn = document.getElementById("buy_now_btn");
  subtotalBox.innerHTML = "";
  totalBox.innerHTML = "";
  buyNowBtn.innerHTML = "";

  const subtotal = calculateSubtotal();
  const total = calculateTotal();

  subtotalBox.innerHTML = `${subtotal.toFixed(2).replace(".", ",")}€`;
  totalBox.innerHTML = `${total.toFixed(2).replace(".", ",")}€`;
  buyNowBtn.innerHTML = `Buy now (${total.toFixed(2).replace(".", ",")}€)`;
}

function showCart() {
  const cartContainer = document.getElementById("basket");
  cartContainer.classList.add("show");
}

function closeCart() {
  const cartContainer = document.getElementById("basket");
  cartContainer.classList.remove("show");
}

init();
