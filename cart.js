let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCartItems() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';
  
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your cart is empty</p>';
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'cart-item mb-3 p-3 border-bottom';
    itemDiv.innerHTML = `
      <div class="d-flex justify-content-between">
        <h5>${item.name}</h5>
        <span>₹${item.price}</span>
      </div>
      <div class="d-flex justify-content-between mt-2">
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
    cartItemsDiv.appendChild(itemDiv);
    total += item.price;
  });

  // Add total
  const totalDiv = document.createElement('div');
  totalDiv.className = 'mt-3 fw-bold';
  totalDiv.innerHTML = `Total: ₹${total}`;
  cartItemsDiv.appendChild(totalDiv);
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart!`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCartItems();
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.querySelector('.badge');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  window.location.href = 'buynow.html';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  displayCartItems();
  updateCartCount();
});