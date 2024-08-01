import React from "react";
import styles from "./productCatalogue.module.css";
import { FaCartPlus } from "react-icons/fa";

const ProductCatalog = ({ products, addToCart, viewDetail }) => {
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <div
          key={product.id}
          className={styles.productCard}
          onClick={() => viewDetail(product)}
        >
          <img
            src={product.image}
            alt={product.name}
            className={styles.productImage}
          />
          <h2 className={styles.productName}>{product.name}</h2>
          <div className={styles.priceScetion}>
            <p className={styles.productPrice}>${product.price}</p>
            <p className={styles.productOtherPrice}>${product.otherPrice}</p>
          </div> 
          <button
            className={styles.addToCartButton}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            <FaCartPlus /> Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
