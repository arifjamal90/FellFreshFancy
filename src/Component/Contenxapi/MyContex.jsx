import React, { createContext, useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import Aos from "aos"; 
import "aos/dist/aos.css";
import Product from '../product/Product';
import CartImg from '../Feature1/CartImg';

export const UserContext = createContext();

const MyContext = ({ children }) => {
  const [cardItems, setCardItems] = useState(() => {
    const localData = localStorage.getItem("Arifjamal");
    return localData ? JSON.parse(localData) : [];
  });
  const [quantity, setQuantity] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
 

  
  // Function to add product to cart without duplication
  const addProduct = (item) => {
    const existingItemIndex = cardItems.findIndex((cartItem) => cartItem.id === item.id);
    
    if (!existingItemIndex ) {
      alert("This item is already selected in the cart.");
    } else {
      setCardItems([...cardItems, { ...item, Quan: item.Quan+1 }]);
    }
  };
  
  // Function to increase quantity of an item in the cart
  const addItem = (item) => {
    const increaseQty = cardItems.map((items) => {
      return item.id === items.id ? { ...items, Quan: items.Quan + 1 } : items;
    });
    setCardItems(increaseQty);
  };

 
  const subItem = (item) => {
    const decrement = cardItems.map((current) => {
      if (item.id === current.id) {
        const newQuantity = Math.max(current.Quan-1, 1);
        return { ...current, Quan: newQuantity };
      }
      return current;
    });
    setCardItems(decrement);
  };
  

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filtered cart items based on search query
  const filteredCartItems = cardItems.filter((item) =>
    item.Desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to remove item from cart
  const filterItem = (id) => {
    setCardItems(cardItems.filter((item) => item.id !== id));
  }

  // useEffect hook to update localStorage whenever cardItems changes
  useEffect(() => {
    localStorage.setItem("Arifjamal", JSON.stringify(cardItems));
  }, [cardItems]);

  return (
    <UserContext.Provider
      value={{
        setCardItems,
        addProduct,
        cardItems,
        addItem,
        quantity,
        subItem,
        handleSearchChange,
        filteredCartItems,
        searchQuery,
        filterItem
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default MyContext;
