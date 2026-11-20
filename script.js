/* =====================================================
   MYNTRA PREMIUM MEN'S FASHION
   Complete Shopping System
===================================================== */


/* ================= PRODUCTS ================= */

const products = [

    {
        id: 1,
        name: "Premium Black T-Shirt",
        category: "T-Shirts",
        price: 699,
        oldPrice: 1199,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 2,
        name: "Classic White T-Shirt",
        category: "T-Shirts",
        price: 599,
        oldPrice: 999,
        image: "https://www.peregrineclothing.co.uk/cdn/shop/files/Classic_T-shirt_-_White_-_Main_1200x1200.jpg?v=1740416743"
    },
    
    {
        id: 3,
        name: "Oversized Street T-Shirt",
        category: "T-Shirts",
        price: 799,
        oldPrice: 1299,
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 4,
        name: "Slim Fit Oxford Shirt",
        category: "Shirts",
        price: 1099,
        oldPrice: 1799,
        image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 5,
        name: "Premium Casual Shirt",
        category: "Shirts",
        price: 1299,
        oldPrice: 1999,
        image: "https://assets.myntassets.com/assets/images/2025/SEPTEMBER/25/8Wj9Ttzf_fd7cf7aa989b4b869a512ee1cf5f9e40.jpg"
    },

    {
        id: 6,
        name: "Dark Blue Denim Jeans",
        category: "Jeans",
        price: 1499,
        oldPrice: 2499,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 7,
        name: "Classic Blue Jeans",
        category: "Jeans",
        price: 1399,
        oldPrice: 2299,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 8,
        name: "White Premium Sneakers",
        category: "Sneakers",
        price: 1899,
        oldPrice: 2999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 9,
        name: "Urban Black Sneakers",
        category: "Sneakers",
        price: 2099,
        oldPrice: 3499,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 10,
        name: "Luxury Running Sneakers",
        category: "Sneakers",
        price: 2499,
        oldPrice: 3999,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=85"
    }

];


/* ================= STORAGE ================= */

let cart = JSON.parse(localStorage.getItem("myntraCart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("myntraWishlist")) || [];

let account =
    JSON.parse(localStorage.getItem("myntraAccount")) || null;

let orders =
    JSON.parse(localStorage.getItem("myntraOrders")) || [];

let appliedCoupon = null;


/* ================= START ================= */

document.addEventListener("DOMContentLoaded", () => {

    renderProducts(products);

    updateCounts();

    updateProfile();

});


/* ================= HOME ================= */

function goHome() {

    // Clear search
    document.getElementById("searchInput").value = "";

    // Reset category filter
    document.getElementById("categoryFilter").value = "ALL";

    // Show ALL 10 products
    renderProducts(products);

    // Scroll to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= PRODUCTS ================= */

function renderProducts(list) {

    const grid = document.getElementById("productGrid");

    if (!list.length) {

        grid.innerHTML = `
            <div class="empty">
                <h3>No products found</h3>
                <p>Try another search.</p>
            </div>
        `;

        return;
    }


    grid.innerHTML = list.map(product => {

        const liked = wishlist.includes(product.id);

        return `

        <div class="product-card">

            <button
                class="wishlist-heart ${liked ? "active" : ""}"
                onclick="toggleWishlist(${product.id})"
            >
                ${liked ? "♥" : "♡"}
            </button>

            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
                onerror="this.src='https://via.placeholder.com/500x650?text=Fashion'"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="product-category">
                    ${product.category}
                </p>

                <div class="product-price">
                    ₹${product.price.toLocaleString()}
                    <del>₹${product.oldPrice.toLocaleString()}</del>
                </div>

                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                >
                    ADD TO BAG
                </button>

            </div>

        </div>

        `;

    }).join("");

}


/* ================= SEARCH ================= */

function searchProducts() {

    const value =
        document.getElementById("searchInput").value
        .toLowerCase()
        .trim();

    const category =
        document.getElementById("categoryFilter").value;


    let result = products.filter(product => {

        const matchesSearch =
            product.name.toLowerCase().includes(value) ||
            product.category.toLowerCase().includes(value);

        const matchesCategory =
            category === "ALL" ||
            product.category === category;

        return matchesSearch && matchesCategory;

    });

    renderProducts(result);

}


/* ================= FILTER ================= */

function applyFilters() {
    searchProducts();
}


function filterProducts(category) {

    if (category === "ALL") {

        document.getElementById("categoryFilter").value = "ALL";

    } else {

        document.getElementById("categoryFilter").value = category;

    }

    searchProducts();

    scrollToProducts();

}


function scrollToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


/* ================= CART ================= */

function addToCart(id) {

    if (!isLoggedIn()) {

        showLoginRequired("Please login before adding products to your bag.");

        return;

    }


    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }

    saveCart();

    updateCounts();

    showToast("Product added to your bag");

}


function saveCart() {

    localStorage.setItem(
        "myntraCart",
        JSON.stringify(cart)
    );

}


/* ================= WISHLIST ================= */

function toggleWishlist(id) {

    if (!isLoggedIn()) {

        showLoginRequired(
            "Please login to save products to your wishlist."
        );

        return;

    }


    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(productId => productId !== id);

        showToast("Removed from wishlist");

    } else {

        wishlist.push(id);

        showToast("Added to wishlist");

    }


    localStorage.setItem(
        "myntraWishlist",
        JSON.stringify(wishlist)
    );


    updateCounts();

    renderProducts(
        products.filter(product =>
            document.getElementById("categoryFilter").value === "ALL" ||
            product.category ===
            document.getElementById("categoryFilter").value
        )
    );

}


/* ================= COUNTS ================= */

function updateCounts() {

    const cartCount =
        cart.reduce(
            (total,item) => total + item.quantity,
            0
        );

    document.getElementById("bagCount").textContent =
        cartCount;

    document.getElementById("wishlistCount").textContent =
        wishlist.length;

}


/* ================= LOGIN ================= */

function isLoggedIn() {

    return account !== null;

}


function openAccount() {

    if (isLoggedIn()) {

        showAccount();

    } else {

        showLogin();

    }

}


function showLogin() {

    openModal(`

        <div class="auth-container">

            <div class="brand-name" style="margin-bottom:20px;">
                myntra
            </div>

            <h2>Login</h2>

            <p>Login to continue shopping with us.</p>

            <div class="auth-tabs">

                <button
                    class="active"
                    onclick="showLogin()"
                >
                    LOGIN
                </button>

                <button
                    onclick="showRegister()"
                >
                    REGISTER
                </button>

            </div>

            <form onsubmit="loginUser(event)">

                <div class="form-group">

                    <label>EMAIL / MOBILE</label>

                    <input
                        id="loginEmail"
                        type="text"
                        required
                        placeholder="Enter email or mobile number"
                    >

                </div>

                <div class="form-group">

                    <label>PASSWORD</label>

                    <input
                        id="loginPassword"
                        type="password"
                        required
                        placeholder="Enter password"
                    >

                </div>

                <button class="full-btn">
                    LOGIN SECURELY
                </button>

            </form>

            <p style="margin-top:20px;text-align:center;">
                New customer?
                <span
                    onclick="showRegister()"
                    style="color:#ff3f6c;cursor:pointer;font-weight:700;"
                >
                    Create Account
                </span>
            </p>

        </div>

    `);

}


function showRegister() {

    openModal(`

        <div class="auth-container">

            <div class="brand-name" style="margin-bottom:20px;">
                myntra
            </div>

            <h2>Create Account</h2>

            <p>Join us and discover your style.</p>

            <form onsubmit="registerUser(event)">

                <div class="form-group">

                    <label>FULL NAME</label>

                    <input
                        id="registerName"
                        type="text"
                        required
                        placeholder="Your full name"
                    >

                </div>

                <div class="form-group">

                    <label>EMAIL</label>

                    <input
                        id="registerEmail"
                        type="email"
                        required
                        placeholder="Your email address"
                    >

                </div>

                <div class="form-group">

                    <label>MOBILE NUMBER</label>

                    <input
                        id="registerMobile"
                        type="tel"
                        required
                        placeholder="10 digit mobile number"
                        pattern="[0-9]{10}"
                    >

                </div>

                <div class="form-group">

                    <label>PASSWORD</label>

                    <input
                        id="registerPassword"
                        type="password"
                        required
                        minlength="6"
                        placeholder="Minimum 6 characters"
                    >

                </div>

                <button class="full-btn">
                    CREATE ACCOUNT
                </button>

            </form>

            <p style="margin-top:20px;text-align:center;">
                Already have an account?
                <span
                    onclick="showLogin()"
                    style="color:#ff3f6c;cursor:pointer;font-weight:700;"
                >
                    Login
                </span>
            </p>

        </div>

    `);

}


function registerUser(event) {

    event.preventDefault();

    account = {

        name: document.getElementById("registerName").value,

        email: document.getElementById("registerEmail").value,

        mobile: document.getElementById("registerMobile").value,

        password: document.getElementById("registerPassword").value

    };


    localStorage.setItem(
        "myntraAccount",
        JSON.stringify(account)
    );


    updateProfile();

    showSuccessMessage(
        "Account Created Successfully!",
        `Welcome to myntra, ${account.name}.`
    );

}


function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;


    if (!account) {

        alert("No account found. Please register first.");

        showRegister();

        return;

    }


    if (
        email !== account.email &&
        email !== account.mobile
    ) {

        alert("Email or mobile number is incorrect.");

        return;

    }


    if (password !== account.password) {

        alert("Incorrect password.");

        return;

    }


    updateProfile();

    showSuccessMessage(
        "Login Successful!",
        `Welcome back, ${account.name}. You are successfully logged in.`
    );

}


function updateProfile() {

    const profile =
        document.getElementById("profileText");

    if (!profile) return;

    profile.textContent =
        account ? "Account" : "Profile";

}


function showAccount() {

    openModal(`

        <div class="auth-container">

            <div class="brand-name">myntra</div>

            <h2 style="margin-top:20px;">
                Hello, ${account.name}
            </h2>

            <p>${account.email}</p>

            <div class="checkout-section">

                <h3>Account Details</h3>

                <p><strong>Name:</strong> ${account.name}</p>
                <p><strong>Email:</strong> ${account.email}</p>
                <p><strong>Mobile:</strong> ${account.mobile}</p>

            </div>

            <button
                class="full-btn"
                onclick="openOrders()"
            >
                MY ORDERS
            </button>

            <button
                class="full-btn"
                style="margin-top:10px;background:#282c3f;"
                onclick="logout()"
            >
                LOGOUT
            </button>

        </div>

    `);

}


function logout() {

    account = null;

    localStorage.removeItem("myntraAccount");

    updateProfile();

    showSuccessMessage(
        "Logged Out",
        "You have been successfully logged out."
    );

}


/* ================= LOGIN REQUIRED ================= */

function showLoginRequired(message) {

    openModal(`

        <div class="success">

            <div class="success-icon">!</div>

            <h2>Login Required</h2>

            <p style="margin:15px 0 25px;color:#777;">
                ${message}
            </p>

            <button
                class="full-btn"
                onclick="showLogin()"
            >
                LOGIN / REGISTER
            </button>

        </div>

    `);

}


/* ================= WISHLIST PANEL ================= */

function openWishlist() {

    if (!isLoggedIn()) {

        showLoginRequired(
            "Please login to view your wishlist."
        );

        return;

    }


    const items =
        wishlist
            .map(id => products.find(p => p.id === id))
            .filter(Boolean);


    openModal(`

        <h2>My Wishlist</h2>

        ${
            items.length
            ?
            items.map(product => `

                <div class="bag-item">

                    <img src="${product.image}">

                    <div class="bag-details">

                        <h4>${product.name}</h4>

                        <p>${product.category}</p>

                        <strong>
                            ₹${product.price.toLocaleString()}
                        </strong>

                        <br>

                        <button
                            class="add-btn"
                            onclick="addToCart(${product.id})"
                        >
                            MOVE TO BAG
                        </button>

                    </div>

                </div>

            `).join("")
            :
            `
                <div class="empty">
                    <h3>Your wishlist is empty</h3>
                    <p>Save your favourite styles here.</p>
                </div>
            `
        }

    `);

}


/* ================= BAG ================= */

function openBag() {

    if (!isLoggedIn()) {

        showLoginRequired(
            "Please login to access your shopping bag."
        );

        return;

    }


    renderBag();

}


function renderBag() {

    const totalItems =
        cart.reduce(
            (sum,item) => sum + item.quantity,
            0
        );


    if (!cart.length) {

        openModal(`

            <div class="empty">

                <h2>Your Bag is Empty</h2>

                <p style="margin:15px;">
                    Add something stylish to your bag.
                </p>

                <button
                    class="full-btn"
                    onclick="closeModal();scrollToProducts();"
                >
                    CONTINUE SHOPPING
                </button>

            </div>

        `);

        return;

    }


    const subtotal = getSubtotal();

    const discount = getDiscount(subtotal);

    const delivery =
        subtotal >= 999 ? 0 : 99;

    const total =
        subtotal - discount + delivery;


    openModal(`

        <h2>Shopping Bag</h2>

        <p style="color:#777;margin:8px 0 25px;">
            ${totalItems} item${totalItems > 1 ? "s" : ""}
        </p>

        <div class="bag-layout">

            <div>

                ${cart.map(item => {

                    const product =
                        products.find(p => p.id === item.id);

                    return `

                        <div class="bag-item">

                            <img src="${product.image}">

                            <div class="bag-details">

                                <h4>${product.name}</h4>

                                <p>${product.category}</p>

                                <strong>
                                    ₹${product.price.toLocaleString()}
                                </strong>

                                <div class="quantity">

                                    <button
                                        onclick="changeQuantity(${product.id},-1)"
                                    >
                                        −
                                    </button>

                                    <span>
                                        ${item.quantity}
                                    </span>

                                    <button
                                        onclick="changeQuantity(${product.id},1)"
                                    >
                                        +
                                    </button>

                                </div>

                                <button
                                    class="remove-btn"
                                    onclick="removeFromCart(${product.id})"
                                >
                                    REMOVE
                                </button>

                            </div>

                        </div>

                    `;

                }).join("")}

            </div>


            <div class="summary">

                <h3>PRICE DETAILS</h3>

                <div class="summary-row">
                    <span>Subtotal</span>
                    <strong>₹${subtotal.toLocaleString()}</strong>
                </div>

                <div class="summary-row">
                    <span>Discount</span>
                    <strong style="color:#03a685;">
                        − ₹${discount.toLocaleString()}
                    </strong>
                </div>

                <div class="summary-row">
                    <span>Delivery</span>
                    <strong>
                        ${delivery === 0 ? "FREE" : "₹99"}
                    </strong>
                </div>


                <div class="coupon">

                    <input
                        id="couponInput"
                        placeholder="Coupon code"
                    >

                    <button onclick="applyCoupon()">
                        APPLY
                    </button>

                </div>


                <div class="summary-row summary-total">

                    <span>Total Amount</span>

                    <strong>
                        ₹${total.toLocaleString()}
                    </strong>

                </div>


                <button
                    class="full-btn"
                    style="margin-top:20px;"
                    onclick="openCheckout()"
                >
                    PROCEED TO PAYMENT
                </button>

            </div>

        </div>

    `);

}


/* ================= QUANTITY ================= */

function changeQuantity(id, change) {

    const item =
        cart.find(item => item.id === id);

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(item => item.id !== id);

    }


    saveCart();

    updateCounts();

    renderBag();

}


function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);

    saveCart();

    updateCounts();

    renderBag();

}


/* ================= PRICE ================= */

function getSubtotal() {

    return cart.reduce((total,item) => {

        const product =
            products.find(p => p.id === item.id);

        return total +
            product.price * item.quantity;

    },0);

}


function getDiscount(subtotal) {

    if (appliedCoupon === "MYNTRA10") {

        return Math.round(subtotal * .10);

    }

    if (appliedCoupon === "WELCOME200") {

        return Math.min(200,subtotal);

    }

    return 0;

}


/* ================= COUPONS ================= */

function applyCoupon() {

    const input =
        document.getElementById("couponInput");

    const code =
        input.value.trim().toUpperCase();


    if (code === "MYNTRA10") {

        appliedCoupon = "MYNTRA10";

        showToast("10% discount applied");

        renderBag();

        return;

    }


    if (code === "WELCOME200") {

        appliedCoupon = "WELCOME200";

        showToast("₹200 discount applied");

        renderBag();

        return;

    }


    alert(
        "Invalid coupon. Try MYNTRA10 or WELCOME200."
    );

}


/* ================= CHECKOUT ================= */

function openCheckout() {

    const subtotal = getSubtotal();

    const discount = getDiscount(subtotal);

    const delivery =
        subtotal >= 999 ? 0 : 99;

    const total =
        subtotal - discount + delivery;


    openModal(`

        <div class="checkout">

            <h2>Secure Checkout</h2>

            <div class="checkout-section">

                <h3>1. Delivery Address</h3>

                <div class="address-grid">

                    <div class="form-group">
                        <label>FULL NAME</label>
                        <input id="addressName" value="${account.name}">
                    </div>

                    <div class="form-group">
                        <label>MOBILE</label>
                        <input id="addressMobile" value="${account.mobile}">
                    </div>

                    <div class="form-group">
                        <label>PINCODE</label>
                        <input id="pincode" maxlength="6" placeholder="600001">
                    </div>

                    <div class="form-group">
                        <label>CITY</label>
                        <input id="city" placeholder="Chennai">
                    </div>

                </div>

                <div class="form-group">

                    <label>FULL ADDRESS</label>

                    <input
                        id="fullAddress"
                        placeholder="House number, street, area"
                    >

                </div>

            </div>


            <div class="checkout-section">

                <h3>2. Payment Method</h3>

                <div
                    class="payment-option selected"
                    onclick="selectPayment('UPI',this)"
                >
                    <input type="radio" checked name="payment">
                    UPI
                </div>

                <div
                    class="payment-option"
                    onclick="selectPayment('CARD',this)"
                >
                    <input type="radio" name="payment">
                    Credit / Debit Card
                </div>

                <div
                    class="payment-option"
                    onclick="selectPayment('COD',this)"
                >
                    <input type="radio" name="payment">
                    Cash on Delivery
                </div>

                <div id="paymentDetails">

                    <div class="form-group">

                        <label>UPI ID</label>

                        <input
                            id="upiId"
                            placeholder="yourname@upi"
                        >

                    </div>

                </div>

            </div>


            <div class="checkout-section">

                <h3>3. Order Total</h3>

                <div class="summary-row">
                    <span>Subtotal</span>
                    <strong>₹${subtotal.toLocaleString()}</strong>
                </div>

                <div class="summary-row">
                    <span>Discount</span>
                    <strong style="color:#03a685;">
                        − ₹${discount.toLocaleString()}
                    </strong>
                </div>

                <div class="summary-row">
                    <span>Delivery</span>
                    <strong>
                        ${delivery === 0 ? "FREE" : "₹99"}
                    </strong>
                </div>

                <div class="summary-row summary-total">
                    <span>Payable Amount</span>
                    <strong>
                        ₹${total.toLocaleString()}
                    </strong>
                </div>

            </div>


            <button
                class="full-btn"
                onclick="placeOrder()"
            >
                PLACE ORDER • ₹${total.toLocaleString()}
            </button>

        </div>

    `);

}


/* ================= PAYMENT ================= */

let selectedPayment = "UPI";


function selectPayment(method, element) {

    selectedPayment = method;

    document
        .querySelectorAll(".payment-option")
        .forEach(option =>
            option.classList.remove("selected")
        );

    element.classList.add("selected");


    const details =
        document.getElementById("paymentDetails");


    if (method === "UPI") {

        details.innerHTML = `

            <div class="form-group">

                <label>UPI ID</label>

                <input
                    id="upiId"
                    placeholder="yourname@upi"
                >

            </div>

        `;

    }


    if (method === "CARD") {

        details.innerHTML = `

            <div class="form-group">

                <label>CARD NUMBER</label>

                <input
                    id="cardNumber"
                    maxlength="19"
                    placeholder="1234 5678 9012 3456"
                >

            </div>

            <div class="address-grid">

                <div class="form-group">

                    <label>EXPIRY</label>

                    <input
                        id="expiry"
                        placeholder="MM/YY"
                    >

                </div>

                <div class="form-group">

                    <label>CVV</label>

                    <input
                        id="cvv"
                        maxlength="3"
                        type="password"
                        placeholder="•••"
                    >

                </div>

            </div>

        `;

    }


    if (method === "COD") {

        details.innerHTML = `

            <p style="color:#03a685;font-size:13px;">
                ✓ Pay securely when your order is delivered.
            </p>

        `;

    }

}


/* ================= PLACE ORDER ================= */

function placeOrder() {

    const pincode =
        document.getElementById("pincode").value.trim();

    const city =
        document.getElementById("city").value.trim();

    const address =
        document.getElementById("fullAddress").value.trim();


    if (
        pincode.length !== 6 ||
        !city ||
        !address
    ) {

        alert(
            "Please complete your delivery address."
        );

        return;

    }


    if (selectedPayment === "UPI") {

        const upi =
            document.getElementById("upiId")?.value.trim();

        if (!upi) {

            alert("Please enter your UPI ID.");

            return;

        }

    }


    if (selectedPayment === "CARD") {

        const card =
            document.getElementById("cardNumber")?.value.trim();

        const expiry =
            document.getElementById("expiry")?.value.trim();

        const cvv =
            document.getElementById("cvv")?.value.trim();


        if (
            !card ||
            !expiry ||
            !cvv
        ) {

            alert("Please enter complete card details.");

            return;

        }

    }


    const subtotal = getSubtotal();

    const discount = getDiscount(subtotal);

    const delivery =
        subtotal >= 999 ? 0 : 99;

    const total =
        subtotal - discount + delivery;


    const orderId =
        "MYN" +
        Date.now().toString().slice(-8);


    const order = {

        id: orderId,

        date: new Date().toLocaleString(),

        items: [...cart],

        total: total,

        payment: selectedPayment,

        address: address + ", " + city + " - " + pincode

    };


    orders.push(order);


    localStorage.setItem(
        "myntraOrders",
        JSON.stringify(orders)
    );


    cart = [];

    saveCart();

    updateCounts();

    appliedCoupon = null;


    openModal(`

        <div class="success">

            <div class="success-icon">✓</div>

            <h2>Order Placed Successfully!</h2>

            <p style="margin-top:12px;color:#777;">
                Thank you for shopping with myntra.
            </p>

            <div class="order-id">
                ORDER ID: ${orderId}
            </div>

            <p>
                Payment: <strong>${selectedPayment}</strong>
            </p>

            <p style="margin-top:8px;">
                Amount Paid:
                <strong>₹${total.toLocaleString()}</strong>
            </p>

            <button
                class="full-btn"
                style="margin-top:25px;"
                onclick="openOrders()"
            >
                VIEW MY ORDERS
            </button>

        </div>

    `);

}


/* ================= ORDERS ================= */

function openOrders() {

    if (!isLoggedIn()) {

        showLoginRequired(
            "Please login to view your orders."
        );

        return;

    }


    openModal(`

        <h2>My Orders</h2>

        <p style="color:#777;margin:8px 0 25px;">
            Your complete order history
        </p>

        ${
            orders.length
            ?
            orders
                .slice()
                .reverse()
                .map(order => `

                    <div
                        class="checkout-section"
                        style="margin-bottom:15px;"
                    >

                        <h3>
                            Order #${order.id}
                        </h3>

                        <p style="color:#777;">
                            ${order.date}
                        </p>

                        <div
                            class="summary-row"
                            style="margin-top:15px;"
                        >
                            <span>Payment</span>
                            <strong>
                                ${order.payment}
                            </strong>
                        </div>

                        <div
                            class="summary-row"
                        >
                            <span>Total</span>
                            <strong>
                                ₹${order.total.toLocaleString()}
                            </strong>
                        </div>

                        <p style="color:#03a685;margin-top:10px;">
                            ✓ Order Confirmed
                        </p>

                    </div>

                `).join("")
            :
            `
                <div class="empty">

                    <h3>No orders yet</h3>

                    <p>
                        Your completed orders will appear here.
                    </p>

                </div>
            `
        }

    `);

}


/* ================= CUSTOMER CARE ================= */

function openCustomerCare() {

    openModal(`

        <div class="auth-container">

            <div class="brand-name">myntra</div>

            <h2 style="margin-top:20px;">
                Customer Care
            </h2>

            <p>
                We're here to help you.
            </p>

            <div class="checkout-section">

                <h3>Order Support</h3>

                <p>
                    Track orders, returns, refunds and delivery.
                </p>

            </div>

            <div class="checkout-section">

                <h3>Customer Support</h3>

                <p>
                    📞 1800-123-4567
                </p>

                <p>
                    ✉ support@myntra.example
                </p>

                <p>
                    🕘 Available 24 × 7
                </p>

            </div>

            <button
                class="full-btn"
                onclick="closeModal()"
            >
                CLOSE
            </button>

        </div>

    `);

}


/* ================= MODAL ================= */

function openModal(content) {

    document.getElementById("modalContent").innerHTML =
        content;

    document
        .getElementById("modalOverlay")
        .classList.add("show");

}


function closeModal(event) {

    if (
        event &&
        event.target !==
        document.getElementById("modalOverlay")
    ) {

        return;

    }

    document
        .getElementById("modalOverlay")
        .classList.remove("show");

}


function showSuccessMessage(title, message) {

    openModal(`

        <div class="success">

            <div class="success-icon">✓</div>

            <h2>${title}</h2>

            <p style="color:#777;margin:15px 0 25px;">
                ${message}
            </p>

            <button
                class="full-btn"
                onclick="closeModal()"
            >
                CONTINUE SHOPPING
            </button>

        </div>

    `);

}


/* ================= TOAST ================= */

function showToast(message) {

    const old =
        document.querySelector(".toast");

    if (old) old.remove();


    const toast =
        document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;


    Object.assign(toast.style, {

        position: "fixed",

        bottom: "25px",

        left: "50%",

        transform: "translateX(-50%)",

        background: "#282c3f",

        color: "#fff",

        padding: "14px 25px",

        borderRadius: "5px",

        zIndex: "10000",

        fontSize: "13px",

        fontWeight: "600",

        boxShadow: "0 10px 30px rgba(0,0,0,.2)"

    });


    document.body.appendChild(toast);


    setTimeout(() => {

        toast.remove();

    }, 2200);

}