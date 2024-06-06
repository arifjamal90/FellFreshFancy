import React, { useState, useEffect } from "react";
import "./Feature1.css";
import Product from "../product/Product";
import Slider from "react-slick";
// import { CiStar } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import Aos from "aos";
import "aos/dist/aos.css";
import CartImg from "./CartImg";

const Feature1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [card, setCard] = useState(Product);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [card]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    FilterCategory();
  };

  const FilterCategory = (Cate) => {
    if (Cate === "New Product") {
      let updatedProducts = Product.filter((item) => item.Cate === Cate);
      setCard(updatedProducts);
    } else if (Cate === "Latest Product") {
      let updateProducts = Product.filter((item) => item.Cate === Cate);
      setCard(updateProducts);
    } else if (Cate === "Features Product") {
      setCard(Product);
    }
  };

  // const handleImageMouseEnter = (index) => {
  //   setHoverIndex(index);
  // };

  // const handleImageMouseLeave = () => {
  //   setHoverIndex(null);
  // };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="featureContainer">
      <ul className="unOrderList">
        <li
          
          onClick={(e) => FilterCategory(e.target.textContent)}
        >
          Features Product
        </li>
        <li
          
          onClick={(e) => FilterCategory(e.target.textContent)}
        >
          New Product
        </li>
        <li
        
          onClick={(e) => FilterCategory(e.target.textContent)}
        >
          Latest Product
        </li>
      </ul>

      <div className="wrapper1">
        <Slider {...settings}>
          {card.map((item, index) => (
            <CartImg item={item} />
          ))}
        </Slider>
      </div>
      
    </div>
  );
};

export default Feature1;
