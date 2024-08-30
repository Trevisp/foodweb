let cartCount = 0; // Variable to keep track of the cart count

function addToCart(itemName, itemPrice) {
    cartCount++;
    updateCartCount(); // Update the cart count in the navbar
    updateCartModal(itemName, itemPrice); // Update the cart modal 

function increaseQuantity() {
    let quantityElement = document.getElementById("no");
    let quantity = parseInt(quantityElement.innerText);
    quantity++;
    quantityElement.innerText = quantity;
}

function decreaseQuantity() {
    let quantityElement = document.getElementById("no");
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
        quantity--;
        quantityElement.innerText = quantity;
    }
}

function removeFromCart() {
    let quantityElement = document.getElementById("no");
    let quantity = parseInt(quantityElement.innerText);
    
    if (quantity > 1) {
        quantity--;
        quantityElement.innerText = quantity;
    } else {
        cartCount--;
        updateCartCount();
        
    }
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cartCount;
}

function updateCartModal(itemName, itemPrice) {
    
    let modalBody = document.querySelector(".modal-body ul");
    let listItem = document.createElement("li");

    listItem.innerHTML = `
        <img src="image/bugger.png" alt="burger">
        <p>${itemName}</p>
        <p>Ksh${itemPrice}</p>
        <button onclick="increaseQuantity()">+</button>
        <span id="no">1</span>
        <button onclick="decreaseQuantity()">-</button>
        <button onclick="removeFromCart()">remove</button>
    `;

    modalBody.appendChild(listItem);
}


