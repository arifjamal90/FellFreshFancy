import React, { useContext } from 'react';
import { UserContext } from '../Contenxapi/MyContex';
import "./Total.css";
import CartImg from '../Feature1/CartImg';

const TotalePrice = () => {
    const { cardItems } = useContext(UserContext);


    let totalPrice = cardItems.reduce((totalValue, currentItem) => {
        return totalValue + (currentItem.Price * currentItem.Quan);
    }, 0);

    let totalCart=cardItems.reduce((totalCart, currentCart)=>{
        return totalCart + currentCart.Quan
    },0)

    const addvalue = 7.00;

    console.log(totalPrice, "arif");

    return (
        <div className='container'>
            <div className="totalprice">
                <p>Total amount: ${totalPrice.toFixed(2) }</p>
                <p>Total cart items: {totalCart}</p>
            </div>
        </div>
    );
}

export default TotalePrice;
