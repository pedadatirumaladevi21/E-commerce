const products = {
    'klosia-kurta': {
      name: 'Klosia Kurta',
      price: 1299,
      description: 'Beautiful ethnic kurta with intricate embroidery work',
      details: '100% Cotton, Hand-wash only, Available in multiple colors',
      image: './Images/klosia kurta set.webp'
    },
    // Add other products similarly
  };
  
  function displayProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const product = products[productId];
    
    if (!product) {
      window.location.href = 'index.html';
      return;
    }
  
    const detailsDiv = document.getElementById('product-details');
    detailsDiv.innerHTML = `
      <div class="container mt-4">
        <div class="row">
          <div class="col-md-6">
            <img src="${product.image}" alt="${product.name}" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h2>${product.name}</h2>
            <p class="text-muted">${product.description}</p>
            <h4 class="my-3">₹${product.price}</h4>
            <p>${product.details}</p>
            <button class="btn btn-primary" onclick="addToCart('${product.name}', ${product.price})">
              Add to Cart
            </button>
            <button class="btn btn-outline-secondary ms-2" onclick="window.location.href='index.html'">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    `;
  }
  
  document.addEventListener('DOMContentLoaded', displayProductDetails);