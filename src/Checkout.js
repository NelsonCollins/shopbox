import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';



function Checkout() {
const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="chechout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>
                        Your Shopping Basket lives to serve. Give it purpose — 
                        fill it with groceries, clothing, household supplies, 
                        electronics, and more.
                        Continue shopping on the Amazon.com homepage, learn 
                        about today's deals, or visit your Wish List. 
                        </p>
                    </div>  
                    ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket </h2>
                        {/* List out all of the checkout products*/}
                        {basket.map((item) =>(
                            <CheckoutProduct
                                id ={item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    
                    </div> 
                    )
                }
            </div>    
            
            {basket.length > 0 && (
               
                <div className="checkout__right">
                <h1>Subtotal</h1>
                    <Subtotal />
                </div>
            )}
        </div>
       
    )
};

export default Checkout;
