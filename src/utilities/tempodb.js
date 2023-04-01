//local storage for cart data
const addToDB = (id) => {
  let cart = {};

  cart = JSON.parse(localStorage.getItem("cart")) || {};

  // Add quantity to cart
  const quantity = cart[id];
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    cart[id] = newQuantity;
  } else {
    cart[id] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};
// remove item from cart
const removeFromDB = (id) => {
    let cart = {};
    cart = JSON.parse(localStorage.getItem("cart")) || {};
    if (cart[id]) {
      const newQuantity = parseInt(cart[id]) - 1;
      cart[id] = newQuantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
};

// total price
const totalPrice = cart => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const total = cart.reduce(reducer, 0); 
    return total;
}

export { addToDB, removeFromDB, totalPrice };


