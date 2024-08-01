import { useState } from "react";
import ShoppingCart from "./component/shoppingCart";
import ProductCatalog from "./component/productCatalogue";
import ProductDetail from "./component/productDetails";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Apple",
    price: 100,
    otherPrice: 150,
    image: "./apple.jpg",
    description: "Fresh and Juicy Apples: Nature’s Perfect Snack, discover the essence of freshness with our premium apples, handpicked to deliver the best in flavor and quality.",
  },
  {
    id: 2,
    name: "Papaya",
    price: 150,
    otherPrice: 250,
    image: "./papaya.jpg",
    description: "Delicious and Nutritious Papayas: A Tropical Delight , Experience the vibrant taste of tropical paradise with our premium papayas, known for their unique flavor and impressive health benefits.",
  },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    const existingItem = cartItems.find((item) => item.id === productId);
    if (existingItem.quantity > 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      removeFromCart(productId);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const viewDetail = (product) => {
    setSelectedProduct(product);
  };

  const closeDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <h1>Product Catalog</h1>
      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          closeDetail={closeDetail}
          addToCart={addToCart}
        />
      ) : (
        <ProductCatalog
          products={products}
          addToCart={addToCart}
          viewDetail={viewDetail}
        />
      )}
      <ShoppingCart
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
