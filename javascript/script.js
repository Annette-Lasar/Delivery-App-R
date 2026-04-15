function init() {
  renderMenu();
  renderCart();
}

function renderMenu() {
  const menuOverview = document.getElementById("menu_overview");
  menuOverview.innerHTML = "";

  for (let i = 0; i < categories.length; i++) {
    const category = categories[i];
    menuOverview.innerHTML += generateMenuTitlesHTML(category);

    for (let j = 0; j < dishes.length; j++) {
      const dish = dishes[j];

      if (dish.category === category) {
        menuOverview.innerHTML += generatMenuListHTML(j, dish);
      }
    }
  }
}

function addToCart(j) {
  const currentDish = dishes[j];

  const existingDish = shoppingCart.find(function (dish) {
    return dish.id === currentDish.id;
  });

  if (existingDish) {
    existingDish.amount++;
    console.log("gericht erhöht: ", existingDish.name);
  } else {
    const newDish = {
      id: currentDish.id,
      name: currentDish.name,
      price: currentDish.price,
      amount: 1,
    };
    shoppingCart.push(newDish);
    // console.log("neues Gericht hinzugefügt: ", newDish.name);
  }

  // console.log("warenkorb: ", shoppingCart);

  calculateTotal();
  renderCart();
}

function renderCart() {
  const innerBasket = document.getElementById("inner_basket");
  innerBasket.innerHTML = "";

  for (let i = 0; i < shoppingCart.length; i++) {
    const item = shoppingCart[i];

    innerBasket.innerHTML += generateShoppingCartHTML(i, item);
  }
}

function increaseAmount(i) {
  let currentItemAmount = shoppingCart[i].amount;

  currentItemAmount++;

  shoppingCart[i].amount = currentItemAmount;

  calculateTotal();
  renderCart();
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
}

function deleteDishes(i) {
  shoppingCart.splice(i, 1);

  calculateTotal();
  renderCart();
}

function calculateSubtotal() {
  let subtotal = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const itemPrice = shoppingCart[i].price;
    const itemAmount = shoppingCart[i].amount;

    const sum = itemPrice * itemAmount;
    subtotal += sum;
  }
  console.log(`Zwischensumme:  ${subtotal.toFixed(2).replace(".", ",")} €`);
  return subtotal; 
}

function calculateTotal() {
  let total = 0;
  const subtotal = calculateSubtotal();
  if (shoppingCart.length > 0) {
    total = subtotal + deliveryFee;
    console.log(`Endsumme: ${total.toFixed(2).replace(".", ",")} €`);
  } else {
    total = subtotal;
    console.log(`Endsumme: ${subtotal.toFixed(2).replace(".", ",")} €`);
  }
}

init();
