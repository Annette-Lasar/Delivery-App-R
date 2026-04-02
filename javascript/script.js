function init() {
  renderMenu();
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
  // Warenkorb auf der Konsole ausgeben
  // aktuelles Gericht festlegen
  // aktuelles Gericht in den Warenkorb legen
  // Warenkorb auf der Konsole ausgeben

  console.log("Warenkorb: ", shoppingCart);
  const currentDish = dishes[j];
  const newDish = {
    name: currentDish.name,
    price: currentDish.price,
    amount: 1,
  };
  console.log("aktuelles Gericht: ", newDish.name);
  shoppingCart.push(newDish);
  console.log("Warenkorb: ", shoppingCart);
}

init();
