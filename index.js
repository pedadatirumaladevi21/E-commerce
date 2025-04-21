const fetchData = async () => {
    try {
        const res = await fetch("products.json");
        const data = await res.json();
        displayData(data);
        setupSearch(data);
    } catch (err) {
        console.log(err);
    }
};

const displayData = (products) => {
    const container = document.getElementById("product-container");
    container.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>₹${product.price}</p>
            <button>Add to Cart</button>
        `;
        container.appendChild(card);
    });
};

const setupSearch = (products) => {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filtered = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
        displayData(filtered);
    });
};

window.onload = fetchData;
