# File Tree: e-commerce

**Generated:** 6/11/2026, 8:08:25 AM
**Root Path:** `d:\Route\next.js\e-commerce`

```
├── 📁 public
│   ├── 🖼️ file.svg
│   ├── 🖼️ globe.svg
│   ├── 🖼️ next.svg
│   ├── 🖼️ vercel.svg
│   └── 🖼️ window.svg
├── 📁 src
│   ├── 📁 app
│   │   ├── 📁 (Auth)
│   │   │   ├── 📁 login
│   │   │   │   ├── 📄 login.actions.ts
│   │   │   │   ├── 📄 loginForm.tsx
│   │   │   │   └── 📄 page.tsx
│   │   │   └── 📁 signup
│   │   │       ├── 📄 SignupForm.tsx
│   │   │       ├── 📄 page.tsx
│   │   │       └── 📄 signup.actions.ts
│   │   ├── 📁 (forgetPassword)
│   │   │   ├── 📁 forgetpassword
│   │   │   │   ├── 📄 ForgetPassword.tsx
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 resetPassword
│   │   │   │   ├── 📄 ResetPassword.tsx
│   │   │   │   └── 📄 page.tsx
│   │   │   └── 📁 verifyResetCode
│   │   │       ├── 📄 VerifyResetCode.tsx
│   │   │       └── 📄 page.tsx
│   │   ├── 📁 Categories
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 _Components
│   │   │   ├── 📁 BrandCard
│   │   │   │   └── 📄 BrandCart.tsx
│   │   │   ├── 📁 CategoriesSlider
│   │   │   │   └── 📄 CategoriesSlider.jsx
│   │   │   ├── 📁 CategoryCard
│   │   │   │   └── 📄 CategoryCard.tsx
│   │   │   ├── 📁 MySwiper
│   │   │   │   └── 📄 MySwiper.tsx
│   │   │   ├── 📁 Navbar
│   │   │   │   └── 📄 Navbar.tsx
│   │   │   ├── 📁 ProductCard
│   │   │   │   ├── 📄 ProductCard.tsx
│   │   │   │   └── 📄 productCard.type.ts
│   │   │   ├── 📁 Search
│   │   │   │   └── 📄 Search.tsx
│   │   │   ├── 📁 StaticSlider
│   │   │   │   └── 📄 StaticSlider.tsx
│   │   │   └── 📁 WishlistButton
│   │   │       └── 📄 WishlistButton.tsx
│   │   ├── 📁 _interfaces
│   │   │   ├── 📄 AllProducts.ts
│   │   │   ├── 📄 cart.types.ts
│   │   │   ├── 📄 checkOut.schema.ts
│   │   │   ├── 📄 login.types.ts
│   │   │   ├── 📄 login.validation.schema.ts
│   │   │   ├── 📄 signup.types.ts
│   │   │   └── 📄 signup.validation.schema.ts
│   │   ├── 📁 _services
│   │   │   ├── 📄 GetAllSubCategoriesOnCategory.ts
│   │   │   ├── 📄 addToCart.ts
│   │   │   ├── 📄 clearCart.ts
│   │   │   ├── 📄 deleteItemFromCart.ts
│   │   │   ├── 📄 getAllBrands.ts
│   │   │   ├── 📄 getAllCategories.ts
│   │   │   ├── 📄 getAllProducts.services.ts
│   │   │   ├── 📄 getCategoryById.ts
│   │   │   ├── 📄 getCategoryProducts.ts
│   │   │   ├── 📄 getSpecificProduct.services.ts
│   │   │   ├── 📄 getTokenAuth.ts
│   │   │   ├── 📄 getUserOrders.ts
│   │   │   ├── 📄 updateQuantity.ts
│   │   │   └── 📄 wishlist.ts
│   │   ├── 📁 allorders
│   │   │   ├── 📁 _components
│   │   │   │   └── 📄 OrdersClient.tsx
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 api
│   │   │   ├── 📁 auth
│   │   │   │   └── 📁 [...nextauth]
│   │   │   │       └── 📄 route.ts
│   │   │   ├── 📁 cart
│   │   │   │   ├── 📁 [productId]
│   │   │   │   │   └── 📄 route.ts
│   │   │   │   └── 📄 route.ts
│   │   │   └── 📁 wishlist
│   │   │       ├── 📁 [productId]
│   │   │       │   └── 📄 route.ts
│   │   │       └── 📄 route.ts
│   │   ├── 📁 brands
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 cart
│   │   │   ├── 📁 _components
│   │   │   │   ├── 📄 Cart.tsx
│   │   │   │   ├── 📄 ClearButton.tsx
│   │   │   │   └── 📄 QuantityButton.tsx
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 checkOut
│   │   │   ├── 📁 [id]
│   │   │   │   └── 📄 page.tsx
│   │   │   ├── 📁 _actions
│   │   │   │   └── 📄 checkOut.actions.ts
│   │   │   └── 📁 _components
│   │   │       └── 📄 CheckOut.tsx
│   │   ├── 📁 productDetails
│   │   │   └── 📁 [id]
│   │   │       └── 📄 page.tsx
│   │   ├── 📁 products
│   │   │   ├── 📁 _components
│   │   │   │   └── 📄 AddToCart.Button.tsx
│   │   │   └── 📄 page.tsx
│   │   ├── 📁 providers
│   │   │   └── 📁 componenets
│   │   │       ├── 📄 ReactQueryProvider.provider.tsx
│   │   │       └── 📄 nextauth.providers.tsx
│   │   ├── 📁 specificCategory
│   │   │   └── 📁 [id]
│   │   │       └── 📄 page.tsx
│   │   ├── 📁 wishlist
│   │   │   ├── 📁 _components
│   │   │   │   ├── 📄 AddToCartButton.tsx
│   │   │   │   └── 📄 WishList.tsx
│   │   │   └── 📄 page.tsx
│   │   ├── 📄 favicon.ico
│   │   ├── 🎨 globals.css
│   │   ├── 📄 layout.tsx
│   │   ├── 📄 loading.tsx
│   │   ├── 📄 not-found.tsx
│   │   └── 📄 page.tsx
│   ├── 📁 assets
│   │   └── 📁 images
│   │       ├── 🖼️ banner-4.jpeg
│   │       ├── 🖼️ blog-img-1.jpeg
│   │       ├── 🖼️ blog-img-2.jpeg
│   │       ├── 🖼️ error.svg
│   │       ├── 🖼️ freshcart-logo.svg
│   │       ├── 🖼️ grocery-banner-2.jpeg
│   │       ├── 🖼️ grocery-banner.png
│   │       ├── 🖼️ light-patten.svg
│   │       ├── 🖼️ slider-2.jpeg
│   │       ├── 🖼️ slider-image-1.jpeg
│   │       ├── 🖼️ slider-image-2.jpeg
│   │       └── 🖼️ slider-image-3.jpeg
│   ├── 📁 components
│   │   └── 📁 ui
│   │       ├── 📄 button.tsx
│   │       ├── 📄 dialog.tsx
│   │       ├── 📄 form.tsx
│   │       ├── 📄 input.tsx
│   │       ├── 📄 label.tsx
│   │       └── 📄 sonner.tsx
│   ├── 📁 lib
│   │   └── 📄 utils.ts
│   ├── 📁 types
│   │   └── 📄 next-auth.d.ts
│   ├── 📄 Auth.ts
│   └── 📄 middleware.ts
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ components.json
├── 📄 eslint.config.mjs
├── 📄 next.config.ts
├── ⚙️ package-lock.json
├── ⚙️ package.json
├── 📄 postcss.config.mjs
└── ⚙️ tsconfig.json
```

---
*Generated by FileTree Pro Extension*