import React, { useContext } from "react";
import { ImCancelCircle } from "react-icons/im";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Card.css";
import { UserContext } from "../Contenxapi/MyContex";
import TotalePrice from "./TotalePrice";


const CardDetails = () => {
  const { cardItems, addItem, subItem, filterItem } = useContext(UserContext);
  const addvalue = 7.00;

  return (
    <>
      {
        cardItems.length === 0 && (
          <div className="emptycart">
          <p>Your cart is empty</p>
          <Link to="/">
            <button className="shopping">Continue shopping</button>
          </Link>
        </div>
        )
      }
        
    
        
          {cardItems.map((item) => (
            <div className="main" key={item.id}>
              <div className="row">
                <div className="col-md-11 col-lg-11 col-sm-11 iconsss">
                  <p>
                    <span>
                      <FaCheck />
                    </span>{" "}
                    &nbsp; Product successfully added to your shopping cart
                  </p>
                  <button>
                    <button onClick={() => filterItem(item.id)}>Delete</button>
                  </button>
                </div>
                <div className="uderlne">
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-10 rightBox">
                  <div className="images">
                    <img src={item.Img} alt="" />
                  </div>

                  <div className="cardtext">
                    <p>{item.Desc}</p>
                    <p className="price">Price: ${item.Price * item.Quan}</p>
                    <p className="size"> Size: {item.size}</p>
                    <p>Dimension: 10x 20cm</p>
                    <p>Quantity: {item.Quan} </p>
                    <button className="add" onClick={() => addItem(item)}>
                      <FaPlus />
                    </button>
                    <button className="sub" onClick={() => subItem(item)}>
                      <FaMinus />
                    </button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-10">
                  <div className="cardInfo">
                    <h4>There Are {item.Quan} Items In Your Cart.</h4>
                    <hr />
                    <div className="subtotal">
                      <h6>Subtotal:</h6>
                      <p>$ {item.Price * item.Quan}</p>
                    </div>
                    <div className="shipping">
                      <p>Shipping:</p>
                      <p>$ {addvalue}.0</p>
                    </div>
                    <div className="taxincl">
                      <h6>Total: (tax incl.)</h6>
                      <p> ${item.Price * item.Quan + addvalue}</p>
                    </div>
                    <div className="taxes">
                      <p>Taxes</p>
                      <p>$0.000</p>
                    </div>
                    <div className="totalamout">
                      <h6>Total</h6>
                      <p>${item.Price * item.Quan + addvalue}</p>
                    </div>
                    <Link to="/">
                      <button className="shopping">Continue shopping</button>
                    </Link>
                    <button className="checkout">proceed to checkout</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <TotalePrice />
        </>
  
    
  );
};

export default CardDetails;
