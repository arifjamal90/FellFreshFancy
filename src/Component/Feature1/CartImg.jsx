import React, { useContext, useEffect, useState } from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import Product from '../product/Product';
import { Link } from 'react-router-dom';
import CardDetails from '../CardDeatils/CardDetails';

import Aos from "aos";
import "aos/dist/aos.css";
import './Cart.css';
import { UserContext } from '../Contenxapi/MyContex';

export default function CartImg({ item }) {
    const [chng, setChng] = useState(false);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        Aos.init({ duration: .700 });
    }, []);

    useEffect(() => {
        Aos.refresh();
    }, []);

    const myValue = useContext(UserContext);
    const { addProduct } = myValue;

    return (
        <div className="card" onMouseOver={() => setChng(true)} onMouseOut={() => setChng(false)}>
            <img
                src={chng ? item.Img1 : item.Img}
                alt="logo"
                data-aos={chng ? "fade-right" : null}
                className='cardimage'
            />
            <div className="icons">
                <FaStar className='orange' />
                <FaStar className='orange' />
                <FaStar className='orange' />
                <CiStar className='gray' />
                <CiStar className='gray' />
            </div>
            <div className="hiddenBtn">
                {
                    chng ? <Link to ="/card"> <button className='cartBtn' data-aos="fade-up" onClick={() => addProduct(item)}>ADD TO CART</button> </Link> : null
                }
                {
                    toggle ? <div className="addbtn">
                        <button>+</button>
                        <button>-</button>
                    </div> : ""
                }
                {
                    chng ?
                        <div className="hiddenIcons" data-aos="fade-left">
                            <button><FaRegEye /></button>
                            <button><CiHeart /></button>
                        </div> : ""
                }
            </div>
            <p>{item.Desc}</p>
            <h6>$ {item.Price}</h6>
        </div>
    );
}
