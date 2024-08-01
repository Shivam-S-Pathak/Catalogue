import styles from "./productDetails.module.css";
import React from "react";
import { FaArrowLeft, FaCartPlus } from "react-icons/fa";

const ProductDetail = ({ product, closeDetail, addToCart }) => {
  if (!product) return null;

  return (
    <>
      {" "}
      <button onClick={closeDetail} className={styles["back-button"]}>
        <FaArrowLeft /> Back to Catalog
      </button>
      <div className={styles.detail}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <h2>{product.name}</h2>
        <div className={styles.priceSection}>
          <p>${product.price}</p>
          <p style={{ textDecoration: "line-through" }}>
            ${product.otherPrice}
          </p>
        </div>
        <p>{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className={styles["add-to-cart-button"]}
        >
          Add to Cart <FaCartPlus />
        </button>
      </div>
    </>
  );
};

export default ProductDetail;
