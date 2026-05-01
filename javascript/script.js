function init() {
  renderMenu();
  renderCart();
  if (shoppingCart.length > 0) {
    renderPrices();
  }
  updateBadge();
}

/* ==========================================================
Menu
============================================================= */

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

/* ==========================================================
Shopping cart
============================================================= */

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

  updateButtonsOnDishCardsInCart(); 
}

/* =============================================================
Increase, decrease and delete items in shopping cart
=============================================================== */
function addToCart(id) {
  const currentDish = dishes.find((d) => d.id === id);
  const existingDish = findItemInShoppingCart(id);

  if (existingDish) {
    existingDish.amount++;
  } else {
    const newDish = createNewDish(currentDish);
    shoppingCart.push(newDish);
    console.log("Warenkorb: ", newDish); 
  }

  updateAddButton(currentDish.id);
  renderCart();
  renderPrices();
  updateBadge();
}

function increaseAmount(id) {
  const currentItem = shoppingCart.find((item) => item.id === id);

  if (!currentItem) return;

  currentItem.amount++;

  renderCart();
  renderPrices();
  updateBadge();
}

function decreaseAmount(id) {
  const currentItem = shoppingCart.find((item) => item.id === id);

  if (!currentItem) return;

  if (currentItem.amount > 1) {
    currentItem.amount--;
  } else if (currentItem.amount <= 1) {
    deleteDishesOfSameKind(currentItem.id);
  }

  renderCart();
  renderPrices();
  updateBadge();
}

function deleteDishesOfSameKind(id) {
  const index = shoppingCart.findIndex((item) => item.id === id);

  if (index === -1) return;

  shoppingCart.splice(index, 1);

  renderCart();
  renderPrices();
  updateBadge();
  resetAddButton(id);

  if (shoppingCart.length === 0) {
    closeContainer("basket");
  }
}

/* ====================================================
Update UI buttons and badges
======================================================= */

function updateButtonsOnDishCardsInCart() {
  for (let i = 0; i < shoppingCart.length; i++) {
    adaptButtonsOnBasketDishCard(shoppingCart[i].id);
  }
}

function updateAddButton(id) {
  const addButton = document.getElementById(`add_to_cart_btn_${id}`);

  const existingDish = findItemInShoppingCart(id);

  if (existingDish) {
    addButton.classList.add("orange"); 
    addButton.innerHTML = generateButtonContentHTML(existingDish);
  }
}

function resetAddButton(id) {
  const currentAddButton = document.getElementById(`add_to_cart_btn_${id}`);

  if (!findItemInShoppingCart(id)) {
    currentAddButton.classList.remove("orange"); 
    currentAddButton.innerHTML = "Add to basket";
  }
}

function resetAllAddButtons() {
  const addButtons = document.querySelectorAll(".add-to-cart-btn");

  for (let i = 0; i < addButtons.length; i++) {
    const addButton = addButtons[i];
    addButton.classList.remove("orange"); 
    addButton.innerHTML = "Add to cart";
  }
}

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

  if (!item) return; 

  if (item.amount === 1) {
    deleteOrMinusContainer.innerHTML = generateTrashButtonHTML(id);
  } else {
    deleteOrMinusContainer.innerHTML = generateDecreaseButtonHTML(id);
    optionalTrash.innerHTML = generateTrashButtonHTML(id);
  }
}

/* =====================================================
Prices & Ordering
======================================================*/
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
  if (shoppingCart.length === 0) return;

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

function orderFood() {
  emptyShoppingCart();
  renderCart();
  closeContainer("basket");
  resetAllAddButtons();
  updateBadge();
  showSuccessMessage();
}

function showSuccessMessage() {
  const messageContainer = document.getElementById("success");
  messageContainer.classList.add("show");

  setTimeout(() => {
    messageContainer.classList.remove("show");
  }, 3000);
}

init();
