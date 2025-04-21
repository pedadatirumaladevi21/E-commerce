function submitBilling(event) {
    event.preventDefault();
    
    const formData = {
      name: document.querySelector('input[placeholder="Full Name"]').value,
      address: document.querySelector('input[placeholder="Address"]').value,
      pincode: document.querySelector('input[placeholder="Pincode"]').value,
      email: document.querySelector('input[type="email"]').value,
      phone: document.querySelector('input[placeholder="Phone Number"]').value
    };
    
    // Save billing info and clear cart
    localStorage.setItem('billingInfo', JSON.stringify(formData));
    localStorage.removeItem('cart');
    
    alert('Order placed successfully!');
    window.location.href = 'index.html';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Update cart count in case user navigates directly here
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
      alert('Your cart is empty!');
      window.location.href = 'cart.html';
    }
  });