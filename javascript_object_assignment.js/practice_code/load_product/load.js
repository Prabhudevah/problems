// Create an array of product objects, each with name, price, brand, and year
const product = [
    { name: "Laptop", price: 50000, brand: "Dell", year: 2022 },
    { name: "Phone", price: 20000, brand: "Samsung", year: 2023 },
    { name: "Tablet", price: 30000, brand: "Apple", year: 2021 }
];

// When the button with id 'loadProd' is clicked, run this function
document.getElementById('loadProd').addEventListener('click', () => {
    // Get the container element where products will be shown
    const container = document.getElementById('container');
    // Start with an empty string to build the HTML for product cards
    let cards = '';
    // Loop through each product in the array
    product.forEach((prod, index) => {
        // Add a card for each product, using its details
        cards += `<div class="card" data-index="${index}">
            <h1>${prod.name}</h1>
            <h2>${prod.price}</h2>
            <p>${prod.brand}</p>
            <p>Year: ${prod.year}</p>
        </div>`;
    });
    // Put all the cards inside the container (show them on the page)
    container.innerHTML = cards;
});

// Listen for clicks inside the container (event delegation)
document.getElementById('container').addEventListener('click', (e) => {
    // Find the closest card element that was clicked
    const card = e.target.closest('.card');
    // If a card was clicked
    if (card) {
        // Get the index of the product from the card's data attribute
        const index = card.dataset.index;
        // Show an alert with the name of the clicked product
        alert(`You clicked on: ${product[index].name}`);
    }
});