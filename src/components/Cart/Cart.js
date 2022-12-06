import React from 'react';
import './Cart.css'  

const Cart = (props) => {
    const { cart, children } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    console.log(children );
    for (const product of cart) {
       
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = total * 0.1;
    const gTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3 className='cart-title'>Order Summary</h3>
            <p>Selected Items:{quantity}</p> 
            <p>Total Price:${total}</p>
            <p>Total Shipping:${ shipping }</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h5>Grand Total:{gTotal.toFixed(2)}</h5>
            {/* <button className='btn-clear' onClick={clearCart}>Clear Cart</button> */}
            {children}
        </div>
    );
};

export default Cart;