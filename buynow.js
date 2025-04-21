function displayOrderSummary() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const summaryDiv = document.getElementById('buy-now-summary');
    
    if (cart.length === 0) {
      summaryDiv.innerHTML = '<p>No items in cart</p>';
      return;
    }
  
    let total = 0;
    let html = '<h4>Order Summary</h4><ul class="list-group mb-3">';
    
    cart.forEach(item => {
      html += `
        <li class="list-group-item d-flex justify-content-between">
          <span>${item.name}</span>
          <span>₹${item.price}</span>
        </li>
      `;
      total += item.price;
    });
  
    html += `
      </ul>
      <div class="d-flex justify-content-between fw-bold">
        <span>Total:</span>
        <span>₹${total}</span>
      </div>
    `;
    
    summaryDiv.innerHTML = html;
  }
  
  function proceedToBilling() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart || cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    window.location.href = 'billing.html';
  }
  
  document.addEventListener('DOMContentLoaded', displayOrderSummary);