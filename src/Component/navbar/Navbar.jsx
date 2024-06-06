import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenuRound } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";
import { UserContext } from "../Contenxapi/MyContex";


const Navbar = () => {
  const{handleSearchChange,filteredCartItems,searchQuery,cardItems}=useContext(UserContext)
  const [toggle, setToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(false);
  const [crpToggle, setCrpToggle] = useState(true);


  let totalCart=cardItems.reduce((totalCart, currentCart)=>{
    return totalCart + currentCart.Quan
},0)

  const handleMenuClick = () => {
    setToggle(!toggle);
  };

  const handleCancelClick = () => {
    setToggle(false);
  };

  const handleClose = () => {
    setSearchToggle(false);
    setCrpToggle(false);
  };


  return (
  
    <div className="container-fluid">
      <nav>
        <CgMenuRound className="menu" onClick={handleMenuClick} />
        <div className="logo">
        <h6  style={{textDecoration: "none"}}>CÖUTURE</h6>
        </div>
        <ul className={toggle ? "active_vertical" : "Active-horizontal"}>
          <div className="list">
            <li>Soap</li>
            <li>Collection</li>
            <li>Accessories</li>
            <li>Delivery</li>
            <li>About us</li>

          </div>
          <button className="crop" onClick={handleCancelClick}>
            <GiCancel />
          </button>
        </ul>
        <div className="icons">
          {searchToggle && (
            <>
            <input
              type="search"
              placeholder="Search Here"
              className="search"
              value={searchQuery}
        onChange={handleSearchChange}
            />
            <ul>
            {filteredCartItems.map((item) => (
              <li key={item.id}>
                {item.Desc} - Quantity: {item.Quan}
              </li>
            ))}
          </ul>
            </>
          )}
          <button className="searchIcons" onClick={() => setSearchToggle(true)}>
            <IoSearchOutline className="searrchIconsBtn" />
          </button>
          <FaRegUser />
         <Link to ="/card"> <FiShoppingCart  className="cart"/> <p className="carttext">{totalCart}</p></Link>
        </div>
      </nav>
      {crpToggle && (
        <div className="navfooter">
          <div className="center">
            <marquee behavior="Alternate" direction="right">
              <p className="center-text">Flate 30% Off First Order in Store</p>
            </marquee>
            <button onClick={handleClose}>
              <GiCancel />
            </button>
          </div>
        </div>
      )}
    </div>
  
  );
};

export default Navbar;