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
  //leeren warenkorb anzeigen
  //gib mir aktuele gericht aus
  //das aktuele gericht in den Warenkorb hinzufügen
  //den warenkorb in der console ausgeben
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
    console.log("neues Gericht hinzugefügt: ", newDish.name);
  }

  console.log("warenkorb: ", shoppingCart);

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
  //im wagen um 1 erhön
  //
  let currentItemAmount = shoppingCart[i].amount;

  currentItemAmount++;

  shoppingCart[i].amount = currentItemAmount;

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

  renderCart();
}

function deleteDishes(i) {
  shoppingCart.splice(i, 1);

  renderCart();
}

function calculateSubtotal() {
  //code hier
}

function calculateTotal() {
  //code hier
}

init();
