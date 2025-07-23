"use client";

import { fetchProducts } from "@/services/mockApi";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import CartItems from "./CartItems";
import styles from "../styles/Products.module.scss";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("cartItems") : null;
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    fetchProducts().then((productData) => {
      setProducts(productData);
    });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const AddToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <h2 className={styles.productsTitle}>Products Listing</h2>
      <div className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <div className={styles.productsContainer}>
            <ul className={styles.productsList}>
              {products.map((product) => (
                <li className={styles.productListItem} key={product.id}>
                  <ProductCard
                    productName={product.name}
                    productImage={product.image}
                    price={product.price}
                  />
                  <button
                    className={styles.addButton}
                    onClick={() => AddToCart(product)}
                  >
                    Add Item
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <CartItems cartItems={cartItems} onRemove={handleRemove} />
        </div>
      </div>
    </>
  );
}
