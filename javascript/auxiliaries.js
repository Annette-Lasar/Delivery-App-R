function findItemInShoppingCart(id) {
  return shoppingCart.find(function (dish) {
    return dish.id === id;
  });
}

function showContainer(id) {
  const cartContainer = document.getElementById(`${id}`);
  cartContainer.classList.add("show");
}

function closeContainer(id) {
  const cartContainer = document.getElementById(`${id}`);
  cartContainer.classList.remove("show");
}

function emptyShoppingCart() {
  shoppingCart.length = 0;
}

function clearContainers(...containerIDs) {
  let container;
  for (let i = 0; i < containerIDs.length; i++) {
    const id = containerIDs[i];
    container = document.getElementById(id);
    if (container) {
      container.innerHTML = "";
    }
  }
}

function createNewDish(currentDish) {
  return {
    id: currentDish.id,
    name: currentDish.name,
    price: currentDish.price,
    amount: 1,
  };
}
