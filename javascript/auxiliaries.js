function findItemInShoppingCart(item) {
  return shoppingCart.find(function (dish) {
    return dish.id === item.id;
  });
}
