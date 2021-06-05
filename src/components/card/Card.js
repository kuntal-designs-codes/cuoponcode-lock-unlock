import React, { useState, useEffect } from 'react';
import './Card.css'

const Card = ({ title, imgsrc, desc, couponcode}) => {
    
    const [enable, setEnable] = useState(true);
    const [coupon, setCoupon] = useState("UNLOCK");

    useEffect(() => {
        if(!enable) {
            setCoupon(couponcode);
            const timer = setInterval(() => {
                setCoupon("LOCKED");
            }, 10000);
            // clearing interval
            console.log('Hello from effect..');
            return () => clearInterval(timer);
        }
    },[enable]);

    return (
        <div className="card__container">
            <p>{title}</p>
            <div className="card__imgcontainer">
                <img alt="#" src={imgsrc}/>
            </div>
            <div className="card__footer">
                <p>{desc}</p>
                {
                    enable?<button onClick={() => setEnable(false)} type="submit">{coupon}</button> :
                    <button disabled type="submit">{coupon}</button>
                    // disabled={ enable?"true":"" } 
                }
            </div>
        </div>
    )
}

export default Card;