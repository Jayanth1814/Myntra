/* =========================================================
   MYNTRA PREMIUM MEN'S FASHION
   Complete Functional E-Commerce Website
========================================================= */


/* ================= PRODUCTS ================= */



const products = [

    /* ================= FASHION ================= */

    {
        id: 1,
        brand: "Roadster",
        name: "Premium Black T-Shirt",
        category: "T-Shirts",
        price: 699,
        oldPrice: 1199,
        rating: 4.5,
        reviews: 128,
        discount: 42,
        popularity: 96,
        isNew: true,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=90"
    },

    {
    id: 2,
    brand: "H&M",
    name: "Classic White T-Shirt",
    category: "T-Shirts",
    price: 599,
    oldPrice: 999,
    rating: 4.3,
    reviews: 96,
    discount: 40,
    popularity: 90,
    isNew: true,
    image: "https://images.pexels.com/photos/18186106/pexels-photo-18186106.jpeg?auto=compress&cs=tinysrgb&w=800"
},


    {
        id: 3,
        brand: "HRX",
        name: "Oversized Street T-Shirt",
        category: "T-Shirts",
        price: 799,
        oldPrice: 1299,
        rating: 4.6,
        reviews: 215,
        discount: 38,
        popularity: 98,
        isNew: true,
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 4,
        brand: "Roadster",
        name: "Slim Fit Oxford Shirt",
        category: "Shirts",
        price: 1099,
        oldPrice: 1799,
        rating: 4.4,
        reviews: 174,
        discount: 39,
        popularity: 92,
        isNew: false,
        image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=90"
    },

    {
    id: 5,
    brand: "H&M",
    name: "Premium Casual Shirt",
    category: "Shirts",
    price: 1299,
    oldPrice: 1999,
    rating: 4.5,
    reviews: 143,
    discount: 35,
    popularity: 89,
    isNew: true,
    image: "https://media.splashfashions.com/i/splash/6209726-HQ160390-SP25230924_01-2100.jpg"
},

    {
        id: 6,
        brand: "Roadster",
        name: "Dark Blue Denim Jeans",
        category: "Jeans",
        price: 1499,
        oldPrice: 2499,
        rating: 4.6,
        reviews: 322,
        discount: 40,
        popularity: 97,
        isNew: false,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 7,
        brand: "H&M",
        name: "Classic Blue Jeans",
        category: "Jeans",
        price: 1399,
        oldPrice: 2299,
        rating: 4.3,
        reviews: 198,
        discount: 39,
        popularity: 87,
        isNew: true,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 8,
        brand: "Puma",
        name: "White Premium Sneakers",
        category: "Sneakers",
        price: 1899,
        oldPrice: 2999,
        rating: 4.7,
        reviews: 411,
        discount: 37,
        popularity: 99,
        isNew: true,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 9,
        brand: "Nike",
        name: "Urban Black Sneakers",
        category: "Sneakers",
        price: 2099,
        oldPrice: 3499,
        rating: 4.8,
        reviews: 506,
        discount: 40,
        popularity: 100,
        isNew: false,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 10,
        brand: "Puma",
        name: "Luxury Running Sneakers",
        category: "Sneakers",
        price: 2499,
        oldPrice: 3999,
        rating: 4.7,
        reviews: 289,
        discount: 38,
        popularity: 95,
        isNew: true,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=90"
    },


    /* ================= WATCHES ================= */

    {
        id: 11,
        brand: "Fossil",
        name: "Men's Classic Leather Watch",
        category: "Watches",
        price: 4499,
        oldPrice: 6999,
        rating: 4.6,
        reviews: 287,
        discount: 36,
        popularity: 94,
        isNew: true,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 12,
        brand: "Titan",
        name: "Minimal Steel Analog Watch",
        category: "Watches",
        price: 3299,
        oldPrice: 4999,
        rating: 4.5,
        reviews: 198,
        discount: 34,
        popularity: 91,
        isNew: false,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 13,
        brand: "Casio",
        name: "Vintage Digital Watch",
        category: "Watches",
        price: 2199,
        oldPrice: 2999,
        rating: 4.7,
        reviews: 412,
        discount: 27,
        popularity: 98,
        isNew: false,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 14,
        brand: "Fastrack",
        name: "Black Chronograph Watch",
        category: "Watches",
        price: 2799,
        oldPrice: 3999,
        rating: 4.4,
        reviews: 176,
        discount: 30,
        popularity: 86,
        isNew: true,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 15,
        brand: "Fossil",
        name: "Premium Stainless Steel Watch",
        category: "Watches",
        price: 5499,
        oldPrice: 7999,
        rating: 4.8,
        reviews: 321,
        discount: 31,
        popularity: 97,
        isNew: true,
        image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=90"
    },


    /* ================= SMARTWATCHES ================= */

    {
        id: 16,
        brand: "boAt",
        name: "Wave Smartwatch",
        category: "Smartwatches",
        price: 1499,
        oldPrice: 3999,
        rating: 4.3,
        reviews: 842,
        discount: 63,
        popularity: 99,
        isNew: true,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 17,
        brand: "Noise",
        name: "ColorFit Pro Smartwatch",
        category: "Smartwatches",
        price: 2299,
        oldPrice: 4999,
        rating: 4.5,
        reviews: 624,
        discount: 54,
        popularity: 96,
        isNew: true,
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 18,
        brand: "Fire-Boltt",
        name: "Phoenix AMOLED Smartwatch",
        category: "Smartwatches",
        price: 1799,
        oldPrice: 4499,
        rating: 4.4,
        reviews: 531,
        discount: 60,
        popularity: 93,
        isNew: false,
        image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 19,
        brand: "Samsung",
        name: "Galaxy Watch Active",
        category: "Smartwatches",
        price: 8999,
        oldPrice: 12999,
        rating: 4.7,
        reviews: 284,
        discount: 31,
        popularity: 95,
        isNew: true,
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=90"
    },


    /* ================= HEADPHONES ================= */

    {
        id: 20,
        brand: "Sony",
        name: "Wireless Noise Cancelling Headphones",
        category: "Headphones",
        price: 7999,
        oldPrice: 11999,
        rating: 4.8,
        reviews: 1248,
        discount: 33,
        popularity: 100,
        isNew: true,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 21,
        brand: "boAt",
        name: "Rockerz Wireless Headphones",
        category: "Headphones",
        price: 1499,
        oldPrice: 2999,
        rating: 4.4,
        reviews: 918,
        discount: 50,
        popularity: 97,
        isNew: false,
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 22,
        brand: "JBL",
        name: "Tune Bluetooth Headphones",
        category: "Headphones",
        price: 3299,
        oldPrice: 4999,
        rating: 4.6,
        reviews: 645,
        discount: 34,
        popularity: 94,
        isNew: true,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 23,
        brand: "Marshall",
        name: "Major Wireless Headphones",
        category: "Headphones",
        price: 8999,
        oldPrice: 12999,
        rating: 4.8,
        reviews: 438,
        discount: 31,
        popularity: 91,
        isNew: true,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=90"
    },


    /* ================= EARBUDS ================= */

    {
        id: 24,
        brand: "Apple",
        name: "AirPods Pro Wireless Earbuds",
        category: "Earbuds",
        price: 19999,
        oldPrice: 24999,
        rating: 4.8,
        reviews: 1864,
        discount: 20,
        popularity: 100,
        isNew: true,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 25,
        brand: "Samsung",
        name: "Galaxy Buds Wireless Earbuds",
        category: "Earbuds",
        price: 6999,
        oldPrice: 9999,
        rating: 4.6,
        reviews: 724,
        discount: 30,
        popularity: 95,
        isNew: true,
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 26,
        brand: "boAt",
        name: "Airdopes 141 Earbuds",
        category: "Earbuds",
        price: 1299,
        oldPrice: 4490,
        rating: 4.3,
        reviews: 2145,
        discount: 71,
        popularity: 99,
        isNew: false,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 27,
        brand: "OnePlus",
        name: "Buds 3 Wireless Earbuds",
        category: "Earbuds",
        price: 5499,
        oldPrice: 6999,
        rating: 4.7,
        reviews: 581,
        discount: 21,
        popularity: 93,
        isNew: true,
        image: "https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=800&q=90"
    },


    /* ================= MOBILE PHONES ================= */

    {
        id: 28,
        brand: "Apple",
        name: "iPhone 16 Pro",
        category: "Mobiles",
        price: 109999,
        oldPrice: 119999,
        rating: 4.8,
        reviews: 942,
        discount: 8,
        popularity: 100,
        isNew: true,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 29,
        brand: "Samsung",
        name: "Galaxy S25 Ultra",
        category: "Mobiles",
        price: 129999,
        oldPrice: 149999,
        rating: 4.8,
        reviews: 638,
        discount: 13,
        popularity: 99,
        isNew: true,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 30,
        brand: "OnePlus",
        name: "OnePlus 13 5G",
        category: "Mobiles",
        price: 69999,
        oldPrice: 79999,
        rating: 4.7,
        reviews: 524,
        discount: 13,
        popularity: 96,
        isNew: true,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=90"
    },

    {
    id: 31,
    brand: "Google",
    name: "Pixel 9 Pro",
    category: "Mobiles",
    price: 89999,
    oldPrice: 99999,
    rating: 4.6,
    reviews: 312,
    discount: 10,
    popularity: 92,
    isNew: true,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=90"
},

    {
        id: 32,
        brand: "Xiaomi",
        name: "Xiaomi 14 Ultra",
        category: "Mobiles",
        price: 69999,
        oldPrice: 79999,
        rating: 4.5,
        reviews: 287,
        discount: 13,
        popularity: 89,
        isNew: false,
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=90"
    },


    /* ================= LAPTOPS & GADGETS ================= */

   {
    id: 33,
    brand: "Apple",
    name: "MacBook Air M3",
    category: "Laptops",
    price: 99999,
    oldPrice: 114999,
    rating: 4.9,
    reviews: 426,
    discount: 13,
    popularity: 98,
    isNew: true,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Hardware_PXL_20240701_181416002_%2853829190029%29.jpg"
},
    {
        id: 34,
        brand: "Dell",
        name: "Inspiron 14 Laptop",
        category: "Laptops",
        price: 57999,
        oldPrice: 69999,
        rating: 4.5,
        reviews: 351,
        discount: 17,
        popularity: 90,
        isNew: true,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 35,
        brand: "HP",
        name: "Pavilion 15 Laptop",
        category: "Laptops",
        price: 62999,
        oldPrice: 74999,
        rating: 4.4,
        reviews: 268,
        discount: 16,
        popularity: 87,
        isNew: false,
        image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?auto=format&fit=crop&w=800&q=90"
    },


    /* ================= BAGS ================= */

    {
        id: 36,
        brand: "American Tourister",
        name: "Premium Laptop Backpack",
        category: "Bags",
        price: 1799,
        oldPrice: 2999,
        rating: 4.6,
        reviews: 812,
        discount: 40,
        popularity: 94,
        isNew: true,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 37,
        brand: "Wildcraft",
        name: "Urban Travel Backpack",
        category: "Bags",
        price: 1499,
        oldPrice: 2499,
        rating: 4.5,
        reviews: 634,
        discount: 40,
        popularity: 92,
        isNew: false,
        image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 38,
        brand: "Mochi",
        name: "Premium Casual Backpack",
        category: "Bags",
        price: 1199,
        oldPrice: 1999,
        rating: 4.3,
        reviews: 284,
        discount: 40,
        popularity: 84,
        isNew: true,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=90"
    },


    /* ================= SUNGLASSES & ACCESSORIES ================= */

    {
        id: 39,
        brand: "Ray-Ban",
        name: "Classic Black Sunglasses",
        category: "Sunglasses",
        price: 5999,
        oldPrice: 7999,
        rating: 4.7,
        reviews: 321,
        discount: 25,
        popularity: 93,
        isNew: true,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 40,
        brand: "Fastrack",
        name: "Aviator UV Protection Sunglasses",
        category: "Sunglasses",
        price: 1299,
        oldPrice: 1999,
        rating: 4.4,
        reviews: 518,
        discount: 35,
        popularity: 88,
        isNew: false,
        image: "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=800&q=90"
    }

];




/* ================= STORAGE ================= */

let cart =
    JSON.parse(localStorage.getItem("myntraCart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("myntraWishlist")) || [];

let account =
    JSON.parse(localStorage.getItem("myntraAccount")) || null;

let orders =
    JSON.parse(localStorage.getItem("myntraOrders")) || [];

let coupon = null;

let selectedPayment = "UPI";

let currentCategory = "ALL";


/* ================= START ================= */

document.addEventListener("DOMContentLoaded", () => {

    document
        .querySelectorAll(".category-check,.brand-check,.discount-check")
        .forEach(input => {
            input.addEventListener("change", applyFilters);
        });

    document
        .querySelectorAll('input[name="price"]')
        .forEach(input => {
            input.addEventListener("change", applyFilters);
        });

    renderProducts(products);

    updateCounts();

    updateProfile();

});


/* ================= HOME ================= */

function goHome() {

    currentCategory = "ALL";

    document.getElementById("searchInput").value = "";

    document.getElementById("sortSelect").value =
        "recommended";

    clearFilterInputs(false);

    renderProducts(products);

    document.getElementById("resultCount").textContent =
    `${products.length} products`;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= CATEGORY ================= */

function showCategory(category) {

    currentCategory = category;

    document.getElementById("searchInput").value = "";

    clearFilterInputs(false);

    const filtered =
        category === "ALL"
            ? products
            : products.filter(
                product => product.category === category
            );

    renderProducts(filtered);

    document.getElementById("resultCount").textContent =
        `${filtered.length} products`;

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= SEARCH + FILTER ================= */

function applyFilters() {

    let result = [...products];


    /* CATEGORY NAV */

    if (currentCategory !== "ALL") {

        result =
            result.filter(
                product =>
                    product.category === currentCategory
            );

    }


    /* SEARCH */

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    if (search) {

        result =
            result.filter(product =>

                product.name.toLowerCase().includes(search) ||

                product.brand.toLowerCase().includes(search) ||

                product.category.toLowerCase().includes(search)

            );

    }


    /* CATEGORY CHECKBOXES */

    const categories =
        [...document.querySelectorAll(".category-check:checked")]
            .map(input => input.value);

    if (categories.length) {

        result =
            result.filter(
                product =>
                    categories.includes(product.category)
            );

    }


    /* BRANDS */

    const brands =
        [...document.querySelectorAll(".brand-check:checked")]
            .map(input => input.value);

    if (brands.length) {

        result =
            result.filter(
                product =>
                    brands.includes(product.brand)
            );

    }


    /* PRICE */

    const price =
        document.querySelector(
            'input[name="price"]:checked'
        )?.value;

    if (price === "under1000") {

        result =
            result.filter(
                product => product.price < 1000
            );

    }

    if (price === "1000to2000") {

        result =
            result.filter(
                product =>
                    product.price >= 1000 &&
                    product.price <= 2000
            );

    }

    if (price === "above2000") {

        result =
            result.filter(
                product => product.price > 2000
            );

    }


    /* DISCOUNT */

    const discounts =
        [...document.querySelectorAll(".discount-check:checked")]
            .map(input => Number(input.value));

    if (discounts.length) {

        const minimum =
            Math.max(...discounts);

        result =
            result.filter(
                product => product.discount >= minimum
            );

    }


    /* SORT */

    const sort =
        document.getElementById("sortSelect").value;

    if (sort === "low") {

        result.sort(
            (a,b) => a.price - b.price
        );

    }

    if (sort === "high") {

        result.sort(
            (a,b) => b.price - a.price
        );

    }

    if (sort === "rating") {

        result.sort(
            (a,b) => b.rating - a.rating
        );

    }

    if (sort === "discount") {

        result.sort(
            (a,b) => b.discount - a.discount
        );

    }

    if (sort === "popular") {

        result.sort(
            (a,b) => b.popularity - a.popularity
        );

    }

    if (sort === "new") {

        result.sort(
            (a,b) => Number(b.isNew) - Number(a.isNew)
        );

    }


    renderProducts(result);

    document.getElementById("resultCount").textContent =
        `${result.length} product${result.length !== 1 ? "s" : ""}`;

}


/* ================= RENDER ================= */

function renderProducts(list) {

    const grid =
        document.getElementById("productGrid");

    if (!list.length) {

        grid.innerHTML = `

            <div class="empty">

                <h2>No products found</h2>

                <p>
                    Try changing your search or filters.
                </p>

                <button
                    class="full-btn"
                    onclick="clearFilters()"
                >
                    CLEAR FILTERS
                </button>

            </div>

        `;

        return;

    }


    grid.innerHTML =
        list.map(product => {

            const liked =
                wishlist.includes(product.id);

            return `

                <article
                    class="product-card"
                    onclick="openProduct(${product.id})"
                >

                    <div class="product-image-wrap">

                        <img
                            class="product-image"
                            src="${product.image}"
                            alt="${product.name}"
                            onerror="
                                this.src='https://via.placeholder.com/600x800?text=Fashion'
                            "
                        >

                        <button
                            class="wishlist ${liked ? "active" : ""}"
                            onclick="
                                event.stopPropagation();
                                toggleWishlist(${product.id});
                            "
                        >
                            ${liked ? "♥" : "♡"}
                        </button>

                        <button
                            class="quick-add"
                            onclick="
                                event.stopPropagation();
                                addToCart(${product.id});
                            "
                        >
                            ADD TO BAG
                        </button>

                    </div>


                    <div class="product-info">

                        <div class="product-brand">
                            ${product.brand}
                        </div>

                        <div class="product-name">
                            ${product.name}
                        </div>

                        <div class="rating">
                            ★ ${product.rating} | ${product.reviews}
                        </div>

                        <div class="price">

                            ₹${product.price.toLocaleString()}

                            <del>
                                ₹${product.oldPrice.toLocaleString()}
                            </del>

                            <span class="discount">
                                (${product.discount}% OFF)
                            </span>

                        </div>

                    </div>

                </article>

            `;

        }).join("");

}


/* ================= PRODUCT DETAILS ================= */

function openProduct(id) {

    const product =
        products.find(p => p.id === id);

    if (!product) return;

    openModal(`

        <div class="product-detail">

            <img
                class="product-detail-image"
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="product-detail-info">

                <div class="brand">
                    ${product.brand}
                </div>

                <h2>
                    ${product.name}
                </h2>

                <div class="detail-rating">
                    ★ ${product.rating}
                    &nbsp; | &nbsp;
                    ${product.reviews} Ratings
                </div>

                <div class="detail-price">

                    ₹${product.price.toLocaleString()}

                    <del>
                        ₹${product.oldPrice.toLocaleString()}
                    </del>

                    <span class="detail-discount">
                        ${product.discount}% OFF
                    </span>

                </div>


                <div class="size-title">
                    SELECT SIZE
                </div>

                <div class="sizes">

                    <button class="size" onclick="selectSize(this)">
                        S
                    </button>

                    <button class="size selected" onclick="selectSize(this)">
                        M
                    </button>

                    <button class="size" onclick="selectSize(this)">
                        L
                    </button>

                    <button class="size" onclick="selectSize(this)">
                        XL
                    </button>

                    <button class="size" onclick="selectSize(this)">
                        XXL
                    </button>

                </div>


                <button
                    class="full-btn"
                    style="margin-top:28px;"
                    onclick="addToCart(${product.id});closeModal();"
                >
                    ADD TO BAG
                </button>


                <button
                    class="full-btn"
                    style="
                        margin-top:10px;
                        background:#282c3f;
                    "
                    onclick="toggleWishlist(${product.id})"
                >
                    ♡ WISHLIST
                </button>


                <div
                    class="checkout-section"
                    style="margin-top:25px;"
                >

                    <h3>DELIVERY DETAILS</h3>

                    <p style="font-size:11px;color:#777;">
                        🚚 Free delivery on orders above ₹999
                    </p>

                    <p style="font-size:11px;color:#777;margin-top:8px;">
                        ↩ Easy 7 day returns
                    </p>

                    <p style="font-size:11px;color:#777;margin-top:8px;">
                        ✓ 100% original product
                    </p>

                </div>

            </div>

        </div>

    `);

}


function selectSize(button) {

    document
        .querySelectorAll(".size")
        .forEach(item =>
            item.classList.remove("selected")
        );

    button.classList.add("selected");

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

        <div class="auth">

            <div class="logo">

                <div class="logo-mark"></div>

                <span class="logo-text">
                    myntra
                </span>

            </div>

            <h2>Welcome back</h2>

            <p class="auth-subtitle">
                Login to continue your fashion journey.
            </p>


            <div class="tabs">

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

                    <label>EMAIL OR MOBILE</label>

                    <input
                        id="loginEmail"
                        required
                        placeholder="Enter email or mobile"
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


            <p style="
                text-align:center;
                color:#888;
                font-size:11px;
                margin-top:20px;
            ">

                New to myntra?

                <span
                    onclick="showRegister()"
                    style="
                        color:#ff3f6c;
                        font-weight:800;
                        cursor:pointer;
                    "
                >
                    Create account
                </span>

            </p>

        </div>

    `);

}


function showRegister() {

    openModal(`

        <div class="auth">

            <div class="logo">

                <div class="logo-mark"></div>

                <span class="logo-text">
                    myntra
                </span>

            </div>

            <h2>Create your account</h2>

            <p class="auth-subtitle">
                Join us and discover your personal style.
            </p>


            <form onsubmit="registerUser(event)">

                <div class="form-group">

                    <label>FULL NAME</label>

                    <input
                        id="registerName"
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
                        placeholder="you@example.com"
                    >

                </div>


                <div class="form-group">

                    <label>MOBILE NUMBER</label>

                    <input
                        id="registerMobile"
                        type="tel"
                        pattern="[0-9]{10}"
                        required
                        placeholder="10 digit mobile number"
                    >

                </div>


                <div class="form-group">

                    <label>PASSWORD</label>

                    <input
                        id="registerPassword"
                        type="password"
                        minlength="6"
                        required
                        placeholder="Minimum 6 characters"
                    >

                </div>


                <button class="full-btn">
                    CREATE ACCOUNT
                </button>

            </form>


            <p style="
                text-align:center;
                color:#888;
                font-size:11px;
                margin-top:20px;
            ">

                Already registered?

                <span
                    onclick="showLogin()"
                    style="
                        color:#ff3f6c;
                        font-weight:800;
                        cursor:pointer;
                    "
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

        name:
            document.getElementById("registerName").value,

        email:
            document.getElementById("registerEmail").value,

        mobile:
            document.getElementById("registerMobile").value,

        password:
            document.getElementById("registerPassword").value

    };


    localStorage.setItem(
        "myntraAccount",
        JSON.stringify(account)
    );


    updateProfile();

    showSuccess(
        "Account Created Successfully",
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

        alert(
            "No account exists. Please register first."
        );

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

    showSuccess(
        "Successfully Logged In",
        `Welcome back, ${account.name}.`
    );

}


function updateProfile() {

    document.getElementById("profileLabel").textContent =
        account ? "Account" : "Profile";

}


function showAccount() {

    openModal(`

        <div class="auth">

            <div class="logo">

                <div class="logo-mark"></div>

                <span class="logo-text">
                    myntra
                </span>

            </div>

            <h2>Hello, ${account.name}</h2>

            <p class="auth-subtitle">
                ${account.email}
            </p>


            <div class="checkout-section">

                <h3>ACCOUNT DETAILS</h3>

                <p style="font-size:11px;margin:8px 0;">
                    <strong>Name:</strong>
                    ${account.name}
                </p>

                <p style="font-size:11px;margin:8px 0;">
                    <strong>Email:</strong>
                    ${account.email}
                </p>

                <p style="font-size:11px;margin:8px 0;">
                    <strong>Mobile:</strong>
                    ${account.mobile}
                </p>

            </div>


            <button
                class="full-btn"
                onclick="openOrders()"
            >
                MY ORDERS
            </button>


            <button
                class="full-btn"
                style="
                    margin-top:10px;
                    background:#282c3f;
                "
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

    showSuccess(
        "Logged Out",
        "You have been successfully logged out."
    );

}


/* ================= WISHLIST ================= */

function toggleWishlist(id) {

    if (!isLoggedIn()) {

        loginRequired(
            "Please login to save products to your wishlist."
        );

        return;

    }


    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(item => item !== id);

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

    applyFilters();

}


function openWishlist() {

    if (!isLoggedIn()) {

        loginRequired(
            "Please login to view your wishlist."
        );

        return;

    }


    const items =
        wishlist
            .map(id =>
                products.find(product =>
                    product.id === id
                )
            )
            .filter(Boolean);


    openModal(`

        <div class="bag">

            <h2>My Wishlist</h2>

            <p style="
                color:#888;
                font-size:11px;
                margin-top:7px;
            ">
                Your saved styles
            </p>


            ${
                items.length

                ?

                items.map(product => `

                    <div class="bag-item">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                        >

                        <div class="bag-details">

                            <h4>
                                ${product.brand}
                            </h4>

                            <p>
                                ${product.name}
                            </p>

                            <div class="bag-price">
                                ₹${product.price.toLocaleString()}
                            </div>

                            <button
                                class="full-btn"
                                style="
                                    margin-top:12px;
                                    width:auto;
                                    padding:10px 15px;
                                "
                                onclick="
                                    addToCart(${product.id});
                                    openWishlist();
                                "
                            >
                                MOVE TO BAG
                            </button>

                        </div>

                    </div>

                `).join("")

                :

                `

                    <div class="empty">

                        <h2>Your wishlist is empty</h2>

                        <p>
                            Save products you love here.
                        </p>

                        <button
                            class="full-btn"
                            onclick="
                                closeModal();
                                scrollToProducts();
                            "
                        >
                            EXPLORE PRODUCTS
                        </button>

                    </div>

                `

            }

        </div>

    `);

}


/* ================= BAG ================= */

function addToCart(id) {

    if (!isLoggedIn()) {

        loginRequired(
            "Please login before adding products to your bag."
        );

        return;

    }


    const existing =
        cart.find(item => item.id === id);


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

    showToast("Added to bag");

}


function saveCart() {

    localStorage.setItem(
        "myntraCart",
        JSON.stringify(cart)
    );

}


function openBag() {

    if (!isLoggedIn()) {

        loginRequired(
            "Please login to access your shopping bag."
        );

        return;

    }


    renderBag();

}


function renderBag() {

    if (!cart.length) {

        openModal(`

            <div class="empty">

                <h2>Your Bag is Empty</h2>

                <p>
                    Discover something you love.
                </p>

                <button
                    class="full-btn"
                    onclick="
                        closeModal();
                        scrollToProducts();
                    "
                >
                    CONTINUE SHOPPING
                </button>

            </div>

        `);

        return;

    }


    const subtotal =
        getSubtotal();

    const discount =
        getDiscount(subtotal);

    const delivery =
        subtotal >= 999 ? 0 : 99;

    const total =
        subtotal - discount + delivery;


    openModal(`

        <div class="bag">

            <h2>Shopping Bag</h2>

            <p style="
                color:#888;
                font-size:11px;
                margin-top:7px;
            ">
                ${getCartCount()} item(s)
            </p>


            <div class="bag-layout">

                <div>

                    ${cart.map(item => {

                        const product =
                            products.find(
                                p => p.id === item.id
                            );

                        return `

                            <div class="bag-item">

                                <img
                                    src="${product.image}"
                                    alt="${product.name}"
                                >

                                <div class="bag-details">

                                    <h4>
                                        ${product.brand}
                                    </h4>

                                    <p>
                                        ${product.name}
                                    </p>

                                    <div class="bag-price">
                                        ₹${product.price.toLocaleString()}
                                    </div>

                                    <div class="quantity">

                                        <button
                                            onclick="
                                                changeQuantity(
                                                    ${product.id},
                                                    -1
                                                )
                                            "
                                        >
                                            −
                                        </button>

                                        <span>
                                            ${item.quantity}
                                        </span>

                                        <button
                                            onclick="
                                                changeQuantity(
                                                    ${product.id},
                                                    1
                                                )
                                            "
                                        >
                                            +
                                        </button>

                                    </div>

                                    <button
                                        class="remove"
                                        onclick="
                                            removeFromCart(
                                                ${product.id}
                                            )
                                        "
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

                        <strong>
                            ₹${subtotal.toLocaleString()}
                        </strong>

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
                            ${
                                delivery === 0
                                ? "FREE"
                                : "₹99"
                            }
                        </strong>

                    </div>


                    <div class="coupon">

                        <input
                            id="couponInput"
                            placeholder="Enter coupon"
                        >

                        <button onclick="applyCoupon()">
                            APPLY
                        </button>

                    </div>


                    <div class="summary-row summary-total">

                        <span>Total</span>

                        <strong>
                            ₹${total.toLocaleString()}
                        </strong>

                    </div>


                    <button
                        class="full-btn"
                        style="margin-top:20px;"
                        onclick="openCheckout()"
                    >
                        PROCEED TO CHECKOUT
                    </button>

                </div>

            </div>

        </div>

    `);

}


/* ================= CART HELPERS ================= */

function getCartCount() {

    return cart.reduce(
        (sum,item) =>
            sum + item.quantity,
        0
    );

}


function updateCounts() {

    document.getElementById("bagCount").textContent =
        getCartCount();

    document.getElementById("wishlistCount").textContent =
        wishlist.length;

}


function changeQuantity(id, amount) {

    const item =
        cart.find(item => item.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== id
            );

    }

    saveCart();

    updateCounts();

    renderBag();

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();

    updateCounts();

    renderBag();

}


function getSubtotal() {

    return cart.reduce(
        (sum,item) => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            return sum +
                product.price * item.quantity;

        },
        0
    );

}


/* ================= COUPONS ================= */

function getDiscount(subtotal) {

    if (coupon === "MYNTRA10") {

        return Math.round(
            subtotal * .10
        );

    }

    if (coupon === "WELCOME200") {

        return Math.min(
            200,
            subtotal
        );

    }

    return 0;

}


function applyCoupon() {

    const input =
        document.getElementById("couponInput");

    if (!input) return;

    const code =
        input.value.trim().toUpperCase();


    if (code === "MYNTRA10") {

        coupon = "MYNTRA10";

        showToast(
            "10% discount applied"
        );

        renderBag();

        return;

    }


    if (code === "WELCOME200") {

        coupon = "WELCOME200";

        showToast(
            "₹200 discount applied"
        );

        renderBag();

        return;

    }


    alert(
        "Invalid coupon.\n\nTry:\nMYNTRA10\nWELCOME200"
    );

}


/* ================= CHECKOUT ================= */

function openCheckout() {

    const subtotal =
        getSubtotal();

    const discount =
        getDiscount(subtotal);

    const delivery =
        subtotal >= 999 ? 0 : 99;

    const total =
        subtotal - discount + delivery;


    openModal(`

        <div class="checkout">

            <h2>Secure Checkout</h2>


            <div class="checkout-section">

                <h3>
                    1. DELIVERY ADDRESS
                </h3>


                <div class="address-grid">

                    <div class="form-group">

                        <label>FULL NAME</label>

                        <input
                            id="addressName"
                            value="${account.name}"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>MOBILE</label>

                        <input
                            id="addressMobile"
                            value="${account.mobile}"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>PINCODE</label>

                        <input
                            id="pincode"
                            maxlength="6"
                            placeholder="600001"
                            required
                        >

                    </div>


                    <div class="form-group">

                        <label>CITY</label>

                        <input
                            id="city"
                            placeholder="Chennai"
                            required
                        >

                    </div>

                </div>


                <div class="form-group">

                    <label>FULL ADDRESS</label>

                    <input
                        id="fullAddress"
                        placeholder="House number, street, area"
                        required
                    >

                </div>

            </div>


            <div class="checkout-section">

                <h3>
                    2. PAYMENT METHOD
                </h3>


                <div
                    class="payment selected"
                    onclick="selectPayment('UPI',this)"
                >

                    <input
                        type="radio"
                        name="payment"
                        checked
                    >

                    UPI

                </div>


                <div
                    class="payment"
                    onclick="selectPayment('CARD',this)"
                >

                    <input
                        type="radio"
                        name="payment"
                    >

                    Credit / Debit Card

                </div>


                <div
                    class="payment"
                    onclick="selectPayment('COD',this)"
                >

                    <input
                        type="radio"
                        name="payment"
                    >

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

                <h3>
                    3. ORDER SUMMARY
                </h3>


                <div class="summary-row">

                    <span>Subtotal</span>

                    <strong>
                        ₹${subtotal.toLocaleString()}
                    </strong>

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
                        ${
                            delivery === 0
                            ? "FREE"
                            : "₹99"
                        }
                    </strong>

                </div>


                <div class="summary-row summary-total">

                    <span>PAYABLE AMOUNT</span>

                    <strong>
                        ₹${total.toLocaleString()}
                    </strong>

                </div>

            </div>


            <button
                class="full-btn"
                onclick="placeOrder()"
            >
                PLACE ORDER · ₹${total.toLocaleString()}
            </button>

        </div>

    `);

}


/* ================= PAYMENT ================= */

function selectPayment(method, element) {

    selectedPayment = method;

    document
        .querySelectorAll(".payment")
        .forEach(item =>
            item.classList.remove("selected")
        );

    element.classList.add("selected");


    const details =
        document.getElementById(
            "paymentDetails"
        );


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
                        type="password"
                        maxlength="3"
                        placeholder="•••"
                    >

                </div>

            </div>

        `;

    }


    if (method === "COD") {

        details.innerHTML = `

            <p style="
                color:#03a685;
                font-size:11px;
                margin-top:15px;
            ">
                ✓ Pay securely when your order is delivered.
            </p>

        `;

    }

}


/* ================= PLACE ORDER ================= */

function placeOrder() {

    const pincode =
        document.getElementById("pincode")
            .value.trim();

    const city =
        document.getElementById("city")
            .value.trim();

    const address =
        document.getElementById("fullAddress")
            .value.trim();


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
            document.getElementById("upiId")
                ?.value.trim();

        if (!upi) {

            alert("Please enter your UPI ID.");

            return;

        }

    }


    if (selectedPayment === "CARD") {

        const card =
            document.getElementById("cardNumber")
                ?.value.trim();

        const expiry =
            document.getElementById("expiry")
                ?.value.trim();

        const cvv =
            document.getElementById("cvv")
                ?.value.trim();

        if (!card || !expiry || !cvv) {

            alert(
                "Please complete your card details."
            );

            return;

        }

    }


    const subtotal =
        getSubtotal();

    const discount =
        getDiscount(subtotal);

    const delivery =
        subtotal >= 999 ? 0 : 99;

    const total =
        subtotal - discount + delivery;


    const orderId =
        "MYN" +
        Date.now()
            .toString()
            .slice(-8);


    orders.push({

        id: orderId,

        date:
            new Date().toLocaleString(),

        items:
            [...cart],

        total:

            total,

        payment:
            selectedPayment,

        address:
            `${address}, ${city} - ${pincode}`

    });


    localStorage.setItem(
        "myntraOrders",
        JSON.stringify(orders)
    );


    cart = [];

    saveCart();

    updateCounts();

    coupon = null;


    showSuccess(
        "Order Placed Successfully",
        `Your order ${orderId} has been confirmed.`
    );

}


/* ================= ORDERS ================= */

function openOrders() {

    if (!isLoggedIn()) {

        loginRequired(
            "Please login to view your orders."
        );

        return;

    }


    openModal(`

        <div class="bag">

            <h2>My Orders</h2>

            <p style="
                color:#888;
                font-size:11px;
                margin-top:7px;
            ">
                Your order history
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
                            style="margin-top:20px;"
                        >

                            <h3>
                                ORDER #${order.id}
                            </h3>

                            <p style="
                                color:#888;
                                font-size:10px;
                            ">
                                ${order.date}
                            </p>


                            <div class="summary-row">

                                <span>Payment</span>

                                <strong>
                                    ${order.payment}
                                </strong>

                            </div>


                            <div class="summary-row">

                                <span>Total</span>

                                <strong>
                                    ₹${order.total.toLocaleString()}
                                </strong>

                            </div>


                            <p style="
                                color:#03a685;
                                font-size:10px;
                                margin-top:10px;
                            ">
                                ✓ Order Confirmed
                            </p>

                        </div>

                    `).join("")

                :

                `

                    <div class="empty">

                        <h2>No orders yet</h2>

                        <p>
                            Your orders will appear here.
                        </p>

                    </div>

                `

            }

        </div>

    `);

}


/* ================= CUSTOMER CARE ================= */

function openCustomerCare() {

    openModal(`

        <div class="auth">

            <div class="logo">

                <div class="logo-mark"></div>

                <span class="logo-text">
                    myntra
                </span>

            </div>


            <h2>Customer Care</h2>

            <p class="auth-subtitle">
                We're always here to help.
            </p>


            <div class="checkout-section">

                <h3>ORDER SUPPORT</h3>

                <p style="font-size:11px;color:#777;">
                    Track orders, delivery, returns and refunds.
                </p>

            </div>


            <div class="checkout-section">

                <h3>CONTACT US</h3>

                <p style="font-size:11px;margin:10px 0;">
                    📞 1800-123-4567
                </p>

                <p style="font-size:11px;margin:10px 0;">
                    ✉ support@myntra.example
                </p>

                <p style="font-size:11px;margin:10px 0;">
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


/* ================= FILTER CLEAR ================= */

function clearFilterInputs(resetCategory = true) {

    document
        .querySelectorAll(
            ".category-check,.brand-check,.discount-check"
        )
        .forEach(input => {
            input.checked = false;
        });


    document
        .querySelectorAll(
            'input[name="price"]'
        )
        .forEach(input => {
            input.checked = false;
        });


    if (resetCategory) {

        currentCategory = "ALL";

    }

}


function clearFilters() {

    currentCategory = "ALL";

    document.getElementById("searchInput").value = "";

    clearFilterInputs();

    document.getElementById("sortSelect").value =
        "recommended";

    renderProducts(products);

    document.getElementById("resultCount").textContent =
        "10 products";

}


/* ================= SCROLL ================= */

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= MODAL ================= */

function openModal(content) {

    document.getElementById("modalContent").innerHTML =
        content;

    document
        .getElementById("modalOverlay")
        .classList.add("show");

}


function closeModal() {

    document
        .getElementById("modalOverlay")
        .classList.remove("show");

}


document
    .getElementById("modalOverlay")
    .addEventListener("click", event => {

        if (
            event.target.id === "modalOverlay"
        ) {

            closeModal();

        }

    });


/* ================= LOGIN REQUIRED ================= */

function loginRequired(message) {

    openModal(`

        <div class="success">

            <div class="success-icon">
                !
            </div>

            <h2>
                Login Required
            </h2>

            <p>
                ${message}
            </p>

            <button
                class="full-btn"
                style="margin-top:25px;"
                onclick="showLogin()"
            >
                LOGIN / REGISTER
            </button>

        </div>

    `);

}


/* ================= SUCCESS ================= */

function showSuccess(title, message) {

    openModal(`

        <div class="success">

            <div class="success-icon">
                ✓
            </div>

            <h2>
                ${title}
            </h2>

            <p>
                ${message}
            </p>

            <button
                class="full-btn"
                style="margin-top:25px;"
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


    Object.assign(
        toast.style,
        {
            position: "fixed",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#282c3f",
            color: "#fff",
            padding: "13px 22px",
            borderRadius: "4px",
            zIndex: "99999",
            fontSize: "11px",
            fontWeight: "700",
            boxShadow:
                "0 15px 40px rgba(0,0,0,.25)"
        }
    );


    document.body.appendChild(toast);


    setTimeout(() => {

        toast.remove();

    }, 2200);

}