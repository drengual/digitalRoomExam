"use client";

import React, { useState } from "react";
import styles from "../styles/CartItems.module.scss";

export default function CartItems({ cartItems, onRemove }) {
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(false);

  const filteredItems = cartItems.filter((item) => item.id);

  const isCouponValid = coupon.trim().toUpperCase() === "SAVE10";
  const getDiscount = (item) => {
    const subtotal = item.price * item.quantity;
    if (isCouponValid && subtotal >= 100) {
      return Math.min(subtotal * 0.1, 50);
    }
    return 0;
  };

  const grandTotal = filteredItems.reduce((sum, item) => {
    const subtotal = item.price * item.quantity;
    const discount = getDiscount(item);
    return sum + (subtotal - discount);
  }, 0);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Cart Items</h2>
      <ul className={styles.cartList}>
        {filteredItems.length === 0 ? (
          <li className={styles.emptyCart}>No items in cart.</li>
        ) : (
          filteredItems.map((item) => {
            const subtotal = item.price * item.quantity;
            const discount = getDiscount(item);
            return (
              <li className={styles.cartItem} key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "48px",
                    height: "48px",
                    objectFit: "cover",
                    borderRadius: "6px",
                    marginRight: "0.7rem",
                    background: "#fff",
                  }}
                />
                <span style={{ flex: 1 }}>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                <span>
                  Subtotal: <b>${subtotal.toFixed(2)}</b>
                  {discount > 0 && (
                    <span style={{ color: "#ffffffff", marginLeft: "0.5rem" }}>
                      -${discount.toFixed(2)} (coupon)
                    </span>
                  )}
                </span>
                <button
                  style={{
                    marginLeft: "0.7rem",
                    background: "#e53e3e",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "0.3rem 0.7rem",
                    cursor: "pointer",
                  }}
                  onClick={() => onRemove(item.id)}
                  title="Remove item"
                >
                  &times;
                </button>
              </li>
            );
          })
        )}
      </ul>
      <div style={{ margin: "1rem 0" }}>
        <input
          type="text"
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e) => {
            setCoupon(e.target.value);
            setApplied(false);
          }}
          style={{
            color: "#f5f5f5",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #f2f2f2",
            marginRight: "0.5rem",
            width: "140px",
          }}
        />
        <button
          onClick={() => setApplied(true)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "none",
            background: "#21b928ff",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          disabled={applied || !isCouponValid}
        >
          Apply Coupon
        </button>
        {applied && isCouponValid && (
          <span style={{ color: "#fff", marginLeft: "0.7rem" }}>
            Coupon applied!
          </span>
        )}
        {applied && !isCouponValid && (
          <span style={{ color: "#e53e3e", marginLeft: "0.7rem" }}>
            Invalid coupon.
          </span>
        )}
      </div>
      {filteredItems.length > 0 && (
        <div
          style={{
            borderTop: "1px solid #e2e8f0",
            marginTop: "1.2rem",
            paddingTop: "1rem",
            textAlign: "right",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Grand Total: ${grandTotal.toFixed(2)}
        </div>
      )}
    </div>
  );
}
