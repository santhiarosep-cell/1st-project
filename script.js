function openProducts() {

    window.location.href = "products.html";

}
function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("contactMessage").innerHTML =
        "Thank you " + name + "! Your message has been sent.";

}
// Open Products Page

function openProducts() {

    window.location.href = "products.html";

}


// Add Product To Cart

function addToCart(name, price) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = {
        name: name,
        price: price
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");

}


// Back Button

function goBack() {

    window.history.back();

}


// Show Cart Products

function showCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cartItems");

    let totalPrice = document.getElementById("totalPrice");

    let total = 0;


    if (cart.length == 0) {

        cartItems.innerHTML =
            "<div class='empty-cart'>" +
            "<h2>Your cart is empty</h2>" +
            "<p>Add some products from the products page.</p>" +
            "</div>";

        totalPrice.innerHTML = 0;

        return;
    }


    cartItems.innerHTML = "";


    for (let i = 0; i < cart.length; i++) {

        total = total + cart[i].price;

        cartItems.innerHTML +=

            "<div class='cart-item'>" +

            "<div>" +

            "<h3>" +
            cart[i].name +
            "</h3>" +

            "<p>₹" +
            cart[i].price +
            "</p>" +

            "</div>" +

            "<button onclick='removeProduct(" +
            i +
            ")'>Remove</button>" +

            "</div>";

    }


    totalPrice.innerHTML = total;

}


// Remove Product

function removeProduct(index) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    showCart();

}


// Checkout

function checkout() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length == 0) {

        alert("Your cart is empty!");

        return;
    }


    alert("Thank you for shopping with RoseCart!");

}


// Contact Form

function sendMessage(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("contactMessage").innerHTML =
        "Thank you " + name + "! Your message has been sent.";

}


// Load Cart When Cart Page Opens

if (document.getElementById("cartItems")) {

    showCart();

}