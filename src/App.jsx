import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "Milk", category: "Dairy", price: 3.99 },
    { id: 2, name: "Bread", category: "Bakery", price: 2.99 },
    { id: 3, name: "Eggs", category: "Dairy", price: 4.99 },
    { id: 4, name: "Apple", category: "Fruits", price: 1.99 },
    { id: 5, name: "Banana", category: "Fruits", price: 0.99 },
    { id: 6, name: "Chicken", category: "Meat", price: 8.99 },
    { id: 7, name: "Cheese", category: "Dairy", price: 5.99 },
    { id: 8, name: "Orange Juice", category: "Beverages", price: 3.49 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header className="app-header">
        <h1>Grocery Shopping App</h1>
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </header>

      <main className="app-main">
        <div className="shopping-section">
          <div className="filter-section">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="category-filter"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <ProductList products={filteredProducts} addToCart={addToCart} />
        </div>

        <div className="cart-section">
          <Cart cart={cart} />
        </div>
      </main>
    </div>
  );
}

export default App;
