# Myntra
A Myntra-inspired men's fashion shopping website built using HTML, CSS and JavaScript with product search, category filters, shopping bag and wishlist features.
# 🛍️ Myntra Premium Website

A modern and responsive **Myntra-inspired e-commerce website** built using HTML, CSS, and JavaScript.

This project demonstrates a complete front-end shopping experience with product browsing, searching, filtering, wishlist, shopping bag, login/register, checkout, payment selection, coupons, and order management.

---

## 📌 Project Overview

The Myntra Premium Website is a front-end e-commerce project designed to provide a smooth and attractive online shopping experience.

The website includes:

- Premium fashion-focused UI
- Product listing and product details
- Search functionality
- Category filtering
- Brand filtering
- Price filtering
- Discount filtering
- Color filtering
- Product sorting
- Wishlist
- Shopping bag
- Login and registration
- Checkout
- Multiple payment methods
- Coupon system
- Order history
- Customer care section
- Responsive design for different screen sizes
- LocalStorage-based data persistence

---

## ✨ Features

### 🏠 Home Page

The home page contains:

- Myntra-inspired navigation bar
- Myntra logo
- Men's fashion navigation
- Search bar
- Profile section
- Wishlist button
- Shopping bag button
- Premium hero section
- Product listing section
- Customer care section
- Footer

---

### 🔎 Product Search

Users can search for products using:

- Product name
- Brand name
- Category

Example:

```text
Search: T-Shirt
Search: Roadster
Search: Sneakers
🏷️ Product Categories
The current project includes:
- T-Shirts
- Shirts
- Jeans
- Sneakers
Users can select a category from the navigation bar or category chips.
🎯 Product Filters
The website supports multiple filters.
Category
- T-Shirts
- Shirts
- Jeans
- Sneakers
Brand
- Urban Edit
- Roadster
- Trendline
- Street Nine
Price
- Under ₹999
- ₹1,000 - ₹1,999
- ₹2,000+
Discount
- 10% and above
- 30% and above
- 50% and above
Color
- Black
- White
- Blue
↕️ Product Sorting
Products can be sorted using:
- Recommended
- What's New
- Popularity
- Better Discount
- Price: High to Low
- Price: Low to High
- Customer Rating
❤️ Wishlist
Users can add products to their wishlist.

Wishlist functionality includes:
- Add product to wishlist
- Remove product from wishlist
- Wishlist item counter
- View wishlist
- Move wishlist products to bag
Login is required to use the wishlist.
🛍️ Shopping Bag
The shopping bag provides:
- Added products
- Product quantity
- Increase quantity
- Decrease quantity
- Remove product
- Subtotal
- Discount
- Delivery charges
- Coupon discount
- Final payable amount
Free delivery is provided for orders of:
₹999 or above

Orders below ₹999 have:
₹99 delivery charge

🎟️ Coupon System
The project includes demo coupon functionality.
Available Coupons
Coupon	Discount
MYNTRA10	10% OFF
WELCOME200	₹200 OFF


Example:
Enter coupon:
MYNTRA10

The discount is automatically calculated in the shopping bag and checkout.
These are demo coupons created for this project and are not official Myntra coupons.

👤 Login & Registration
Users can create an account using:
- Full Name
- Email
- Mobile Number
- Password
After registration, users can log in using:
- Email
- Mobile Number
- Password
Login is required for:
- Wishlist
- Shopping Bag
- Adding products to bag
- Orders
💳 Checkout
The checkout system collects:
- Full Name
- Mobile Number
- Pincode
- City
- State
- Full Address
The checkout page also displays:
- Subtotal
- Discount
- Delivery charge
- Final payable amount
💰 Payment Methods
The project supports three demo payment options.
UPI
Users can enter:
name@upi

Credit / Debit Card
Users can enter:
- Card Number
- Expiry Date
- CVV
Cash on Delivery
Users can select:
Cash on Delivery

📦 Order Management
After placing an order, the website generates an order ID.

Example:
MYN12345678

Order information includes:
- Order ID
- Order date
- Payment method
- Total amount
- Order confirmation status
Users can view their previous orders from:
Profile → My Orders

📞 Customer Care
The website includes a customer care section for:
- Order support
- Returns
- Refunds
- Delivery support
Demo customer care details are displayed within the website.
💾 LocalStorage
The project uses browser LocalStorage to preserve user data.

The following information is stored locally:
Cart
Wishlist
User Account
Orders

This allows data to remain available even after refreshing the page.
📱 Responsive Design
The website is designed to work on:
- Desktop
- Laptop
- Tablet
- Mobile
CSS media queries automatically adjust:
- Navigation
- Product grid
- Filters
- Hero section
- Shopping bag
- Checkout layout
- Footer
🎨 UI Design
The website uses a premium e-commerce visual style inspired by modern fashion websites.

Main design characteristics:
- Clean white background
- Pink accent color
- Dark text
- Rounded elements
- Product cards
- Hover animations
- Sticky navigation
- Responsive product grid
- Modal windows
- Toast notifications
- Modern typography
🛠️ Technologies Used
HTML5
Used to create:
- Website structure
- Navigation
- Product section
- Filters
- Footer
- Modal container
CSS3
Used for:
- Styling
- Responsive design
- Product cards
- Animations
- Layout
- Hover effects
- Modal design
JavaScript
Used for:
- Product rendering
- Search
- Filtering
- Sorting
- Wishlist
- Shopping bag
- Login
- Registration
- Checkout
- Payment selection
- Coupons
- Orders
- LocalStorage
📂 Project Structure
Myntra-Premium/
│
├── index.html
├── style.css
├── script.js
└── README.md

index.html
Contains the main website structure and UI elements.
style.css
Contains all website styling, layouts, responsive rules, and animations.
script.js
Contains the main application functionality including:
- Product data
- Search
- Filtering
- Sorting
- Wishlist
- Cart
- Login
- Registration
- Checkout
- Payment
- Coupons
- Orders
README.md
Project documentation.
🚀 How to Run
Method 1 — Directly Open
1. Download or clone the project.
2. Open the project folder.
3. Double-click:
index.html

The website will open in your browser.
Method 2 — VS Code
1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension.
3. Right-click index.html.
4. Select:
Open with Live Server

The website will open in your browser.
🌐 External Resources
The project uses external resources for:
- Google Fonts
- Product images
An internet connection may be required for externally hosted resources.
🔐 Important Note
This is a front-end educational project.

It does not use:
- Real payment processing
- Real user authentication
- Real databases
- Real order processing
- Real delivery services
User accounts, cart information, wishlist information, and orders are stored in the browser using LocalStorage.

Passwords are also stored locally for demonstration purposes, which is not suitable for a production application.
🎓 Project Purpose
This project was created to demonstrate practical knowledge of:
- HTML
- CSS
- JavaScript
- DOM manipulation
- Arrays and objects
- Event handling
- LocalStorage
- Responsive web design
- E-commerce UI development
- Client-side filtering
- Client-side sorting
- Form validation
🔮 Future Improvements
The project can be extended with:
- Backend database
- Real authentication
- Firebase authentication
- Real payment gateway
- Product database
- Admin dashboard
- Product reviews
- Product ratings
- Multiple product categories
- Real order tracking
- Address management
- Multiple product images
- Product size selection
- Stock management
- Dark mode
- Personalized recommendations
👨‍💻 Author
Boodati Jayanth

School of Computing & Data Science
Sai University
📄 License
This project is created for educational and demonstration purposes.

The project is Myntra-inspired and is not an official Myntra website or application.

This README matches the **actual three files you gave me**, rather than claiming features that aren't currently implemented.
