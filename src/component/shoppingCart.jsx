import React from "react";
import styles from "./shoppingCart.module.css";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

const ShoppingCart = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className={styles["cart-item"]}>
            <img src={item.image} alt={item.name} />
            <div className={styles["cart-item-details"]}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className={styles["quantity-controls"]}>
                <button onClick={() => decreaseQuantity(item.id)}>
                  <FaMinus />
                </button>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => increaseQuantity(item.id)}>
                  <FaPlus />
                </button>
              </div>
            </div>
            <button onClick={() => removeFromCart(item.id)}>
              Remove <FaTrash />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ShoppingCart;
