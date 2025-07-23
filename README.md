# Digital Room Exam - Next.js Shopping Cart

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd digital_room_exam
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## Features Implemented

- **Product Listing:**  
  Displays a list of products with images, names, and prices.

- **Add to Cart:**  
  Users can add products to the cart. If the product already exists, its quantity increases.

- **Cart Summary:**  
  Shows product name, image, quantity, subtotal per item, and grand total.

- **Coupon Code:**  
  Users can enter the coupon code `SAVE10` for 10% off on items with a subtotal of $100 or more (max $50 discount per item).

- **Remove from Cart:**  
  Users can remove items from the cart.

- **Cart Persistence:**  
  Cart contents are saved in `localStorage` and persist after page reloads.

- **Responsive Layout:**  
  Product listing and cart summary are displayed side by side on desktop.

---

## Assumptions

- Product images are stored in the `public/images` folder.
- Only the coupon code `SAVE10` is supported.
- The cart is stored in the browser's `localStorage` for persistence.
- No backend/API is used; products are loaded from a mock API file.

---

## Time Spent

- **Planning & Setup:** ~30 minutes
- **Product & Cart Implementation:** ~1 hour
- **Coupon & Cart Persistence:** ~30 minutes
- **Styling & Layout:** ~30 minutes
- **Testing & README:** ~15 minutes

**Total:** ~2 hours 45 minutes
