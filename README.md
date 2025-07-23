# Digital Room Exam - Shopping Cart

## How to Setup

1. **Clone this repo:**

   ```bash
   git clone https://github.com/drengual/digitalRoomExam.git
   cd digitalRoomExam

   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the app:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**  
   Go to [http://localhost:3000](http://localhost:3000)

---

## Features

- **Product List:**  
  See products with images, names, and prices.

- **Add to Cart:**  
  Click "Add Item" to put products in your cart. If you add the same product again, it just increases the quantity.

- **Cart Summary:**  
  Shows each product in your cart, its image, how many you have, the subtotal for each, and the total for all.

- **Coupon Code:**  
  Enter `SAVE10` to get 10% off items with a subtotal of $100 or more (max $50 discount per item).

- **Remove item from Cart:**  
  You can remove item from your cart.

- **Cart Stays After Reload:**  
  Your cart is saved in your browser, so it stays even if you refresh.

---

## Assumptions

- Product images are in the `public/images` folder.
- Only the coupon code `SAVE10` works.
- Cart is saved in the browser using `localStorage`.
- Products come from a mock API file, not a real server; `services/mockApi.js`

---

## Time Spent

- 18 hours
