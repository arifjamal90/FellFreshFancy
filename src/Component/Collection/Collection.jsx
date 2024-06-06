import React from "react";
import "./Collection.css";
import couture from "../../assets/image/asset 0.jpeg";
import soap1 from "../../assets/image/asset 14.jpeg";
import soap2 from "../../assets/image/asset 15.jpeg";
import soap3 from "../../assets/image/asset 16.jpeg";
import soap4 from "../../assets/image/asset 17.jpeg";
import { Link } from "react-router-dom";
const Collection = () => {
  const images = [soap1, soap2, soap3, soap4];
  const soapName = [
    "Soap",
    "Deep Clean Soap",
    "Fainess Soap",
    "Skin Whiten Soap",
  ];

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-12 col-lg-12 sm-12 text-center ">
          <p className="couture1">CÖUTURE</p>
          <h6 className="OurCollection"> Our Collection</h6>
        </div>
      </div>

      <div className="row cratRow">
        <div className="col-md-12 col-lg-12 sm-12 text-center d-flex cart">
          {images.map((item) => {
            return <img src={item} alt="logo" className="cartimages" />;
          })}
        </div>
        <div className="wrapper11111111">
        <div className="col-md-12 col-lg-12 sm-12 text-center d-flex">
          {soapName.map((item) => {
            return (
             <>
             <Link to="/" style={{ textDecoration: "none" }}>
             <p className="soapcotent">{item}</p>
           </Link>
             </>
            );
          })}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Collection;
