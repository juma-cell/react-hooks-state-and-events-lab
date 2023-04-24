import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Create a state variable to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle change in selected category
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            // Pass down the handleToggleCart function as a prop to the Item component
            handleToggleCart={() => {}}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
