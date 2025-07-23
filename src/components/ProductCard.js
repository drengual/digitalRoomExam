import React from "react";
import styles from "../styles/ProductCard.module.scss";
export default function ProductCard({ productName, productImage, price }) {
  return (
    <div className={styles.card}>
      <h3>{productName}</h3>
      <img src={productImage} />
      <p>{price}</p>
    </div>
  );
}
