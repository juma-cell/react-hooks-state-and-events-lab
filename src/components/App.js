import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Create a state variable to keep track of whether dark mode is enabled or not
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to handle toggling between dark mode and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Set the CSS class based on whether dark mode is enabled or not
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
