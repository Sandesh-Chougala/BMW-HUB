BMW HUB – React E‑Commerce for BMW Cars
BMW HUB is a modern, responsive e‑commerce web application for browsing and “booking” BMW cars across different series (X, 3, 5, 7, M, Z, i).
It is built with React, React Router, and pure CSS, and designed to be a clean, portfolio‑ready full‑stack front-end for future MongoDB Atlas integration.

Live Link : https://bmw-hub.netlify.app/

Features
Modern BMW‑themed UI with glassmorphism and gradient styling

Fully responsive layout (desktop, tablet, mobile)

Product catalog with 26+ BMW models (X, 3, 5, 7, M, Z, i series)

Series-based filtering (X Series, 3 Series, 5 Series, 7 Series, M Series, Z Series, i Series, All)

Product detail page with big hero image, specs and description

Shopping cart:

Add to Cart from Home, Products, and Product Detail

Remove from Cart on cart page

Dynamic cart count in navbar

Total price calculation and “Checkout” button (front-end only)

Simple, clean project structure suitable for learning and portfolio use

Note: Currently this project is front-end only.
Backend/API + MongoDB Atlas integration can be added later to persist cars, users, and orders.

Tech Stack
Frontend: React (Vite), React Router DOM

Styling: Pure CSS (no CSS framework, custom responsive styles)

Icons: lucide-react

State Management: React useState (for cart and filters)

Data Source: Local products.js file (ready to replace with MongoDB Atlas API later)

Project Structure
bmw-hub/
├─ src/
│  ├─ data/
│  │  └─ products.js        # 26+ BMW models with specs, price, category, image
│  ├─ pages/
│  │  ├─ Home.jsx           # Hero, featured cars, series overview, stats
│  │  ├─ Products.jsx       # All cars + series filters + cards
│  │  ├─ ProductDetail.jsx  # Single car detail page
│  │  └─ Cart.jsx           # Cart items, total amount, checkout button
│  ├─ App.jsx               # Routes, navbar, cart state
│  ├─ main.jsx              # React entry (Vite)
│  └─ index.css             # Global and component CSS (navbar, hero, cards, responsive)
├─ index.html
├─ package.json
└─ README.md

Getting Started
Prerequisites
Node.js (LTS recommended)

npm or yarn

Installation
# Clone the repository
git clone https://github.com/your-name/bmw-hub.git

# Go into the project directory
cd bmw-hub

# Install dependencies
npm install
# or
yarn


Run in Development
npm run dev
# or
yarn dev


Vite will show a local URL (usually http://localhost:5173) – open it in your browser.

Build for Production
npm run build
# or
yarn build


To preview the production build:
npm run preview
# or
yarn preview


Key Implementation Details
Routing
The app uses React Router with the following routes:

/ – Home page (hero + featured BMW models + series overview + stats)

/products – All models with filter options

/products/:id – Product detail page for a specific BMW model

/cart – Shopping cart page

Routing is set up in App.jsx together with cart state and navbar.

Data Model (products.js)
Each BMW model has:
{
  id: 1,
  name: "BMW X1 xDrive20i M Sport",
  price: 4900000,
  image: "https://images.unsplash.com/...", // BMW-like car image
  category: "X Series",                     // Series name
  specs: "1998cc | Petrol | 189hp | 5 Seater",
  description: "Compact luxury SUV with sporty dynamics."
}


This makes it easy to:

Filter by category (X, 3, 5, 7, M, Z, i Series)

Display specs and description in cards and detail pages

Compute totals in the cart using price

Filtering Logic (Products Page)
State: selectedCategory ("all" by default)

Filter:

If "all" → show all cars

Else → bmwProducts.filter(car => car.category === selectedCategory)

Category buttons update selectedCategory and visually highlight the active filter.

Cart Logic
Cart is stored in state in App.jsx and passed down as props.

addToCart(product) pushes the selected product into the cart array.

removeFromCart(id) removes a specific car by id.

Total price is computed via reduce on the cart array.

Cart count in navbar shows cart.length.

Styling & UI
Glassmorphism and gradient backgrounds for a premium BMW feel

Hover effects on cards and buttons

Responsive grid layout for products:

Desktop: multiple columns

Mobile: single column

Sticky navbar with logo and cart indicator

If you want to switch to a utility framework later (like Tailwind or MUI), the current CSS is organized enough to refactor gradually.

Future Enhancements
Planned / suggested improvements:

Backend API (Node.js/Express or Spring Boot)

MongoDB Atlas integration for:

Products collection

Users collection

Orders / bookings

JWT-based authentication (login, register, profile)

Real checkout flow with a payment gateway (e.g., Stripe test mode)

Admin panel to:

Add/edit/remove BMW models

Manage series and pricing

Add wishlist and compare features

Advanced filters (fuel type, horsepower, price range, seats)
