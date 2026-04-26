function findItemInShoppingCart(item) {
  return shoppingCart.find(function (dish) {
    return dish.id === item.id;
  });
}


function closeContainer(id) {
  const cartContainer = document.getElementById(`${id}`);
  cartContainer.classList.remove("show");
}


