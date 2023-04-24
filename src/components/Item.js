import React, { useState } from "react";

function Item({ name, category }) {
  // Create a state variable to keep track of whether the item is in the cart or not
  const [isInCart, setIsInCart] = useState(false);

  // Function to handle adding or removing item from the cart
  const handleToggleCart = () => {
    setIsInCart(!isInCart);
  };

  // Set the className of the <li> element based on whether the item is in the cart or not
  const liClassName = isInCart ? "in-cart" : "";

  // Set the text of the button based on whether the item is in the cart or not
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleToggleCart}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
