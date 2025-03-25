import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Bucket of Baseballs",
      price: 50,
      description: "Bucket of baseballs comes with 25",
      image: "/images/Baseballs.jpg",
      category: "Sports",
    },
    {
      id: 2,
      name: "Baseball Bats",
      price: 200,
      description: "A set of training baseball bats",
      image: "/images/Baseball Bats.jpg",
      category: "Sports", 
    },
    {
      id: 3,
      name: "Batting Cage",
      price: 500,
      description: "Batting cage for baseball practice",
      image: "/images/Baseball Cage.jpg",
      category: "Equipment", 
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="app">
      <h1>Baseball Products</h1>
      <div className="filter">
        <label htmlFor="category">Filter by category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="All">All</option>
          <option value="Sports">Sports</option>
          <option value="Equipment">Equipment</option>
        </select>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
