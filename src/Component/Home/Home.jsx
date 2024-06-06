import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Aos from "aos";
import "aos/dist/aos.css";
import Feature1 from "../Feature1/Feature1";
import SkinPr from "../kskinproducts/SkinPr";
import Collection from "../Collection/Collection";
import TotalePrice from "../CardDeatils/TotalePrice";


export default function Home() {

  
  const images1 =
    "https://brownliving.in/cdn/shop/products/cinnamon-vanilla-air-freshener-100-soy-wax-214-10932-ar003-2s-candles-fragrances-brown-living-152962_700x.jpg?v=1682961340";
  const images2 =
    "https://prestashop.ishithemes.com/PRS140/PRS140L02/modules/ishislider/views/img/slide-1.png";
  const images3 =
    "https://prestashop.ishithemes.com/PRS140/PRS140L02/modules/ishislider/views/img/slide-2.png";

  const img = [
    {
      src: images1,
      head: "Feel Fresh & Fancy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quisquam est veniam ab nemo recusandae quaerat excepturi, consequatur neque nisi,",
    },
    {
      src: images2,
      head: "Face Wash & Soap",
      text: "dipisicing elit. Possimus nisi repudiandae quaerat dicta illum accusamus nam commodi quis eum? Reiciendis asperiores odit provident ipsam praesentium labore,",
    },
    {
      src: images3,
      head: "Face Cleaning",
      text: "repudiandae quaerat dicta illum accusamus nam commodi quis eum? Reiciendis asperiores odit provident ipsam praesentium labore veniam in modi expedita?",
    },
  ];


  
  const [count, SetCount] = useState(0);
  

    useEffect(() => {
      Aos.init({ duration: 2000 });

    }, [count]);
  



  function handleRight() {
    if (count == 2) {
      SetCount(0);
    } else {
      SetCount(count + 1);
    }
 

  }

  const handleleft = () => {
    if (count == 0) {
      SetCount(2);
    } else {
      SetCount(count - 1);
    }

  };

  useEffect(() => {
    const intId = setInterval(() => {
      if (count === 2) {
        SetCount(0);
      } else {
        SetCount(count + 1);
      }
    }, 3000);
    return () => {
      clearInterval(intId);
    };
  }, [count]);

  return (
    <>
      <div className="bgimages" >
        <div className="wrapper" >
          <img src={img[count].src} alt="bg"  data-aos="fade-down"/>
        </div>
      </div>

      <div className="gropBtn">
        <button className="left" data-aos = "flip-right" onClick={handleleft}>
          <IoIosArrowBack />
        </button>
        <div className="text">
          <h1 className="heading" data-aos = "fade-down" >{img[count].head} </h1>
          <p className="text1" data-aos = "fade-right">{img[count].text}</p>
          <button className="shop" data-aos = "zoom-in-up">SHOP NOW</button>
        </div>
        <button className="right" data-aos = "flip-left" onClick={handleRight}>
          <IoIosArrowForward />
        </button>
      </div>
      <div className="couture">
      <p>CÖUTURE</p>
      <h6>New Arrivals</h6>
      </div>
      <Feature1/>
      <SkinPr/>
      <Collection/>
      <TotalePrice/>
    </>
  );
}
