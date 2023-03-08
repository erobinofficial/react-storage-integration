//local storage for cart data
const addToDB = id =>{
    let cart = {};

    cart = JSON.parse(localStorage.getItem('cart')) || {};

    // Add quantity to cart
    const quantity = cart[id];
    if(quantity){
        const newQuantity = parseInt(quantity) + 1;
        cart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);
    }
    else{
        cart[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart)); 
}
export {addToDB};