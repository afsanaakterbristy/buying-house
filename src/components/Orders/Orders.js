import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const Orders = () => {
    const { storedCart } = useLoaderData();//{products:products,storedCart:storedCart};
    const [cart,setCart]=useState(storedCart)
    
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
     const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
        
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(pro => <Review key={pro._id} product={ pro} handleRemoveItem={handleRemoveItem}></Review>)
                }
                {
                   cart.length===0&& <h2>No Items in your Order.Please  <Link to={'/'}>Shop More..</Link></h2> 
                }
            </div> 
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/shipping'> <button>Shipping</button>
                    </Link>
               

                </Cart>
            </div>
        </div>
    );
};

export default Orders;