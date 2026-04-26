function init() {
  renderMenu();
  renderCart();
  if (shoppingCart.length > 0) {
    renderPrices();
  }
  updateBadge();
}

function renderMenu() {
  const menuOverview = document.getElementById("menu_overview");
  let newDish = null;
  let html = "";

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];

    html += generateMenuTitlesHTML(category);
    html += `<div class="dishes-wrapper">`;

    for (let j = 0; j < dishes.length; j++) {
      const dish = dishes[j];

      if (dish.category === category.name) {
        html += generatMenuListHTML(dish);
      }
    }

    html += `</div>`;
  }

  menuOverview.innerHTML = html;
}

function addToCart(id) {
  console.log("addToCart called with id:", id);
  console.trace();

  const currentDish = dishes.find((d) => d.id === id);
  const existingDish = findItemInShoppingCart(id);

  console.log("vorher: ", JSON.stringify(shoppingCart));

  if (existingDish) {
    existingDish.amount++;
  } else {
    const newDish = createNewDish(currentDish);
    shoppingCart.push(newDish);
    console.log("nachher: ", JSON.stringify(shoppingCart));
  }

  updateAddButton(currentDish.id);
  renderCart();
  adaptButtonsOnBasketDishCard(currentDish.id);
  renderPrices();
  updateBadge();
}

function updateAddButton(id) {
  const addButton = document.getElementById(`add_to_cart_btn_${id}`);

  const existingDish = findItemInShoppingCart(id);
  // console.log(existingDish);

  if (existingDish) {
    addButton.innerHTML = generateButtonContentHTML(existingDish);
  }
}

function resetAddButton(id) {
  const currentDish = dishes.find((dish) => dish.id === id);
  const currentAddButton = document.getElementById(`add_to_cart_btn_${id}`);

  if (currentDish.amount === 0) {
    currentAddButton.innerHTML = "Add to basket";
  }
}

// function resetAllAddButtons() {
//   const addButtons = document.querySelectorAll(".add-to-cart-btn");

//   for (let i = 0; i < addButtons.length; i++) {
//     const addButton = addButtons[i];
//     addButton.innerHTML = "Add to cart";
//   }
// }

function updateBadge() {
  const badgeContainer = document.getElementById("badge");
  let sumOfDishes = 0;

  if (shoppingCart.length === 0) {
    badgeContainer.classList.add("d-none");
    return;
  }

  for (let i = 0; i < shoppingCart.length; i++) {
    const dishAmount = shoppingCart[i].amount;
    sumOfDishes += dishAmount;
  }

  badgeContainer.classList.remove("d-none");
  badgeContainer.innerHTML = `${sumOfDishes}`;
}

function adaptButtonsOnBasketDishCard(id) {
  const item = shoppingCart.find((d) => d.id === id);
  const deleteOrMinusContainer = document.getElementById(
    `delete_or_minus_${id}`,
  );
  const optionalTrash = document.getElementById(`optional_trash_btn_${id}`);

  clearContainers(optionalTrash, deleteOrMinusContainer);

  if (item.amount === 1) {
    deleteOrMinusContainer.innerHTML = generateTrashButtonHTML(id);
  } else {
    deleteOrMinusContainer.innerHTML = generateDecreaseButtonHTML(id);
    optionalTrash.innerHTML = generateTrashButtonHTML(id);
  }
}

function renderCart() {
  const innerBasket = document.getElementById("inner_basket");
  const priceWrapper = document.getElementById("price_wrapper");

  let html = "";

  if (shoppingCart.length === 0) {
    innerBasket.innerHTML = generateEmptyBasketHTML();
    priceWrapper.innerHTML = "";
    return;
  }

  for (let i = 0; i < shoppingCart.length; i++) {
    const item = shoppingCart[i];

    html += generateCartContentHTML(item);
  }

  innerBasket.innerHTML = html;
  priceWrapper.innerHTML = generatePriceContentHTML();
}

function increaseAmount(id) {
  const currentItem = shoppingCart.find((item) => item.id === id);
  currentItem.amount++;

  renderCart();
  renderPrices();
  adaptButtonsOnBasketDishCard(currentItem.id);
  updateBadge();
}

function decreaseAmount(id) {
  const currentItem = shoppingCart.find((item) => item.id === id);

  if (currentItem.amount > 1) {
    currentItem.amount--;
  } else if (currentItem.amount <= 1) {
    deleteDishesOfSameKind(currentItem.id);
  }

  calculateTotal();
  renderCart();
  renderPrices();
  adaptButtonsOnBasketDishCard(currentItem.id);
  updateBadge();
}

function deleteDishesOfSameKind(id) {
  const currentItem = shoppingCart.find((item) => item.id === id);
  const index = shoppingCart.findIndex((item) => item.id === id);

  if (index === -1) return;

  shoppingCart.splice(index, 1);

  renderCart();
  renderPrices();
  adaptButtonsOnBasketDishCard(currentItem.id);
  updateBadge();
  if (shoppingCart.length === 0) {
    closeContainer("basket");
  }
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
  clearContainers(subtotalBox, totalBox, buyNowBtn);

  const subtotal = calculateSubtotal();
  const total = calculateTotal();

  subtotalBox.innerHTML = `${subtotal.toFixed(2).replace(".", ",")}€`;
  totalBox.innerHTML = `${total.toFixed(2).replace(".", ",")}€`;
  buyNowBtn.innerHTML = `Buy now (${total.toFixed(2).replace(".", ",")}€)`;
}

// function orderFood() {
//   emptyShoppingCart();
//   renderCart();
//   closeContainer("basket");
//   resetAllAddButtons();
//   updateBadge();
//   showSuccessMessage();
// }

// function showSuccessMessage() {
//   const messageContainer = document.getElementById("success");
//   messageContainer.classList.add("show");

//   setTimeout(() => {
//     messageContainer.classList.remove("show");
//   }, 3000);
// }

init();
