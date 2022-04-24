import React, { createContext, useEffect, useState } from "react";
import {
  fetchFromLocalStorage,
  saveToLocalStorage,
} from "../Utilities/LocalStorage";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (fetchFromLocalStorage("selectedItems"))
      setSelectedItems(fetchFromLocalStorage("selectedItems"));
  }, []);

  useEffect(() => {
    setTotal(selectedItems?.length);

    let sum = 0;

    selectedItems.sort((a, b) => (a.price > b.price ? 1 : -1));

    selectedItems.map((item) => (sum = Number(item.price) + sum));

    setPrice((sum * 1.2).toFixed(1));

    saveToLocalStorage("selectedItems", selectedItems);
  }, [selectedItems]);

  return (
    <CartContext.Provider
      value={{
        selectedItems,
        setSelectedItems,
        total,
        setTotal,
        price,
        setPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
