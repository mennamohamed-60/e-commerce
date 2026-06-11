# 🛒 FreshCart – E-Commerce Web Application (Frontend)

> A modern, fully responsive e-commerce web application built with Next.js 15, offering a seamless shopping experience with authentication, product browsing, cart management, wishlist, and order tracking.

---

## 📌 Overview

**FreshCart** is a Next.js-based e-commerce frontend application that connects to an external REST API to deliver a complete online shopping experience.

The application supports full user authentication (login, signup, password reset), product browsing by categories and brands, cart and wishlist management, checkout with order placement, and order history tracking.

---

## 🎯 Project Goal

Provide a fast, responsive, and user-friendly shopping interface that covers the full e-commerce user journey — from browsing products to completing an order — built on modern web technologies with a clean UI.

---

## 🧱 Architecture (High-Level)

```
Authentication → Product Browsing → Cart Management → Checkout → Order Tracking
```

This frontend focuses on:

- User authentication & session management (NextAuth)
- Product discovery (categories, brands, search)
- Cart & wishlist management via API routes
- Checkout flow with form validation
- Order history display

---




## 🔐 Authentication

### Login
- Email & password login form
- Form validation with Zod schema
- Session management via NextAuth
- Redirect to home on success

### Signup
- New user registration form
- Validation schema for all fields
- Error feedback via Sonner toasts

### Forgot Password Flow
- **Forget Password** – submit registered email
- **Verify Reset Code** – enter OTP/code sent to email
- **Reset Password** – set new password

---

## 🏠 Home Page

- **Hero Slider** – full-width promotional image carousel (Swiper)
- **Static Banner Slider** – secondary promotional banners
- **Categories Slider** – horizontally scrollable category list
- Global loading state (`loading.tsx`)
- Custom 404 page (`not-found.tsx`)

---

## 📦 Products

### All Products Page
- Grid display of all products
- Each product card shows: image, name, price, rating
- **Add to Cart** button per product
- **Wishlist toggle** button per product

### Product Details Page (`/productDetails/[id]`)
- Full product information
- Product images
- Add to cart action

---

## 🗂️ Categories

### All Categories Page
- Grid of all available categories
- Each category displayed as a card

### Specific Category Page (`/specificCategory/[id]`)
- Browse products filtered by selected category
- Subcategory navigation support

---

## 🏷️ Brands

### All Brands Page
- Grid display of all brands
- Brand cards with logo/image

---

## 🔍 Search

- Live product search component
- Integrated in the Navbar

---

## 🛒 Cart

- View all items added to cart
- **Update item quantity** (increase / decrease)
- **Remove single item** from cart
- **Clear entire cart**
- Display total price
- Proceed to checkout button

### API Routes (Next.js)
- `GET/POST /api/cart` – fetch and add cart items
- `DELETE /api/cart/[productId]` – remove specific item

---

## ❤️ Wishlist

- Add / remove products from wishlist
- View all wishlisted products
- **Add to Cart** directly from wishlist
- `WishlistButton` component reusable across pages

### API Routes (Next.js)
- `GET/POST /api/wishlist` – fetch and add wishlist items
- `DELETE /api/wishlist/[productId]` – remove specific item

---

## 💳 Checkout

- Checkout form with address and payment details
- Zod schema validation
- Integrated with cart `[id]`
- Order submission via server actions

---

## 📋 All Orders

- View full order history for the authenticated user
- Order details displayed per entry
- Client-side rendering component (`OrdersClient.tsx`)

---

## 🧭 Navigation

- Responsive Navbar with links to all main sections
- Authentication-aware (shows login/logout based on session)
- Cart item count indicator
- Search bar integration

---

## 🛠️ Tech Stack

### ⚡ Framework & Core

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 15.5.3 | App Router, SSR, API Routes |
| React | 19.1.0 | UI rendering |
| TypeScript | — | Type safety |

### 🎨 UI & Styling

| Technology | Purpose |
|---|---|
| Tailwind CSS | Utility-first styling |
| shadcn/ui (Radix UI) | Dialog, Label, Slot, Button components |
| Lucide React | Icon library |
| FontAwesome | Additional icons |
| Swiper | Image & category carousels |
| next-themes | Light/dark theme support |
| Sonner | Toast notifications |

### 📡 Data & State

| Technology | Purpose |
|---|---|
| TanStack React Query v5 | Server state management & caching |
| Axios *(via services)* | HTTP requests to external API |
| NextAuth v4 | Authentication & session management |

### ✅ Forms & Validation

| Technology | Purpose |
|---|---|
| React Hook Form | Form state management |
| Zod | Schema-based validation |
| @hookform/resolvers | Bridge between RHF and Zod |

---

## 🔌 External API

All data is fetched from an external REST API:

```
https://ecommerce.routemisr.com/api/v1
```

---

## 📂 Project Structure

[Structure-tree](./Structure-tree.md)
---

## 🚀 Deployment

- Deployed on **Vercel**
  🔗 https://e-commerce-xi-lemon.vercel.app/

---

## 🎨 UI Theme

**Primary Colors:**

- White / Light gray base
- Green accent (`#4fa74f` – FreshCart brand green)

The UI follows a clean, modern e-commerce design inspired by popular grocery and retail platforms.

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/mennamohamed-60/e-commerce.git
cd e-commerce
```

### 📦 Install dependencies

```bash
npm install
```

### 🔑 Set up environment variables

Create a `.env.local` file in the root:

```env
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 🚀 Run the development server

```bash
npm run dev
```

### 🌐 Open in browser

```
http://localhost:3000
```

---

## 📁 Repository

🔗 https://github.com/mennamohamed-60/e-commerce
